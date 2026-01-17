import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../auth/AuthContext.jsx";
import { createAppointment } from "../../services/appointmentsApi";
import { getSchedules } from "../../services/schedulesApi";
import { getServices } from "../../services/servicesApi";
import { getTeamMembersCompleteCached } from "../../services/teamMembersApi";
import { getTeamServices } from "../../services/teamServicesApi";
import "../../assets/css/booking.css";

const combineDateTime = (dateValue, timeValue) => {
  if (!dateValue) {
    return null;
  }
  const combined = timeValue ? `${dateValue}T${timeValue}` : dateValue;
  const parsed = new Date(combined);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatTeamMemberLabel = (member) =>
  member?.name ||
  member?.username ||
  member?.email ||
  `Team member #${member?.id ?? ""}`;

const formatScheduleLabel = (schedule) => {
  const start = combineDateTime(schedule.scheduleDate, schedule.startTime);
  const startLabel = start
    ? start.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    : `${schedule.startTime || ""}`.trim();
  return startLabel;
};

const getMonthDays = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < firstDay; i += 1) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i += 1) {
    days.push(i);
  }

  return days;
};

const formatDateKey = (date) => date.toISOString().split("T")[0];

function AppointmentBookingForm({
  buttonClassName = "",
  buttonLabel = "Book Now",
  formClassName = "",
  formProps = {},
}) {
  const { isAuthenticated, user, token, raw } = useAuth();
  const [services, setServices] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamServices, setTeamServices] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    serviceId: "",
    teamMemberId: "",
  });
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedScheduleId, setSelectedScheduleId] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const [
          servicesResponse,
          teamMembersResponse,
          teamServicesResponse,
          schedulesResponse,
        ] = await Promise.all([
          getServices(),
          getTeamMembersCompleteCached(),
          getTeamServices(),
          getSchedules(),
        ]);

        if (!isMounted) {
          return;
        }

        setServices(servicesResponse || []);
        setTeamMembers(teamMembersResponse || []);
        setTeamServices(teamServicesResponse || []);
        setSchedules(schedulesResponse || []);
      } catch (err) {
        if (!isMounted) {
          return;
        }
        setError(
          err?.message || "Unable to load booking data. Please try again."
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const availableTeamMembers = useMemo(() => {
    if (!formData.serviceId) {
      return [];
    }
    const serviceId = Number(formData.serviceId);
    const allowedMemberIds = new Set(
      teamServices
        .filter((assignment) => assignment.serviceId === serviceId)
        .map((assignment) => assignment.teamMemberId)
    );
    return teamMembers.filter((member) => allowedMemberIds.has(member.id));
  }, [formData.serviceId, teamMembers, teamServices]);

  const availableSchedules = useMemo(() => {
    if (!formData.teamMemberId) {
      return [];
    }
    const teamMemberId = Number(formData.teamMemberId);
    const now = new Date();
    return schedules
      .filter((schedule) => schedule.teamMemberId === teamMemberId)
      .filter((schedule) => {
        const start = combineDateTime(
          schedule.scheduleDate,
          schedule.startTime
        );
        return start ? start >= now : true;
      })
      .sort((a, b) => {
        const aDate =
          combineDateTime(a.scheduleDate, a.startTime)?.getTime() || 0;
        const bDate =
          combineDateTime(b.scheduleDate, b.startTime)?.getTime() || 0;
        return aDate - bDate;
      });
  }, [formData.teamMemberId, schedules]);

  const schedulesByDate = useMemo(() => {
    const grouped = new Map();
    availableSchedules.forEach((schedule) => {
      const key = schedule.scheduleDate;
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(schedule);
    });
    return grouped;
  }, [availableSchedules]);

  const customerId = useMemo(() => {
    return (
      user?.customerId ||
      user?.id ||
      raw?.customerId ||
      raw?.user?.customerId ||
      raw?.user?.id ||
      null
    );
  }, [raw, user]);

  const handleFieldChange = (field) => (event) => {
    const nextValue = event.target.value;
    setSuccessMessage("");
    setError("");
    setFormData((prev) => {
      if (field === "serviceId") {
        return {
          ...prev,
          serviceId: nextValue,
          teamMemberId: "",
        };
      }
      if (field === "teamMemberId") {
        return {
          ...prev,
          teamMemberId: nextValue,
        };
      }
      return { ...prev, [field]: nextValue };
    });
    if (field === "serviceId" || field === "teamMemberId") {
      setSelectedDate("");
      setSelectedScheduleId("");
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (dateKey) => {
    setSelectedDate(dateKey);
    setSelectedScheduleId("");
  };

  const handleScheduleSelect = (scheduleId) => {
    setSelectedScheduleId(String(scheduleId));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isAuthenticated || !token) {
      setError("Please log in to book an appointment.");
      return;
    }

    if (!customerId) {
      setError("Unable to identify your customer profile.");
      return;
    }

    if (!formData.serviceId || !formData.teamMemberId || !selectedScheduleId) {
      setError("Please select a service, team member, and time slot.");
      return;
    }

    const schedule = schedules.find(
      (item) => item.id === Number(selectedScheduleId)
    );

    if (!schedule) {
      setError("The selected schedule is no longer available.");
      return;
    }

    const appointmentStart = combineDateTime(
      schedule.scheduleDate,
      schedule.startTime
    );
    const appointmentEnd = combineDateTime(
      schedule.scheduleDate,
      schedule.endTime
    );

    if (!appointmentStart) {
      setError("Unable to parse the selected schedule.");
      return;
    }

    try {
      await createAppointment({
        id: 0,
        customerId: Number(customerId),
        serviceId: Number(formData.serviceId),
        appointmentDateStart: appointmentStart.toISOString(),
        appointmentDateEnd: (appointmentEnd || appointmentStart).toISOString(),
        teamMemberId: Number(formData.teamMemberId),
        statusId: 1,
      });
      setSuccessMessage(
        "Appointment created successfully. We'll see you soon!"
      );
      setSelectedScheduleId("");
    } catch (err) {
      setError(
        err?.message || "Unable to create the appointment. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={formClassName}
      {...formProps}
    >
      <div className="row g-4">
        <div className="col-sm-6">
          <select
            className="nice-select"
            value={formData.serviceId}
            onChange={handleFieldChange("serviceId")}
            disabled={isLoading}
          >
            <option value="">Select Service *</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <select
            className="nice-select"
            value={formData.teamMemberId}
            onChange={handleFieldChange("teamMemberId")}
            disabled={isLoading || !formData.serviceId}
          >
            <option value="">Select Team Member *</option>
            {availableTeamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {formatTeamMemberLabel(member)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="calendar-block mt-4">
        <div className="inner-box">
          <div className="calendar">
            <div className="calendar-header flex justify-between items-center py-2 px-4 bg-gray-200 rounded">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="material-symbols-rounded"
                disabled={!formData.teamMemberId}
              >
                <i className="fa-light fa-angle-left"></i>
              </button>
              <p className="calendar-current-date font-medium">
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </p>
              <button
                type="button"
                onClick={handleNextMonth}
                className="material-symbols-rounded"
                disabled={!formData.teamMemberId}
              >
                <i className="fa-light fa-angle-right"></i>
              </button>
            </div>
            <div className="calendar-body mt-4">
              <ul className="calendar-weekdays grid grid-cols-7 text-center font-bold">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <li key={day}>{day}</li>
                  )
                )}
              </ul>
              <ul className="calendar-dates grid grid-cols-7 text-center mt-2">
                {getMonthDays(currentDate).map((day, idx) => {
                  if (!day) {
                    return <li key={`empty-${idx}`} className="inactive"></li>;
                  }

                  const dateKey = formatDateKey(
                    new Date(
                      currentDate.getFullYear(),
                      currentDate.getMonth(),
                      day
                    )
                  );
                  const hasAvailability = schedulesByDate.has(dateKey);
                  const isSelected = selectedDate === dateKey;
                  const className = [
                    hasAvailability ? "active" : "inactive",
                    isSelected ? "selected" : "",
                  ]
                    .join(" ")
                    .trim();

                  return (
                    <li key={dateKey} className={className}>
                      <button
                        type="button"
                        onClick={() => handleDateSelect(dateKey)}
                        disabled={!hasAvailability}
                      >
                        {day}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {selectedDate && (
        <div className="booking-time-slots mt-4">
          {schedulesByDate.get(selectedDate)?.map((schedule) => {
            const isSelected = selectedScheduleId === String(schedule.id);
            return (
              <button
                key={schedule.id}
                type="button"
                className={`booking-time-slot ${isSelected ? "active" : ""}`}
                onClick={() => handleScheduleSelect(schedule.id)}
              >
                {formatScheduleLabel(schedule)}
              </button>
            );
          })}
        </div>
      )}
      {isLoading && <p className="mt-3">Loading booking options...</p>}
      {!isLoading && !isAuthenticated && (
        <p className="mt-3 text-danger">
          Please log in to choose a time and confirm your appointment.
        </p>
      )}
      {!isLoading && formData.serviceId && !availableTeamMembers.length && (
        <p className="mt-3">
          No team members are assigned to this service yet.
        </p>
      )}
      {!isLoading && formData.teamMemberId && !availableSchedules.length && (
        <p className="mt-3">
          This team member has no upcoming schedules available.
        </p>
      )}
      {error && <p className="mt-3 text-danger">{error}</p>}
      {successMessage && (
        <p className="mt-3 text-success">{successMessage}</p>
      )}
      <button
        type="submit"
        className={buttonClassName}
        disabled={!selectedScheduleId}
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export default AppointmentBookingForm;
