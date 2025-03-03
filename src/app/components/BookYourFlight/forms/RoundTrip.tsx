function RoundTripForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }}
      className="w-full h-full  py-10 px-3 sm:px-16"
    >
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-5">
          {/* col-1 */}
          <div className="text-[#A5A5A5] space-y-4">
            <div>
              <input
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="From"
              />
            </div>
            {/*  date & select time list */}
            <div className="flex gap-3">
              <input
                type="date"
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px] "
                placeholder="From"
              />

              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">Anytime</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>

            {/*  checkbox (flexible dates,DirectFlight,FareWithNoPenalties and Nearby airport)*/}
            <div className="flex justify-between  gap-2">
              <div className="flex  flex-col w-fit ">
                <div>
                  <label className="flex  items-center space-x-2">
                    <input
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
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="To"
              />
            </div>
            {/*  date & select time list */}
            <div className="flex gap-3">
              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">0 Lap Infant</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>

              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">0 Seat infant</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>

            <div>
              <input
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Prefred Airlines 1"
              />
            </div>

            <div className="flex justify-center">
              <select className="p-3 border border-[#C3C3C3] rounded-xl h-[56px] w-52">
                <option value="all class cabin">All class/cabin</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>
          </div>
          {/*  col-3 */}
          <div className="text-[#A5A5A5] space-y-4 ">
            {/*  date & select time list */}
            <div className="flex gap-3">
              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">1 Adult</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>

              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">0 Child</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>
            <div>
              <select className="p-3 border border-[#C3C3C3] rounded-xl w-full h-[56px]">
                <option value="">All Class/Cabin</option>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first-class">First Class</option>
              </select>
            </div>

            <div>
              <input
                className="p-5 border border-[#C3C3C3] rounded-xl w-full h-[56px]"
                placeholder="Prefred Airlines 2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center h-full items-end pt-10">
          <button className="py-3 text-2xl px-36 bg-[#1E4492] rounded-3xl font-inter font-bold">
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
}

export default RoundTripForm;