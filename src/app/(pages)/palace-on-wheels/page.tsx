"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import PlaceOnWheel from "../../assests/place-on-wheel.png";
import Map from "../../assests/map.png";
import Delhi from "../../assests/delhi.png";
import PlaceOnWeel from "../../constants/PlaceOnWheel";
import ClickHereForMoreInfo from "@/app/components/ClickHereForMoreInfo/ClickHereForMoreInfo";
import Track1 from "../../assests/train-track-1.png";
import Track2 from "../../assests/train-track-2.png";
export default function Placeonwheel() {
  return (
    <div className="w-full flex justify-center text-[#1C1C1C] h-full">
      <div className="max-w-screen-2xl overflow-hidden  flex flex-col items-center">
        <div className="w-full">
          <Image
            src={PlaceOnWheel}
            className="w-full h-auto object-cover"
            alt="place-on-wheel"
          />
        </div>

        <ClickHereForMoreInfo />

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
          <div className="flex justify-center">
            <div className="w-full flex-col lg:flex-row text-center lg:text-left flex items-center justify-between max-w-screen-lg">
              <div className="uppercase font-garamond text-4xl font-bold">
                Day - 1 Wednesday
              </div>
              <div
                style={{ backgroundImage: `url(${"./topic.png"})` }}
                className="bg-no-repeat bg-contain bg-center w-52 h-20 text-white font-inter text-xl uppercase flex items-center justify-center"
              >
                Delhi
              </div>
              <div className="uppercase font-inter text-2xl font-bold">
                the capital of India
              </div>
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

          <TrainLeftToRight title="Jaipur" />

          {/*  Day-2 - thursday */}

          <TableWithTwoImages
            data={PlaceOnWeel.thursday.table}
            images={PlaceOnWeel.thursday.images}
            desc={PlaceOnWeel.thursday.desc}
            day="day 2 - thurday"
            anotherNameOfCity="The Pink City"
            city="Jaipur"
          />

          <TrainRightToLeftChittorgarh
            title="SAWAI MADHOPUR/CHITTORGARH"
            day=""
          />

          {/*   Day-3 - Friday */}
          <CHITTORGARH
            data={PlaceOnWeel.friday.table}
            images={PlaceOnWeel.friday.images}
            desc={PlaceOnWeel.friday.desc}
            day=""
            order={false}
            anotherNameOfCity="The Price of Mewar"
            city="Jaipur"
          />

          <TrainLeftToRight title="UDAIPUR" />
          {/*   Day-4 - Saturday */}
          <TableWithTwoImages
            data={PlaceOnWeel.saturday.table}
            images={PlaceOnWeel.saturday.images}
            desc={PlaceOnWeel.saturday.desc}
            day="Day 4 - Saturday"
            anotherNameOfCity="Romance on Water"
            city="Udaipur"
          />

          <div className="hidden w-full lg:flex justify-center">
            <div className="max-w-3xl xl:max-w-4xl relative">
              <Image src={Track2} className="" alt="Track Image" />
              <div className=" uppercase hidden lg:block font-garamond text-4xl font-bold w-full absolute bottom-14 left-24">
                {"Day 5 - Sunday"}
              </div>
              <div
                style={{ backgroundImage: `url(./topic.png)` }}
                className="absolute bottom-0 left-12 -translate-x-1/2 translate-y-1/2 bg-no-repeat bg-contain py-3 px-5 bg-center text-center text-white font-inter uppercase font-bold text-lg w-full "
              >
                {"jaisalmer"}
              </div>
            </div>
          </div>

          {/*   Day-5 - Sunday */}
          <CHITTORGARH
            data={PlaceOnWeel.sunday.table}
            images={PlaceOnWeel.sunday.images}
            desc={PlaceOnWeel.sunday.desc}
            day="Day 5 - Sunday"
            order={false}
            anotherNameOfCity="The Golden City"
            city="Jodhpur"
          />

          <TrainLeftToRight title="Jodhpur" />
          {/*   Day-6 - Monday  */}
          <TableWithTwoImages
            data={PlaceOnWeel.monday.table}
            images={PlaceOnWeel.monday.images}
            desc={PlaceOnWeel.monday.desc}
            day="Day 6 - Monday"
            anotherNameOfCity="The Blue City"
            city="Jodhpur"
          />
          <TrainRightToLeftTwoLocatinWithDay
            title="bharatpur"
            day="Day 7 - Tuesday"
          />
          {/*   Day-7 - Tuesday   */}
          <ParaDescription
            data={PlaceOnWeel.tuesday.table}
            images={PlaceOnWeel.tuesday.images}
            desc={PlaceOnWeel.tuesday.desc}
            day="Day 7 - Tuesday"
            order={false}
            descFull={true}
          />

          <TrainLeftToRight title="Delhi" />
          {/*   Day 8 - wednesday */}
          <div className="flex flex-col h-fit">
            <h2 className="uppercase font-garamond text-4xl font-bold w-full py-3">
              DAY 8 - WEDNESDAY
            </h2>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="w-full lg:w-[70%] flex flex-col gap-3">
                <div>
                  <Table data={PlaceOnWeel.wednesday.table} />
                </div>
                <div className="flex  sm:flex-row xl:h-64 gap-2 sm:gap-5 justify-between">
                  <Image
                    src={PlaceOnWeel.Wednesday.images[0]}
                    className="w-2/6 h-auto xl:w-[224px] xl:h-[250px]"
                    alt="delhi-1"
                  />
                  <Image
                    src={PlaceOnWeel.Wednesday.images[1]}
                    className="w-2/6 h-auto xl:w-[224px] xl:h-[250px]"
                    alt="delhi-1"
                  />
                  <Image
                    src={PlaceOnWeel.Wednesday.images[2]}
                    className="w-2/6 h-auto xl:w-[376px] xl:h-[250px]"
                    alt="delhi-1"
                  />
                </div>
              </div>
              <div className="w-full h-auto lg:w-[30%] flex flex-col gap-3 justify-between overflow-hidden ">
                <h1 className="uppercase font-garamond font-bold text-3xl">
                  The Capital of India
                </h1>
                <div className="w-full h-full">
                  <Image
                    src={PlaceOnWeel.Wednesday.images[3]}
                    className="w-full h-full object-cover rounded-3xl"
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

function Table({ data }: { data: Array<Record<string, string>> }) {
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
          {data.map((row: Record<string, string>, index: number) => (
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
  anotherNameOfCity,
  desc,
  city,

  day,
  order = true,
  descFull = false,
}: {
  data: Array<Record<string, string>>;
  anotherNameOfCity: string;
  images: StaticImageData[];
  desc: string | Array<string>;
  day: string;
  city: string;
  order?: boolean;
  descFull?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${order ? "" : "items-end"} gap-8 pt-10 h-fit`}
    >
      <div
        className={`w-full  ${!descFull ? "w-full" : "w-full"} px-4 space-y-3`}
      >
        <h2 className="text-center lg:text-left uppercase font-garamond text-4xl font-bold w-full">
          {day}
        </h2>
        <div className="flex flex-col lg:flex-row">
          {Array.isArray(desc) &&
            desc.map((item, index) => {
              return (
                <p key={index} className={`w-full`}>
                  {item}
                </p>
              );
            })}
          {!Array.isArray(desc) && (
            <p className={`w-full lg:w-[70%]`}>{desc}</p>
          )}
          <div className="py-5 xl:py-0 lg:w-[30%] flex flex-col items-center text-3xl font-inter font-medium ">
            {anotherNameOfCity}
            <div
              style={{ backgroundImage: `url(${"./topic.png"})` }}
              className=" bg-no-repeat bg-contain bg-center w-52 h-20 text-white font-inter text-xl uppercase flex lg:hidden items-center justify-center"
            >
              {city}
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full flex lg:flex-row flex-col gap-5`}>
        {/*    Table */}
        <div
          className={`w-full lg:w-[60%] xl:w-[70%] font-inter ${
            order ? "order-1" : "order-2"
          }`}
        >
          <Table data={data} />
        </div>
        {/*   ImageSection */}
        <div
          className={`w-full lg:w-[40%] xl:w-[30%]  flex  lg:flex-col  gap-2 justify-between ${
            order ? "order-2" : "order-1"
          }`}
        >
          {images.map((image: StaticImageData, index: number) => (
            <div className="w-full h-full overflow-hidden" key={index}>
              <Image
                className="w-full h-full  object-cover object-center rounded-3xl"
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

function TrainLeftToRight({ title }: { title: string }) {
  return (
    <div className="w-full lg:flex justify-center hidden">
      <div className="max-w-3xl xl:max-w-full relative">
        <Image src={Track1} className="" alt="Track Image" />
        <div
          style={{ backgroundImage: `url(./topic.png)` }}
          className="   absolute bottom-0 right-12 translate-x-1/2 translate-y-1/2 bg-no-repeat bg-contain py-3 w-full px-5 bg-center text-center text-white font-inter uppercase font-bold text-lg"
        >
          {title}
        </div>
      </div>
    </div>
  );
}

/* function TrainRightToLeft({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        <Image src={Track2} className="" alt="Track Image" />
        <div
          style={{ backgroundImage: `url(./topic.png)` }}
          className="absolute bottom-0 left-12 -translate-x-1/2 translate-y-1/2 bg-no-repeat bg-contain py-3 px-5 bg-center text-center text-white font-inter uppercase font-bold text-lg w-full "
        >
          {title}
        </div>
      </div>
    </div>
  );
} */

function CHITTORGARH({
  data,
  images,
  desc,
  anotherNameOfCity,
  city,
  day,
  order = true,
/*   descFull = false, */
}: {
  data: Array<Record<string, string>>;
  images: StaticImageData[];
  desc: string | Array<string>;
  day: string;
  city: string;
  anotherNameOfCity: string;
  order?: boolean;
/*   descFull?: boolean; */
}) {
  return (
    <div className={`flex flex-col ${order ? "" : "items-end"} gap-8`}>
      <div
        className={`lg:w-[60%] xl:w-[70%] pl-4  space-y-3 relative flex lg:flex-row flex-col pt-5 lg:pt-0`}
      >
        <h2 className="lg:hidden text-center uppercase font-garamond text-4xl font-bold w-full">
          {day}
        </h2>

        <div className="flex justify-end">
          <div className="space-y-3 lg:space-y-0">
            <div className="flex justify-center flex-col items-center lg:block text-center text-3xl font-inter font-medium lg:text-end lg:absolute -top-1/2 right-0 ">
              {anotherNameOfCity}
              <div
                style={{ backgroundImage: `url(${"./topic.png"})` }}
                className="lg:hidden bg-no-repeat bg-contain bg-center w-52 h-20 text-white font-inter text-xl uppercase flex items-center justify-center"
              >
                {city}
              </div>
            </div>
            {Array.isArray(desc) &&
              desc.map((item, index) => {
                return (
                  <p key={index} className={`w-full `}>
                    {item}
                  </p>
                );
              })}
            {!Array.isArray(desc) && <p className={`w-full text-justify`}>{desc}</p>}
          </div>
        </div>
      </div>

      <div className={`w-full flex lg:flex-row flex-col gap-5`}>
        {/*    Table */}
        <div
          className={`w-full lg:w-[60%] xl:w-[70%] font-inter ${
            order ? "order-1" : "order-2"
          }`}
        >
          <Table data={data} />
        </div>
        {/*   ImageSection */}
        <div
          className={`w-full lg:w-[40%] xl:w-[30%]  flex  lg:flex-col  gap-2 justify-between ${
            order ? "order-2" : "order-1"
          }`}
        >
          {images.map((image: StaticImageData, index: number) => (
            <div className="w-full h-full overflow-hidden" key={index}>
              <Image
                className="w-full h-full  object-cover object-center rounded-3xl"
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

function TrainRightToLeftChittorgarh({
  title,
  day,
}: {
  title: string;
  day: string;
}) {
  return (
    <div className="hidden w-full lg:flex justify-center">
      <div className="max-w-3xl xl:max-w-4xl  w-full relative">
        <Image src={Track2} className="" alt="Track Image" />
        <div className="uppercase font-garamond text-4xl font-bold w-full absolute bottom-14 left-24">
          {day}
        </div>
        <div
          style={{ backgroundImage: `url(./topic.png)` }}
          className="absolute bottom-0 left-12 -translate-x-1/2 translate-y-1/2 bg-no-repeat bg-contain py-3 px-5 bg-center text-center text-white font-inter uppercase font-bold text-lg w-full "
        >
          {title}
        </div>
      </div>
    </div>
  );
}

function TrainRightToLeftTwoLocatinWithDay({
  title="BharatPur",
  day,
}: {
  title: string;
  day: string;
}) {
  return (
    <div className="w-ful flex flex-col relative font-inter">
      <div className="hidden  w-full lg:flex justify-center">
        <Image src={Track2} alt="Track Image" />
      </div>
      <div className="xl:pl-20 w-full flex flex-col lg:flex-row  justify-between gap-4 xl:gap-10 items-center max-w-5xl">
        <h2 className="pt-7 font-bold font-garamond text-5xl lg:hidden uppercase">
          {day}
        </h2>
        <div className="flex items-center gap-5">
          <div
            style={{ backgroundImage: `url(./topic.png)` }}
            className="w-[250px] px-[70px] bg-center bg-contain bg-no-repeat uppercase text-white py-3"
          >
            {title}
          </div>
        </div>
        <h1 className="text-2xl">Avian Bird Sanctuary</h1>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div
            style={{ backgroundImage: `url(./topic.png)` }}
            className="w-[250px] px-[70px] bg-center text-center bg-contain bg-no-repeat uppercase text-white py-3"
          >
            Agra
          </div>
          <h1 className="w-auto text-2xl">Taj Mahal</h1>
        </div>
      </div>
    </div>
  );
}

function ParaDescription({
  data,
  images,
  desc,
  day,
  order = true,
  descFull = false,
}: {
  data: Array<Record<string, string>>;
  images: StaticImageData[];
  desc: string | Array<string>;
  day: string;
  order?: boolean;
  descFull?: boolean;
}) {
  return (
    <div
      className={`flex flex-col ${order ? "" : "items-end"} gap-8 pt-10 h-fit`}
    >
      <div
        className={`w-full  ${!descFull ? "w-full" : "w-full"} px-4 space-y-3`}
      >
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
      </div>

      <div className={`w-full flex lg:flex-row flex-col gap-5`}>
        {/*    Table */}
        <div
          className={`w-full lg:w-[60%] xl:w-[70%] font-inter ${
            order ? "order-1" : "order-2"
          }`}
        >
          <Table data={data} />
        </div>
        {/*   ImageSection */}
        <div
          className={`w-full lg:w-[40%] xl:w-[30%]  flex flex-col  gap-2 justify-between ${
            order ? "order-2" : "order-1"
          }`}
        >
          {images.map((image: StaticImageData, index: number) => (
            <div className="h-full overflow-hidden" key={index}>
              <Image
                className="w-full h-full  object-cover object-center rounded-3xl"
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
