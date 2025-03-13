import OurLocation from "@/app/components/OurLocations/OurLocation";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center text-gray-900">
      <div className="w-full max-w-[1347px]">
        <div className=" p-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Zelle Ticket Order Form
            </h2>
          </div>

          <div className="space-y-2">
            <p>
              Prior to submitting this form, please make your payment from your
              bank via Zelle for the amount as instructed by your Alanita Travel
              agent.
            </p>
            <p className="font-semibold">
              Our Zelle ID is{" "}
              <span className="text-blue-500">zelle@alanitatravel.com</span>
            </p>
            <p>
              Please make a note of the confirmation number from Zelle which
              needs to be entered on the below form.
            </p>
            <p className="font-semibold">
              To Fill this Online Form and sign with an electronic signature:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Enter your Name and Email to start your document process.</li>
              <li>
                Please read and review the Rules, Terms & Conditions before
                submission of this Online form.
              </li>
              <li>
                After submission, this form will be automatically returned to
                Alanita Travel Inc.{" "}
                <span className="font-semibold">
                  &lt;alanita@alanitatravel.net&gt;
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 w-full">
            <iframe
              frameBorder="0"
              height="800"
              width="100%"
              scrolling="yes"
              src="https://secure.rightsignature.com/templates/38901020-7448-48bb-8ae3-42d7f4231303/template-signer-link/1d1429bb458e78021927ab47196d1ca8"
              className="w-full h-[800px] border border-gray-300 rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1347px]">
        <OurLocation />
      </div>
    </div>
  );
}
