import { useMemo, useState } from "react";

const teamMembers = [
  { id: "1", name: "Andrea Pérez" },
  { id: "2", name: "Carlos Medina" },
  { id: "3", name: "Lucía Torres" },
];

const initialFormState = {
  teamMemberId: "",
  scheduleDate: "",
  startTime: "",
  endTime: "",
  fullDay: false,
};

const formatSlotLabel = (entry) => {
  if (entry.fullDay) {
    return "Horario completo";
  }
  return `${entry.startTime} - ${entry.endTime}`;
};

const compareTime = (start, end) => {
  if (!start || !end) {
    return false;
  }
  return start < end;
};

function SchedulesAdmin() {
  const [formData, setFormData] = useState(initialFormState);
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  const selectedMember = useMemo(
    () => teamMembers.find((member) => member.id === formData.teamMemberId),
    [formData.teamMemberId]
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
      setError("Selecciona un miembro del equipo y la fecha.");
      return;
    }

    if (!formData.fullDay) {
      if (!formData.startTime || !formData.endTime) {
        setError("Ingresa la hora de inicio y fin.");
        return;
      }
      if (!compareTime(formData.startTime, formData.endTime)) {
        setError("La hora de fin debe ser posterior a la hora de inicio.");
        return;
      }
    }

    const newEntry = {
      id: crypto.randomUUID(),
      teamMemberId: formData.teamMemberId,
      teamMemberName: selectedMember?.name || "",
      scheduleDate: formData.scheduleDate,
      startTime: formData.fullDay ? "00:00" : formData.startTime,
      endTime: formData.fullDay ? "23:59" : formData.endTime,
      fullDay: formData.fullDay,
    };

    setEntries((prev) => [...prev, newEntry]);
    setFormData((prev) => ({
      ...prev,
      startTime: "",
      endTime: "",
      fullDay: false,
    }));
  };

  const handleRemoveEntry = (entryId) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== entryId));
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-form">
              <h3 className="mb-3">Gestionar horarios</h3>
              <p className="text-muted">
                Registra bloques de tiempo para cada miembro del equipo. Puedes
                agregar varios espacios por día o marcar un horario completo.
              </p>
              {error ? <div className="alert alert-danger">{error}</div> : null}
              <form onSubmit={handleAddSlot}>
                <div className="mb-3">
                  <label className="form-label">Miembro del equipo</label>
                  <select
                    className="form-control"
                    value={formData.teamMemberId}
                    onChange={(event) =>
                      handleChange("teamMemberId", event.target.value)
                    }
                    required
                  >
                    <option value="">Selecciona</option>
                    {teamMembers.map((member) => (
                      <option key={member.id} value={member.id}>
                        {member.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Fecha</label>
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
                    Horario completo del día
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Hora inicio</label>
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
                      <label className="form-label">Hora fin</label>
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
                  <button type="submit" className="btn-two bg-theme-color5">
                    <span className="btn-title">Agregar espacio</span>
                  </button>
                  <button
                    type="button"
                    className="btn-two bg-theme-color5"
                    onClick={resetForm}
                  >
                    <span className="btn-title">Limpiar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form">
              <h3 className="mb-3">Disponibilidad registrada</h3>
              {summaryRows.length === 0 ? (
                <p className="text-muted">
                  Aún no hay horarios agregados para el equipo.
                </p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Miembro</th>
                        <th>Espacios</th>
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
                                    Quitar
                                  </button>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="text-muted">
                            {row.slots.length} espacio(s)
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
