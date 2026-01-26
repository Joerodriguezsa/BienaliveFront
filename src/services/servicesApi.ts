import axios from "axios";
import {
  Service,
  ServiceImage,
  ServiceImagePayload,
  ServicePayload,
  ServicesTimePrice,
  ServiceTimePricePayload,
} from "../types/service";

const SERVICES_CACHE_KEY = "services_with_images";
const CACHE_HOURS = 6;
const CACHE_TTL = CACHE_HOURS * 60 * 60 * 1000;
const API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const SERVICES_BASE = `${API_BASE}/Services`;
const SERVICE_IMAGES_BASE = `${API_BASE}/ServiceImages`;
const SERVICES_TIME_PRICES_BASE = `${API_BASE}/ServicesTimePrice`;
const SERVICES_ENDPOINTS = {
  create: `${SERVICES_BASE}/CrearServices`,
  update: `${SERVICES_BASE}/ActualizarServices`,
  delete: `${SERVICES_BASE}/EliminarServices`,
};
const SERVICE_IMAGES_ENDPOINTS = {
  create: `${SERVICE_IMAGES_BASE}/CrearServiceImages`,
  update: `${SERVICE_IMAGES_BASE}/ActualizarServiceImages`,
  delete: `${SERVICE_IMAGES_BASE}/EliminarServiceImages`,
};
const SERVICES_HEADERS = {
  accept: "text/plain",
  "Content-Type": "application/json-patch+json",
};

if (!API_BASE) {
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_API_URL is not defined. Please set it in your .env file, e.g. VITE_API_URL=https://yourdomain/api"
  );
}

type ServicesCache = {
  data: Service[];
  expiresAt: number;
};

const normalizeServicesResponse = (payload: unknown): Service[] => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    Array.isArray((payload as { data: unknown }).data)
  ) {
    return (payload as { data: Service[] }).data;
  }

  return [];
};

export const getServicesWithImages = async (): Promise<Service[]> => {
  const response = await axios.get(
    `${API_BASE}/Services/ConsultarServicesImages`
  );
  return normalizeServicesResponse(response.data);
};

export const getServices = async (): Promise<Service[]> => {
  const response = await axios.get(`${API_BASE}/Services/ConsultarServices`);
  return normalizeServicesResponse(response.data);
};

export const getServicesWithImagesCached = async (): Promise<Service[]> => {
  const cached = sessionStorage.getItem(SERVICES_CACHE_KEY);
  
  if (cached) {
    try {
      const parsed: ServicesCache = JSON.parse(cached);

      if (Date.now() < parsed.expiresAt) {
        return parsed.data;
      }

      sessionStorage.removeItem(SERVICES_CACHE_KEY);
    } catch {
      sessionStorage.removeItem(SERVICES_CACHE_KEY);
    }
  }

  // cache vacío o vencido
  const data = await getServicesWithImages();

  const cache: ServicesCache = {
    data,
    expiresAt: Date.now() + CACHE_TTL,
  };

  sessionStorage.setItem(SERVICES_CACHE_KEY, JSON.stringify(cache));

  return data;
};

export const clearServicesCache = () => {
  sessionStorage.removeItem(SERVICES_CACHE_KEY);
};

export const createService = async (
  payload: ServicePayload
): Promise<Service> => {
  const response = await axios.post<Service>(SERVICES_ENDPOINTS.create, payload, {
    headers: SERVICES_HEADERS,
  });
  return response.data;
};

export const updateService = async (
  id: number,
  payload: ServicePayload
): Promise<Service> => {
  const response = await axios.put<Service>(
    SERVICES_ENDPOINTS.update,
    { ...payload, id },
    {
      headers: SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const deleteService = async (id: number): Promise<void> => {
  await axios.delete(SERVICES_ENDPOINTS.delete, {
    params: { id },
    headers: SERVICES_HEADERS,
  });
};

export const createServiceImage = async (
  payload: ServiceImagePayload
): Promise<ServiceImage> => {
  const response = await axios.post<ServiceImage>(
    SERVICE_IMAGES_ENDPOINTS.create,
    payload,
    {
      headers: SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const updateServiceImage = async (
  id: number,
  payload: ServiceImagePayload
): Promise<ServiceImage> => {
  const response = await axios.put<ServiceImage>(
    SERVICE_IMAGES_ENDPOINTS.update,
    { ...payload, id },
    {
      headers: SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const deleteServiceImage = async (id: number): Promise<void> => {
  await axios.delete(SERVICE_IMAGES_ENDPOINTS.delete, {
    params: { id },
    headers: SERVICES_HEADERS,
  });
};

export const createServiceTimePrice = async (
  payload: ServiceTimePricePayload
): Promise<ServicesTimePrice> => {
  const response = await axios.post<ServicesTimePrice>(
    SERVICES_TIME_PRICES_BASE,
    payload,
    {
      headers: SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const updateServiceTimePrice = async (
  id: number,
  payload: ServiceTimePricePayload
): Promise<ServicesTimePrice> => {
  const response = await axios.put<ServicesTimePrice>(
    SERVICES_TIME_PRICES_BASE,
    { ...payload, id },
    {
      headers: SERVICES_HEADERS,
    }
  );
  return response.data;
};

export const deleteServiceTimePrice = async (id: number): Promise<void> => {
  await axios.delete(SERVICES_TIME_PRICES_BASE, {
    params: { id },
    headers: SERVICES_HEADERS,
  });
};
