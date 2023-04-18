import { PhoneIcon } from "@heroicons/react/24/outline";
import { LOCATION_DETAILS } from "../../../../data/locationDetails/location";

const Footer: React.FC = () => {
  return (
    <div className="w-screen flex flex-col items-center md:flex-row md:justify-between bg-stone-900 text-white text-md py-4 md:px-28 p-4 gap-2">
      <p>{LOCATION_DETAILS.clinic_name}</p>
      <p>{LOCATION_DETAILS.location}</p>
      <a href={`tel:${LOCATION_DETAILS.phone}`} className="flex">
        <PhoneIcon className="w-[1rem] mr-3" />
        {LOCATION_DETAILS.phone}
      </a>
    </div>
  );
};

export default Footer;
