import axios from "axios";
import { Schedule, SchedulePayload } from "../types/schedule";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const SCHEDULES_BASE = `${API_BASE}/Schedules`;
const SCHEDULES_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json",
};

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

export const getSchedules = async (): Promise<Schedule[]> => {
  const response = await axios.get<Schedule[]>(SCHEDULES_BASE);
  return response.data;
};

export const createSchedule = async (
  payload: SchedulePayload
): Promise<Schedule> => {
  const response = await axios.post<Schedule>(SCHEDULES_BASE, payload, {
    headers: SCHEDULES_HEADERS,
  });
  return response.data;
};

export const deleteSchedule = async (id: number): Promise<void> => {
  await axios.delete(`${SCHEDULES_BASE}/${id}`);
};
