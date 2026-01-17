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
            {/* <th>Time/Price 1</th>
            <th>Time/Price 2</th> */}
            <th>time/price</th>
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
            const timePricesSource =
              service.servicesTimePrice || service.servicesTimePrices || [];
            const extraTimePrices = timePricesSource.map(
              (item) => `${item.time} min / $${item.price}`
            );
            const time1 = service.time1 ?? timePricesSource[0]?.time ?? null;
            const price1 = service.price1 ?? timePricesSource[0]?.price ?? null;
            const time2 = service.time2 ?? timePricesSource[1]?.time ?? null;
            const price2 = service.price2 ?? timePricesSource[1]?.price ?? null;

            return (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td className="text-muted">{service.shortDescription}</td>
                <td className="text-muted">{service.longDescription}</td>
                {/* <td>
                  {time1 !== null ? `${time1} min` : "-"}
                  {price1 !== null ? ` / $${price1}` : ""}
                </td>
                <td>
                  {time2 !== null ? `${time2} min` : "-"}
                  {price2 !== null ? ` / $${price2}` : ""}
                </td> */}
                <td>
                  {extraTimePrices.length ? extraTimePrices.join(", ") : "-"}
                </td>
                <td>
                  {primaryImage?.imageUrl ? (
                    <img
                      src={primaryImage.imageUrl}
                      alt={`${service.name} primary`}
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {secondaryImage?.imageUrl ? (
                    <img
                      src={secondaryImage.imageUrl}
                      alt={`${service.name} secondary`}
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                    />
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
