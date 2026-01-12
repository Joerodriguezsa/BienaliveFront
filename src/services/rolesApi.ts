import axios from "axios";
import { Role } from "../types/role";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

export const getRoles = async (): Promise<Role[]> => {
  const response = await axios.get<Role[]>(
    `${API_BASE}/Roles/ConsultarRoles`
  );
  return response.data;
};
