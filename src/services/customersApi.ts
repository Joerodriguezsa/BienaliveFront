import axios from "axios";
import { Customer, CustomerPayload } from "../types/customer";

const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

const CUSTOMERS_BASE = `${API_BASE}/Customers`;
const CUSTOMERS_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json-patch+json",
};

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get<Customer[]>(CUSTOMERS_BASE, {
    headers: CUSTOMERS_HEADERS,
  });
  return response.data;
};

export const createCustomer = async (
  payload: CustomerPayload
): Promise<Customer> => {
  const response = await axios.post<Customer>(CUSTOMERS_BASE, payload, {
    headers: CUSTOMERS_HEADERS,
  });
  return response.data;
};

export const updateCustomer = async (
  id: number,
  payload: CustomerPayload
): Promise<Customer> => {
  const response = await axios.put<Customer>(
    CUSTOMERS_BASE,
    { ...payload, id },
    {
      headers: CUSTOMERS_HEADERS,
    }
  );
  return response.data;
};

export const deleteCustomer = async (id: number): Promise<void> => {
  await axios.delete(CUSTOMERS_BASE, {
    params: { id },
    headers: CUSTOMERS_HEADERS,
  });
};
