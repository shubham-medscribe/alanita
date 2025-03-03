import React from "react";
import OneWayForm from "./forms/OneWayTrip";
import RoundTripForm from "./forms/RoundTrip";
import MultiCityForm from "./forms/MultiCity";


export default function BookYourFlight() {
  const forms = {
    OneWay: <OneWayForm />,
    RoundTrip: <RoundTripForm />,
    MultiCity: <MultiCityForm />,
  };
  const [form, setForm] = React.useState(forms.OneWay);
  const [selectedForm, setSelectedForm] = React.useState("OneWay");
  const commonStyles = {
    selected: {
      color: "#ffffff",
      backgroundColor: "#1E4492",
    },
    unselected: {
      color: "#949494",
      backgroundColor: "#ECECEC",
    },
  };

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

        <div className="w-full max-w-[1244px] flex justify-center flex-col relative  -bottom-16">
          <div className="grid grid-cols-3 font-bold font-inter text-[3vw] sm:text-xl">
            <button
              style={
                selectedForm === "RoundTrip"
                  ? commonStyles.selected
                  : commonStyles.unselected
              }
              onClick={() => {
                setForm(forms.RoundTrip);
                setSelectedForm("RoundTrip");
              }}
              className="rounded-t-3xl bg-[#ECECEC] h-16 px-8 text-[#949494] flex items-center justify-center"
            >
              Round Trip
            </button>
            <button
              style={
                selectedForm === "OneWay"
                  ? commonStyles.selected
                  : commonStyles.unselected
              }
              onClick={() => {
                setForm(forms.OneWay);
                setSelectedForm("OneWay");
              }}
              className="rounded-t-3xl bg-[#1E4492] h-16 px-8 flex items-center justify-center"
            >
              One Way
            </button>
            <button
              style={
                selectedForm === "MultiCity"
                  ? commonStyles.selected
                  : commonStyles.unselected
              }
              onClick={() => {
                setForm(forms.MultiCity);
                setSelectedForm("MultiCity");
              }}
              className="rounded-t-3xl bg-[#ECECEC] h-16 px-8 text-[#949494] flex items-center justify-center"
            >
              Multi City
            </button>
          </div>
          <div className="w-full max-w-[1244px] min-h-[376px] bg-white rounded-b-3xl shadow-xl relative">
            <div className="">
              {/*  form here */}
              {form}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
