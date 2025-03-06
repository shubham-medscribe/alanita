"use client";
import AboutUs from "./components/AboutUs/AboutUs";
import AvailableNowOnBothAndroidAndIphone from "./components/AvailableNowOnBothAndroidAndIphone/AvailableNowOnBothAndroidAndIphone";
import BookYourFlight from "./components/BookYourFlight/BookYourFlight";
import DestinationWedding from "./components/DestinationWedding/DestinationWedding";
import Fearures from "./components/fearures/Fearures";
import GirdEffectAnimation from "./components/GirdEffectAnimation/GirdEffectAnimation";
import OurBlogOffers from "./components/OurBlogOffers/OurBlogOffers";
import OurLocation from "./components/OurLocations/OurLocation";
import PalaceOnWheelsHome from "./components/PalaceOnWheelsHome/PalaceOnWheelsHome";
import ToursAndPackages from "./components/ToursAndPackages/ToursAndPackages";
import WhatDoyouTheyToSay from "./components/whatDoyouTheyToSay/whatDoyouTheyToSay";
import WhyPeopleChooseOurAlanitaTravel from "./components/WhyPeopleChooseOurAlanitaTravel/WhyPeopleChooseOurAlanitaTravel";

export default function Home() {
  return (
    <>
      {/*    <AirTravelSearchForm /> */}
      <iframe
        src="/index.html"
        width="100%"
        height="380"
        className="border-0 overflow-hidden"
      ></iframe>
      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <BookYourFlight />
        <PalaceOnWheelsHome />
        <div className="max-w-[1347px] overflow-hidden">
          <GirdEffectAnimation />
          <WhatDoyouTheyToSay />
          <Fearures />
        </div>
        <div className="max-w-[1347px]">
          <AboutUs />
          <WhyPeopleChooseOurAlanitaTravel />
          <AvailableNowOnBothAndroidAndIphone />
          <ToursAndPackages />
          <DestinationWedding />
          <OurBlogOffers />
          <OurLocation />
        </div>
      </div>
    </>
  );
}
