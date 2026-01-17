import axios from "axios";
import { Appointment, AppointmentPayload } from "../types/appointment";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const APPOINTMENTS_BASE = `${API_BASE}/Appointments`;
const APPOINTMENTS_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json",
};

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

export const createAppointment = async (
  payload: AppointmentPayload
): Promise<Appointment> => {
  const response = await axios.post<Appointment>(
    APPOINTMENTS_BASE,
    payload,
    {
      headers: APPOINTMENTS_HEADERS,
    }
  );
  return response.data;
};
