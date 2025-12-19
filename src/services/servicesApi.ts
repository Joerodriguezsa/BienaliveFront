import.meta.env.VITE_API_URL
import { Service } from "../types/service";
import axios from "axios";

const SERVICES_CACHE_KEY = "services_with_images";
const CACHE_HOURS = 6;
const CACHE_TTL = CACHE_HOURS * 60 * 60 * 1000;

type ServicesCache = {
  data: Service[];
  expiresAt: number;
};

export const getServicesWithImages = async (): Promise<Service[]> => {
  const response = await axios.get<Service[]>(
    `${import.meta.env.VITE_API_URL}/Services/ConsultarServicesImages`
  );
  return response.data;
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
