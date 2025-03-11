import OurLocation from "@/app/components/OurLocations/OurLocation";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center text-gray-900">
      <div className="w-full max-w-[1347px]">
        <div className="p-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Zelle Refund and Cancellation Form
            </h2>
          </div>

          <div>
            <p className="mb-4">
              <span className="block">
                → Prior to submitting this form, please make your payment from
                your bank via Zelle for the amount as instructed by your Alanita
                Travel agent. <br />→ Our Zelle ID is{" "}
                <span className="font-semibold">zelle@alanitatravel.com</span>.
                <br />→ Please make a note of the confirmation number from Zelle
                which needs to be entered on the below form.
              </span>
            </p>

            <p className="font-semibold">
              To Fill this Online Form and sign with an electronic signature:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
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

          <div className="mt-8 text-sm text-gray-400 w-full">
            <iframe
              frameBorder="0"
              height="600"
              width="100%"
              scrolling="yes"
              src="https://secure.rightsignature.com/templates/a9797b35-1e23-40f7-b3e3-7ecd7afda9c0/template-signer-link/7b4228245036b1622ed27cc98a3eb574"
              className="w-full border border-gray-300 rounded-md"
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
