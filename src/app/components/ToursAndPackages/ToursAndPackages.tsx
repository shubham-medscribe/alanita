"use client";
import React, { useState } from "react";
import GroupStar from "../../assests/group_stars.png";
import Image from "next/image";
import Location from "../../assests/location.png";
import Dollar from "../../assests/dollar_red.png";
import Line from "../../assests/Line 1.png";
import Clock from "../../assests/clock_red.png";
import People from "../../assests/people_red.png";
import RightArrow from "../../assests/right-arrow.png";
import { motion } from "motion/react";

export default function ToursAndPackages() {
  const destination = [
    {
      id: 0,
      name: "Qatar",
      image: "/qatar.jpg",
    },
    {
      id: 1,
      name: "Dubai",
      image: "/dubai.jpg",
    },
    {
      id: 2,
      name: "Abu Dhabi",
      image: "/abuDhabi.jpg",
    },
  ];

  type Destination = {
    id: number;
    name: string;
    image: string;
  };

  const [shrink, setShrink] = useState<Boolean>(false);

  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[1347px]">
        <div
          style={{ color: "#1C1C1C" }}
          className="w-full flex flex-col items-center justify-center pb-8"
        >
          <h1 className="text-4xl font-garamond font-bold">Tours & Packages</h1>
          <h3 className="text-[1em] text-center md:text-[21px] font-inter font-medium">
            Explore exciting tours and packages with Alanita Travel!
          </h3>
        </div>
        <div
          onMouseEnter={() => {
            setShrink(false);
          }}
          className="w-full flex-col xl:flex-row hidden 2xl:flex gap-3 "
        >
          {destination.map(
            (item: { id: number; name: string; image: string }) => {
              return (
                <Animate
                  setShrink={(val: boolean) => setShrink(val)}
                  name={item.name}
                  image={item.image}
                  key={item.id}
                />
              );
            }
          )}

          <motion.div
            initial={{ width: "584px" }}
            animate={{ width: !shrink ? "584px" : "229px" }}
            style={{ backgroundImage: `url("/turkey.jpg")` }}
            className=" relative group w-[229px] origin-center  p-1 sm:p-3 flex items-end  h-[445px] bg-no-repeat bg-cover bg-center object-cover rounded-3xl text-black"
          >
            {/* Rotated Text */}
            <motion.span
              animate={{
                opacity: !shrink ? "0" : "1",
                visibility: !shrink ? "hidden" : "visible",
              }}
              transition={{ delay: 1 }}
              style={{
                textShadow: "2px 5px 4px rgba(0, 0, 0, 0.9)", // Adds a soft shadow
                color: "white", // Ensures visibility on dark backgrounds
              }}
              className=" absolute left-7 bottom-5 -rotate-90 origin-left text-lg font-semibold z-10"
            >
              {"Turkey"}
            </motion.span>
            <motion.div
              animate={{ opacity: shrink ? "0" : "1" }}
              className="transition-all duration-300   flex flex-wrap justify-between  sm:flex-nowrap sm:flex-row h-fit sm:h-[133px] gap-3 p-5 bg-white bg-opacity-90 rounded-3xl overflow-hidden"
            >
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
            </motion.div>
          </motion.div>
        </div>

        <div className="grid 2xl:hidden grid-cols-1 lg:grid-cols-2 gap-3">
          {destination.map((destination: Destination) => {
            return (
              <TourNoneAnimateCard
                key={destination.id}
                image={destination.image}
              />
            );
          })}
          <TourNoneAnimateCard />
        </div>
      </div>
    </div>
  );
}

function Animate({
  setShrink,
  name,
  image,
}: {
  setShrink: Function;
  name: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ width: "560px" }}
      onHoverStart={() => setShrink(true)}
      onHoverEnd={() => setShrink(false)}
      style={{ backgroundImage: `url("${image}")` }}
      className="relative group w-[229px] origin-center  p-1 sm:p-3 flex items-end  h-[445px] bg-no-repeat bg-cover bg-center object-cover rounded-3xl text-black"
    >
      {/* Rotated Text */}
      <span
        style={{
          textShadow: "2px 5px 4px rgba(0, 0, 0, 0.9)", // Adds a soft shadow
          color: "white", // Ensures visibility on dark backgrounds
        }}
        className="group-hover:opacity-0  absolute left-7 bottom-5 -rotate-90 origin-left text-lg font-semibold z-10"
      >
        {name}
      </span>
      <motion.div className="invisible transition-all duration-300  group-hover:visible opacity-0 group-hover:opacity-100 flex flex-wrap justify-between  sm:flex-nowrap sm:flex-row h-fit sm:h-[133px] gap-3 p-5 bg-white bg-opacity-90 rounded-3xl overflow-hidden ">
        <div className="flex flex-col justify-between w-fit xl:w-1/2 ">
          <div>
            <Image src={GroupStar} alt="stars" className="w-[120px] h-6" />
          </div>
          <div className="font-inter font-bold  sm:text-[25px]">Turkey</div>
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
              <Image src={Dollar} alt="dollar" className="w-[16px] h-[16px]" />
              <span className="text-[10px]">
                From{" "}
                <span style={{ color: "#FF0003" }} className="text-[10px]">
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
            <Image src={People} alt="people" className="w-[16px] h-auto" />
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
      </motion.div>
    </motion.div>
  );
}

function TourNoneAnimateCard({ image = "./turkey.jpg" }: { image?: string }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="group relative origin-center  p-1 sm:p-3 flex items-end  h-[445px] bg-no-repeat bg-cover bg-center object-cover rounded-3xl text-black"
    >
      <motion.div className=" transition-all duration-100  flex flex-wrap justify-between  sm:flex-nowrap sm:flex-row h-fit sm:h-[133px] gap-3 p-5 bg-white bg-opacity-90 rounded-3xl overflow-hidden w-full">
        <div className="flex flex-col justify-between w-fit xl:w-1/2 ">
          <div>
            <Image src={GroupStar} alt="stars" className="w-[120px] h-6" />
          </div>
          <div className="font-inter font-bold  sm:text-[25px]">Turkey</div>
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
              <Image src={Dollar} alt="dollar" className="w-[16px] h-[16px]" />
              <span className="text-[10px]">
                From{" "}
                <span style={{ color: "#FF0003" }} className="text-[10px]">
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
            <Image src={People} alt="people" className="w-[16px] h-auto" />
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
      </motion.div>
    </div>
  );
}
