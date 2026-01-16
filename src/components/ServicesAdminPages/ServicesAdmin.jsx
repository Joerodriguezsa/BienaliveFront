import React, { useEffect, useState } from "react";
import ServicesAdminForm from "./ServicesAdminForm.jsx";
import ServicesAdminTable from "./ServicesAdminTable.jsx";
import {
  clearServicesCache,
  createService,
  createServiceImage,
  createServiceTimePrice,
  deleteService,
  deleteServiceImage,
  deleteServiceTimePrice,
  getServicesWithImages,
  updateService,
  updateServiceImage,
  updateServiceTimePrice,
} from "../../services/servicesApi";

const initialFormState = {
  name: "",
  shortDescription: "",
  longDescription: "",
  time1: "",
  price1: "",
  time2: "",
  price2: "",
  primaryImageUrl: "",
  secondaryImageUrl: "",
  timePrices: [],
  active: true,
};

const normalizeNumber = (value) => {
  if (value === "" || value === null || value === undefined) {
    return 0;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const createTimePriceItem = (item = {}) => ({
  key: item.id ? `existing-${item.id}` : `new-${crypto.randomUUID()}`,
  id: item.id ?? null,
  time: item.time ?? "",
  price: item.price ?? "",
});

const getServiceTimePrices = (service) =>
  service.servicesTimePrice || service.servicesTimePrices || [];

function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [editingService, setEditingService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const loadServices = async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getServicesWithImages();
      setServices(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load services.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingService(null);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const payload = {
        name: formData.name.trim(),
        shortDescription: formData.shortDescription.trim(),
        longDescription: formData.longDescription.trim(),
        time1: normalizeNumber(formData.time1),
        price1: normalizeNumber(formData.price1),
        time2: normalizeNumber(formData.time2),
        price2: normalizeNumber(formData.price2),
        active: formData.active,
      };

      let serviceId = editingService?.id;
      if (editingService) {
        await updateService(editingService.id, payload);
      } else {
        const created = await createService(payload);
        serviceId = created.id;
      }

      if (serviceId) {
        const desiredTimePrices = formData.timePrices.map((item) => ({
          id: item.id,
          time: normalizeNumber(item.time),
          price: normalizeNumber(item.price),
        }));
        const existingTimePrices = editingService
          ? getServiceTimePrices(editingService)
          : [];
        const desiredIds = new Set(
          desiredTimePrices.filter((item) => item.id).map((item) => item.id)
        );

        await Promise.all(
          desiredTimePrices.map((item) => {
            if (item.id) {
              return updateServiceTimePrice(item.id, {
                serviceId,
                time: item.time,
                price: item.price,
              });
            }
            return createServiceTimePrice({
              serviceId,
              time: item.time,
              price: item.price,
            });
          })
        );

        await Promise.all(
          existingTimePrices
            .filter((item) => !desiredIds.has(item.id))
            .map((item) => deleteServiceTimePrice(item.id))
        );

        const imageInputs = [
          {
            tipoImagenId: 1,
            url: formData.primaryImageUrl.trim(),
          },
          {
            tipoImagenId: 2,
            url: formData.secondaryImageUrl.trim(),
          },
        ];
        const existingImages = new Map(
          (editingService?.serviceImages || []).map((image) => [
            image.tipoImagenId,
            image,
          ])
        );

        await Promise.all(
          imageInputs.map(async (imageInput) => {
            const existing = existingImages.get(imageInput.tipoImagenId);

            if (imageInput.url) {
              if (existing) {
                await updateServiceImage(existing.id, {
                  serviceId,
                  imageUrl: imageInput.url,
                  tipoImagenId: imageInput.tipoImagenId,
                });
              } else {
                await createServiceImage({
                  serviceId,
                  imageUrl: imageInput.url,
                  tipoImagenId: imageInput.tipoImagenId,
                });
              }
            } else if (existing) {
              await deleteServiceImage(existing.id);
            }
          })
        );
      }

      clearServicesCache();
      await loadServices();
      resetForm();
    } catch (err) {
      setError(err?.message || "Unable to save the service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (service) => {
    const primaryImage = service.serviceImages?.find(
      (image) => image.tipoImagenId === 1
    );
    const secondaryImage = service.serviceImages?.find(
      (image) => image.tipoImagenId === 2
    );

    setEditingService(service);
    const timePricesSource = getServiceTimePrices(service);
    const mappedTimePrices = timePricesSource.map(createTimePriceItem);

    setFormData({
      name: service.name || "",
      shortDescription: service.shortDescription || "",
      longDescription: service.longDescription || "",
      time1: service.time1 ?? timePricesSource[0]?.time ?? "",
      price1: service.price1 ?? timePricesSource[0]?.price ?? "",
      time2: service.time2 ?? timePricesSource[1]?.time ?? "",
      price2: service.price2 ?? timePricesSource[1]?.price ?? "",
      primaryImageUrl: primaryImage?.imageUrl || "",
      secondaryImageUrl: secondaryImage?.imageUrl || "",
      timePrices: mappedTimePrices,
      active: Boolean(service.active),
    });
  };

  const handleDelete = async (service) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${service.name}?`
    );

    if (!confirmed) return;

    setError("");

    try {
      const timePrices = getServiceTimePrices(service);
      if (timePrices.length) {
        await Promise.all(
          timePrices.map((item) => deleteServiceTimePrice(item.id))
        );
      }
      if (service.serviceImages?.length) {
        await Promise.all(
          service.serviceImages.map((image) => deleteServiceImage(image.id))
        );
      }
      await deleteService(service.id);
      clearServicesCache();
      await loadServices();

      if (editingService?.id === service.id) {
        resetForm();
      }
    } catch (err) {
      setError(err?.message || "Unable to delete the service.");
    }
  };

  const normalizedSearch = searchText.trim().toLowerCase();

  const filteredServices = services.filter((service) => {
    const matchesSearch = normalizedSearch
      ? `${service.name} ${service.shortDescription}`
          .toLowerCase()
          .includes(normalizedSearch)
      : true;
    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? Boolean(service.active)
        : !service.active;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredServices.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedServices = filteredServices.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleTimePriceChange = (index, field, value) => {
    setFormData((prev) => {
      const next = [...prev.timePrices];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, timePrices: next };
    });
  };

  const handleAddTimePrice = () => {
    setFormData((prev) => ({
      ...prev,
      timePrices: [...prev.timePrices, createTimePriceItem()],
    }));
  };

  const handleRemoveTimePrice = (index) => {
    setFormData((prev) => ({
      ...prev,
      timePrices: prev.timePrices.filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  return (
    <section className="contact-details pt-30 pb-100">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-lg-8">
            <div className="sec-title">
              <span className="sub-title">Administration</span>
              <h2>Services management</h2>
              <p className="text">
                Create, edit, and manage service offerings from this panel.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-details__right mb-40">
          <div className="sec-title">
            <span className="sub-title">
              {editingService ? "Editing service" : "Add a new service"}
            </span>
            <h3>{editingService ? editingService.name : "Service details"}</h3>
          </div>
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
          <ServicesAdminForm
            formData={formData}
            onChange={handleChange}
            onTimePriceChange={handleTimePriceChange}
            onAddTimePrice={handleAddTimePrice}
            onRemoveTimePrice={handleRemoveTimePrice}
            onSubmit={handleSubmit}
            onReset={resetForm}
            isSubmitting={isSubmitting}
            isEditing={Boolean(editingService)}
          />
        </div>
        <div className="contact-details__right">
          <div className="sec-title">
            <span className="sub-title">Services list</span>
            <h3>All services</h3>
          </div>
          <div className="row align-items-end mb-30">
            <div className="col-md-6">
              <label className="form-label">Search</label>
              <input
                className="form-control"
                type="text"
                placeholder="Search by name or description"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Status</label>
              <select
                className="form-control"
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Page size</label>
              <select
                className="form-control"
                value={pageSize}
                onChange={(event) => {
                  setPageSize(Number(event.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
          <ServicesAdminTable
            services={paginatedServices}
            isLoading={isLoading}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4">
            <p className="mb-2">
              Showing {filteredServices.length ? startIndex + 1 : 0}-
              {Math.min(startIndex + pageSize, filteredServices.length)} of{" "}
              {filteredServices.length}
            </p>
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn-two bg-theme-color5"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={safePage === 1}
              >
                <span className="btn-title">Previous</span>
              </button>
              <span className="px-2">
                Page {safePage} of {totalPages}
              </span>
              <button
                type="button"
                className="btn-one"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={safePage === totalPages}
              >
                <span className="btn-title">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAdmin;
