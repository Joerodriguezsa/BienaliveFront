import React, { useEffect, useMemo, useState } from "react";
import { getCustomers } from "../../services/customersApi";
import { createAppointment } from "../../services/appointmentsApi";
import { getSchedules } from "../../services/schedulesApi";
import { getServices } from "../../services/servicesApi";
import {
  getTeamMembersCompleteCached,
} from "../../services/teamMembersApi";
import { getTeamServices } from "../../services/teamServicesApi";

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
  const end = combineDateTime(schedule.scheduleDate, schedule.endTime);
  const startLabel = start
    ? start.toLocaleString()
    : `${schedule.scheduleDate} ${schedule.startTime || ""}`.trim();
  const endLabel = end
    ? end.toLocaleTimeString()
    : schedule.endTime || "";
  return endLabel ? `${startLabel} - ${endLabel}` : startLabel;
};

function AppointmentBookingForm({
  buttonClassName = "",
  buttonLabel = "Book Now",
  formClassName = "",
  formProps = {},
}) {
  const [services, setServices] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamServices, setTeamServices] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    customerId: "",
    serviceId: "",
    teamMemberId: "",
    scheduleId: "",
    notes: "",
  });

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
          customersResponse,
        ] = await Promise.all([
          getServices(),
          getTeamMembersCompleteCached(),
          getTeamServices(),
          getSchedules(),
          getCustomers(),
        ]);

        if (!isMounted) {
          return;
        }

        setServices(servicesResponse || []);
        setTeamMembers(teamMembersResponse || []);
        setTeamServices(teamServicesResponse || []);
        setSchedules(schedulesResponse || []);
        setCustomers(customersResponse || []);
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
          scheduleId: "",
        };
      }
      if (field === "teamMemberId") {
        return {
          ...prev,
          teamMemberId: nextValue,
          scheduleId: "",
        };
      }
      return { ...prev, [field]: nextValue };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (
      !formData.customerId ||
      !formData.serviceId ||
      !formData.teamMemberId ||
      !formData.scheduleId
    ) {
      setError("Please select a customer, service, team member, and schedule.");
      return;
    }

    const schedule = schedules.find(
      (item) => item.id === Number(formData.scheduleId)
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
        customerId: Number(formData.customerId),
        serviceId: Number(formData.serviceId),
        appointmentDateStart: appointmentStart.toISOString(),
        appointmentDateEnd: (appointmentEnd || appointmentStart).toISOString(),
        teamMemberId: Number(formData.teamMemberId),
        statusId: 1,
      });
      setSuccessMessage(
        "Appointment created successfully. We'll see you soon!"
      );
      setFormData((prev) => ({
        ...prev,
        scheduleId: "",
        notes: "",
      }));
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
            value={formData.customerId}
            onChange={handleFieldChange("customerId")}
            disabled={isLoading}
          >
            <option value="">Select Customer *</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name} ({customer.email})
              </option>
            ))}
          </select>
        </div>
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
        <div className="col-sm-6">
          <select
            className="nice-select"
            value={formData.scheduleId}
            onChange={handleFieldChange("scheduleId")}
            disabled={isLoading || !formData.teamMemberId}
          >
            <option value="">Select Schedule *</option>
            {availableSchedules.map((schedule) => (
              <option key={schedule.id} value={schedule.id}>
                {formatScheduleLabel(schedule)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        className="mt-4 rounded-0"
        name="notes"
        placeholder="Write a Message"
        value={formData.notes}
        onChange={handleFieldChange("notes")}
      ></textarea>
      {isLoading && <p className="mt-3">Loading booking options...</p>}
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
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  );
}

export default AppointmentBookingForm;
