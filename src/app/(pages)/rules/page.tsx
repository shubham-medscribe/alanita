import OurLocation from "@/app/components/OurLocations/OurLocation";
import { rules, rules1 } from "../../constants/rules";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PageView from "@/app/components/PageView/PageView";

export default function page() {
  return (
    <>
      <PageView
        title={"Rules & Regulations"}
        content={"Home | Rules & Regulations"}
      />
      <div className="w-full flex justify-center text-gray-900 font-inter">
        <div className="w-[1347px] p-5">
          <div className="space-y-2">
            <h1 className="font-garamond font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Airlines Rules & Restrictions{" "}
              <span className="text-red-600">Alanita Travel</span>
            </h1>

            <div className="space-y-1 text-[#777984]">
              {rules.map((rule: string, index: number) => (
                <p key={index}>
                  <FontAwesomeIcon
                    className="text-red-600"
                    icon={faJetFighter}
                  />
                  &nbsp; {rule}
                </p>
              ))}
            </div>

            <div className="w-full py-5 space-y-3">
              {rules1.map((rule: Record<string, string>, index: number) => (
                <div className="space-y-3" key={index}>
                  <h3 className="text-3xl font-bold font-garamond text-[#17233e]">
                    {rule.heading}
                  </h3>
                  <p className="text-[#777984]">{rule.paragraph}</p>
                </div>
              ))}
            </div>

            <div className="w-full py-5 space-y-3">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold font-garamond text-[#17233e]">
                  Privacy
                </h3>
                <p className="text-[#777984]">
                  {"Please review our Privacy Policy."}
                </p>
                <p className="text-[#777984]">
                  {
                    "*While we try to make sure that all rules/conditions/policies posted here are upto-date/accurate at all times,still we are not responsible for the typographical and other errors that may appear on this page and all other section on this website."
                  }
                </p>
                <p className="text-center text-[#777984] pt-10">
                  {
                    "⋘⋯ The above Ticket Information/Rules will be applicable to/for all the Passengers, effectively once the Ticket(s) are Issued ⋯⋙"
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1347px] py-5">
            <OurLocation />
          </div>
        </div>
      </div>
    </>
  );
}
