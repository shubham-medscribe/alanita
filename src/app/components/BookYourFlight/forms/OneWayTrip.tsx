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

interface FormData {
  from: string;
  to: string;
  date: Date | null;
  time: string;
  flexibleDates: boolean;
  directFlights: boolean;
  faresWithNoPenalties: boolean;
  nearbyAirports: boolean;
  lapInfant: string;
  seatInfant: string;
  adultCount: string;
  childCount: string;
  classCabin: string;
  preferredAirline1: string;
  preferredAirline2: string;
}

function OneWayForm() {
  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    date: null,
    time: "",
    flexibleDates: false,
    directFlights: false,
    faresWithNoPenalties: false,
    nearbyAirports: false,
    lapInfant: "0 Lap Infant",
    seatInfant: "0 Seat Infant",
    adultCount: "1 Adult",
    childCount: "0 Child",
    classCabin: "All Class/Cabin",
    preferredAirline1: "",
    preferredAirline2: "",
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
    console.log("Form Data Submitted:", formData);
    // You can send this data to an API or perform further processing
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full py-10 px-3 sm:px-16">
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="text-[#A5A5A5] space-y-6">
            <div>
              <input
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="From"
              />
            </div>

            <div className="flex gap-3">
              <Date
                onDate={(date: Date | null) => {
                  if (date) {
                    setFormData({ ...formData, date });
                  }
                }}
              />
              {/* Date component */}
              <select
                name="time"
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {anytime.map((item: string, index: number) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkbox Options */}
            <div className="flex justify-between gap-2">
              <div className="flex flex-col w-fit">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="flexibleDates"
                    checked={formData.flexibleDates}
                    onChange={handleChange}
                    className="w-4 h-4 border border-[#C3C3C3]"
                  />
                  <span className="text-[17px]">Flexible dates</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="faresWithNoPenalties"
                    checked={formData.faresWithNoPenalties}
                    onChange={handleChange}
                    className="w-4 h-4 border border-[#C3C3C3]"
                  />
                  <span className="text-[17px]">Fares with no penalties</span>
                </label>
              </div>

              <div className="flex flex-col w-fit">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="directFlights"
                    checked={formData.directFlights}
                    onChange={handleChange}
                    className="w-4 h-4 border border-[#C3C3C3]"
                  />
                  <span className="text-[17px]">Direct flights</span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="nearbyAirports"
                    checked={formData.nearbyAirports}
                    onChange={handleChange}
                    className="w-4 h-4 border border-[#C3C3C3]"
                  />
                  <span className="text-[17px]">Nearby airports</span>
                </label>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-[#A5A5A5] space-y-6">
            <div>
              <input
                name="to"
                value={formData.to}
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="To"
              />
            </div>

            <div className="flex gap-3">
              <select
                name="lapInfant"
                value={formData.lapInfant}
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {lapInfant.map((item: string, index: number) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                name="seatInfant"
                value={formData.seatInfant}
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {seatInfant.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                name="preferredAirline1"
                value={formData.preferredAirline1}
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Preferred Airline 1"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="text-[#A5A5A5] space-y-6">
            <div className="flex gap-3">
              <select
                name="adultCount"
                value={formData.adultCount}
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
                value={formData.childCount}
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

            <div>
              <select
                name="classCabin"
                value={formData.classCabin}
                onChange={handleChange}
                className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
              >
                {allClassCabin.map((item: string, index: number) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <input
                name="preferredAirline2"
                value={formData.preferredAirline2}
                list="airlineList"
                onChange={handleChange}
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Preferred Airline 2"
              />
              <datalist id="airlineList">
                <option value="New York"></option>
                <option value="Los Angeles"></option>
                <option value="Chicago"></option>
                <option value="San Francisco"></option>
              </datalist>
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

export default OneWayForm;
