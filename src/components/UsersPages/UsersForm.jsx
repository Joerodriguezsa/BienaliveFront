import React from "react";

function UsersForm({
  formData,
  roles,
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
              placeholder="Full name"
              value={formData.name}
              onChange={(event) => onChange("name", event.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(event) => onChange("email", event.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              name="phone"
              className="form-control"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(event) => onChange("phone", event.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <select
              name="roleId"
              className="form-control"
              value={formData.roleId ?? ""}
              onChange={(event) =>
                onChange(
                  "roleId",
                  event.target.value ? Number(event.target.value) : null
                )
              }
              required
            >
              <option value="">Select role</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
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
      <div className="d-flex flex-wrap gap-3 mt-4">
        <button
          type="submit"
          className="btn-one"
          disabled={isSubmitting}
        >
          <span className="btn-title">
            {isSubmitting
              ? "Saving..."
              : isEditing
              ? "Update user"
              : "Create user"}
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

export default UsersForm;
