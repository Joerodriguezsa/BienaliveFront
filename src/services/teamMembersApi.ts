import.meta.env.VITE_API_URL
import axios from "axios";
import { TeamMember, TeamMemberPayload } from "../types/teamMember";

const TEAM_MEMBERS_CACHE_KEY = "team_members_complete";
const CACHE_HOURS = 6;
const CACHE_TTL = CACHE_HOURS * 60 * 60 * 1000;
const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const TEAM_MEMBERS_BASE = `${API_BASE}/TeamMembers`;
const TEAM_MEMBERS_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json-patch+json",
};

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

type TeamMembersCache = {
  data: TeamMember[];
  expiresAt: number;
};

/**
 * Llamada directa al backend
 */
export const getTeamMembersComplete = async (): Promise<TeamMember[]> => {
  const response = await axios.get<TeamMember[]>(
    `${API_BASE}/TeamMembers/ConsultarTeamMembersComplete`
  );

  return response.data;
};

/**
 * Llamada con cache en sessionStorage
 */
export const getTeamMembersCompleteCached = async (): Promise<TeamMember[]> => {
  const cached = sessionStorage.getItem(TEAM_MEMBERS_CACHE_KEY);

  if (cached) {
    try {
      const parsed: TeamMembersCache = JSON.parse(cached);

      if (Date.now() < parsed.expiresAt) {
        return parsed.data;
      }

      sessionStorage.removeItem(TEAM_MEMBERS_CACHE_KEY);
    } catch {
      sessionStorage.removeItem(TEAM_MEMBERS_CACHE_KEY);
    }
  }

  const data = await getTeamMembersComplete();

  const cache: TeamMembersCache = {
    data,
    expiresAt: Date.now() + CACHE_TTL,
  };

  sessionStorage.setItem(
    TEAM_MEMBERS_CACHE_KEY,
    JSON.stringify(cache)
  );

  return data;
};

/**
 * Limpia el cache manualmente
 */
export const clearTeamMembersCache = () => {
  sessionStorage.removeItem(TEAM_MEMBERS_CACHE_KEY);
};

export const createTeamMember = async (
  payload: TeamMemberPayload
): Promise<TeamMember> => {
  const response = await axios.post<TeamMember>(TEAM_MEMBERS_BASE, payload, {
    headers: TEAM_MEMBERS_HEADERS,
  });
  return response.data;
};

export const updateTeamMember = async (
  id: number,
  payload: TeamMemberPayload
): Promise<TeamMember> => {
  const response = await axios.put<TeamMember>(
    TEAM_MEMBERS_BASE,
    { ...payload, id },
    {
      headers: TEAM_MEMBERS_HEADERS,
    }
  );
  return response.data;
};
