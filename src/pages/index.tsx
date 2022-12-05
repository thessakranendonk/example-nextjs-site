/* eslint-disable @next/next/no-img-element */
import {
  ArrowedCarousel,
  HeroInfoBar,
  HeroOne,
  MapInfoSidePanel,
} from "component-bible-library";
import dynamic from "next/dynamic";
import {
  MapBusinessHoursProps,
  MapContactProps,
} from "component-bible-library/lib/components/types/interfaces.types";
import { NextPage } from "next";
import { useState } from "react";
import { MapProps } from "../components/Map";

interface IndexPageProps {}

const heroImageBarItems: Array<string> = [
  "Pregnancy",
  "Work Related Injuries",
  "Vaccinations",
  "On-site Pharmacy",
];

const hours: Array<MapBusinessHoursProps> = [
  { day: "Mon", hours: "10:00 AM - 4:00 PM" },
  { day: "Tue", hours: "10:00 AM - 4:00 PM" },
  { day: "Wed", hours: "10:00 AM - 4:00 PM" },
  { day: "Thu", hours: "10:00 AM - 4:00 PM" },
  { day: "Fri", hours: "10:00 AM - 4:00 PM" },
  { day: "Sat", hours: "10:00 AM - 1:00 PM" },
];

const contact: MapContactProps = {
  address: "2213 Bloor St. W., Toronto, ON",
  phone: "416-800-9697",
  fax: "416-695-2622",
};

const locationsList: MapProps[] = [
  {
    company: "Runnymede Medical Clinic",
    location: "2213 Bloor St. W., Toronto, ON",
    lat: 43.65102,
    lon: -79.47588,
  },
];

const clinicSpecialties: string[] = [
  "Cold & Cough",
  "Annual Health Checkup",
  "Pregnancy and Urine test",
  "Ear pain and Flushing",
  "Allergy Injections",
  "Work related injuries and WSIB Form",
  "Flu Shots",
  "Pre-dental Examinations",
  "Pre-Surgical Examinations",
  "TB Skin Test",
  "Children and Adult Vaccination",
  "Well Baby Care",
  "Well Women Care",
  "Wound Management",
  "Sexually Transmitted Infections",
  "Stitch Removal",
  "Asthma Management",
  "Pharmacy on site",
];

const images = [
  "https://www.runnymedewalkinmedical.com/s/cc_images/teaserbox_937720354.jpg?t=1583413808",
  "https://www.runnymedewalkinmedical.com/s/cc_images/cache_957645592.jpg",
  "https://www.runnymedewalkinmedical.com/s/cc_images/cache_957645591.jpg",
];

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const IndexPage: NextPage<IndexPageProps> = () => {
  const [isMapSidePanelVisible, setMapIsSidePanelVisible] = useState(true);

  const closeMapSidePanel = () => {
    setMapIsSidePanelVisible(false);
  };

  const openMapSidePanel = () => {
    setMapIsSidePanelVisible(true);
  };
  return (
    <div className="relative">
      <div className="relative -z-80">
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
      </div>
      <HeroInfoBar
        heroImageRowItemsClassName="bg-red-900 text-white font-serif"
        heroImageBarItems={heroImageBarItems}
      />
      <div className="bg-info-panel mx-auto" id="about">
        <img
          className="absolute -z-80 object-cover blur-sm"
          src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1670110454/nordwood-themes-KcsKWw77Ovw-unsplash_wil93u.jpg"
          alt="background"
        />
        <div className="flex flex-col w-mapXL mx-auto py-10">
          <p className="font-serif py-2 font-semibold">
            Runnymede Medical Clinc
          </p>
          <div className="w-12 h-0.5 rounded-xl bg-red-900"></div>
          <h2 className="text-red-900 font-semibold text-5xl font-serif py-2">
            Your Health is What Matters to Us
          </h2>
          <p className="font-serif italic py-2 w1/2 text-lg">
            Annual Physical (by Appointments only)
          </p>
          <p className="font-serif py-2 w-1/2 text-lg">
            Live a healthy life - with our preventive medical checkups, we can
            help detect diseases and illnesses early on and treat it
            accordingly.
          </p>
          <p className="font-serif"></p>
          <ul className="py-8 grid grid-cols-2">
            {clinicSpecialties.map((item) => (
              <li key={item} className="font-serif text-lg list-disc">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-mapXL mx-auto mb-16">
        <h2 className="text-red-900 font-semibold text-5xl font-serif pb-12">
          A tour through our practice
        </h2>
        <ArrowedCarousel
          images={images}
          carouselClassName="h-96 w-mapXL rounded-lg shadow-lg"
          alt="Our Clinic"
        />
      </div>

      <div
        id="physicians"
        className="flex flex-col w-mapXL mx-auto pb-10 font-serif "
      >
        <h2 className="text-5xl font-semibold text-red-900 pb-5">
          Meet our Physicians
        </h2>
        <div className="w-12 h-0.5 rounded-xl bg-red-900"></div>

        <p className="pb-2 pt-5 text-lg">Dr. Jabor MD, CCFP</p>
        <p className="pb-2 text-lg">Dr. Ho-Wo Cheong MD,CCFP</p>
        <p className="pb-2 text-lg">Dr. Leszko MD</p>
        <p className="pb-2 text-lg">Dr. Kempenski MD, CCFP </p>
      </div>
      <div
        id="hours"
        className="static flex w-screen bg-red-900 justify-center py-14"
      >
        <div className="flex w-mapXL shadow-lg">
          <DynamicMap
            mapLocationDetails={locationsList}
            mapCenter={[43.65102, -79.47588]}
            zoomNumber={16}
            mapClassName="absolute inset-x-center"
            mapSize="w-mapXL h-mapSidePanelXL"
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
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
