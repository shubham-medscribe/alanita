"use client";
import React, { useState } from "react";

const data = {
  istanbul: [
    {
      heading: "Destination Wedding in Istanbul with Alanita Travel",
      desc: "A destination wedding in Istanbul is a dream come true for couples who want a perfect blend of history, romance, and breathtaking views. Known as the city where East meets West, Istanbul offers stunning venues, rich culture, and an unforgettable wedding experience. Alanita Travel is here to make your wedding journey seamless, luxurious, and stress-free.",
    },
    {
      heading: "Why Choose Istanbul for Your Destination Wedding?",
      desc: "Istanbul is a city steeped in history and beauty, making it an ideal wedding destination. With grand palaces, luxurious hotels, and picturesque waterfront venues, Istanbul provides a magical backdrop for your special day. The city's rich culture, delicious cuisine, and warm hospitality make it even more enchanting for couples and guests alike.",
    },
    {
      heading: "Top Wedding Venues in Istanbul",
      desc: [
        "Ciragan Palace Kempinski : A former Ottoman palace, this luxury hotel offers a fairytale setting with breathtaking views of the Bosphorus.",
        "Esma Sultan Mansion : A historic venue with a mix of modern elegance and Ottoman charm, perfect for a romantic wedding.",
        "Four Seasons Hotel Bosphorus : A waterfront venue offering stunning views, impeccable service, and a dreamy ambiance.",
        "Adile Sultan Palace : Nestled by the Bosphorus, this palace offers a royal setting for a grand wedding celebration.",
        "Sait Halim Pasha Mansion : A beautifully restored mansion providing a luxurious and intimate wedding experience.",
      ],
    },
    {
      heading: "Create Magical Moments with Alanita Travel",
      desc: "With Alanita Travel, your Istanbul destination wedding will be an unforgettable experience filled with love, elegance, and perfection. Let us help you create magical moments that last a lifetime!",
    },
  ],
  bodrum: [
    {
      heading: "Destination Wedding in Bodrum with Alanita Travel",
      desc: "Bodrum, Turkey, is a dream destination for couples looking to tie the knot in a breathtaking setting. With its stunning beaches, luxurious resorts, and rich history, Bodrum offers the perfect blend of romance and elegance. At Alanita Travel, we specialize in crafting unforgettable destination weddings, ensuring a seamless and stress-free experience for you and your guests.",
    },
    {
      heading: "Why Choose Bodrum for Your Wedding?",
      desc: "Bodrum’s picturesque coastline, charming old town, and Mediterranean climate make it an ideal wedding destination. Whether you prefer a beachfront ceremony, a lavish resort wedding, or an intimate yacht celebration, Bodrum has it all. The region is home to world-class venues, five-star accommodations, and excellent hospitality, creating a magical atmosphere for your special day.",
    },
    {
      heading: "Our Destination Wedding Services",
      desc: [
        "Flight Bookings & Travel Arrangements: We offer exclusive flight deals for you and your guests, ensuring a comfortable journey to Bodrum.",
        "Venue Selection: From stunning beachside resorts to luxurious private villas, we help you choose the perfect wedding venue.",
        "Customized Wedding Packages: Our packages include decor, catering, photography, and entertainment, tailored to your preferences.",
        "Guest Accommodation & Transfers: We arrange hassle-free hotel stays and transportation for your wedding guests.",
        "Honeymoon Planning: Extend your celebration with a romantic honeymoon in Bodrum or other exotic Turkish destinations.",
      ],
    },
    {
      heading: "Plan Your Dream Wedding with Alanita Travel",
      desc: "Let us turn your wedding dreams into reality in the enchanting beauty of Bodrum. With our expertise, you can relax and enjoy every moment while we handle the logistics. Contact Alanita Travel today to start planning your destination wedding in Bodrum!",
    },
  ],
  antalya: [
    {
      heading: "Destination Wedding in Antalya with Alanita Travel",
      desc: "A destination wedding in Antalya, Turkey, is a dream come true for couples seeking a blend of romance, luxury, and breathtaking scenery. Nestled along the Mediterranean coast, Antalya boasts stunning beaches, historic sites, and world-class resorts, making it the perfect wedding destination. At Alanita Travel, we specialize in crafting unforgettable wedding experiences tailored to your dreams.",
    },
    {
      heading: "Why Choose Antalya for Your Destination Wedding?",
      desc: "Antalya offers a perfect mix of picturesque landscapes and vibrant culture. Whether you dream of a beachfront ceremony, a lavish resort wedding, or a historical venue with Ottoman charm, this enchanting city has it all. The Mediterranean climate ensures pleasant weather year-round, adding to the allure of an outdoor wedding.",
    },
    {
      heading: "Seamless Wedding Planning with Alanita Travel",
      desc: [
        "Flight Bookings & Travel Arrangements: We ensure a hassle-free journey for you and your guests with exclusive flight deals.",
        "Luxurious Venues: Choose from a selection of beachfront resorts, historic mansions, and grand hotels tailored to your wedding style.",
        "Accommodation & Transportation: We arrange comfortable stays and seamless transfers for your wedding party.",
        "Wedding Coordination: Our experienced partners handle décor, catering, entertainment, and photography to create a magical experience.",
        "Legal & Documentation Assistance: We guide you through the necessary legal paperwork, making the process smooth and stress-free.",
      ],
    },
    {
      heading: "A Memorable Experience for You & Your Guests",
      desc: "Beyond the wedding day, Antalya offers an unforgettable experience for couples and their guests. From exploring ancient ruins to indulging in Turkish cuisine and relaxing at luxurious spas, there’s something for everyone. Alanita Travel also arranges pre- and post-wedding tours to make your celebration even more special.",
    },
    {
      heading: "Start Your Dream Wedding Journey Today",
      desc: "At Alanita Travel, we turn your destination wedding dreams into reality. Let us take care of the details while you focus on celebrating love in the mesmerizing city of Antalya. Contact us today to begin planning your perfect wedding getaway!",
    },
  ],
  dubai: [
    {
      heading: "Destination Wedding in Dubai with Alanita Travel",
      desc: "Dubai, a city of luxury, grandeur, and breathtaking landscapes, is the perfect destination for a dream wedding. From stunning beachfront venues to opulent ballrooms, Dubai offers a magical backdrop for couples looking to tie the knot in style. With Alanita Travel, your destination wedding in Dubai becomes a seamless, hassle-free experience.",
    },
    {
      heading: "Why Choose Dubai for Your Destination Wedding?",
      desc: "Dubai offers some of the world’s most luxurious wedding venues, with picturesque settings ranging from golden desert dunes to lavish 5-star hotels. Whether you envision a romantic beachside ceremony, a rooftop wedding with stunning skyline views, or a grand celebration in a palatial hall, Dubai provides the perfect backdrop. With year-round sunshine, it remains an ideal wedding destination in any season.",
    },
    {
      heading: "Alanita Travel – Your Trusted Partner for a Dream Wedding",
      desc: "At Alanita Travel, we specialize in curating exclusive wedding travel packages to Dubai. Our team ensures every detail is taken care of, from flight bookings to hotel accommodations and guest arrangements. We provide customized travel solutions that align with your budget and preferences, ensuring a stress-free experience for you and your loved ones.",
    },
    {
      heading: "Make Your Dream Wedding a Reality",
      desc: "Planning a destination wedding can be overwhelming, but with Alanita Travel, it becomes an effortless and enjoyable experience. Our dedicated team ensures that your wedding journey is smooth, allowing you to focus on creating beautiful memories with your loved ones.",
    },
    {
      heading: "Start Planning Your Destination Wedding in Dubai",
      desc: "Let Alanita Travel make your destination wedding in Dubai a fairy tale come true! Contact us today to start planning your big day.",
    },
  ],
};

export default function DestinationWedding() {
  const [currentLocation, setCurrentLocation] = useState<
    Array<Record<string, string | Array<string>>>
  >(data.istanbul);
  return (
    <>
      <div className="w-full flex justify-center p-5 text-[#1C1C1C] xl:pt-20">
        <div className="w-full max-w-[1347px]  font-garamond font-bold xl:space-y-5">
          <h1 className="text-[9vw] md:text-4xl lg:text-5xl xl:text-6xl">
            Destination Wedding
          </h1>
          <h2 className="text-[37px]">Turkey</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center 2xl:space-y-10 pb-[10vw] xl:pb-0 2xl:py-0 overflow-hidden">
        <div className="p-5 max-w-[1347px] grid grid-col-1 xl:grid-cols-2 gap-8 min-h-[839px] text-[#1C1C1C] w-full ">
          {/*    col-1 */}
          <div className="w-full ">
            {/*  Cities */}
            <div className="pb-5 w-full flex flex-wrap gap-5 xl:justify-between capitalize">
              <button
                style={{ backgroundColor: "#fedbdb" }}
                className="py-2 px-10 block rounded-xl text-[28px]"
                onClick={() => setCurrentLocation(data.istanbul)}
              >
                Istanbul
              </button>
              <button
                onClick={() => setCurrentLocation(data.bodrum)}
                style={{ backgroundColor: "#fedbdb" }}
                className="py-2 px-10  rounded-xl text-[28px]"
              >
                Bodrum
              </button>
              <button
                onClick={() => setCurrentLocation(data.antalya)}
                style={{ backgroundColor: "#fedbdb" }}
                className="py-2 px-10  rounded-xl text-[28px]"
              >
                Antalya
              </button>
            </div>
            {/*  content */}

            <div className="space-y-5 w-full h-full">
              {currentLocation.map(
                (
                  item: Record<string, string | Array<string>>,
                  index: number
                ) => {
                  return (
                    <div key={index}>
                      {!Array.isArray(item.desc) && (
                        <div className="font-inter">
                          <h1 className="text-[#000000] font-bold text-lg">
                            {item.heading}
                          </h1>
                          <p className="mt-2 text-base font-light">
                            {item.desc}
                          </p>
                        </div>
                      )}

                      {Array.isArray(item.desc) && (
                        <div className="font-inter">
                          <h1 className="text-[#000000] font-bold text-lg">
                            {item.heading}
                          </h1>
                          <ol className="list-decimal list-inside 2xl:list-outside  text-base font-light">
                            {item.desc.map((item: string, index: number) => {
                              return (
                                <li className="" key={index}>
                                  <span className="font-bold">
                                    {item.split(":")[0] + ":"}
                                  </span>

                                  <span>{item.split(":")[1]}</span>
                                </li>
                              );
                            })}
                          </ol>
                          {/*    <div className="mt-2 text-base font-light">
                          <p>
                            {`With Alanita Travel, your Istanbul destination wedding will be
                   an unforgettable experience filled with love, elegance, and
                 perfection. Let us help you create magical moments that last a
               lifetime!`}
                          </p>
                        </div> */}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/*    col-2 */}
          <div className="flex justify-center xl:justify-end">
            <div
              style={{ backgroundImage: `url(/istabul.jpg)` }}
              className="w-[50vw] h-[50vw] xl:w-[487px] xl:h-[484px] rounded-3xl bg-cover bg-center bg-no-repeat object-cover relative"
            >
              <div
                style={{ backgroundImage: `url(/couple.jpg)` }}
                className="w-[30vw] h-[30vw] xl:w-[331px] xl:h-[334px] rounded-3xl bg-cover bg-center bg-no-repeat object-cover absolute -bottom-[10vw] -left-[10vw] xl:-bottom-52 xl:-left-28 shadow-xl"
              ></div>
            </div>
          </div>
        </div>

        <div className="p-5 max-w-[1347px] pt-[13vw] xl:pt-0  grid grid-col-1 xl:grid-cols-2 gap-8 min-h-[750pxpx] text-[#1C1C1C] w-full ">
          {/*    col-1 */}
          <div className="w-full xl:order-2">
            {/*  content */}
            <div className="space-y-5 w-full h-full">
              <h1 className="text-[#000000] font-bold text-4xl font-garamond">
                Dubai
              </h1>
              {data.dubai.map(
                (
                  item: Record<string, string | Array<string>>,
                  index: number
                ) => {
                  return (
                    <div key={index}>
                      {!Array.isArray(item.desc) && (
                        <div className="font-inter">
                          <h1 className="text-[#000000] font-bold text-lg">
                            {item.heading}
                          </h1>
                          <p className="mt-2 text-base font-light">
                            {item.desc}
                          </p>
                        </div>
                      )}

                      {Array.isArray(item.desc) && (
                        <div className="font-inter">
                          <h1 className="text-[#000000] font-bold text-lg">
                            {item.heading}
                          </h1>
                          <ol className="list-decimal list-inside 2xl:list-outside  text-base font-light">
                            {item.desc.map((item: string, index: number) => {
                              return (
                                <li className="" key={index}>
                                  <span className="font-bold">
                                    {item.split(":")[0] + ":"}
                                  </span>

                                  <span>{item.split(":")[1]}</span>
                                </li>
                              );
                            })}
                          </ol>
                          {/*    <div className="mt-2 text-base font-light">
                          <p>
                            {`With Alanita Travel, your Istanbul destination wedding will be
                   an unforgettable experience filled with love, elegance, and
                 perfection. Let us help you create magical moments that last a
               lifetime!`}
                          </p>
                        </div> */}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/*    col-2 */}
          <div className="flex justify-center xl:justify-start xl:order-1">
            <div
              style={{ backgroundImage: `url(/istabul.jpg)` }}
              className="w-[50vw] h-[50vw] xl:w-[487px] xl:h-[484px] rounded-3xl bg-cover bg-center bg-no-repeat object-cover relative"
            >
              <div
                style={{ backgroundImage: `url(/couple.jpg)` }}
                className="w-[30vw] h-[30vw] xl:w-[331px] xl:h-[334px] rounded-3xl bg-cover bg-center bg-no-repeat object-cover absolute -bottom-[10vw] left-[30vw] xl:-bottom-40 xl:left-64 shadow-xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
