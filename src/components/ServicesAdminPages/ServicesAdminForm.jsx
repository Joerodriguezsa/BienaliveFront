import React from "react";

function ServicesAdminForm({
  formData,
  onChange,
  onSubmit,
  onReset,
  isSubmitting,
  isEditing,
}) {
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Service name"
              value={formData.name}
              onChange={(event) => onChange("name", event.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <select
              name="active"
              className="form-control"
              value={formData.active ? "true" : "false"}
              onChange={(event) =>
                onChange("active", event.target.value === "true")
              }
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Short description</label>
            <textarea
              name="shortDescription"
              className="form-control"
              rows={3}
              placeholder="Short description"
              value={formData.shortDescription}
              onChange={(event) =>
                onChange("shortDescription", event.target.value)
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Long description</label>
            <textarea
              name="longDescription"
              className="form-control"
              rows={3}
              placeholder="Long description"
              value={formData.longDescription}
              onChange={(event) =>
                onChange("longDescription", event.target.value)
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <input
              name="time1"
              className="form-control"
              type="number"
              min="0"
              step="1"
              placeholder="Time 1 (min)"
              value={formData.time1}
              onChange={(event) => onChange("time1", event.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <input
              name="price1"
              className="form-control"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price 1"
              value={formData.price1}
              onChange={(event) => onChange("price1", event.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <input
              name="time2"
              className="form-control"
              type="number"
              min="0"
              step="1"
              placeholder="Time 2 (min)"
              value={formData.time2}
              onChange={(event) => onChange("time2", event.target.value)}
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <input
              name="price2"
              className="form-control"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price 2"
              value={formData.price2}
              onChange={(event) => onChange("price2", event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <input
              name="primaryImageUrl"
              className="form-control"
              type="url"
              placeholder="Primary image URL"
              value={formData.primaryImageUrl}
              onChange={(event) =>
                onChange("primaryImageUrl", event.target.value)
              }
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              name="secondaryImageUrl"
              className="form-control"
              type="url"
              placeholder="Secondary image URL"
              value={formData.secondaryImageUrl}
              onChange={(event) =>
                onChange("secondaryImageUrl", event.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-3 mt-4">
        <button type="submit" className="btn-one" disabled={isSubmitting}>
          <span className="btn-title">
            {isSubmitting
              ? "Saving..."
              : isEditing
              ? "Update service"
              : "Create service"}
          </span>
        </button>
        <button
          type="button"
          className="btn-two bg-theme-color5"
          onClick={onReset}
          disabled={isSubmitting}
        >
          <span className="btn-title">Reset</span>
        </button>
      </div>
    </form>
  );
}

export default ServicesAdminForm;
