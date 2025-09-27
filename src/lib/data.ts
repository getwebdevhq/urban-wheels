export const locations = [
  {
    id: "c16c11e1-0875-4a56-8faf-2d080ae0b6d6",
    name: "Mumbai, India",
    value: "mumbai",
    latitude: "19.076",
    longitude: "72.8777",
    featured: false,
  },
  {
    id: "2a97043f-184f-4663-9dbb-fe8b9afc8d64",
    name: "Delhi, India",
    value: "delhi",
    latitude: "28.6139",
    longitude: "77.209",
    featured: false,
  },
  {
    id: "fae436f3-6341-486a-8691-0633f64e1997",
    name: "Amsterdam, Netherlands",
    value: "amsterdam",
    latitude: "52.3547",
    longitude: "4.904",
    featured: false,
  },
  {
    id: "6132dc81-cc1a-4a2e-93c3-d176139bec4f",
    name: "Barcelona, Spain",
    value: "barcelona",
    latitude: "41.3925",
    longitude: "2.1404",
    featured: false,
  },
  {
    id: "92331cbf-254a-4acf-9671-a77810faef4c",
    name: "Cancún, México",
    value: "cancun",
    latitude: "21.1617",
    longitude: "-86.851",
    featured: true,
  },
  {
    id: "e27e9e7c-5bf9-44f9-b24f-3b5df6417c77",
    name: "Dubai, United Arab Emirates",
    value: "dubai",
    latitude: "25.2652",
    longitude: "55.2928",
    featured: true,
  },
  {
    id: "fd1e4b0d-5e1a-41db-a89b-6e33eed72ace",
    name: "New York, United States",
    value: "new-york",
    latitude: "40.6975",
    longitude: "-73.9795",
    featured: false,
  },
  {
    id: "45d07433-25e2-4ce7-b039-f0317e694048",
    name: "Paris, France",
    value: "paris",
    latitude: "48.8589",
    longitude: "2.3469",
    featured: true,
  },
  {
    id: "d9b23370-3be4-4936-ae23-3ad54b310fd8",
    name: "Rio de Janeiro, Brazil",
    value: "rio",
    latitude: "-22.9148",
    longitude: "-43.4075",
    featured: false,
  },
  {
    id: "2538dcf8-b531-4c68-a87a-b49a42be0c23",
    name: "Rome, Italy",
    value: "rome",
    latitude: "41.8931",
    longitude: "12.4832",
    featured: true,
  },
  {
    id: "b31d9e0c-77c6-427b-9a19-37382ea62d7b",
    name: "Sydney, Australia",
    value: "sydney",
    latitude: "-33.8693",
    longitude: "151.209",
    featured: false,
  },
  {
    id: "ff841d10-0682-4e51-9330-47c5abb00643",
    name: "Tokyo, Japan",
    value: "tokyo",
    latitude: "35.6841",
    longitude: "139.7742",
    featured: false,
  },
];

export const testimonials = [
  {
    id: "985425fe-0c7e-4700-8e6d-d48b3bc66768",
    name: "Olivia Parker",
    comment:
      "Best Car Rental Experience! The website's interface is intuitive, making it easy to find the ideal car. The reviews from other users were incredibly helpful, and the entire process, from booking to return, was a breeze. Highly recommended!",
    username: "oliviaparker",
    image_url: "/images/avatars/olivia-parker.avif",
  },
  {
    id: "6671f37d-75ad-404f-bf23-04ddff964aa5",
    name: "Emma Thompson",
    comment:
      "A Seamless Experience! This website made renting a car hassle-free. The search filters helped me find the perfect car for my trip, and the customer support was responsive and friendly. 5-star service all the way!",
    username: "emmathompson",
    image_url: "/images/avatars/emma-thompson.avif",
  },
  {
    id: "8ecd373f-65c7-4651-a575-63325489297a",
    name: "Sophia Rodriguez",
    comment:
      "Reliable and Affordable! I've used several car rental websites before, but this one stands out. The prices are transparent, no hidden fees, and the cars are well-maintained. I'll be coming back for all my future trips.",
    username: "sophiarodriguez",
    image_url: "/images/avatars/sophia-rodriguez.avif",
  },
  {
    id: "944fdb07-590d-4cb1-a797-e7fb672c84e1",
    name: "Daniel Johnson",
    comment:
      "Exceptional Service! From booking to drop-off, everything was smooth and easy. The selection of cars was impressive, and the prices were unbeatable. Will definitely recommend to friends!",
    username: "danjohnson",
    image_url: "/images/avatars/daniel-johnson.avif",
  },
];

export const cars = [
  {
    id: "04df75a5-d495-4192-927d-4c54e68feca9",
    slug: "eco-hatchback",
    name: "Eco Hatchback",
    body_style: "Hatchback",
    engine_type: "Hybrid",
    transmission: "Automatic",
    seats: 4,
    descriptions: [
      "Meet the Eco Hatch – a blend of eco-conscious driving and urban sophistication. Designed for the environmentally aware, this compact marvel combines fuel efficiency with agile performance, perfect for city life. Inside, it offers a spacious, tech-savvy interior with smart storage solutions and seamless connectivity.",
      "Safety is a priority, featuring advanced driver-assist systems. The Eco Hatch isn't just a car; it's a sustainable lifestyle choice, making eco-friendly driving effortlessly stylish and secure.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "3.8",
    reviews: 42,
    unlimited_mileage: true,
    image_url: "/images/cars/eco-hatchback.webp",
    retail_price_per_day: 1000,
    retail_price_currency: "INR",
    discounted_price_per_day: 750,
    discounted_price_currency: "INR",
  },
  {
    id: "9fd1b27a-2e47-4105-88c2-8e19f5839f3d",
    slug: "city-minivan",
    name: "City Minivan",
    body_style: "Minivan",
    engine_type: "Gas",
    transmission: "Automatic",
    seats: 7,
    descriptions: [
      "Redefining family travel with sophistication. Designed for urban adventures, this minivan blends versatility and style seamlessly. With its spacious interior and advanced safety features, it ensures a smooth, secure, and stylish ride for you and your loved ones.",
      "Perfect for city life, the City Minivan offers unparalleled comfort and convenience, making every journey a delightful experience.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "4.2",
    reviews: 23,
    unlimited_mileage: true,
    image_url: "/images/cars/city-minivan.webp",
    retail_price_per_day: 1500,
    retail_price_currency: "INR",
    discounted_price_per_day: 1000,
    discounted_price_currency: "INR",
  },
  {
    id: "f27a0c28-74ca-4974-92a6-e398842186eb",
    slug: "mid-size-suv",
    name: "Mid-Size SUV",
    body_style: "SUV",
    engine_type: "Gas",
    transmission: "Automatic",
    seats: 5,
    descriptions: [
      "A blend of power and elegance. Its striking design makes a statement, while the spacious interior offers both comfort and flexibility.",
      "Whether navigating city streets or off-road adventures, this SUV delivers superior performance and modern convenience, ensuring an exceptional driving experience for every journey.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "4.2",
    reviews: 11,
    unlimited_mileage: false,
    image_url: "/images/cars/mid-size-suv.webp",
    retail_price_per_day: 1700,
    retail_price_currency: "INR",
  },
  {
    id: "4561ca55-c694-4530-b937-ad185e36f0b4",
    slug: "electric-luxury-sedan",
    name: "Electric Luxury Sedan",
    body_style: "Sedan",
    engine_type: "Electric",
    transmission: "Automatic",
    seats: 5,
    descriptions: [
      "This sedan combines the elegance of a luxury car with the eco-friendly essence of electric mobility. Its sleek design and advanced engineering promise a smooth, silent ride, embodying the future of driving.",
      "Inside, experience a blend of cutting-edge technology and plush comfort, creating an oasis of serenity on the road. The Electric Luxury Sedan sets new standards, offering a luxurious and sustainable driving experience for the discerning modern driver.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "4.8",
    reviews: 0,
    unlimited_mileage: false,
    image_url: "/images/cars/electric-luxury-sedan.webp",
    retail_price_per_day: 1600,
    retail_price_currency: "INR",
  },
  {
    id: "da2a5e67-272a-4bf6-92e6-0cfef87681c2",
    slug: "full-size-sedan",
    name: "Full-Size Sedan",
    body_style: "Sedan",
    engine_type: "Gas",
    transmission: "Automatic",
    seats: 5,
    descriptions: [
      "Where spaciousness meets sophistication. This sedan offers an abundance of room, making every journey comfortable and indulgent. With its elegant design and powerful performance, it's a perfect blend of style and substance. ",
      "Inside, you'll find a refined interior equipped with advanced technology, ensuring a seamless driving experience.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "4.5",
    reviews: 31,
    unlimited_mileage: false,
    image_url: "/images/cars/full-size-sedan.webp",
    retail_price_per_day: 1300,
    retail_price_currency: "INR",
  },
  {
    id: "76cb7f00-6f8f-4dfc-8765-6253659a07b7",
    slug: "luxury-sedan",
    name: "Luxury Sedan",
    body_style: "Sedan",
    engine_type: "Gas",
    transmission: "Automatic",
    seats: 5,
    descriptions: [
      "Crafted for those who demand the utmost in sophistication, this sedan exudes timeless luxury from every angle. Its sleek silhouette and premium finishes create an aura of opulence, while the powerful engine ensures a dynamic and smooth ride.",
      "Step inside, and you'll find a sumptuous interior adorned with the finest materials and cutting-edge technology.",
      "The Luxury Sedan elevates the driving experience, offering unparalleled comfort and style for the discerning driver who appreciates the finer things in life.",
    ],
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Navigation",
      "Cruise control",
      "Android Auto",
      "Apple CarPlay",
    ],
    rating: "4.7",
    reviews: 9,
    unlimited_mileage: false,
    image_url: "/images/cars/luxury-sedan.webp",
    retail_price_per_day: 2000,
    retail_price_currency: "INR",
  },
];

export function fetchCars() {
  return cars;
}

export function fetchCarBySlug(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function fetchLocations() {
  return locations;
}

export function fetchLocationByValue(value: string) {
  return locations.find((location) => location.value === value);
}

export function fetchTestimonials() {
  return testimonials;
}

export function fetchFeaturedLocations() {
  return locations.filter((location) => location.featured);
}