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

interface FormState {
  from: string;
  to: string;
  date1: Date | null;
  date2: Date | null;
  anytime1: string;
  anytime2: string;
  preferredAirline1: string;
  preferredAirline2: string;
  adultCount: string;
  childCount: string;
  classCabin: string;
  lapInfant: string;
  seatInfant: string;
  flexibleDates: boolean;
  noPenaltyFares: boolean;
  directFlights: boolean;
  nearbyAirports: boolean;
}

function RoundTripForm() {
  // Form State
  const [formData, setFormData] = useState<FormState>({
    from: "",
    to: "",
    date1: null,
    date2: null,
    anytime1: "",
    anytime2: "",
    preferredAirline1: "",
    preferredAirline2: "",
    adultCount: "1 Adult",
    childCount: "0 Child",
    classCabin: "All Class/Cabin",
    lapInfant: "0 Lap Infant",
    seatInfant: "0 Seat Infant",
    flexibleDates: false,
    noPenaltyFares: false,
    directFlights: false,
    nearbyAirports: false,
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked; // Ensure TypeScript recognizes `checked`

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="w-full h-full  py-10 px-3 sm:px-16"
    >
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-5">
          {/* col-1 */}
          <div className="text-[#A5A5A5] space-y-4">
            <div>
              <input
                onChange={handleChange}
                name="from"
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="From"
              />
            </div>
            {/*  date & select time list */}
            <div className="flex gap-3">
              <Date
                onDate={(date: Date | null) => {
                  if (date) {
                    setFormData({ ...formData, date1: date });
                  }
                }}
              />

              <select
                onChange={handleChange}
                name="anytime1"
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
               {anytime.map((item: Record<string, string>, index: number) => (
                  <option key={index} value={item.val}>
                    {item.time}
                  </option>
                ))}
                ;
              </select>
            </div>

            {/*  checkbox (flexible dates,DirectFlight,FareWithNoPenalties and Nearby airport)*/}
            <div className="flex justify-between  gap-2">
              <div className="flex  flex-col w-fit ">
                <div>
                  <label className="flex  items-center space-x-2">
                    <input
                      name="flexibleDates"
                      onChange={handleChange}
                      type="checkbox"
                      className="w-4 h-4 border border-[#C3C3C3]"
                    />
                    <span className="text-[17px] text-[#A5A5A5]">
                      Flexible dates
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      name="faresWithNoPenalties"
                      onChange={handleChange}
                      type="checkbox"
                      className="w-4 h-4 border border-[#C3C3C3]"
                    />
                    <span className="text-[17px] text-[#A5A5A5]">
                      Fares with no penalties
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-col w-fit">
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      name="directFlights"
                      onChange={handleChange}
                      type="checkbox"
                      className="w-4 h-4 border border-[#C3C3C3]"
                    />
                    <span className="text-[17px] text-[#A5A5A5]">
                      Direct flights
                    </span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      name="nearbyAirports"
                      onChange={handleChange}
                      type="checkbox"
                      className="w-4 h-4 border border-[#C3C3C3]"
                    />
                    <span className="text-[17px] text-[#A5A5A5]">
                      Nearby airports
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/*    col-2 */}
          <div className="text-[#A5A5A5] space-y-4 ">
            <div>
              <input
                name="to"
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="To"
              />
            </div>
            {/*  date & select time list */}
            <div className="flex gap-3">
              <Date
                onDate={(date: Date | null) => {
                  if (date) {
                    setFormData({ ...formData, date2: date });
                  }
                }}
              />

              <select
                onChange={handleChange}
                name="anytime2"
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                 {anytime.map((item: Record<string, string>, index: number) => (
                  <option key={index} value={item.val}>
                    {item.time}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                name="preferredAirline1"
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Prefred Airlines 1"
              />
            </div>

            <div className="flex justify-center">
              <select
                name="classCabin"
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl h-[56px] w-full xl:w-52"
              >
                {allClassCabin.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/*  col-3 */}
          <div className="text-[#A5A5A5] space-y-4 ">
            {/*  date & select time list */}
            <div className="flex gap-3">
              <select
                name="adultCount"
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {adultsCount.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                name="childCount"
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {childsCount.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <select
                name="lapInfant"
                value={formData.lapInfant}
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                 {lapInfant.map(
                  (item: Record<string, number | string>, index: number) => (
                    <option key={index} value={item.val}>
                      {item.label}
                    </option>
                  )
                )}
              </select>

              <select
                name="seatInfant"
                value={formData.seatInfant}
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {seatInfant.map(
                  (item: Record<string, number | string>, index: number) => (
                    <option value={item.val} key={index}>
                      {item.label}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <input
                name="preferredAirline2"
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Prefred Airlines 2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center h-full items-end pt-10">
          <button
            type="submit"
            className="text-white py-3 text-2xl px-28 md:px-36 bg-[#1E4492] rounded-3xl font-bold"
          >
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}

export default RoundTripForm;
