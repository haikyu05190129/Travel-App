export enum Category {
  FLIGHT = 'FLIGHT',
  TRANSPORT = 'TRANSPORT',
  HOTEL = 'HOTEL',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING'
}

export interface Attachment {
  type: 'pdf' | 'image' | 'link';
  title: string;
  url: string;
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  location: string;
  category: Category;
  googleMapsUrl?: string;
  highlights?: {
    text: string;
    type: 'critical' | 'info' | 'food';
  }[];
  price?: string;
  attachments?: Attachment[]; // New field for tickets/QR codes
}

export interface HourlyWeather {
  time: string;
  temp: string;
  icon: string;
}

export interface DayPlan {
  date: string; // YYYY-MM-DD
  dayLabel: string; // e.g., Sat
  dayNumber: string; // e.g., 20
  locationTitle: string;
  locationUrl?: string; // URL for the main location of the day
  heroImage: string; // URL for the daily background image
  weather: {
    temp: string;
    condition: string;
    icon: string;
    hourly: HourlyWeather[];
  };
  items: ItineraryItem[];
}

export interface Expense {
  id: string;
  item: string;
  amount: number;
  currency: 'JPY' | 'TWD';
  category: string;
  timestamp: number;
}

export interface FlightInfo {
  code: string;
  route: string;
  time: string;
  terminal: string;
  details: string;
}

export interface HotelInfo {
  name: string;
  checkIn: string;
  address: string;
  mapUrl: string;
  bookingId?: string;
  attachments?: Attachment[]; // New field for Hotel Vouchers
}