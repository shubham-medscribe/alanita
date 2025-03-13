"use client";
import { useParams } from "next/navigation";
import { locations } from "@/app/constants/locations";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import BookYourFlight from "@/app/components/BookYourFlight/BookYourFlight";
import OurLocation from "@/app/components/OurLocations/OurLocation";

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const data = locations[slug as keyof typeof locations];
  console.log(data);
  if (!data) {
    return <h1 className="text-center text-red-500">Location not found!</h1>;
  }

  return (
    <div className="w-full flex justify-center items-center flex-col text-black font-inter">
      <BookYourFlight />

      <div className="w-full max-w-[1347px] p-5">
        {data?.desc && (
          <div className="py-7">{data?.desc && <p>{data.desc}</p>}</div>
        )}

        <div className="w-full">
          <div className="w-full xl:w-1/3">
            <h2 className="font-garamond font-bold text-3xl">
              {data?.descwithimg &&
                (data.descwithimg as { heading: string }).heading}
            </h2>
          </div>
          <div className="flex gap-5 pt-5">
            <div className="flex gap-5 w-3/5">
              <div className="">
                {Array.isArray(data?.descwithimg?.desc) ? (
                  data.descwithimg.desc.map((desc: string, index: number) => (
                    <p key={index}>
                      <FontAwesomeIcon
                        className="text-red-600"
                        icon={faJetFighter}
                      />
                      &nbsp; {desc}
                    </p>
                  ))
                ) : (
                  <p>
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faJetFighter}
                    />
                    &nbsp; {data?.descwithimg?.desc}
                  </p>
                )}
              </div>
            </div>
            {data?.descwithimg?.img && (
              <div className="flex items-center justify-center w-3/4">
                <Image
                  src={data.descwithimg.img}
                  alt="image"
                  className="object-contain w-full max-w-xl h-auto max-h-96 rounded-3xl"
                />
              </div>
            )}
          </div>
        </div>

        <div className="w-full py-5 space-y-3">
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

      {/* Tips Section */}
      {/*    tips */}
      {data.tips && (
        <div
          style={{ backgroundImage: `url('/tips.png')` }}
          className="w-full bg-center bg-cover flex justify-center py-5"
        >
          <div className="w-full text-white max-w-[1347px] p-5">
            <h3 className="text-3xl font-bold font-garamond">
              {data.tips.heading}
            </h3>
            {Array.isArray(data?.tips.list) &&
              data.tips.list.map((point: string, index) => (
                <div className="space-y-5" key={index}>
                  <p className="py-2">
                    <FontAwesomeIcon
                      className="text-red-600"
                      icon={faJetFighter}
                    />
                    &nbsp;
                    {point.includes(":") ? (
                      <>
                        <strong>{point.split(":")[0]}:</strong>{" "}
                        {point.split(":")[1]}
                      </>
                    ) : (
                      point
                    )}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}

      {data?.list2 && (
        <div className="w-full max-w-[1347px] p-5 space-y-3 py-10">
          <div className="w-full space-y-3">
            {Array.isArray(data?.list2) &&
              data.list2.map((list, index) => (
                <div className="space-y-3" key={index}>
                  <h3 className="text-3xl font-bold font-garamond">
                    {list.heading}
                  </h3>
                  {Array.isArray(list.desc) &&
                    list.desc.map((desc: string, i) => (
                      <div key={i} className="flex">
                        <p>
                          <FontAwesomeIcon
                            className="text-red-600"
                            icon={faJetFighter}
                          />
                          &nbsp; {desc}
                        </p>
                      </div>
                    ))}

                  {!Array.isArray(list.desc) && (
                    <div className="flex">
                      <p>
                        <FontAwesomeIcon
                          className="text-red-600"
                          icon={faJetFighter}
                        />
                        &nbsp; {list.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="w-full">
            <div className="py-5 font-garamond text-4xl font-bold">
              <h2>{data?.welcome?.heading}</h2>
            </div>
            {data?.welcome?.map && (
              <Image
                src={data.welcome.map}
                alt="Welcome Map"
                className="w-full"
              />
            )}
          </div>
        </div>
      )}

      <div className="w-full max-w-[1347px]">
        <OurLocation />
      </div>
    </div>
  );
}
