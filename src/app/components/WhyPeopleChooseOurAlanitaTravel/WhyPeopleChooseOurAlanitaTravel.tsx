import React from "react";
import Image from "next/image";
import SupportIcon from "../../assests/support.png";
import TranslateIcon from "../../assests/translate.png";
import AirplaneIcon from "../../assests/airplane.png";
import LowPriceIcon from "../../assests/low_price.png";
import AddressIcon from "../../assests/address.png";
import MemoriesIcon from "../../assests/memories.png";
import DollarIcon from "../../assests/dollar.png";
import WalkIcon from "../../assests/walk.png";

export default function WhyPeopleChooseOurAlanitaTravel() {
  const content = [
    {
      icon: SupportIcon,
      desc: "24/7 Personal Customer Service",
    },
    {
      icon: TranslateIcon,
      desc: "Multiple Languages Spoken (English, Hindi, Tamil, Telugu, Kannada)",
    },
    {
      icon: AirplaneIcon,
      desc: "Travel Industry Masters",
    },
    {
      icon: LowPriceIcon,
      desc: "Offering Lowest Fares in the Market",
    },
    {
      icon: AddressIcon,
      desc: "Offices in USA and India",
    },
    {
      icon: MemoriesIcon,
      desc: "Long term reliability from over 30 years of services",
    },
    {
      icon: DollarIcon,
      desc: "Easy and Secure Payment Gateway",
    },
    {
      icon: WalkIcon,
      desc: "Walk in to any branch for instant flight booking or book it online anytime",
    },
  ];

  return (
    <div className="w-full text-black space-y-8 p-5">
      <div className="space-y-2">
        <h1 className="text-[37px] font-garamond font-bold">
          People why choose our Alanita Travel
        </h1>
        <p className="text-[17px] font-inter font-light">
          People choose Alanita Travel for seamless flight bookings from the USA
          to India at unbeatable prices. With exceptional customer service,
          exclusive deals, and a hassle-free booking process, we ensure a smooth
          travel experience. Trust Alanita Travel for your next journey!
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-5">
        {/* card */}
        {content.map((key, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-full lg:w-[406px] h-[108px] font-inter font-medium flex items-center justify-center gap-3 rounded-3xl border-transparent transition-all duration-200 hover:bg-[#FFEBEB] border hover:border-[#FF0000] shadow-lg p-5"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={key.icon}
                  className="w-[48px] h-auto object-cover object-center"
                  alt=""
                />
              </div>
              <div className="w-full flex items-center h-full text-base md:text-[18px]">
                {key.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
