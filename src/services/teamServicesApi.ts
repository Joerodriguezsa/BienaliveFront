import axios from "axios";
import { TeamService, TeamServicePayload } from "../types/teamService";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const TEAM_SERVICES_BASE = `${API_BASE}/TeamServices`;
const TEAM_SERVICES_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json",
};

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

export const getTeamServices = async (): Promise<TeamService[]> => {
  const response = await axios.get<TeamService[]>(TEAM_SERVICES_BASE);
  return response.data;
};

export const createTeamService = async (
  payload: TeamServicePayload
): Promise<TeamService> => {
  const response = await axios.post<TeamService>(
    TEAM_SERVICES_BASE,
    payload,
    {
      headers: TEAM_SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const deleteTeamService = async (id: number): Promise<void> => {
  await axios.delete(TEAM_SERVICES_BASE, {
    params: { id },
    headers: TEAM_SERVICES_HEADERS,
  });
};
