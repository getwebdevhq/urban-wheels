import type { CAR_SPECS, SEARCH_PARAMS } from "./constants";

export type SearchParams = typeof SEARCH_PARAMS[keyof typeof SEARCH_PARAMS];
export type BodyStyle = typeof CAR_SPECS.BODY_STYLE[keyof typeof CAR_SPECS.BODY_STYLE];
export type EngineType = typeof CAR_SPECS.ENGINE_TYPE[keyof typeof CAR_SPECS.ENGINE_TYPE];
export type Transmission = typeof CAR_SPECS.TRANSMISSION[keyof typeof CAR_SPECS.TRANSMISSION];

export interface Location {
  id: string;
  name: string;
  value: string;
  latitude: string;
  longitude: string;
  featured: boolean;
}

export interface Car {
  id: string;
  slug: string;
  name: string;
  body_style: string;
  engine_type: string;
  transmission: string;
  seats: number;
  descriptions: string[];
  features: string[];
  rating: string;
  reviews: number;
  unlimited_mileage: boolean | null;
  image_url: string;
  retail_price_per_day: number;
  retail_price_currency: string;
  discounted_price_per_day: number | null;
  discounted_price_currency: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  username: string;
  image_url: string;
}

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export interface BookingFormData {
  location: string;
  checkin: Date;
  checkout: Date;
}

export interface FilterState {
  minPrice: number;
  maxPrice: number;
  seats: number | undefined;
  bodyStyles: BodyStyle[];
  engineTypes: EngineType[];
  transmissions: Transmission[];
}