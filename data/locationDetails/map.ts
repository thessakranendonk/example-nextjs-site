import {
  MapBusinessHoursProps,
  MapContactProps,
} from "techtessy/lib/components/types/interfaces.types";
import { MapProps } from "../../src/components/Map";
import { LOCATION_DETAILS } from "./location";

export const MAP_HOURS: MapBusinessHoursProps[] = [
  { day: "Mon", hours: "10:00 AM - 4:00 PM" },
  { day: "Tue", hours: "10:00 AM - 4:00 PM" },
  { day: "Wed", hours: "10:00 AM - 4:00 PM" },
  { day: "Thu", hours: "10:00 AM - 4:00 PM" },
  { day: "Fri", hours: "10:00 AM - 4:00 PM" },
  { day: "Sat", hours: "10:00 AM - 1:00 PM" },
];

export const MAP_CONTACT: MapContactProps = {
  address: LOCATION_DETAILS.address,
  phone: LOCATION_DETAILS.phone,
  fax: LOCATION_DETAILS.fax,
};

export const MAP_LOCATION_LIST: MapProps[] = [
  {
    company: LOCATION_DETAILS.clinic_name,
    location: LOCATION_DETAILS.address,
    lat: LOCATION_DETAILS.lat,
    lon: LOCATION_DETAILS.lon,
  },
];
