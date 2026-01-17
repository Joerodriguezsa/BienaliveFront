import { useEffect, useMemo, useState } from "react";
import { getTeamMembersComplete } from "../../services/teamMembersApi";
import {
  createSchedule,
  deleteSchedule,
  getSchedules,
} from "../../services/schedulesApi";

const initialFormState = {
  teamMemberId: "",
  scheduleDate: "",
  startTime: "",
  endTime: "",
  fullDay: false,
};

const normalizeTime = (value) =>
  value ? String(value).trim().slice(0, 5) : "";

const formatSlotLabel = (entry) => {
  if (entry.fullDay) {
    return "Full-day availability";
  }
  return `${entry.startTime} - ${entry.endTime}`;
};

const getMemberDisplayName = (member) =>
  member?.name || member?.username || member?.email || "Team member";

const isFullDaySlot = (entry) =>
  normalizeTime(entry.startTime) === "00:00" &&
  normalizeTime(entry.endTime) === "23:59";

const compareTime = (start, end) => {
  if (!start || !end) {
    return false;
  }
  return start < end;
};

function SchedulesAdmin() {
  const [formData, setFormData] = useState(initialFormState);
  const [entries, setEntries] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedMember = useMemo(
    () =>
      teamMembers.find(
        (member) => member.id === Number(formData.teamMemberId)
      ),
    [formData.teamMemberId, teamMembers]
  );

  const groupedByDay = useMemo(() => {
    return entries.reduce((acc, entry) => {
      const key = `${entry.scheduleDate}-${entry.teamMemberId}`;
      if (!acc[key]) {
        acc[key] = {
          scheduleDate: entry.scheduleDate,
          teamMemberName: entry.teamMemberName,
          teamMemberId: entry.teamMemberId,
          slots: [],
        };
      }
      acc[key].slots.push(entry);
      return acc;
    }, {});
  }, [entries]);

  const summaryRows = useMemo(() => Object.values(groupedByDay), [groupedByDay]);

  const loadTeamMembers = async () => {
    try {
      const data = await getTeamMembersComplete();
      setTeamMembers(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err?.message || "Unable to load team members.");
    }
  };

  const loadSchedules = async () => {
    try {
      const data = await getSchedules();
      const normalized = Array.isArray(data)
        ? data.map((item) => ({
            ...item,
            startTime: normalizeTime(item.startTime),
            endTime: normalizeTime(item.endTime),
            teamMemberName: getMemberDisplayName(
              teamMembers.find((member) => member.id === item.teamMemberId)
            ),
            fullDay: isFullDaySlot(item),
          }))
        : [];
      setEntries(normalized);
    } catch (err) {
      setError(err?.message || "Unable to load schedules.");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError("");
      try {
        await loadTeamMembers();
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!teamMembers.length) {
      return;
    }
    loadSchedules();
  }, [teamMembers]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setError("");
  };

  const handleAddSlot = (event) => {
    event.preventDefault();
    setError("");

    if (!formData.teamMemberId || !formData.scheduleDate) {
      setError("Select a team member and date.");
      return;
    }

    if (!formData.fullDay) {
      if (!formData.startTime || !formData.endTime) {
        setError("Enter a start and end time.");
        return;
      }
      if (!compareTime(formData.startTime, formData.endTime)) {
        setError("End time must be after the start time.");
        return;
      }
    }

    const payload = {
      teamMemberId: Number(formData.teamMemberId),
      scheduleDate: formData.scheduleDate,
      startTime: formData.fullDay ? "00:00" : formData.startTime,
      endTime: formData.fullDay ? "23:59" : formData.endTime,
    };

    setIsSubmitting(true);
    createSchedule(payload)
      .then(() => loadSchedules())
      .then(() => {
        setFormData((prev) => ({
          ...prev,
          startTime: "",
          endTime: "",
          fullDay: false,
        }));
      })
      .catch((err) => {
        setError(err?.message || "Unable to save schedule.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleRemoveEntry = (entryId) => {
    setError("");
    deleteSchedule(entryId)
      .then(() => loadSchedules())
      .catch((err) => {
        setError(err?.message || "Unable to remove schedule.");
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-form">
              <h3 className="mb-3">Manage schedules</h3>
              <p className="text-muted">
                Register time blocks for each team member. You can add multiple
                slots per day or mark full-day availability.
              </p>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              <form onSubmit={handleAddSlot}>
                <div className="mb-3">
                  <label className="form-label">Team member</label>
                  <select
                    className="form-control"
                    value={formData.teamMemberId}
                    onChange={(event) =>
                      handleChange("teamMemberId", event.target.value)
                    }
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select</option>
                    {teamMembers.map((member) => (
                      <option key={member.id} value={member.id}>
                        {getMemberDisplayName(member)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={formData.scheduleDate}
                    onChange={(event) =>
                      handleChange("scheduleDate", event.target.value)
                    }
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fullDay"
                    checked={formData.fullDay}
                    onChange={(event) =>
                      handleChange("fullDay", event.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="fullDay">
                    Full-day availability
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start time</label>
                      <input
                        className="form-control"
                        type="time"
                        value={formData.startTime}
                        onChange={(event) =>
                          handleChange("startTime", event.target.value)
                        }
                        disabled={formData.fullDay}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">End time</label>
                      <input
                        className="form-control"
                        type="time"
                        value={formData.endTime}
                        onChange={(event) =>
                          handleChange("endTime", event.target.value)
                        }
                        disabled={formData.fullDay}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <button
                    type="submit"
                    className="btn-two bg-theme-color5"
                    disabled={isSubmitting}
                  >
                    <span className="btn-title">Add slot</span>
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
                <div className="mt-4" />
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form">
              <h3 className="mb-3">Saved availability</h3>
              {summaryRows.length === 0 ? (
                <p className="text-muted">
                  No schedules have been added yet.
                </p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Member</th>
                        <th>Slots</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {summaryRows.map((row) => (
                        <tr key={`${row.scheduleDate}-${row.teamMemberId}`}>
                          <td>{row.scheduleDate}</td>
                          <td>{row.teamMemberName}</td>
                          <td>
                            <div className="d-flex flex-column gap-1">
                              {row.slots.map((slot) => (
                                <div
                                  key={slot.id}
                                  className="d-flex justify-content-between align-items-center"
                                >
                                  <span>{formatSlotLabel(slot)}</span>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleRemoveEntry(slot.id)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="text-muted">
                            {row.slots.length} slot(s)
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchedulesAdmin;
