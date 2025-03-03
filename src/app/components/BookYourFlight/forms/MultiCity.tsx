import Date from "../../Date/Date";
function MultiCityForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
      className="w-full h-full  py-10 px-3 sm:px-16 text-[#A5A5A5]"
    >
      <div className="flex flex-col gap-3">
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
              <option value="">1 Adult</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
          <div className="flex-1 flex gap-3">
            <Date/>

            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">1 Adult</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
          <div className="flex-1 flex gap-3">
            <Date/>

            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">1 Adult</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
        </div>
        {/*    col-4 */}
        <div className="w-full flex flex-col xl:flex-row gap-5 ">
          <div className="flex-1 flex gap-3 flex-col xl:flex-row">
            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">1 Adult</option>
              <option value="economy">1 Adult</option>
              <option value="business">1 Adult</option>
              <option value="first-class">1 Adult</option>
            </select>

            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">0 Lap Infant</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
          <div className="flex-1 flex gap-3">
            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">0 Lap Infant</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>

            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">1 Adult</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
          <div className="flex-1 flex gap-3">
            <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
              <option value="">All Class/Cabin</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="rounded-3xl font-inter bg-[#1E4492] px-4 py-1 text-sm text-white">
              Add
            </button>
            <span className="text-2xl">{"/"}</span>
            <button className="rounded-3xl font-inter bg-[#1E4492] px-4 py-1 text-sm text-white">
              Remove
            </button>
          </div>

          <div className="h-[1px] w-full bg-[#C3C3C3]"></div>
        </div>

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
          <button className="py-3 text-2xl px-28 sm:px-36 bg-[#1E4492] rounded-3xl font-inter font-bold text-white">
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}

export default MultiCityForm;
