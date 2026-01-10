import.meta.env.VITE_API_URL
import axios from "axios";
// import { TeamMember } from "../types/teamMember";
// import { TeamMember } from "../types/teamMember";
import { TeamMember } from "../types/TeamMember";

const TEAM_MEMBERS_CACHE_KEY = "team_members_complete";
const CACHE_HOURS = 6;
const CACHE_TTL = CACHE_HOURS * 60 * 60 * 1000;

type TeamMembersCache = {
  data: TeamMember[];
  expiresAt: number;
};

/**
 * Llamada directa al backend
 */
export const getTeamMembersComplete = async (): Promise<TeamMember[]> => {
  const response = await axios.get<TeamMember[]>(
    `${import.meta.env.VITE_API_URL}/TeamMembers/ConsultarTeamMembersComplete`
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
