import OurLocation from "@/app/components/OurLocations/OurLocation";
import React from "react";

export default function page() {
  return (
    <>
    
    <div className="w-full flex flex-col items-center text-gray-900">
     
      <div className="w-full max-w-[1347px]">
        <div className="container mx-auto p-4">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Backup Credit Card Ticket Order Form
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
              src="https://secure.rightsignature.com/templates/b8679373-d73b-4910-b372-3ebf712e49db/template-signer-link/a5e3e37d3e8fb6bbc77097421c7c598c"
              className="w-full h-[800px] border border-gray-300 rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1347px]">
        <OurLocation />
      </div>
    </div>
    </>
  );
}
