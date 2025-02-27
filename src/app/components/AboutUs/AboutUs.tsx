import React from "react";
import Info from "../../info.json";
import YouTube from "react-youtube";
export default function AboutUs() {
  const ABOUT_US_BADGE_COLOR = Info.about_us_badge_color;

  return (
    <section className="w-full pt-10  xl:py-12 text-black px-5">
      <div
        className="w-full   lg:p-0 flex flex-col gap-6 lg:grid lg:gap-12 lg:min-h-[369px]"
        style={{ gridTemplateColumns: "376px auto" }}
      >
        <div className="flex justify-center items-center rounded-3xl h-[75vw] lg:w-full lg:h-[369px] overflow-hidden">
          
            <YouTube videoId="pYSM8L0sZsw" className="h-full  w-full"   opts={{ height: "100%", width: "100%" }}/>
        
        </div>

        <div className="gap-3  flex flex-col xl:justify-between">
          <div
            style={{ backgroundColor: ABOUT_US_BADGE_COLOR }}
            className="w-fit font-inter text-2xl py-2 px-6 rounded-lg text-black"
          >
            About us
          </div>

          <div>
            <h1 className="font-garamond text-[2em] xl:text-[55px] font-bold">
              Introduction Alanita Travel
            </h1>
          </div>

          <div className="pb-5">
            <p className=" font-inter text-[1em] lg:text-xl xl:text-[22px] font-[300] ">
              Alanita Travel® is a leading travel company that specializes in
              providing its customers with the lowest possible airline fares for
              travel between the United States and India. Since it was founded
              in 1994 by Madras-born Anita Gray, our friendly and professional
              staff has helped tens of thousands of satisfied customers and has
              become the largest company in the United States specializing in
              flights from the United States to India. Our success has been a
              result of our competitive prices and industry-renowned customer
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full gap-6  lg:p-0 flex flex-col lg:grid grid-cols-[376px_auto] lg:grid-cols-[auto_376px] xl:gap-12 lg:min-h-[369px]">
        {/* Red Box (Moves to Right on xl) */}
        <div className="order-1 lg:order-2 flex justify-center items-center  rounded-3xl xl:w-full h-[75vw]  lg:h-[369px] overflow-hidden">
        <YouTube videoId="a4bnSxZxNFU" className="h-full  w-full"   opts={{ height: "100%", width: "100%" }}/>
        </div>

        {/* Text Content (Moves to Left on xl) */}
        <div className="order-2 lg:order-1  ">
          {/* Paragraph */}
          <div className="xl:pb-5 flex items-center h-full">
            <div className="font-inter text-[1em] lg:text-xl xl:text-[22px]  space-y-3 font-[300]">
              <p>
                Anita Gray and Alan Teig - the founders and owners of Alanita
                Travel®, focus every day on meeting the specific needs of their
                clients; to get the lowest airline fares to India and to receive
                the best personal service. With the name of the company
                combining their names, {"Al + Anita"} they take pride in
                developing and leading a professional team dedicated to
                providing their clients with the best flights at the best rate.
              </p>
              <p>
                Once you have browsed our website for sale fares, please give us
                a call at
              </p>
              <p>
                <span className="underline">1-888-465-4282</span> or send us an
                email at alanita@alanitatravel.net and allow us the opportunity
                to earn your business. Whether on the phone or online, the best
                fares all the time, Alanita Travel!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
