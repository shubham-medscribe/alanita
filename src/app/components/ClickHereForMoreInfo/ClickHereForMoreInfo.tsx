import React from "react";
import Rope from "../../assests/rope.png";
import Image from "next/image";
import Train from "../../assests/train_gif.gif";
import Topic from "../../assests/topic.png";
import { motion } from "motion/react";
export default function ClickHereForMoreInfo() {
  return (
    <>
      <div className="space-y-9">
        <div className=" text-center font-garamond font-bold text-4xl lg:text-5xl">
          Palace On Wheels
        </div>
        <div className="flex justify-center w-full">
          <Image src={Rope} alt="rope" />
        </div>

        <div className="flex justify-center w-full">
          <div className="relative">
            <div
              onClick={() => window.alert("Work in progress for this page")}
              className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-inter font-bold   text-[0.6em] sm:text-base md:text-base lg:text-base xl:text-base w-fit"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                Click here for more info
              </motion.span>
            </div>
            <div className="flex justify-center">
              <Image
                src={Topic}
                className="w-[80%] sm:w-96 h-auto xl:w-96"
                alt="topic"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Image src={Train} className="w-[100vw] h-auto" alt="train" />
        </div>
      </div>
    </>
  );
}
