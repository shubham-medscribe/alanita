"use client";
import AboutUs from "./components/AboutUs/AboutUs";
import AvailableNowOnBothAndroidAndIphone from "./components/AvailableNowOnBothAndroidAndIphone/AvailableNowOnBothAndroidAndIphone";
import BookYourFlight from "./components/BookYourFlight/BookYourFlight";
import Fearures from "./components/fearures/Fearures";
import OurBlogOffers from "./components/OurBlogOffers/OurBlogOffers";
import OurLocation from "./components/OurLocations/OurLocation";
import ToursAndPackages from "./components/ToursAndPackages/ToursAndPackages";
import WhatDoyouTheyToSay from "./components/whatDoyouTheyToSay/whatDoyouTheyToSay";
import WhyPeopleChooseOurAlanitaTravel from "./components/WhyPeopleChooseOurAlanitaTravel/WhyPeopleChooseOurAlanitaTravel";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center p-5">
        <div className="max-w-screen-2xl">
          <WhatDoyouTheyToSay />
          <Fearures />
          <AboutUs />
          <WhyPeopleChooseOurAlanitaTravel/>
          <AvailableNowOnBothAndroidAndIphone/>
          <ToursAndPackages/>
          <OurBlogOffers/>
          <OurLocation/>
        </div>
      </div>
    </>
  );
}
