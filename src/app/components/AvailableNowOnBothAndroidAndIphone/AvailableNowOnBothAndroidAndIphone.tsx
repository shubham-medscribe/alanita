"use client"
import Image from "next/image";
import React from "react";
import QR from "../../assests/qr.png";
import GooglePlay from "../../assests/googlePlay.png";
import AppleStore from "../../assests/appleStore.png";
import Info from "../../info.json";
export default function AvailableNowOnBothAndroidAndIphone() {
  const commonStyles = "flex items-center justify-center";

  return (
    <div className="w-full flex justify-center p-5">
    <div className="w-full max-w-[1347px] py-20 flex justify-center">
      <div className="w-full border border-[#FE0000] p-5 rounded-3xl">
        <div
          className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-col-4  gap-8 lg:grid-cols-[256px_auto_308px] xl:lg:grid-cols-[256px_auto_508px] lg:gap-0 xl:gap-0 text-black"
        >
          <div className={commonStyles}>
            <Image src={QR} alt="QR Code" className="w-full h-auto" />
          </div>

          <div className={`${commonStyles} flex-col xl:flex-row gap-3  lg:gap-10`}>
            <Image src={GooglePlay} alt="Google Play" className="w-[20em] xl:w-[256px] h-auto" />
            <Image src={AppleStore} alt="Apple Store" className="w-[20em] xl:w-[256px] h-auto" />
          </div>

          <div className={"flex justify-center items-center sm:col-span-2 lg:col-span-1"}>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-inter font-bold lg:leading-[44.78px]">
              Available now on
              <br /> both Android and iPhone
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
