import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { IconHeader } from "techtessy";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { IconNavBarProps } from "techtessy/lib/components/types/interfaces.types";
import { SlideContext } from "../../../pages/_app";
import { LOCATION_DETAILS } from "../../../../data/locationDetails/location";
import { NAVIGATION_LINKS } from "../../../../data/locationDetails/clinicData";
import clsx from "clsx";
import DanielLogo from "../../../../public/daniel.png";

const iconNavBarItems: IconNavBarProps[] = [
  {
    icon: <ClockIcon className="text-brand-darkest" />,
    iconLink: "/#hours",
    title: LOCATION_DETAILS.opening_days,
    undertext: LOCATION_DETAILS.opening_hours,
  },
  {
    icon: <PhoneIcon className="text-brand-darkest" />,
    iconLink: `tel:${LOCATION_DETAILS.phone}`,
    title: LOCATION_DETAILS.phone,
    undertext: "Give us a Call",
  },
  {
    icon: <MapPinIcon className="text-brand-darkest" />,
    iconLink: "/#hours",
    title: LOCATION_DETAILS.neighborhood,
    undertext: LOCATION_DETAILS.location,
  },
];

export const SlideContent = createContext(false);

export const Header: React.FC = () => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);
  const { setSlideViewBox } = useContext(SlideContext);

  const closeSidePanel = () => {
    setSlideViewBox(false);
    setIsSidePanelVisible(false);
  };

  const openSidePanel = () => {
    setSlideViewBox(true);
    setIsSidePanelVisible(true);
  };
  const location = useRouter();
  return (
    <div className="z-50">
      <IconHeader
        companyName="Daniel Medical Centre"
        companyNameClassName="lg:text-xl xl:text-2xl lg:ml-24 lg:mt-6 font-medium rounded-full py-3 px-4 lg:bg-brand-darkest/20 text-brand-darkest md:hover:font-medium xl:hover:animate-pulse text-center"
        logo={DanielLogo.src}
        logoClassName="w-32 ml-8 lg:w-48 lg:mt-4 xl:ml-24"
        navigationLinks={NAVIGATION_LINKS}
        iconNavBarItems={iconNavBarItems}
        headerBgColor="bg-white"
        textClassName="text-black"
        dropdownBgColor="bg-brand-darkest"
        dropdownBorderColor="border-brand-darkest rounded-lg"
        dropdownTextColor="text-brand-darkest"
        linkClassName="text-black text-md font-normal"
        hoverClassName={clsx(
          "relative transition-all",
          "before:w-0 before:h-0.5 before:absolute before:bottom-0 before:left-2/4 before:rounded-full before:bg-transparent before:transition-all before:duration-500",
          "hover:before:w-full hover:before:left-0 hover:before:bg-brand-darkest/80 hover:text-brand-darkest hover:font-semibold"
        )}
        activeLinkClassName="text-brand-darkest font-medium"
        currentActiveLocation={location.pathname}
        onMenuOpen={openSidePanel}
        onMenuClose={closeSidePanel}
        isPanelOpen={isSidePanelVisible}
      />
    </div>
  );
};
