/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import clsx from "clsx";

import { PHARMACY } from "../../data/pharmacy/pharmacy";
import { Person } from "../components/UI/Person";
import { ContactLinkButton } from "../components/UI/ContactLinkButton";

/**
 * Renders the Pharmacy logo if there is one.
 */
const PharmacyLogo: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={PHARMACY.logo}
        className="object-contain"
        alt={`${PHARMACY.name} logo`}
      />
    </div>
  );
};

/**
 * Renders a Pharmacy card by using the Person component and looks like a business card.
 */
const PharmacyCard: React.FC = () => {
  return (
    <div
      className={clsx(
        "relative z-0 flex flex-col justify-between",
        "p-4 sm:p-6 rounded-lg overflow-hidden border-2",
        "bg-brand-darkest/10 border-brand-darkest/20"
      )}
    >
      <div className={clsx("flex justify-between items-center space-x-4")}>
        <div className="flex flex-col justify-center space-y-6 w-full">
          <Person name={PHARMACY.head.name} title={PHARMACY.head.title} />
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
            {PHARMACY.staff.map((person) => (
              <Person
                key={person.name + person.title}
                name={person.name}
                title={person.title}
              />
            ))}
          </div>
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row w-full sm:w-fit space-y-3 sm:space-y-0 sm:space-x-4">
              <ContactLinkButton phoneNumber={PHARMACY.phone} />
              <ContactLinkButton faxNumber={PHARMACY.fax} />
            </div>
          </div>
        </div>
        {PHARMACY.url && (
          <div className="hidden md:block p-1 pl-3 bg-white border-2 border-zinc-700 rounded-md overflow-hidden">
            <Link href={PHARMACY.url}>
              <a className="group flex flex-col items-center space-y-2">
                {PHARMACY.logo && <PharmacyLogo />}
                <div className="text-xs font-light text-brand-darkest no-underline group-hover:underline">
                  {PHARMACY.url}
                </div>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Renders the Pharmacy Page by displaying the PharmacyCard.
 */
const PharmacyPage: NextPage = () => {
  return (
    <>
      <div className="mx-auto p-14">
        <div className="w-1/2 mx-auto">
          <h1 className="text-4xl text-brand-darkest font-semibold pb-12">
            {PHARMACY.name}
          </h1>
          <PharmacyCard />
        </div>
      </div>
    </>
  );
};

export default PharmacyPage;
