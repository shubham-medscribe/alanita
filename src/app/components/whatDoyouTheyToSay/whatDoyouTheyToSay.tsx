"use client";
import React from "react";
import Image from "next/image";

//local modules

import GoogleRating from "../../assests/googleRating.png";
import ThirtyOneyear from "../../assests/31 Gif.gif";
import Quotation_one from "../../assests/quation_1.svg";
import Quotation_two from "../../assests/quation_2.svg";
import Info from "../../info.json";
//sweeper js modules

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowLeft,
  faArrowsLeftRight,
} from "@fortawesome/free-solid-svg-icons";

export default function WhatDoyouTheyToSay() {
  const PROGRESS_BAR_COLOR = Info.home_page_button_color;
  const cards = [
    {
      title: "Card 1",
      name: "Jhon Doe",
      desc: "“ I found many vacation experiences using their services. The tour guide is also good so you won't regret it if you use ”",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-full py-10 px-5 space-y-5">
      <div className="text-black">
        <h1 className="text-[45px] font-bold font-garamond">
          What do you they say?
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center 2xl:justify-between gap-10">
        <div className="flex items-center justify-center relative">
          <div className="w-[95dvw] sm:w-96 h-auto 2xl:w-[548px] 2xl:h-[246px]">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              className="w-full h-full shadow-xl rounded-2xl"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    /*   whileHover={{ scale: 1.05 }} */
                    /*  whileTap={{ scale: 0.95 }} */
                    className="w-full h-full text-black flex flex-col gap-3 justify-between border border-[#E2E2E2] rounded-2xl  p-5 2xl:p-8 relative"
                  >
                    <Image
                      src={Quotation_two}
                      alt="Quote"
                      className="w-12 h-12 sm:w-16 sm:h-16 absolute top-0 right-0
                    -translate-y-1/2 translate-x-1/2"
                    />

                    <div>
                      <p className="text-[#344E41] font-light max-h-36 text-[1em] 2xl:text-2xl leading-7 sm:leading-7  lg:leading-6 xl:leading-7 font-poppins opacity-[80%]">
                        {card.desc}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-4">
                      <figure>
                        <img
                          className="h-[52px] w-[52px] object-cover object-center rounded-full"
                          src={card.img}
                        />
                      </figure>
                      <span>{card.name}</span>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="w-full flex justify-between  items-center pt-5 gap-2">
              <button className="bg-[#FFE4E4] w-10 h-10 flex items-center justify-center  rounded-full">
                <FontAwesomeIcon
                  className="text-sm text-black"
                  icon={faArrowLeft}
                />
              </button>
              <div className="w-[90%]">
                <div
                  className={`h-[1px] rounded-xl w-[50%] bg-[#FE0000]`}
                ></div>
              </div>
              <button className="bg-[#FFE4E4] w-10 h-10 flex items-center justify-center rotate-180  rounded-full">
                <FontAwesomeIcon
                  className="text-sm text-black"
                  icon={faArrowLeft}
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex items-center   justify-center">
          <div className="shadow-lg rounded-xl w-[220px] h-[195px] flex items-center justify-center">
            <figure>
              <Image
                src={GoogleRating}
                alt="Logo"
                className="object-cover object-center w-[206px] h-auto  rounded-xl"
                priority
              />
            </figure>
          </div>
        </div>
        <div className="">
          <div className=" w-full xl:w-[450px]  2xl:max-w-[533px] h-auto  flex items-center justify-center">
            <figure>
              <Image
                src={ThirtyOneyear}
                alt="Logo"
                className="object-cover object-center w-full h-auto"
                priority
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
