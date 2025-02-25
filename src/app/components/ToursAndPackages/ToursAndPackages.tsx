import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GroupStar from "../../assests/group_stars.png";
import Image from "next/image";
import Location from "../../assests/location.png";
import Dollar from "../../assests/dollar_red.png";
import Line from "../../assests/Line 1.png";
import Clock from "../../assests/clock_red.png";
import People from "../../assests/people_red.png";
import RightArrow from "../../assests/right-arrow.png";
export default function ToursAndPackages() {
  const destination = [
    {
      name: "Qatar",
      image: "/qatar.jpg",
    },
    {
      name: "Dubai",
      image: "/dubai.jpg",
    },
    {
      name: "Abu Dhabi",
      image: "/abudhabi.jpg",
    },
    {
      name: "Abu Dhabi",
      image: "/abudhabi.jpg",
    },
    {
      name: "Abu Dhabi",
      image: "/abudhabi.jpg",
    },
  ];

  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[1347px]">
        <div style={{color:"#1C1C1C"}} className="w-full flex flex-col items-center justify-center py-8">
          <h1 className="text-4xl font-garamond font-bold">Tours & Packages</h1>
          <h3 className="text-[1em] text-center md:text-[21px] font-inter font-medium">Explore exciting tours and packages with Alanita Travel!</h3>
        </div>
        <div className="w-full flex-col xl:flex-row flex gap-3 overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1} // Show part of the next slide
            breakpoints={{
              380: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-[90vw] md:w-[95.5vw] xl:max-w-screen-md"
          >
            {destination.map((item: Record<string, any>, index: number) => {
              return (
                <SwiperSlide
                  className="w-[45vw] sm:w-[229px] lg:w-full"
                  key={index}
                >
                  <div
                    key={item.name}
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="w-full  h-[445px] bg-no-repeat bg-cover bg-center object-cover overflow-hidden rounded-3xl flex items-center justify-center relative"
                  >
                    {/* Rotated Text */}
                    <span
                      style={{
                        textShadow: "2px 5px 4px rgba(0, 0, 0, 0.9)", // Adds a soft shadow
                        color: "white", // Ensures visibility on dark backgrounds
                      }}
                      className="absolute left-7 bottom-5 -rotate-90 origin-left text-lg font-semibold "
                    >
                      {item.name}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            style={{ backgroundImage: `url("/turkey.jpg")` }}
            className="w-full p-1 sm:p-3 flex items-end  xl:max-w-[584px] h-[445px] bg-no-repeat bg-cover bg-center object-cover rounded-3xl text-black"
          >
            <div className="w-full flex flex-wrap justify-between  sm:flex-nowrap sm:flex-row h-fit sm:h-[133px] gap-3 p-5 bg-white bg-opacity-90 rounded-3xl">
              <div className="flex flex-col justify-between w-fit xl:w-1/2 ">
                <div>
                  <Image
                    src={GroupStar}
                    alt="stars"
                    className="w-[120px] h-6"
                  />
                </div>
                <div className="font-inter font-bold  sm:text-[25px]">
                  Turkey
                </div>
                <div className="text-[#1c1c1c] text-[13px]">
                  Lorem Ipsum is simply dummy text of the printing
                </div>
              </div>
              <div className="flex flex-col h-auto gap-2 sm:gap-0 justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={Location}
                      alt="location"
                      className="w-[16px] h-[16px]"
                    />
                    <span className="text-[10px]">
                      Lorem Ipsum is simply dummy text
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image
                      src={Dollar}
                      alt="dollar"
                      className="w-[16px] h-[16px]"
                    />
                    <span className="text-[10px]">
                      From{" "}
                      <span
                        style={{ color: "#FF0003" }}
                        className="text-[10px]"
                      >
                        $1500
                      </span>
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Image src={Line} alt="location" className="w-[208px]" />
                </div>
                <div className="flex gap-5">
                  <Image src={Clock} alt="clock" className="w-[16px] h-auto" />
                  <Image
                    src={People}
                    alt="people"
                    className="w-[16px] h-auto"
                  />
                </div>
              </div>
              <div className="flex items-end h-auto">
                <div
                  style={{ backgroundColor: "#FFBDBD" }}
                  className="flex gap-3 items-center py-2 px-5 rounded-3xl"
                >
                  <span className="text-[10px]">Explore</span>
                  <Image
                    src={RightArrow}
                    alt="right_arrow"
                    className="w-[13px] h-[13px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
