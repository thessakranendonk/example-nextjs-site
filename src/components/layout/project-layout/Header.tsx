import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { IconHeader } from "component-bible-library";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { NavigationLink } from "component-bible-library/lib/components/SimpleHeader/SimpleHeader";
import { IconNavBarProps } from "component-bible-library/lib/components/types/interfaces.types";
import { SlideContext } from "../../../pages/_app";

const iconNavBarItems: Array<IconNavBarProps> = [
  {
    icon: <ClockIcon className="text-green-900" />,
    iconLink: "/clock",
    title: "Monday - Friday",
    undertext: "8am to 5pm",
  },
  {
    icon: <PhoneIcon className="text-green-900" />,
    iconLink: "/call",
    title: "519-861-4813",
    undertext: "Give us a Call",
  },
  {
    icon: <MapPinIcon className="text-green-900" />,
    iconLink: "/location",
    title: "Bloor West Village",
    undertext: "Toronto, Ontario",
  },
];

const navigationLinks: Array<NavigationLink> = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Hours & Location", href: "/hours" },
  { name: "Our Policy", href: "/policy" },
];

export const SlideContent = createContext(false);

export const Header: React.FC = () => {
  const [isSidePanelVisible, setIsSidePanelVisible] = useState(false);
  const { slideViewBox, setSlideViewBox } = useContext(SlideContext);

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
    <>
      <IconHeader
        companyName="Hello"
        logo="https://res.cloudinary.com/dybcfr6cd/image/upload/v1669227162/runnymede_ixn5or.png"
        navigationLinks={navigationLinks}
        iconNavBarItems={iconNavBarItems}
        headerBgColor="bg-white"
        dropdownBgColor="bg-green-900"
        dropdownBorderColor="border-green-900"
        dropdownTextColor="text-green-900"
        linkClassName="text-black text-md font-normal font-serif"
        logoClassName="h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4"
        hoverClassName="hover:text-purple-400 font-serif"
        activeLinkClassName="text-yellow-300 font-serif"
        currentActiveLocation={location.pathname}
        onMenuOpen={openSidePanel}
        onMenuClose={closeSidePanel}
        isPanelOpen={isSidePanelVisible}
      />
    </>
  );
};
