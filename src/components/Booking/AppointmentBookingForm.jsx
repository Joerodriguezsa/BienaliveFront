import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../auth/AuthContext.jsx";
import { createAppointment } from "../../services/appointmentsApi";
import { getSchedules } from "../../services/schedulesApi";
import { getServicesWithImagesCached } from "../../services/servicesApi";
import { getTeamMembersCompleteCached } from "../../services/teamMembersApi";
import { getTeamServices } from "../../services/teamServicesApi";
import "../../assets/css/booking.css";

const parseDateParts = (value) => {
  if (!value) {
    return null;
  }
  const [datePart] = String(value).split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  if (!year || !month || !day) {
    return null;
  }
  return { year, month, day };
};

const parseTimeParts = (value) => {
  if (!value) {
    return null;
  }
  const timePart = String(value).includes("T")
    ? String(value).split("T")[1]
    : String(value);
  const [timeValue] = timePart.split(".");
  const [hour, minute, second] = timeValue.split(":").map(Number);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
    return null;
  }
  return { hour, minute, second: Number.isFinite(second) ? second : 0 };
};

const combineDateTime = (dateValue, timeValue) => {
  const dateParts = parseDateParts(dateValue);
  const timeParts = parseTimeParts(timeValue);
  if (!dateParts || !timeParts) {
    return null;
  }
  const { year, month, day } = dateParts;
  const { hour, minute, second } = timeParts;
  const parsed = new Date(year, month - 1, day, hour, minute, second);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatTeamMemberLabel = (member) =>
  member?.name ||
  member?.username ||
  member?.email ||
  `Team member #${member?.id ?? ""}`;

const formatTimeLabel = (value) => {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
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

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

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
    serviceDuration: "",
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
          getServicesWithImagesCached(),
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

  const availableServices = useMemo(() => {
    if (!formData.teamMemberId) {
      return [];
    }
    const teamMemberId = Number(formData.teamMemberId);
    const allowedServiceIds = new Set(
      teamServices
        .filter((assignment) => assignment.teamMemberId === teamMemberId)
        .map((assignment) => assignment.serviceId)
    );
    return services.filter((service) => allowedServiceIds.has(service.id));
  }, [formData.teamMemberId, services, teamServices]);

  const availableTeamMembers = useMemo(() => {
    return teamMembers;
  }, [teamMembers]);

  const selectedService = useMemo(() => {
    const serviceId = Number(formData.serviceId);
    if (!serviceId) {
      return null;
    }
    return services.find((service) => service.id === serviceId) || null;
  }, [formData.serviceId, services]);

  const serviceDurations = useMemo(() => {
    const options =
      selectedService?.servicesTimePrice ||
      selectedService?.servicesTimePrices ||
      [];
    return options.map((option) => option.time).filter(Boolean);
  }, [selectedService]);

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

  const serviceDurationMinutes = useMemo(() => {
    const minutes = Number(formData.serviceDuration);
    return Number.isFinite(minutes) && minutes > 0 ? minutes : null;
  }, [formData.serviceDuration]);

  const availableSlots = useMemo(() => {
    if (!serviceDurationMinutes) {
      return [];
    }
    const slots = [];
    const now = new Date();
    availableSchedules.forEach((schedule) => {
      const start = combineDateTime(schedule.scheduleDate, schedule.startTime);
      const end = combineDateTime(schedule.scheduleDate, schedule.endTime);
      if (!start || !end) {
        return;
      }
      let cursor = new Date(start);
      const latestStart = new Date(end.getTime() - serviceDurationMinutes * 60000);
      while (cursor <= latestStart) {
        if (cursor >= now) {
          slots.push({
            key: `${schedule.id}-${cursor.toISOString()}`,
            scheduleId: schedule.id,
            start: new Date(cursor),
            end: new Date(cursor.getTime() + serviceDurationMinutes * 60000),
          });
        }
        cursor = new Date(cursor.getTime() + serviceDurationMinutes * 60000);
      }
    });
    return slots;
  }, [availableSchedules, serviceDurationMinutes]);

  const slotsByDate = useMemo(() => {
    const grouped = new Map();
    availableSlots.forEach((slot) => {
      const key = formatDateKey(slot.start);
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(slot);
    });
    return grouped;
  }, [availableSlots]);

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
          serviceDuration: "",
        };
      }
      if (field === "teamMemberId") {
        return {
          ...prev,
          teamMemberId: nextValue,
          serviceId: "",
          serviceDuration: "",
        };
      }
      return { ...prev, [field]: nextValue };
    });
    if (
      field === "serviceId" ||
      field === "teamMemberId" ||
      field === "serviceDuration"
    ) {
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

    if (
      !formData.serviceId ||
      !formData.serviceDuration ||
      !formData.teamMemberId ||
      !selectedScheduleId
    ) {
      setError("Please select a service, team member, and time slot.");
      return;
    }

    const slot = availableSlots.find((item) => item.key === selectedScheduleId);

    if (!slot) {
      setError("The selected time slot is no longer available.");
      return;
    }

    if (!slot.start) {
      setError("Unable to parse the selected time slot.");
      return;
    }

    try {
      await createAppointment({
        id: 0,
        customerId: Number(customerId),
        serviceId: Number(formData.serviceId),
        appointmentDateStart: slot.start.toISOString(),
        appointmentDateEnd: slot.end.toISOString(),
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
            value={formData.teamMemberId}
            onChange={handleFieldChange("teamMemberId")}
            disabled={isLoading}
          >
            <option value="">Select Team Member *</option>
            {availableTeamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {formatTeamMemberLabel(member)}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <select
            className="nice-select"
            value={formData.serviceId}
            onChange={handleFieldChange("serviceId")}
            disabled={isLoading || !formData.teamMemberId}
          >
            <option value="">Select Service *</option>
            {availableServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <select
            className="nice-select"
            value={formData.serviceDuration}
            onChange={handleFieldChange("serviceDuration")}
            disabled={isLoading || !formData.serviceId}
          >
            <option value="">Select Duration *</option>
            {serviceDurations.map((duration) => (
              <option key={duration} value={duration}>
                {duration} mins
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="calendar-block mt-4">
        <div className="inner-box">
          <h3 className="booking-title">Select Date &amp; Time</h3>
          <div className="calendar booking-calendar">
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
                  const hasAvailability = slotsByDate.has(dateKey);
                  const todayKey = formatDateKey(new Date());
                  const isPastDate = dateKey < todayKey;
                  const isSelected = selectedDate === dateKey;
                  const availabilityClass = isPastDate
                    ? "past"
                    : hasAvailability
                    ? "available"
                    : "unavailable";
                  const className = [availabilityClass, isSelected ? "selected" : ""]
                    .join(" ")
                    .trim();

                  return (
                    <li key={dateKey} className={className}>
                      <button
                        type="button"
                        onClick={() => handleDateSelect(dateKey)}
                        disabled={!hasAvailability || isPastDate}
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
          {slotsByDate.get(selectedDate)?.map((slot) => {
            const isSelected = selectedScheduleId === slot.key;
            return (
              <button
                key={slot.key}
                type="button"
                className={`booking-time-slot ${isSelected ? "active" : ""}`}
                onClick={() => handleScheduleSelect(slot.key)}
              >
                {formatTimeLabel(slot.start)}
              </button>
            );
          })}
        </div>
      )}
      {isLoading && <p className="mt-3">Loading booking options...</p>}
      {!isLoading && formData.teamMemberId && !availableServices.length && (
        <p className="mt-3">
          This team member has no services assigned yet.
        </p>
      )}
      {!isLoading && !isAuthenticated && (
        <p className="mt-3 text-danger">
          Please log in to choose a time and confirm your appointment.
        </p>
      )}
      {!isLoading && formData.teamMemberId && !availableSchedules.length && (
        <p className="mt-3">
          This team member has no upcoming schedules available.
        </p>
      )}
      {!isLoading && formData.serviceId && !serviceDurations.length && (
        <p className="mt-3">
          This service has no durations configured yet.
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
