"use client";

import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BookYourFlight from "@/app/components/BookYourFlight/BookYourFlight";
import OurLocation from "@/app/components/OurLocations/OurLocation";

export default function Page() {
  const data = {
    list1: [
        {
          heading: "Book Cheap Flights on Alanita Travel",
          desc: "Take off to India with cheap flight tickets on Alanita Travel and get inspired by the rich and diverse traditions and cultures, and stunning architecture in India. Whether you are looking for cheap airfare for holidays and family vacations or have to get to a business meeting, the flight deals Alanita Travel can offer are too good to pass up. Planning and booking cheap flight tickets to top destinations in India have never been made easier. We have helped tens of thousands of customers in providing the lowest airfares for travel between the United States and India. We are a well known company in the United States specializing in cheap airfare from USA to India."
        },
        {
          heading: "Why choose Alanita Travel?",
          desc: [
            "24/7 customer service",
            "Multiple languages",
            "Most influential leaders in the travel industry",
            "Lowest phone fares in the market",
            "Easy and secure payment gateway",
            "Long standing service and trust built from over 20 years",
            "Book flights online or over the phone for best deals in flight booking"
          ]
        },
        {
          heading: "What is the best time to visit Indian cities?",
          desc: "The most pleasant time to visit major Indian cities is from October to March. Mumbai, Delhi, Bengaluru, Chennai and Hyderabad are some of the popular cities visited during the fall and spring season. The average temperature ranges between 10 to 17°C in Delhi while it is between 20 to 26°C in Mumbai, Bengaluru, Chennai and Hyderabad."
        },
        {
          heading: "Direct flights from the USA to India",
          desc: "With the rising demand for direct flights to India, newer and more airlines operate direct flights from the USA to top Indian destinations such as Mumbai and New Delhi. Some of the best airlines operate direct flights from different cities in the US."
        },
        {
          heading: "How long is the flight to India?",
          desc: "If you travel by non-stop flight to India’s most popular airports such as Indira Gandhi International Airport in New Delhi, Chhatrapati Shivaji International Airport in Mumbai, Kempegowda International Airport in Bengaluru, Chennai International Airport in Chennai, and Rajiv Gandhi International Airport in Hyderabad, the flight time is around 14-15 hours compared to the 19-30 hours it takes to fly with 1-2 stops."
        },
        {
          heading: "Get the best deals on flights",
          desc: "We offer you unbeatable deals and lowest cost bargains on India to USA flights that offer huge savings. Our phone only booking offers you super low fares as you don't even have to book cheap flights online. You can call us at 1-888-465-4282, and our customer care executives will get your bookings done."
        }
      ],
  };
  if (!data) {
    return <h1 className="text-center text-red-500">Location not found!</h1>;
  }

  return (
    <div className="w-full flex justify-center items-center flex-col text-black font-inter">
      <BookYourFlight />

      <div className="w-full max-w-[1347px] p-5">
        <div className="w-full py-5 space-y-8">
          {Array.isArray(data?.list1) &&
            data.list1.map((list, index) => (
              <div className="space-y-3" key={index}>
                <h3 className="text-3xl font-bold font-garamond">
                  {list.heading}
                </h3>
                {Array.isArray(list.desc) &&
                  list.desc.map((desc: string, i) => (
                    <p key={i}>
                      <FontAwesomeIcon
                        className="text-red-600"
                        icon={faJetFighter}
                      />
                      &nbsp; {desc}
                    </p>
                  ))}

                {!Array.isArray(list.desc) && (
                  <p>
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faJetFighter}
                    />
                    &nbsp; {list.desc}
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>


      <div className="w-full max-w-[1347px]">
        <OurLocation />
      </div>
    </div>
  );
}
