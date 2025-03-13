import OurLocation from "@/app/components/OurLocations/OurLocation";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center text-gray-900">
      <div className="w-full max-w-[1347px]">
        <div className="p-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Credit Card Ticket Order Form
            </h2>
          </div>

          <div className="space-y-2">
            <p>
              To Fill this Online Form and sign with an electronic signature:
            </p>
            <ul className="list-decimal list-inside space-y-1">
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
              src="https://secure.rightsignature.com/templates/8a170f50-ebac-4c0f-a906-40090770ebfa/template-signer-link/4488048b8f6964c66e1df1f11cbad06a"
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
