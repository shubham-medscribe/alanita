import { div } from "motion/react-client";
import React from "react";

export default function BookYourFlight() {
  return (
    <div className="w-full pb-24 relative">
      <div
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
        }}
        className="min-h-[650px] w-full flex flex-col items-center bg-center bg-cover pt-24 relative"
      >
        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="capitalize font-garamond text-[8vw] lg:text-7xl font-bold">
            Book your Flights Today!
          </h1>
          <div className="flex  items-center gap-4 mt-6">
            <div className="h-1 w-[52px] bg-[#FF0000]"></div>
            <div className="font-inter font-normal text-[3.5vw] lg:text-[28px]">
              Your journey begins with a single click
            </div>
            <div className="h-1 w-[52px] bg-[#FF0000]"></div>
          </div>
        </div>

        <div className="w-full max-w-[1244px] flex justify-center flex-col xl:absolute -bottom-16">
          <div className="grid grid-cols-3 font-bold font-inter text-[3vw] sm:text-xl">
            <div className="rounded-t-3xl bg-[#ECECEC] h-16 px-8 text-[#949494] flex items-center justify-center">Round Trip</div>
            <div className="rounded-t-3xl bg-[#1E4492] h-16 px-8 flex items-center justify-center">One Way</div>
            <div className="rounded-t-3xl bg-[#ECECEC] h-16 px-8 text-[#949494] flex items-center justify-center">Multi City</div>
          </div>
          <div className="w-full max-w-[1244px] min-h-[376px] bg-white rounded-b-3xl shadow-xl">
            <div className="relative">
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                }}
                className="w-full h-full xl:absolute py-10 px-3 sm:px-16"
              >
                <div className="flex flex-col justify-between">
                  <div className="grid grid-cols-1 lg:grid-col-2 xl:grid-cols-3 gap-5">
                    {/* col-1 */}
                    <div className="text-[#A5A5A5] space-y-6">
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
                    <div className="text-[#A5A5A5] space-y-6 ">
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
                    </div>
                    {/*  col-3 */}
                    <div className="text-[#A5A5A5] space-y-6 ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
