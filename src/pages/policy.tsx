import type { NextPage } from "next";

const Policy: NextPage = () => {
  return (
    <>
      <div className="w-mapXL mx-auto p-14">
        <h1 className="text-4xl text-red-900 font-serif font-semibold pb-12">
          The Clinic Policy
        </h1>

        <h2 className="text-xl text-red-900 font-semibold font-serif py-2">
          Every Visit
        </h2>
        <p className="text-lg pb-4 font-serif">
          Patient must bring and present a valid health card every visit. The
          government will not cover medical services without a valid heath card.
          A fee for the medical visit for none-OHIP patients must be paid prior
          to seeing the doctor. Official receipts are provided.
        </p>
        <h2 className="text-xl text-red-900 font-semibold font-serif py-2">
          Update your own information
        </h2>
        <p className="text-lg pb-4 font-serif">
          To serve you better patients must update their personal information
          including phone number /address and email address
        </p>
        <h2 className="text-xl text-red-900 font-semibold font-serif py-2">
          Phone call or Email
        </h2>
        <p className="text-lg pb-4 font-serif">
          We are unable to offer any medical advice or management over the phone
          or via email due to OHIP regulation and privacy conerns. Please
          contact us during the office hours and book an appointment with your
          doctor. Please note our phone does not take any messages. If you need
          immediate medical assistance, please go to the nearest hospital or
          call 911.
        </p>
        <h2 className="text-xl text-red-900 font-semibold font-serif py-2">
          Uninsured Service
        </h2>
        <p className="text-lg pb-4 font-serif">
          Not all medical services are covered by OHIP. Uninsured medical
          service and all third party requested forms are not covered by OHIP
          and will be charged to the patients. For example: sick notes,
          insurance forms, government forms, employment physicals, travel
          health, tray fee for procedure, etc.
        </p>
      </div>
    </>
  );
};

export default Policy;
