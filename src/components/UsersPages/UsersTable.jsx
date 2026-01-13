import React from "react";

function UsersTable({
  users,
  isLoading,
  onEdit,
  onDelete,
  roleLookup,
  customerLookup,
}) {
  if (isLoading) {
    return (
      <div className="text-center py-5">
        <p className="mb-0">Loading users...</p>
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="text-center py-5">
        <p className="mb-0">No users found. Add a new user to get started.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Date of birth</th>
            <th>Address</th>
            <th>Status</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const customer = customerLookup.get(user.id);

            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || roleLookup.get(user.roleId) || "-"}</td>
                <td>{customer?.phone || "-"}</td>
                <td>{customer?.dateOfBirth || "-"}</td>
                <td>{customer?.address || "-"}</td>
                <td>{user.active ? "Active" : "Inactive"}</td>
                <td className="text-end">
                  <div className="d-inline-flex gap-2">
                    <button
                      type="button"
                      className="btn-one"
                      onClick={() => onEdit(user)}
                    >
                      <span className="btn-title">Edit</span>
                    </button>
                    <button
                      type="button"
                      className="btn-two bg-theme-color5"
                      onClick={() => onDelete(user)}
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

export default UsersTable;
