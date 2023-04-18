/* eslint-disable @next/next/no-img-element */
import {
  ArrowedCarousel,
  HeroInfoBar,
  HeroOne,
  MapInfoSidePanel,
} from "techtessy";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import {
  CLINIC_IMAGES,
  CLINIC_SPECIALTIES,
  HERO_IMAGE_ITEMS,
} from "../../data/locationDetails/clinicData";
import { LOCATION_DETAILS } from "../../data/locationDetails/location";
import { PHYSICIANS } from "../../data/specialists/physicians";
import { Person } from "../components/UI/Person";
import { MAP_HOURS, MAP_LOCATION_LIST } from "../../data/locationDetails/map";
import ContactForm from "../components/ContactForm";

interface IndexPageProps {}

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const ImageCarousel: React.FC = () => {
  return (
    <div className="w-[calc(10% - 10px)] mx-auto px-10 lg:px-4 mb-16">
      <h2 className="text-brand-darkest lg:w-mapXL mx-auto  font-semibold text-2xl md:text-5xl  pb-12">
        A tour through our practice
      </h2>
      <ArrowedCarousel
        images={CLINIC_IMAGES}
        carouselClassName="min-w-[18rem] lg:w-carouselWidth lg:h-carouselHeight mx-auto rounded-lg shadow-lg"
        alt="Our Clinic"
      />
    </div>
  );
};

const Physicians: React.FC = () => {
  return (
    <div
      id="physicians"
      className="flex flex-col lg:w-mapXL mx-auto pb-10 p-4 lg:p-0 text-center md:text-left"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-brand-darkest pb-5">
        Meet our Physicians
      </h2>
      <div className="w-12 h-0.5 rounded-xl bg-brand-darkest mx-auto md:m-0"></div>
      <div className="py-5">
        {PHYSICIANS.map((person) => (
          <Person
            key={person.specialist.name + person.specialist.title}
            name={person.specialist.name}
            title={person.specialist.title}
            className="pb-4"
          />
        ))}
      </div>
    </div>
  );
};

const ClinicInformationPanel: React.FC = () => {
  return (
    <div className="flex flex-col lg:w-mapXL mx-auto py-10 p-4">
      <p className="md:text-xl py-2 font-semibold">
        {LOCATION_DETAILS.clinic_name}
      </p>
      <div className="w-12 h-0.5 rounded-xl bg-brand-darkest"></div>
      <h2 className="text-brand-darkest font-semibold text-xl md:text-2xl lg:text-5xl py-2">
        Your Health is What Matters to Us
      </h2>
      <p className=" italic py-2 text-lg">
        Annual Physical (by Appointments only)
      </p>
      <p className="py-2 md:text-xl">
        Live a healthy life - with our preventive medical checkups, we can help
        detect diseases and illnesses early on and treat it accordingly.
      </p>
      <p className=""></p>
      <ul className="py-8 grid md:grid-cols-2 px-4 lg:px-0">
        {CLINIC_SPECIALTIES.map((item) => (
          <li key={item} className="md:text-lg list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndexPage: NextPage<IndexPageProps> = () => {
  const [isMapSidePanelVisible, setMapIsSidePanelVisible] = useState(true);

  const closeMapSidePanel = () => {
    setMapIsSidePanelVisible(false);
  };

  const openMapSidePanel = () => {
    setMapIsSidePanelVisible(true);
  };

  useEffect(() => {
    if (window.innerWidth < 600) {
      setMapIsSidePanelVisible(false);
    }
  }, []);

  return (
    <div className="relative z-20">
      <div className="relative">
        <HeroOne
          image="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
          location={LOCATION_DETAILS.neighborhood}
          locationClassName="md:text-lg lg:text-xl2 font-semibold mb-4"
          companyName={LOCATION_DETAILS.clinic_name}
          companyNameClassName="text-4xl lg:text-7xl font-semibold"
          infoText={LOCATION_DETAILS.clinic_slogan}
          infoTextClassName="mt-3 lg:my-4 lg:text-xl"
          contactButtonText={`Call: ${LOCATION_DETAILS.phone}`}
          contactButtonClassName="bg-brand-darkest text-xs md:text-md lg:text-xl text-white px-8 py-3 lg:py-4  mt-10 lg:mt-2 rounded-full hover:animate-pulse"
          buttonLink={`tel:${LOCATION_DETAILS.phone}`}
        />
      </div>
      <HeroInfoBar
        heroImageRowItemsClassName="bg-brand-darkest text-white text-sm md:text-sm lg:text-xl"
        heroImageBarItems={HERO_IMAGE_ITEMS}
      />
      <div className="bg-info-panel mx-auto" id="about">
        <img
          className="absolute -z-80 h-4/6 object-fill blur-sm"
          src="https://res.cloudinary.com/dybcfr6cd/image/upload/v1670110454/nordwood-themes-KcsKWw77Ovw-unsplash_wil93u.jpg"
          alt="background"
        />
        <ClinicInformationPanel />
        {CLINIC_IMAGES.length > 0 && <ImageCarousel />}
        <Physicians />
      </div>
      <div
        id="hours"
        className="static flex w-screen bg-brand-darkest justify-center py-14"
      >
        <div className="flex min-w-[20rem] md:min-w-[40rem] lg:w-mapXL md:h-mapSidePanelXL shadow-lg">
          <DynamicMap
            mapLocationDetails={MAP_LOCATION_LIST}
            mapCenter={[MAP_LOCATION_LIST[0].lat, MAP_LOCATION_LIST[0].lon]}
            zoomNumber={16}
            mapClassName="absolute inset-x-center"
            mapSize="min-w-[20rem] md:min-w-[40rem] lg:w-mapXL h-mapSidePanelXL"
          />
          <MapInfoSidePanel
            mapContactInfo={LOCATION_DETAILS}
            businessHours={MAP_HOURS}
            textClassName="text-sm"
            h2ClassName="font-semibold  md:text-2xl"
            isMapInfoPanelOpen={isMapSidePanelVisible}
            panelButtonClassName="bg-brand-darkest"
            onMapOpen={openMapSidePanel}
            onMapClose={closeMapSidePanel}
          />
        </div>
      </div>
      <div id="contact" className="w-screen bg-zinc-100/80">
        <ContactForm />
      </div>
    </div>
  );
};

export default IndexPage;
