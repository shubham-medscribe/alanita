import React from "react";

export default function PageView({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="w-full pb-5 relative">
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdl&fit=crop")`,
        }}
        className="min-h-[300px] w-full flex flex-col items-center bg-center bg-cover pt-24 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col justify-center items-center py-5 relative z-10">
          <h1 className="capitalize font-garamond text-[8vw] lg:text-7xl font-bold text-white">
            {title}
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="font-inter font-normal text-[3.4vw] lg:text-[28px] text-white">
              <span className="text-[#FF0000]">{content.split("|")[0]}</span>
              <span>|</span>
              <span>{content.split("|")[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
