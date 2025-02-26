"use client";

import Image from "next/image";
import Blog1 from "../../assests/blog1.jpg";
import Blog2 from "../../assests/blog2.jpg";
import Blog3 from "../../assests/blog3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useCallback, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";

const blogPosts = [
  {
    id: 1,
    title: "How to Get Cheap Flight Tickets to India",
    image: Blog1,
    description: "10 Busiest Indian Airports and Interesting Facts About Them",
  },
  {
    id: 2,
    title:
      "Best Time to Book Flights to India from USA: A Guide for Smart Travelers",
    image: Blog2,
    description: "7 Expert Tips to Sleep Comfortably on a Plane Seat",
  },
  {
    id: 3,
    title: "Booking Flights in Advance: The Smart Way to Travel",
    image: Blog3,
    description: "8 Must-Try Delicious Dishes from Street Foods in India",
  },
  {
    id: 4,
    title: "Booking Flights in Advance: The Smart Way to Travel",
    image: Blog3,
    description: "8 Must-Try Delicious Dishes from Street Foods in India",
  },
];

export default function OurBlogOffers() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  // Function to handle previous slide
  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  // Function to handle next slide
  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  // Function to update progress width
  const updateProgress = (swiper: SwiperType) => {
    const realIndex: number = swiper.realIndex ; // Default to 0 if undefined
    console.log(realIndex)
    const slidesPerView: number =
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1; // Ensure a number

    const totalSlides: number = swiper.slides.length;

    const progress: number = (realIndex + slidesPerView) * (100 / totalSlides); // Calculate progress

    setProgressWidth(progress);
  };
  return (
    <section className="py-12 p-5 bg-white">
      <div
        style={{ color: "#1C1C1C" }}
        className="w-full max-w-[1347px] mx-auto px-4 text-center"
      >
        <h2 className="text-5xl font-bold mb-6 font-garamond">
          Our Blogs Offers
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateProgress(swiper);
          }}
          onSlideChange={(swiper) => {
            updateProgress(swiper);
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
         
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1236: { slidesPerView: 3 },
          }}
          pagination={{ clickable: false }}
          className="w-[80vw] lg:max-w-screen-lg xl:max-w-[1347px] overflow-hidden"
        >
          {blogPosts.map((post) => (
            <SwiperSlide
              key={post.id}
              className="w-full h-full flex justify-center py-8"
            >
              <div className="w-full bg-white shadow-lg rounded-3xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover object-center"
                />
                <div className="p-5 w-full min-h-28">
                  <h3 className="text-left text-[20px] font-semibold">
                    {post.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-1/2 flex justify-between items-center pt-5 gap-2">
          <button
            onClick={handlePrev}
            className="bg-[#FFE4E4] w-14 h-14 flex items-center justify-center rounded-full"
          >
            <FontAwesomeIcon
              className="text-sm text-black"
              icon={faArrowLeft}
            />
          </button>
          <div className="w-1/2 lg:w-[90%]">
            <motion.div
              animate={{ width: `${progressWidth}%` }}
              transition={{ duration: 0.5 }}
              className={`h-[2px] rounded-xl  bg-[#FE0000]`}
            ></motion.div>
          </div>
          <button
            onClick={handleNext}
            className="bg-[#FFE4E4] w-14 h-14 flex items-center justify-center rotate-180 rounded-full"
          >
            <FontAwesomeIcon
              className="text-sm text-black"
              icon={faArrowLeft}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
