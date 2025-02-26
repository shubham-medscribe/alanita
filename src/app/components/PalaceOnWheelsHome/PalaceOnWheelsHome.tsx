"use client";
import React, { useEffect, useState } from "react";
import Rope from "../../assests/rope.png";
import Image from "next/image";
import Train from "../../assests/train_gif.gif";
import Topic from "../../assests/topic.png";
import AlawayQatar from "../../assests/QatarAlways.jpg";
import { motion } from "motion/react";
import Qatar1 from "../../assests/qatar1.jpg";
import Qatar2 from "../../assests/qatar2.jpg";
import Qatar3 from "../../assests/qatar3.jpg";
import Qatar4 from "../../assests/qatar4.jpg";
export default function PalaceOnWheelsHome() {
  const images = [Qatar1, Qatar2, Qatar3, Qatar4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="w-full text-[#1C1C1C] space-y-9">
      <div className=" text-center font-garamond font-bold text-5xl">
        Palace On Wheels
      </div>
      <div className="flex justify-center w-full">
        <Image src={Rope} alt="rope" />
      </div>

      <div className="flex justify-center w-full">
        <div className="relative">
          <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-inter font-bold   text-[0.6em] xl:text-base w-fit">
            Click here for more info
          </div>
          <div className="flex justify-center">
            <Image src={Topic} className="w-[80%] h-auto xl:w-96" alt="topic" />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <Image src={Train} alt="train" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-4 ">
        {/* First image (static) */}
        <div className="w-full md:w-1/2">
          <img
            src={AlawayQatar.src}
            alt="Static Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Second div with fade effect */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img
            src={images[index].src}
            alt="Fading Image"
            className=" w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
