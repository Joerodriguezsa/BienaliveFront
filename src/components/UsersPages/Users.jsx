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
  phone: "",
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
      phone: user.phone || "",
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

        <div className="row">
          <div className="col-lg-5">
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
          </div>
          <div className="col-lg-7">
            <div className="contact-details__right">
              <div className="sec-title">
                <span className="sub-title">Users list</span>
                <h3>All registered users</h3>
              </div>
              <UsersTable
                users={users}
                isLoading={isLoading}
                roleLookup={roleLookup}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Users;
