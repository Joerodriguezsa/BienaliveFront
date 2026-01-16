export interface ServiceImage {
  id: number;
  serviceId: number;
  imageUrl: string;
  tipoImagenId: number;
}

export interface ServiceImagePayload {
  serviceId: number;
  imageUrl: string;
  tipoImagenId: number;
}

export interface ServicesTimePrice {
  id: number;
  serviceId: number;
  time: number;
  price: number;
}

export interface ServiceTimePricePayload {
  serviceId: number;
  time: number;
  price: number;
}

export interface Service {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  time1: number;
  price1: number;
  time2: number;
  price2: number;
  active: boolean;
  servicesTimePrices: ServicesTimePrice[];
  servicesTimePrice?: ServicesTimePrice[];
  serviceImages: ServiceImage[];
}

export interface ServicePayload {
  name: string;
  shortDescription: string;
  longDescription: string;
  time1: number;
  price1: number;
  time2: number;
  price2: number;
  active: boolean;
}
