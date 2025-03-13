"use client";
import blogContent from "@/app/constants/blogs_content";
import {
  faCalendar,
  faJetFighter,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import React from "react";
type Section = {
  heading: string;
  content?: string | string[];
  image?: string;
  points?:
    | string[]
    | {
        heading: string;
        content: string;
      }[];
};


type Data = {
  section: Section[];

}


export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const data = blogContent[slug as keyof typeof blogContent];
  console.log(data);
  /* if (!data) {
      return <h1 className="text-center text-red-500">Location not found!</h1>;
    } */
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1347px] space-y-7 p-5">
        {/*   date & title */}
        <div className="flex w-full space-x-4">
          <div className="w-24 h-24 rounded-2xl bg-[#d6171f] flex items-center justify-center flex-col font-bold font-inter">
            <span>27</span>
            <span>February</span>
          </div>
          <div className="w-full min-h-24 flex flex-col text-gray-900 justify-between gap-5">
            <div className="max-w-[850px]">
              <h1 className="text-4xl font-bold font-garamond">{data.title}</h1>
            </div>
            <div className="flex gap-3 text-[#777984] font-semibold">
              <div>
                <FontAwesomeIcon className="text-[#d6171f]" icon={faUser} />
                &nbsp;Analita Travels
              </div>
              <div>
                <FontAwesomeIcon className="text-[#d6171f]" icon={faCalendar} />
                &nbsp;{data.date}
              </div>
            </div>
          </div>
        </div>
        {/*  image cover */}
        <div className="w-full flex justify-center">
          <img src={data.image} className="w-full  sm:w-[50vw] h-auto" alt="" />
        </div>

        {/*  content start*/}
        <div className="w-full text-[#777984] space-y-3">
          {/*   intro */}
          {"intro" in data && (
            <div>{typeof data?.intro === "string" && <p>{data?.intro}</p>}</div>
          )}

          {/*   sections */}
          
        
          
          {/*  section end */}

          {/*    if problem property exist we have render it */}

          {"problems" in data && Array.isArray(data.problems) && (
            <div className="space-y-3">
              {data.problems.map((problem, idx) => (
                <div className="space-y-2" key={idx}>
                  <h1 className="text-[#17233e] font-bold text-2xl">
                    {problem.heading}
                  </h1>
                  <div>
                    <div className="flex gap-1 flex-col lg:flex-row">
                      <div className="font-bold text-[#17233e] flex gap-1 items-center">
                        <FontAwesomeIcon
                          className="text-[#d6171f]"
                          icon={faJetFighter}
                        />
                        Mistake:
                      </div>
                      <p>{problem.content}</p>
                    </div>
                    <div className="flex gap-1 flex-col lg:flex-row">
                      <div className="font-bold text-[#17233e] flex gap-1 items-center">
                        <FontAwesomeIcon
                          className="text-[#d6171f]"
                          icon={faJetFighter}
                        />
                        Solution:
                      </div>
                      <p className="text-base text-[#777984] font-normal">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* conclusion */}
          <div className="pb-7">
            <h2 className="font-bold text-xl text-[#17233e]">Conclusion</h2>
            {"conclusion" in data && (
              <div>
                <p>{data.conclusion}</p>
              </div>
            )}

            {"callToAction" in data && data.callToAction && (
              <div className="font-semibold">
                <a className="text-[#d6171f]" href={data.callToAction.link}>
                  {data.callToAction.content}
                </a>
              </div>
            )}
          </div>
        </div>
        {/* content end */}
      </div>
    </div>
  );
}
