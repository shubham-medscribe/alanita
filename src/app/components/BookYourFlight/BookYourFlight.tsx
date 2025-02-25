import React from "react";

export default function BookYourFlight() {
  return (
    <div
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
      }}
      className="min-h-[650px] w-full bg-center bg-cover pt-24 relative"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize font-garamond text-7xl font-bold">
          Book your Flights Today!
        </h1>
        <div className="flex  items-center gap-4 mt-6">
          <div className="h-1 w-[52px] bg-[#FF0000]"></div>
          <div className="font-inter font-normal text-[28px]">
            Your journey begins with a single click
          </div>
          <div className="h-1 w-[52px] bg-[#FF0000]"></div>
        </div>
      </div>

      <div className="w-full flex justify-center overflow-hidden ">
        <div className="w-full max-w-[1244px] min-h-[452px] bg-white rounded-3xl relative">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
            className="w-full h-full absolute p-5"
          >
            <div className="grid grid-cols-3">
              {/* col-1 */}
              <div className="text-[#A5A5A5] space-y-6 pl-10">
                <div>
                  <input
                    className="p-5 border border-[#C3C3C3] rounded-lg w-full h-[56px]"
                    placeholder="From"
                  />
                </div>
                {/*  date & select time list */}
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="p-5 border border-[#C3C3C3] rounded-lg w-full h-[56px] "
                    placeholder="From"
                  />

                  <select className="p-3 border border-[#C3C3C3] rounded-lg w-full h-[56px]">
                    <option value="">Anytime</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first-class">First Class</option>
                  </select>
                </div>

                {/*  checkbox (flexible dates,DirectFlight,FareWithNoPenalties and Nearby airport)*/}
                <div className="flex justify-between  gap-2">
                  <div className="flex flex-col w-fit ">
                    <div>
                      <label className="flex items-center space-x-2">
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
              <div className="text-[#A5A5A5] space-y-6 pl-10">
                <div>
                  <input
                    className="p-5 border border-[#C3C3C3] rounded-lg w-full h-[56px]"
                    placeholder="From"
                  />
                </div>
                {/*  date & select time list */}
                <div className="flex gap-3">
                  <select className="p-3 border border-[#C3C3C3] rounded-lg w-full h-[56px]">
                    <option value="">Anytime</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first-class">First Class</option>
                  </select>

                  <select className="p-3 border border-[#C3C3C3] rounded-lg w-full h-[56px]">
                    <option value="">Anytime</option>
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first-class">First Class</option>
                  </select>
                </div>
              </div>
              {/*  col-3 */}
              <div></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
