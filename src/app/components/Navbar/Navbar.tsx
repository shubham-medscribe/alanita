"use client";

import React from "react";
import { motion } from "framer-motion";
import Info from "../../info.json";
import Logo from "../../assests/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Flights", href: "/flight" },
    { name: "E-Forms", href: "/e-forms" },
    { name: "Rules & Regulations", href: "/rules" },
    { name: "Contact", href: "/contact-us" },
    { name: "Blog", href: "/blogs" },
  ];

  return (
    <nav className="flex justify-center relative">
      <div className="w-full flex items-center justify-between px-2 py-2  shadow-lg lg:shadow-none">
        {/* Logo */}
        <div className="w-fit lg:block">
          <figure>
            <Image
              src={Logo}
              alt="Logo"
              className="object-contain w-[7em] sm:w-[9em] xl:w-[189px] h-auto"
              priority
            />
          </figure>
        </div>

        {/* Desktop Links */}
        <div className="w-2/3 hidden lg:block">
          <ul
            className={`list-none md:text-base xl:text-lg  font-bold flex justify-between text-black px-5 w-full`}
          >
            {links.map((link) => (
              <li
                className={`hover:text-[#FE0000] transition-all duration-200`}
                key={link.name}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call Button */}
        <div className="w-fit hidden lg:block">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full lg:text-sm xl:text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            {Info.phone_no}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="w-fit lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-bold rounded-full text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-base w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon
              className="text-xl"
              icon={isOpen ? faTimes : faBars}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated with Framer Motion) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 w-full h-full bg-white shadow-lg lg:hidden z-50 flex flex-col items-center justify-center"
      >
        {/* Close Button (Top Right) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-gray-800 hover:text-red-600 text-3xl transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Mobile Menu Links */}
        <ul className="space-y-6 text-lg font-semibold text-black">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`block w-full px-6 py-2 text-gray-900 hover:text-[#FE0000] transition-colors duration-300`}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}
