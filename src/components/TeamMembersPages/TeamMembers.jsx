import { useEffect, useMemo, useState } from "react";
import {
  clearTeamMembersCache,
  createTeamMember,
  getTeamMembersComplete,
  updateTeamMember,
} from "../../services/teamMembersApi";
import { getServices } from "../../services/servicesApi";
import {
  createTeamService,
  deleteTeamService,
  getTeamServices,
} from "../../services/teamServicesApi";
import { getUsers } from "../../services/usersApi";

const STORAGE_UPLOAD_URL =
  "https://bienaliveback.azurewebsites.net/api/BlobStorage/SubirArchivo";

const initialFormState = {
  userId: "",
  degree: "",
  personalExperience: "",
  aboutMe: "",
  photo: "",
};

const normalizeFileName = (name) =>
  name
    .replace(/\.[^/.]+$/, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-_]/g, "")
    .toLowerCase();

const convertToJpeg = (file) =>
  new Promise((resolve, reject) => {
    if (file.type === "image/jpeg" || file.type === "image/jpg") {
      resolve(file);
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Unable to process image."));
        return;
      }
      context.drawImage(image, 0, 0);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(objectUrl);
          if (!blob) {
            reject(new Error("Unable to convert image."));
            return;
          }
          resolve(blob);
        },
        "image/jpeg",
        0.9
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Unable to read image."));
    };

    image.src = objectUrl;
  });

const uploadPhoto = async (file, userId) => {
  const jpegBlob = await convertToJpeg(file);
  const baseName = normalizeFileName(file.name) || "team-member";
  const filename = `${baseName}-${userId || "new"}-${Date.now()}`;
  const formData = new FormData();
  const jpegFile = new File([jpegBlob], `${filename}.jpg`, {
    type: "image/jpeg",
  });
  formData.append("Archivo", jpegFile);
  formData.append("NombreArchivo", filename);
  formData.append("Carpeta", "team");

  const response = await fetch(STORAGE_UPLOAD_URL, {
    method: "POST",
    headers: {
      accept: "text/plain",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Unable to upload photo to storage.");
  }

  const data = await response.json();
  if (!data?.url) {
    throw new Error("Storage response missing photo URL.");
  }

  return data.url;
};

function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [teamServices, setTeamServices] = useState([]);
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [photoFile, setPhotoFile] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsersLoading, setIsUsersLoading] = useState(true);
  const [isServicesLoading, setIsServicesLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const loadTeamMembers = async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getTeamMembersComplete();
      setTeamMembers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load team members.");
    } finally {
      setIsLoading(false);
    }
  };

  const loadUsers = async () => {
    setIsUsersLoading(true);
    setError("");

    try {
      const data = await getUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load users.");
    } finally {
      setIsUsersLoading(false);
    }
  };

  const loadServices = async () => {
    setIsServicesLoading(true);
    setError("");

    try {
      const data = await getServices();
      setServices(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load services.");
    } finally {
      setIsServicesLoading(false);
    }
  };

  const loadTeamServices = async () => {
    setError("");

    try {
      const data = await getTeamServices();
      setTeamServices(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load team services.");
    }
  };

  useEffect(() => {
    loadTeamMembers();
    loadUsers();
    loadServices();
    loadTeamServices();
  }, []);

  const userLookup = useMemo(
    () => new Map(users.map((user) => [user.id, user])),
    [users]
  );

  const resetForm = () => {
    setFormData(initialFormState);
    setPhotoFile(null);
    setEditingMember(null);
    setSelectedServiceIds([]);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setPhotoFile(file);
  };

  const handleEdit = (member) => {
    const memberServiceIds = teamServices
      .filter((teamService) => teamService.teamMemberId === member.id)
      .map((teamService) => String(teamService.serviceId));

    setEditingMember(member);
    setFormData({
      userId: member.userId ? String(member.userId) : "",
      degree: member.degree ?? "",
      personalExperience: member.personalExperience ?? "",
      aboutMe: member.aboutMe ?? "",
      photo: member.photo ?? "",
    });
    setPhotoFile(null);
    setSelectedServiceIds(memberServiceIds);
  };

  const handleServiceToggle = async (serviceId) => {
    const wasSelected = selectedServiceIds.includes(serviceId);
    const nextSelected = wasSelected
      ? selectedServiceIds.filter((id) => id !== serviceId)
      : [...selectedServiceIds, serviceId];

    setSelectedServiceIds(nextSelected);

    if (!editingMember) return;

    const memberId = editingMember.id;
    const existingAssignment = teamServices.find(
      (teamService) =>
        teamService.teamMemberId === memberId &&
        String(teamService.serviceId) === serviceId
    );

    try {
      if (wasSelected && existingAssignment) {
        await deleteTeamService(existingAssignment.id);
        setTeamServices((prev) =>
          prev.filter((item) => item.id !== existingAssignment.id)
        );
      }

      if (!wasSelected && !existingAssignment) {
        const createdAssignment = await createTeamService({
          teamMemberId: memberId,
          serviceId: Number(serviceId),
        });
        setTeamServices((prev) => [...prev, createdAssignment]);
      }
    } catch (err) {
      setError(err?.message || "Unable to update service assignment.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      let photoUrl = formData.photo;
      if (photoFile) {
        photoUrl = await uploadPhoto(photoFile, formData.userId);
      }

      const payload = {
        userId: formData.userId ? Number(formData.userId) : null,
        degree: formData.degree || null,
        personalExperience: formData.personalExperience || null,
        aboutMe: formData.aboutMe || null,
        photo: photoUrl || null,
      };

      let memberId = editingMember?.id;
      if (editingMember) {
        await updateTeamMember(editingMember.id, payload);
        memberId = editingMember.id;
      } else {
        const createdMember = await createTeamMember(payload);
        memberId = createdMember.id;
      }

      if (memberId) {
        const existingAssignments = teamServices.filter(
          (teamService) => teamService.teamMemberId === memberId
        );
        const existingServiceIds = new Set(
          existingAssignments.map((item) => String(item.serviceId))
        );
        const selectedIdsSet = new Set(selectedServiceIds);

        const servicesToAdd = selectedServiceIds.filter(
          (serviceId) => !existingServiceIds.has(serviceId)
        );
        const servicesToRemove = existingAssignments.filter(
          (item) => !selectedIdsSet.has(String(item.serviceId))
        );

        await Promise.all(
          servicesToAdd.map((serviceId) =>
            createTeamService({
              teamMemberId: memberId,
              serviceId: Number(serviceId),
            })
          )
        );

        await Promise.all(
          servicesToRemove.map((assignment) =>
            deleteTeamService(assignment.id)
          )
        );
      }

      clearTeamMembersCache();
      await loadTeamMembers();
      await loadTeamServices();
      resetForm();
    } catch (err) {
      setError(err?.message || "Unable to save the team member.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page pt-120 pb-120">
      <div className="container">
        <div className="row mb-40">
          <div className="col-lg-12">
            <span className="sub-title">Administration</span>
            <h2 className="title">Team Members</h2>
          </div>
        </div>
        {error ? <p className="text-danger">{error}</p> : null}
        <div className="row">
          <div className="col-lg-5 mb-40">
            <div className="contact-form">
              <h4 className="mb-20">
                {editingMember ? "Edit team member" : "Create team member"}
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userId">User</label>
                  <select
                    id="userId"
                    className="form-control"
                    value={formData.userId}
                    onChange={(event) =>
                      handleChange("userId", event.target.value)
                    }
                    required
                    disabled={isUsersLoading}
                  >
                    <option value="">Select a user</option>
                    {users
                      .filter(
                        (user) => user.roleId === 1 || user.roleId === 2
                      )
                      .map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name} ({user.email})
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Assigned services</label>
                  {isServicesLoading ? (
                    <p>Loading services...</p>
                  ) : services.length ? (
                    <div className="d-flex flex-column gap-2">
                      {services.map((service) => {
                        const id = String(service.id);
                        return (
                          <label
                            className="d-flex align-items-center gap-2"
                            key={service.id}
                          >
                            <input
                              type="checkbox"
                              checked={selectedServiceIds.includes(id)}
                              onChange={() => handleServiceToggle(id)}
                              disabled={isSubmitting}
                            />
                            <span>{service.name}</span>
                          </label>
                        );
                      })}
                    </div>
                  ) : (
                    <p>No services available.</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Degree</label>
                  <input
                    id="degree"
                    type="text"
                    className="form-control"
                    value={formData.degree}
                    onChange={(event) =>
                      handleChange("degree", event.target.value)
                    }
                    placeholder="Degree or role"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="aboutMe">About me</label>
                  <textarea
                    id="aboutMe"
                    className="form-control"
                    value={formData.aboutMe}
                    onChange={(event) =>
                      handleChange("aboutMe", event.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="personalExperience">Personal experience</label>
                  <textarea
                    id="personalExperience"
                    className="form-control"
                    value={formData.personalExperience}
                    onChange={(event) =>
                      handleChange("personalExperience", event.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="photo">Photo (JPG/PNG)</label>
                  <input
                    id="photo"
                    type="file"
                    className="form-control"
                    accept="image/jpeg,image/jpg,image/png"
                    onChange={handleFileChange}
                  />
                  {formData.photo ? (
                    <small className="d-block mt-10">
                      Current photo: {formData.photo}
                    </small>
                  ) : null}
                </div>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <button
                    type="submit"
                    className="btn-one"
                    disabled={isSubmitting}
                  >
                    <span className="btn-title">
                      {isSubmitting ? "Saving..." : "Save"}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn-two bg-theme-color5"
                    onClick={resetForm}
                    disabled={isSubmitting}
                  >
                    <span className="btn-title">Clear</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            {isLoading ? (
              <p>Loading team members...</p>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>User</th>
                      <th>Degree</th>
                      <th>Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member) => {
                      const user = userLookup.get(member.userId);
                      return (
                        <tr key={member.id}>
                          <td>
                            {member.photo ? (
                              <img
                                src={member.photo}
                                alt={member.name || "Team member"}
                                style={{ width: 48, height: 48 }}
                              />
                            ) : (
                              "—"
                            )}
                          </td>
                          <td>{member.name || user?.name || "Unknown"}</td>
                          <td>{member.degree || "—"}</td>
                          <td>{member.email || user?.email || "—"}</td>
                          <td>
                            <button
                              type="button"
                              className="theme-btn style-two"
                              onClick={() => handleEdit(member)}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
