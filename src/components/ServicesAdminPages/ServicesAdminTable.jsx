import React from "react";

function ServicesAdminTable({ services, isLoading, onEdit, onDelete }) {
  if (isLoading) {
    return (
      <div className="text-center py-5">
        <p className="mb-0">Loading services...</p>
      </div>
    );
  }

  if (!services.length) {
    return (
      <div className="text-center py-5">
        <p className="mb-0">
          No services found. Add a new service to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Short description</th>
            <th>Long description</th>
            <th>Time/Price 1</th>
            <th>Time/Price 2</th>
            <th>Extra time/price</th>
            <th>Primary image</th>
            <th>Secondary image</th>
            <th>Status</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => {
            const primaryImage = service.serviceImages?.find(
              (image) => image.tipoImagenId === 1
            );
            const secondaryImage = service.serviceImages?.find(
              (image) => image.tipoImagenId === 2
            );
            const extraTimePrices = (service.servicesTimePrices || []).map(
              (item) => `${item.time} min / $${item.price}`
            );

            return (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td className="text-muted">{service.shortDescription}</td>
                <td className="text-muted">{service.longDescription}</td>
                <td>
                  {service.time1 ? `${service.time1} min` : "-"}
                  {service.price1 ? ` / $${service.price1}` : ""}
                </td>
                <td>
                  {service.time2 ? `${service.time2} min` : "-"}
                  {service.price2 ? ` / $${service.price2}` : ""}
                </td>
                <td>
                  {extraTimePrices.length ? extraTimePrices.join(", ") : "-"}
                </td>
                <td>
                  {primaryImage?.imageUrl ? (
                    <a
                      href={primaryImage.imageUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {secondaryImage?.imageUrl ? (
                    <a
                      href={secondaryImage.imageUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td>{service.active ? "Active" : "Inactive"}</td>
                <td className="text-end">
                  <div className="d-inline-flex gap-2">
                    <button
                      type="button"
                      className="btn-one"
                      onClick={() => onEdit(service)}
                    >
                      <span className="btn-title">Edit</span>
                    </button>
                    <button
                      type="button"
                      className="btn-two bg-theme-color5"
                      onClick={() => onDelete(service)}
                    >
                      <span className="btn-title">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesAdminTable;
