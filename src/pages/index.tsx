import {
  HeroInfoBar,
  HeroOne,
  MapInfoSidePanel,
} from "component-bible-library";
import {
  MapBusinessHoursProps,
  MapContactProps,
} from "component-bible-library/lib/components/types/interfaces.types";
import { NextPage } from "next";
import { useState } from "react";

// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
// import "leaflet-defaulticon-compatibility";

interface IndexPageProps {}

const heroImageBarItems: Array<string> = [
  "Pregnancy",
  "Work Related Injuries",
  "Vaccinations",
  "On-site Pharmacy",
];

const hours: Array<MapBusinessHoursProps> = [
  { day: "Mon", hours: "8:00 AM - 7:00 PM" },
  { day: "Tue", hours: "8:00 AM - 7:00 PM" },
  { day: "Wed", hours: "8:00 AM - 5:00 PM" },
  { day: "Thu", hours: "8:00 AM - 5:00 PM" },
  { day: "Fri", hours: "8:00 AM - 5:00 PM" },
  { day: "Sat", hours: "8:00 AM - 5:00 PM" },
];

const contact: MapContactProps = {
  address: "263 Augusta Ave, Toronto",
  email: "runnymedemedical@runnymede.com",
  phone: "418-585-2154",
};

const IndexPage: NextPage<IndexPageProps> = () => {
  const [isMapSidePanelVisible, setMapIsSidePanelVisible] = useState(true);

  const closeMapSidePanel = () => {
    setMapIsSidePanelVisible(false);
  };

  const openMapSidePanel = () => {
    setMapIsSidePanelVisible(true);
  };
  return (
    <>
      <HeroOne
        image="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
        location="Bloor West Village"
        locationClassName="text-xl lg:text-xl2 font-semibold mb-4 font-serif"
        companyName="Runnymede Medical Clinic"
        companyNameClassName="text-xl4 lg:text-7xl font-semibold font-serif"
        infoText="Dr. & Associates are currently accepting new patients"
        infoTextClassName="mt-3 lg:my-4 lg:text-xl font-serif"
        contactButtonText="Call: 519-861-4813"
        contactButtonClassName="bg-red-900 text-white px-8 py-3 lg:py-4  mt-10 lg:mt-2 rounded-md font-serif"
        buttonLink="/"
      />
      <HeroInfoBar
        heroImageRowItemsClassName="bg-red-900 text-white font-serif"
        heroImageBarItems={heroImageBarItems}
      />
      <MapInfoSidePanel
        mapContactInfo={contact}
        businessHours={hours}
        textClassName="font-serif"
        h2ClassName="font-semibold font-serif text-2xl"
        isMapInfoPanelOpen={isMapSidePanelVisible}
        panelButtonClassName="bg-red-900"
        onMapOpen={openMapSidePanel}
        onMapClose={closeMapSidePanel}
      />
    </>
  );
};

export default IndexPage;
