"use client"
import { useState } from "react";
import Date from "../../Date/Date";
import {
  adultsCount,
  allClassCabin,
  anytime,
  childsCount,
  lapInfant,
  seatInfant,
} from "../constants/formsOptions";
function MultiCityForm() {
  const [multiCity, setMultiCities] = useState<Array<number>>([1]);
  const addCity = (): void => {
    if (multiCity.length > 5) return;

    setMultiCities((prev: Array<number>) => {
      return [...prev, prev.length + 1];
    });
  };

  const removeCity = (index: number): void => {
    if (multiCity.length === 1) return;
    setMultiCities((prev: Array<number>) => {
      return prev.filter((_item, i) => i !== index);
    });
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
      className="w-full h-full  py-10 px-3 sm:px-16 text-[#A5A5A5]"
    >
      <div className="flex flex-col gap-3">
        {multiCity.map((_: number, index: number) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex gap-5">
                {/* col-1 */}
                <div className="w-full flex flex-col xl:flex-row gap-5 ">
                  <div className="flex-1">
                    <input
                      className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                      placeholder="From"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                      placeholder="From"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                      placeholder="From"
                    />
                  </div>
                </div>
              </div>
              {/*  col-2 */}
              <div className="w-full flex flex-col xl:flex-row gap-5 ">
                <div className="flex-1">
                  <input
                    className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                    placeholder="To"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                    placeholder="To"
                  />
                </div>
                <div className="flex-1">
                  <input
                    className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                    placeholder="To"
                  />
                </div>
              </div>

              {/*  col-3 */}
              <div className="w-full flex flex-col xl:flex-row gap-5 ">
                <div className="flex-1 flex gap-3">
                  <Date />

                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                  {anytime.map((item: Record<string, string>, index: number) => (
                  <option key={index} value={item.val}>
                    {item.time}
                  </option>
                ))}
                  </select>
                </div>
                <div className="flex-1 flex gap-3">
                  <Date />

                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                  {anytime.map((item: Record<string, string>, index: number) => (
                  <option key={index} value={item.val}>
                    {item.time}
                  </option>
                ))}
                  </select>
                </div>
                <div className="flex-1 flex gap-3">
                  <Date />

                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                  {anytime.map((item: Record<string, string>, index: number) => (
                  <option key={index} value={item.val}>
                    {item.time}
                  </option>
                ))}
                  </select>
                </div>
              </div>
              {/*   add & remove option */}
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => addCity()}
                    className="rounded-3xl font-inter bg-[#1E4492] px-4 py-1 text-sm text-white"
                  >
                    Add
                  </button>
                  <span className="text-2xl">{"/"}</span>
                  <button
                    onClick={() => removeCity(index)}
                    className="rounded-3xl font-inter bg-[#1E4492] px-4 py-1 text-sm text-white"
                  >
                    Remove
                  </button>
                </div>

                <div className="h-[1px] w-full bg-[#C3C3C3]"></div>
              </div>
              {/*    col-4 */}
              <div className="w-full flex flex-col xl:flex-row gap-5 ">
                <div className="flex-1 flex gap-3 flex-col xl:flex-row">
                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                    {adultsCount.map((item: string, index: number) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                    {childsCount.map((item: string, index: number) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 flex gap-3">
                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                  {lapInfant.map(
                  (item: Record<string, number | string>, index: number) => (
                    <option key={index} value={item.val}>
                      {item.label}
                    </option>
                  )
                )}
                  </select>

                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                  {seatInfant.map(
                  (item: Record<string, number | string>, index: number) => (
                    <option value={item.val} key={index}>
                      {item.label}
                    </option>
                  )
                )}
                  </select>
                </div>
                <div className="flex-1 flex gap-3">
                  <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                    {allClassCabin.map((item: string, index: number) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          );
        })}

        {/*    col-4 */}
        <div className="w-full flex flex-col xl:flex-row gap-5 ">
          <div className="flex-1 flex flex-col xl:flex-row gap-2">
            <div className="flex flex-col">
              <label className="flex  items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#C3C3C3]"
                />
                <span className="text-[17px] text-[#A5A5A5]">
                  Flexible dates
                </span>
              </label>

              <label className="flex  items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#C3C3C3]"
                />
                <span className="text-[17px] text-[#A5A5A5]">
                  Fares with no penalties
                </span>
              </label>
            </div>

            <div>
              <label className="flex  items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#C3C3C3]"
                />
                <span className="text-[17px] text-[#A5A5A5]">
                  Directs flights
                </span>
              </label>

              <label className="flex  items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border border-[#C3C3C3]"
                />
                <span className="text-[17px] text-[#A5A5A5]">
                  Nearby airports
                </span>
              </label>
            </div>
          </div>
          <div className="flex-1">
            <input
              className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              placeholder="Preferred Airlines 1"
            />
          </div>
          <div className="flex-1">
            <input
              className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              placeholder="Preferred Airlines 2"
            />
          </div>
        </div>
        <div className="flex justify-center h-full items-end pt-10">
          <button className=" py-3 text-2xl px-28 sm:px-36 bg-[#1E4492] rounded-3xl font-inter font-bold text-white">
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}

export default MultiCityForm;
