"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import India from "../../assests/india.jpg";
import USA from "../../assests/usa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const locations = [
  {
    country: "USA Office Locations",
    image: USA,
    offices: [
      {
        city: "NEW YORK",
        address: "123 Broadway St, New York, NY 10001",
        phone: "212-555-0198",
      },
      {
        city: "LOS ANGELES",
        address: "456 Sunset Blvd, Los Angeles, CA 90028",
        phone: "323-555-0123",
      },
      {
        city: "CHICAGO",
        address: "789 Michigan Ave, Chicago, IL 60611",
        phone: "312-555-0456",
      },
      {
        city: "HOUSTON",
        address: "101 Main St, Houston, TX 77002",
        phone: "713-555-0678",
      },
    ],
  },
  {
    country: "INDIA Office Locations",
    image: India,
    offices: [
      {
        city: "MUMBAI",
        address: "12 Marine Drive, Mumbai, MH 400001",
        phone: "022-555-1234",
      },
      {
        city: "BANGALORE",
        address: "34 MG Road, Bangalore, KA 560001",
        phone: "080-555-5678",
      },
      {
        city: "KOLKATA",
        address: "56 Park Street, Kolkata, WB 700016",
        phone: "033-555-7890",
      },
    ],
  },
];

type OfficeIndex = string;

export default function LocationSection() {
  const [openIndexes, setOpenIndexes] = useState<OfficeIndex[]>([]);

  const toggleOffice = (index: OfficeIndex) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className=" text-[#1C1C1C]">
      <div className="container">
        <motion.h2
          className="text-4xl sm:text-[50px] mb-3 sm:mb-5 font-semibold  font-garamond"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Locations
        </motion.h2>
        <p className="text-gray-600  mb-8 text-lg sm:text-[21px] font-inter">
          Visit our office locations in the USA and India to book your flight
          tickets or for any inquiries. Our team is ready to assist you with the
          best travel deals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, locIndex) => (
            <motion.div
              key={locIndex}
              className="flex flex-col bg-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: locIndex * 0.2 }}
            >
              <div className="flex gap-3 items-center">
                <img
                  src={location.image.src}
                  alt={location.country}
                  className="w-24 h-auto sm:w-[134px] sm:h-[109px] object-cover font-garamond font-bold text-4xl"
                />
                <h3 className="mb-4 font-garamond font-bold text-lg sm:text-4xl">
                  {location.country}
                </h3>
              </div>
              <div className="p-1 flex-1">
                <ul>
                  {location.offices.map((office, idx) => {
                    const officeIndex = `${locIndex}-${idx}`;
                    return (
                      <li
                        key={idx}
                        className={`mb-3 border px-3 py-3 rounded-lg transition-all ${
                          openIndexes.includes(officeIndex)
                            ? "bg-[#FFE6E6] border-[#FF0000]"
                            : "border-[#8D8D8D]"
                        } ${
                          idx === location.offices.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <button
                          className="text-lg font-semibold w-full text-left flex justify-between items-center"
                          onClick={() => toggleOffice(officeIndex)}
                        >
                          {office.city}
                          <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                        <AnimatePresence>
                          {openIndexes.includes(officeIndex) && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                                overflow: "hidden",
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                overflow: "hidden",
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                overflow: "hidden",
                              }}
                              className="text-gray-600 mt-2 font-inter text-lg font-light"
                            >
                              <p>{office.address}</p>
                              <p>Phone: {office.phone}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
