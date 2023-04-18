import { PhoneIcon, PrinterIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export interface CommonContactLinkButtonProps {
  name?: string;
}

export interface PhoneLinkButtonProps extends CommonContactLinkButtonProps {
  phoneNumber: string;
  faxNumber?: never;
}

export interface FaxLinkButtonProps extends CommonContactLinkButtonProps {
  phoneNumber?: never;
  faxNumber: string;
}

type DiscriminationProps = PhoneLinkButtonProps | FaxLinkButtonProps;

export type ContactLinkButtonProps = DiscriminationProps;

const linkButtonClassName = clsx(
  "group px-3 sm:px-5 py-3 border-2 rounded-md",
  "inline-flex items-center justify-center",
  "transition-bg duration-200",
  "cursor:pointer bg-brand-darkest/10 hover:bg-brand-darkest/30",
  "border-brand-darkest/30 hover:border-brand-darkest/40",
  "font-medium no-underline hover:no-underline"
);

const PhoneLinkButton: React.FC<PhoneLinkButtonProps> = ({
  phoneNumber,
  name,
}) => (
  <a
    href={`tel:${phoneNumber}`}
    title={name ? `Phone ${name}` : undefined}
    className={linkButtonClassName}
  >
    <PhoneIcon className="w-5 h-5 text-brand-darkest" aria-hidden="true" />
    <div className="sr-only">Phone Number:</div>
    <div className="ml-3 my-0.5 text-sm text-brand-darkest group-hover:text-brand-darkest">
      {phoneNumber}
    </div>
  </a>
);

const FaxLinkButton: React.FC<FaxLinkButtonProps> = ({ faxNumber, name }) => (
  <a
    href={`tel:${faxNumber}`}
    title={name ? `Fax ${name}` : undefined}
    className={linkButtonClassName}
  >
    <PrinterIcon className="w-5 h-5 text-brand-darkest" aria-hidden="true" />
    <div className="sr-only">Fax Number:</div>
    <div className="ml-3 my-0.5 text-sm text-brand-darkest group-hover:text-brand-darkest">
      {faxNumber}
    </div>
  </a>
);

export const ContactLinkButton: React.FC<ContactLinkButtonProps> = ({
  name,
  phoneNumber,
  faxNumber,
}: ContactLinkButtonProps) => {
  if (phoneNumber) {
    return <PhoneLinkButton phoneNumber={phoneNumber} name={name} />;
  }

  if (faxNumber) {
    return <FaxLinkButton faxNumber={faxNumber} name={name} />;
  }

  return null;
};
