import React from "react";
import Image from "next/image";
import Place_image from "../../assests/plane.png";
import Compare from "../../assests/compare.png";
import Customer_satisfaction from "../../assests/customer_satisfaction.png";

export default function Features() {
  return (
    <div className="py-20 ">
    <div
      className="w-full min-h-[450px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-5 sm:px-8 md:px-16 lg:px-24 rounded-3xl"
      style={{ backgroundImage: `url('/flight.jpg')` }} // Ensure image is in the public folder
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 min-h-[231px] w-[90%] sm:max-w-6xl">
        {/* Card 1 */}
        <div className=" bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center  sm:w-full">
          <img
            src={Place_image.src}
            className="w-[100px] h-auto"
            alt="flight"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#353535]">
            Save More on Top Flights
          </h3>
          <p className="text-gray-600">
            Fly smarter by comparing flights effortlessly to secure the best
            fares.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center  sm:w-full">
          <img src={Compare.src} className="w-[100px] h-auto" alt="flight" />
          <h3 className="text-xl font-semibold mb-2 text-[#353535]">
            Seamless Comparisons
          </h3>
          <p className="text-gray-600">
            Find the perfect flight with quick and easy price comparisons.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center text-center  sm:w-full">
          <img
            src={Customer_satisfaction.src}
            className="w-[100px] h-auto"
            alt="flight"
          />
          <h3 className="text-xl font-semibold mb-2 text-[#353535]">
            Trusted by Happy Travelers
          </h3>
          <p className="text-gray-600">
            Join countless satisfied customers who book with confidence and save
            more!
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
