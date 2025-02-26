"use client";
import React from "react";
import Image from "next/image";
import PlaceOnWheel from "../../assests/place-on-wheel.png";
import Map from "../../assests/map.png";
import Delhi from "../../assests/delhi.png";
import PlaceOnWeel from "../../constants/PlaceOnWheel";

export default function Placeonwheel() {
  return (
    <div className="w-full flex justify-center text-[#1C1C1C] h-fit">
      <div className="max-w-screen-2xl  overflow-hidden flex flex-col items-center">
        <div className="w-full">
          <Image
            src={PlaceOnWheel}
            className="w-full h-auto object-cover"
            alt="place-on-wheel"
          />
        </div>

        <div className="w-full max-w-screen-xl  p-5">
          {/*    map & description */}
          <div className="w-full lg:min-w-[630px] min-h-[326px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={Map}
                className="w-full h-full object-contain"
                alt="place-on-wheel"
              />
            </div>
            <div className="font-semibold font-inter flex flex-col items-center justify-center gap-3">
              <p>
                Step aboard one of the world’s most luxurious trains and explore
                Rajasthan’s majestic landscapes.
              </p>
              <p>
                From Jaipur’s regal palaces to Jaisalmer’s golden dunes, every
                stop is a royal adventure.
              </p>
              <p>
                Enjoy breathtaking safaris, camel rides, and grand cultural
                performances. Indulge in world-class hospitality while dining on
                gourmet Indian delicacies. Witness architectural wonders,
                including the Taj Mahal’s timeless beauty. This isn’t just a
                trip—it’s a royal experience on wheels!
              </p>
            </div>
          </div>

          {/*  Day-1 wednesday */}
          <div className="w-full lg:min-w-[630px] min-h-[515px] grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="w-full">
              <Image
                src={Delhi}
                className="w-full h-[515px] object-center object-contain xl:object-fill"
                alt="place-on-wheel"
              />
            </div>
            <div className="font-semibold font-inter flex flex-col items-center  gap-3">
              <p>
                Tour starts in the evening with a ceremonial welcome aboard the
                Palace on Wheels at Safdarjung, New Delhi. You will be treated
                like a Maharaja and Maharani (king and queen). The capital city
                of modern India, Delhi is known for its rich and exotic history.
              </p>
              <p>
                Feel free to explore your new palace, and acquaint yourself with
                its various facilities. Relax with a drink at the bar. Dinner
                will be served on board.
              </p>

              <div className="w-full">
                <Table data={PlaceOnWeel.wednesday.table} />
              </div>
            </div>
          </div>

          {/*  Day-2 - thursday */}

          <TableWithTwoImages
            data={PlaceOnWeel.thursday.table}
            images={PlaceOnWeel.thursday.images}
            desc={PlaceOnWeel.thursday.desc}
            day="day 2 - thurday"
          />

          {/*   Day-3 - Friday */}
          <TableWithTwoImages
            data={PlaceOnWeel.friday.table}
            images={PlaceOnWeel.friday.images}
            desc={PlaceOnWeel.friday.desc}
            day=""
            order={false}
          />

          {/*   Day-4 - Saturday */}
          <TableWithTwoImages
            data={PlaceOnWeel.saturday.table}
            images={PlaceOnWeel.saturday.images}
            desc={PlaceOnWeel.saturday.desc}
            day="Day 4 - Saturday"
          />

          {/*   Day-5 - Sunday */}
          <TableWithTwoImages
            data={PlaceOnWeel.sunday.table}
            images={PlaceOnWeel.sunday.images}
            desc={PlaceOnWeel.sunday.desc}
            day="Day 5 - Sunday"
            order={false}
          />

          {/*   Day-6 - Monday  */}
          <TableWithTwoImages
            data={PlaceOnWeel.monday.table}
            images={PlaceOnWeel.monday.images}
            desc={PlaceOnWeel.monday.desc}
            day="Day 6 - Monday"
          />

          {/*   Day-7 - Tuesday   */}
          <TableWithTwoImages
            data={PlaceOnWeel.tuesday.table}
            images={PlaceOnWeel.tuesday.images}
            desc={PlaceOnWeel.tuesday.desc}
            day="Day 7 - Tuesday"
            order={false}
          />

          {/*   Day 8 - wednesday */}
          <div>
            <h2 className="uppercase font-garamond text-4xl font-bold w-full py-3">
              DAY 8 - WEDNESDAY
            </h2>
            <div className="flex gap-3">
              <div className="w-[70%] flex flex-col gap-3">
                <div>
                  <Table data={PlaceOnWeel.wednesday.table} />
                </div>
                <div className="flex h-64 gap-5 justify-between">
                  <Image
                    src={PlaceOnWeel.Wednesday.images[0]}
                    className="w-[224px] h-[250px]"
                    alt="delhi-1"
                  />
                  <Image
                    src={PlaceOnWeel.Wednesday.images[1]}
                    className="w-[224px]  h-[250px]"
                    alt="delhi-1"
                  />
                  <Image
                    src={PlaceOnWeel.Wednesday.images[2]}
                    className="w-[376pxpx]  h-[250px]"
                    alt="delhi-1"
                  />
                </div>
              </div>
              <div className="w-[30%] flex flex-col justify-between">
                <h1 className="uppercase font-garamond font-bold text-3xl">
                  The Capital of India
                </h1>
                <div className="w-full h-fit">
                  <Image
                    src={PlaceOnWeel.Wednesday.images[3]}
                    className="w-full h-full object-cover"
                    alt="delhi-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  end of max-w-xl */}
      </div>
      ;
    </div>
  );
}

function Table({ data }: { data: any }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
        <thead>
          <tr className="bg-[#851d26] text-white">
            <th className="p-3 border min-w-[121px]">TIME</th>
            <th className="p-3 border">DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: Record<string, any>, index: number) => (
            <tr key={index} className="hover:bg-gray-100 transition-all">
              <td className="p-3 border text-center">{row.time}</td>
              <td className="p-3 border">{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableWithTwoImages({
  data,
  images,
  desc,
  day,
  order = true,
}: {
  data: any;
  images: Array<any>;
  desc: string | Array<string>;
  day: string;
  order?: boolean;
}) {
  return (
    <div className={`flex flex-col ${order ? "" : "items-end"} gap-8 py-10`}>
      <div className={` w-full xl:w-[70%] px-4 space-y-3`}>
        <h2 className="uppercase font-garamond text-4xl font-bold w-full">
          {day}
        </h2>
        {Array.isArray(desc) &&
          desc.map((item, index) => {
            return (
              <p key={index} className={`w-full`}>
                {item}
              </p>
            );
          })}
        {!Array.isArray(desc) && <p className={`w-full`}>{desc}</p>}
      </div>

      <div className={`w-full flex xl:flex-row flex-col gap-5 `}>
        {/*    Table */}
        <div
          className={`w-full xl:w-[70%] font-inter ${
            order ? "order-1" : "order-2"
          }`}
        >
          <Table data={data} />
        </div>
        {/*   ImageSection */}
        <div
          className={`w-full xl:w-[30%] h-auto flex flex-col  gap-2 justify-between ${
            order ? "order-2" : "order-1"
          }`}
        >
          {images.map((image: any, index: number) => (
            <div className="h-full" key={index}>
              <Image
                className="w-full h-[100%]  object-cover object-center rounded-3xl"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
