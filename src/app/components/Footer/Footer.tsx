import React from "react";
import Logo from "../../assests/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import PartnerLogo from "../../assests/partners_logos.webp";
import SSL from "../../assests/ssl.webp";
import FooterLower from "../../assests/footer 1 1.png";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  type SocialLink = {
    name: string;
    link: string;
    icon: IconDefinition;
  };
  const footerData = {
    quick_links: [
      { title: "Home", link: "/" },
      { title: "Blog", link: "/blog" },
      { title: "Rules & Regulations", link: "/rules" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
    top_destinations: [
      { title: "Flights to Delhi", link: "/flights/delhi" },
      { title: "Flights to Mumbai", link: "/flights/mumbai" },
      { title: "Flights to Chennai", link: "/flights/chennai" },
      { title: "Flights to Bangalore", link: "/flights/bangalore" },
      { title: "Flights to Hyderabad", link: "/flights/hyderabad" },
      { title: "Flights to Ahmedabad", link: "/flights/ahmedabad" },
      { title: "Flights to Kolkata", link: "/flights/kolkata" },
    ],
    contact: {
      tollFree: "888-456-4382",
      email: "alanita@alanitatravel.net",
      website: "alanitatravel.net",
    },

    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/alanita.travel/",
        icon: faFacebook,
      },
      {
        name: "Twitter",
        link: "https://twitter.com/alanta_travel",
        icon: faTwitter,
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/alanta_travel/",
        icon: faInstagram,
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/alanta-travel/",
        icon: faLinkedin,
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/channel/UCrJ940YUQjg5762Zvqfz1Dw",
        icon: faYoutube,
      },
    ],
  };

  return (
    <footer className="bg-[#12264A] w-full relative ">
      <div className="absolute xl:left-0 xl:top-20 right-0 top-80">
        <div className="w-8 text-xl p-2 flex justify-center items-center bg-[#3b5998] text-white">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
        <div className="w-8 text-xl p-2 flex justify-center items-center bg-[#55acee] text-white">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="w-8 text-xl bg-gradient-to-bl from-[#e87339] via-[#da2646] to-[#ca226c] p-2 flex justify-center items-center text-white">
          <FontAwesomeIcon icon={faInstagram} />
        </div>

        <div className="w-8 text-xl p-2 flex justify-center items-center bg-[#007bb5] text-white">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className="w-8 text-xl p-2 flex justify-center items-center bg-[#bb0000] text-white">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(./background_pattern.webp)` }}
        className="relative w-full  text-white py-10 px-6 md:px-20 font-inter font-semibold bg-no-repeat bg-contain bg-right object-contain overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <img
              src={Logo.src}
              alt="Alanta Travel Logo"
              className="w-32 mb-4"
            />
            <div className="text-sm  space-y-3">
              <p>
                We strive to enhance our services on every level and deliver
                exceptional value to our beloved customer(s).
              </p>
              <p>
                Our customer-friendly, tech-knowledgeable representatives are
                available 24/7 to assist you.
              </p>
            </div>
          </div>

          {/* Middle Section - Links */}

          <div>
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold ">Quick Links</h3>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
            <ul className="text-sm space-y-4">
              {footerData.quick_links.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold ">Top Destinations</h3>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
            <ul className="text-sm space-y-4">
              {footerData.top_destinations.map((link, index) => (
                <li key={index} className="flex gap-3">
                  <FontAwesomeIcon icon={faJetFighter} />
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact*/}
          <div className="space-y-4">
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold ">Contact</h3>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
            <p className="text-sm">
              Toll Free Number: {footerData.contact.tollFree}
            </p>
            <p className="text-sm">Email: {footerData.contact.email}</p>
            <p className="text-sm">Website: {footerData.contact.website}</p>
          </div>
        </div>

        {/*   Certifications */}
        <div className="mt-32 w-full flex justify-center gap-6">
          <div className="flex flex-col items-center justify-between ">
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold text-sm sm:text-base md:text-lg">Officials Partners</h3>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
            <div className="w-full sm:w-[30vw] xl:w-[250px] h-auto xl:h-16">
              <Image
                src={PartnerLogo}
                className="w-full h-full object-cover"
                alt="Certifications"
              />
            </div>
          </div>

          <div className="flex flex-col lg:marker:items-center justify-between">
            <div className="flex flex-col gap-1 mb-2">
              <h3 className="font-bold text-sm sm:text-base md:text-xl">Secured Certificate</h3>
              <div className="w-8 h-[2px] bg-white"></div>
            </div>
            <div className="w-full sm:w-[30vw] xl:w-[250px] h-full xl:h-16">
              <Image
                src={SSL}
                className="w-full h-full object-contain"
                alt="Certifications"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center">
          <div className="xl:flex-row flex-col w-full rounded-xl items-center max-w-7xl flex justify-between bg-white bg-opacity-5 text-center text-xs  mt-6 py-4 px-4 gap-5">
            <div className="order-2 xl:order-1">
              &copy; 2025 | All rights reserved by Alanta Travel
            </div>
            <div className="text-lg flex gap-3 order-1 xl:order-2">
              {footerData.social.map((item: SocialLink, index: number) => {
                return (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*   footer location image */}
      <div className="w-full bottom-0 z-10">
        <Image
          src={FooterLower}
          className="w-full h-auto object-cover object-center"
          alt=""
        />
      </div>
    </footer>
  );
}
