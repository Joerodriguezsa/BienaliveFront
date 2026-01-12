import React, { useEffect, useState } from "react";
import UsersForm from "./UsersForm.jsx";
import UsersTable from "./UsersTable.jsx";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../services/usersApi";
import { getRoles } from "../../services/rolesApi";

const initialFormState = {
  name: "",
  email: "",
  roleId: null,
  active: true,
};

function Users() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRolesLoading, setIsRolesLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedRoleId, setSelectedRoleId] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const loadUsers = async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load users.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadRoles = async () => {
    setIsRolesLoading(true);
    setError("");

    try {
      const data = await getRoles();
      setRoles(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load roles.");
    } finally {
      setIsRolesLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
    loadRoles();
  }, []);

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingUser(null);
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
      if (editingUser) {
        await updateUser(editingUser.id, formData);
      } else {
        await createUser(formData);
      }
      await loadUsers();
      resetForm();
    } catch (err) {
      setError(err?.message || "Unable to save the user.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name || "",
      email: user.email || "",
      roleId: user.roleId ?? null,
      active: Boolean(user.active),
    });
  };

  const handleDelete = async (user) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );

    if (!confirmed) return;

    setError("");

    try {
      await deleteUser(user.id);
      await loadUsers();
    } catch (err) {
      setError(err?.message || "Unable to delete the user.");
    }
  };

  const roleLookup = new Map(roles.map((role) => [role.id, role.name]));
  const normalizedSearch = searchText.trim().toLowerCase();

  const filteredUsers = users.filter((user) => {
    const matchesSearch = normalizedSearch
      ? `${user.name} ${user.email}`.toLowerCase().includes(normalizedSearch)
      : true;
    const matchesRole = selectedRoleId
      ? user.roleId === Number(selectedRoleId)
      : true;
    const matchesStatus =
      statusFilter === "all"
        ? true
        : statusFilter === "active"
        ? Boolean(user.active)
        : !user.active;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <section className="contact-details pt-100 pb-100">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-lg-8">
            <div className="sec-title">
              <span className="sub-title">Administration</span>
              <h2>User management</h2>
              <p className="text">
                Create, edit, and manage user accounts directly from this panel.
              </p>
            </div>
          </div>
        </div>

        <div className="contact-details__right mb-40">
          <div className="sec-title">
            <span className="sub-title">
              {editingUser ? "Editing user" : "Add a new user"}
            </span>
            <h3>{editingUser ? editingUser.name : "User details"}</h3>
          </div>
          {error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : null}
          {isRolesLoading ? (
            <div className="alert alert-info" role="alert">
              Loading roles...
            </div>
          ) : null}
          <UsersForm
            formData={formData}
            roles={roles}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={resetForm}
            isSubmitting={isSubmitting}
            isEditing={Boolean(editingUser)}
          />
        </div>
        <div className="contact-details__right">
          <div className="sec-title">
            <span className="sub-title">Users list</span>
            <h3>All registered users</h3>
          </div>
          <div className="row align-items-end mb-30">
            <div className="col-md-5">
              <label className="form-label">Search</label>
              <input
                className="form-control"
                type="text"
                placeholder="Search by name or email"
                value={searchText}
                onChange={(event) => {
                  setSearchText(event.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">Role</label>
              <select
                className="form-control"
                value={selectedRoleId}
                onChange={(event) => {
                  setSelectedRoleId(event.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">All roles</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
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
            <div className="col-md-2">
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
          <UsersTable
            users={paginatedUsers}
            isLoading={isLoading}
            roleLookup={roleLookup}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4">
            <p className="mb-2">
              Showing {filteredUsers.length ? startIndex + 1 : 0}-
              {Math.min(startIndex + pageSize, filteredUsers.length)} of{" "}
              {filteredUsers.length}
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

export default Users;
