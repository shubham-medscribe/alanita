import React from "react";
import Info from "../../info.json";
export default function AboutUs() {
  const ABOUT_US_BADGE_COLOR = Info.about_us_badge_color;
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* About Us Badge */}
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-span-2 flex justify-center items-center bg-red-700"></div>
        <div className="col-span-4 flex flex-col justify-between">
          <span
            style={{ backgroundColor: ABOUT_US_BADGE_COLOR }}
            className="w-fit py-2 px-4 rounded-lg text-sm text-black block"
          >
            About us
          </span>
        </div>
      </div>
    </section>
  );
}
