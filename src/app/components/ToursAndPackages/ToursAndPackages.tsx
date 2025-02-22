import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1347px]">
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
         
            className="w-[90vw] md:w-[95.5vw] xl:w-full"
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
            className="w-full  xl:max-w-[584px] h-[445px] bg-no-repeat bg-cover bg-center object-cover rounded-3xl relative"
          ></div>
        </div>
      </div>
    </div>
  );
}
