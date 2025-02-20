import AboutUs from "./components/AboutUs/AboutUs";
import BookYourFlight from "./components/BookYourFlight/BookYourFlight";
import Fearures from "./components/fearures/Fearures";
import WhatDoyouTheyToSay from "./components/whatDoyouTheyToSay/whatDoyouTheyToSay";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="max-w-screen-2xl">
          <WhatDoyouTheyToSay />
          <Fearures />
          <AboutUs />
        </div>
      </div>
    </>
  );
}
