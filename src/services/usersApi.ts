import axios from "axios";
import { User, UserPayload } from "../types/user";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

const USERS_BASE = `${API_BASE}/Users`;
const USERS_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json-patch+json",
};

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(USERS_BASE);
  return response.data;
};

export const createUser = async (payload: UserPayload): Promise<User> => {
  const response = await axios.post<User>(USERS_BASE, payload, {
    headers: USERS_HEADERS,
  });
  return response.data;
};

export const updateUser = async (
  id: number,
  payload: UserPayload
): Promise<User> => {
  const response = await axios.put<User>(
    USERS_BASE,
    { ...payload, id },
    {
      headers: USERS_HEADERS,
    }
  );
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(USERS_BASE, {
    params: { id },
    headers: USERS_HEADERS,
  });
};
