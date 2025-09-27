export const APP_CONFIG = {
  name: "Urban Wheels",
  description: "Premium car rental service with seamless booking experience",
  url: "https://urban-wheels.rajputhemant.me",
  author: {
    name: "Hemant Rajput",
    url: "https://rajputhemant.me",
    email: "68769346+rajput-hemant@users.noreply.github.com",
    x: "@rajput_hemant01",
  },
  links: {
    github: "https://github.com/rajput-hemant/urban-wheels",
    discord: "https://discord.gg/rajput-hemant#8269",
    x: "https://twitter.com/rajput_hemant01",
  },
} as const;

export const SEARCH_PARAMS = {
  CAR_SLUG: "car-slug",
  LOCATION: "location",
  CHECKIN: "checkin",
  CHECKOUT: "checkout",
  MIN_PRICE: "min-price",
  MAX_PRICE: "max-price",
  BODY_STYLE: "body-style",
  ENGINE_TYPE: "engine-type",
  MIN_SEATS: "min-seats",
  TRANSMISSION: "transmission",
} as const;

export const CAR_SPECS = {
  BODY_STYLE: {
    SUV: "suv",
    MINIVAN: "minivan",
    PICKUP_TRUCK: "pickup-truck",
    SPORTS_CAR: "sports-car",
    HATCHBACK: "hatchback",
    SEDAN: "sedan",
  },
  ENGINE_TYPE: {
    GAS: "gas",
    HYBRID: "hybrid",
    ELECTRIC: "electric",
  },
  TRANSMISSION: {
    AUTOMATIC: "automatic",
    MANUAL: "manual",
  },
} as const;

export const BOOKING_LIMITS = {
  MAX_DAYS: 30,
  MIN_ADVANCE_DAYS: 1,
} as const;

export const PRICING = {
  TAX_RATE: 0.16,
  CURRENCY: "INR",
} as const;