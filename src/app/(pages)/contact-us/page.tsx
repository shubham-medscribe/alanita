import OurLocation from "@/app/components/OurLocations/OurLocation";
import PageView from "@/app/components/PageView/PageView";
import React from "react";

export default function page() {
  return (
    <>
      <PageView title={"Contact Us"} content={"Home | Contact Us"} />
      <div className="w-full flex justify-center text-[#777984] font-inter">
        <div className="w-[1347px] p-5 space-y-8">
          {/* Title */}
          <div className="font-garamond font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#17233e] text-center">
            RESERVATION REQUEST BY EMAIL
          </div>

          <div className="w-full flex justify-center">
            <ol className="list-decimal space-y-1 max-w-3xl">
              <li>
                Please include your travel request, as well as your phone number
                and send an email to the following email address :{" "}
                <a
                  href="mailto:alanita@alanitatravel.net"
                  className="hover:underline font-bold"
                >
                  <span>alanita@alanitatravel.net</span>
                </a>
              </li>

              <li>
                Upon receiving your Email we will call you at the phone number
                you provided to us.
              </li>
            </ol>
          </div>

          <div className="text-center text-[1em] xl:text-2xl space-y-2 py-5 font-bold bg-[#F1F1F1] rounded-3xl">
            <p className="text-[#17233e]">
              TOLL FREE NUMBER :{" "}
              <span className="text-[#FF0000]">888 465 4282</span>
            </p>
            <p className="text-[#17233e] ">
              COMPANY EMAIL ID :{" "}
              <a
                href="mailto:alanita@alanitatravel.net"
                className=" font-bold text-[#FF0000]"
              >
                alanita@alanitatravel.net
              </a>
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <p>
              Alanita Travel agents provide the highest standard of excellent
              customer service and will find you cheap tickets to India.
            </p>

            <p>
              Email is the best way to request reservations. By emailing us, you
              can include the exact dates of travel, the passenger(s) exact name
              spelling(s) and any special requirements.
            </p>

            <p>
              Always include your phone number(s); after reviewing your request,
              we will respond to your request by telephone only. When your email
              is received, an Alanita Travel agent will call you in the order
              that the messages are received. Our official email address is{" "}
              <a
                href="mailto:alanita@alanitatravel.net"
                className="text-[#777984] font-bold hover:text-[#FF0000] underline"
              >
                alanita@alanitatravel.net
              </a>
            </p>

            <p>
              If you prefer to contact us by phone, please call us at{" "}
              <a
                href="tel:+16179234810"
                className="text-[#777984] font-bold hover:text-[#FF0000] underline"
              >
                1-617-923-4810
              </a>{" "}
              or{" "}
              <a
                href="tel:+18884654282"
                className="text-[#777984] font-bold hover:text-[#FF0000] underline"
              >
                1-888-465-4282
              </a>
              . A receptionist at Alanita Travel will take your contact
              information and have an agent call you back in the order in which
              it was received. We do our best to return your call within 30
              minutes*.
            </p>

            <p>
              Please contact an Alanita Travel Agent today for the lowest fares
              from the USA to India!
            </p>

            {/* Disclaimer */}
            <p className="text-sm text-[#999]">
              *Call back time-frame may change during peak travel seasons or due
              to heavy call volume. It is recommended that the customer emails
              us at{" "}
              <a
                href="mailto:alanita@alanitatravel.net"
                className="text-[#777984] font-bold hover:text-[#FF0000] underline"
              >
                alanita@alanitatravel.net
              </a>
              .
            </p>
          </div>
          {/*    location */}
          <div className="w-full max-w-[1347px] py-5">
            <OurLocation />
          </div>
        </div>
      </div>
    </>
  );
}
