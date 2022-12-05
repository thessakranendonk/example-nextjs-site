import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { IconHeader } from "component-bible-library";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { NavigationLink } from "component-bible-library/lib/components/SimpleHeader/SimpleHeader";
import { IconNavBarProps } from "component-bible-library/lib/components/types/interfaces.types";
import { SlideContext } from "../../../pages/_app";

const iconNavBarItems: Array<IconNavBarProps> = [
  {
    icon: <ClockIcon className="text-red-900" />,
    iconLink: "/#hours",
    title: "Monday - Friday",
    undertext: "8am to 5pm",
  },
  {
    icon: <PhoneIcon className="text-red-900" />,
    iconLink: "tel:416-800-9697",
    title: "416-800-9697",
    undertext: "Give us a Call",
  },
  {
    icon: <MapPinIcon className="text-red-900" />,
    iconLink: "/#hours",
    title: "Bloor West Village",
    undertext: "Toronto, Ontario",
  },
];

const navigationLinks: Array<NavigationLink> = [
  { name: "About", href: "/#about" },
  { name: "Physicians", href: "/#physicians" },
  { name: "Hours & Location", href: "/#hours" },
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
    <div className="z-50">
      <IconHeader
        companyName="Hello"
        logo="https://res.cloudinary.com/dybcfr6cd/image/upload/v1669227162/runnymede_ixn5or.png"
        navigationLinks={navigationLinks}
        iconNavBarItems={iconNavBarItems}
        headerBgColor="bg-white"
        textClassName="font-serif"
        dropdownBgColor="bg-red-900"
        dropdownBorderColor="border-red-900"
        dropdownTextColor="text-red-900"
        linkClassName="text-black text-md font-normal font-serif"
        logoClassName="h-20 mt-6 pl-8 lg:h-24 lg:pl-32 lg:mt-4"
        hoverClassName="hover:text-red-900 font-serif"
        activeLinkClassName="text-red-900 font-serif"
        currentActiveLocation={location.pathname}
        onMenuOpen={openSidePanel}
        onMenuClose={closeSidePanel}
        isPanelOpen={isSidePanelVisible}
      />
    </div>
  );
};
