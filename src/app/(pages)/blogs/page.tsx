import React from "react";
import Blogs from "../../constants/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
export default function page() {
  return (
    <div className="w-full flex justify-center p-5">
      <div className="w-full max-w-[1347px]">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-5">
          {Blogs.map((blog: Record<string, string>) => {
            return (
              <Cards
                title={blog.title}
                image={blog.image}
                description={blog.description}
                date={blog.date}
                author={blog.author}
                key={Math.random()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Cards({
    title,
    image,
    description,
    date,
    author,
  }: {
    title: string;
    image: string;
    description: string;
    date: string;
    author: string;
  }) {
    return (
      <div className="w-full h-auto xl:h-[550px] bg-white border border-gray-200 rounded-lg shadow-xl font-inter flex flex-col">
        <a href="#">
          <img className="w-full rounded-t-lg  object-cover object-center" src={image} alt="Blog Image" />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          {/* Title and Description */}
          <div className="flex-grow">
            <a href="#">
              <h5 className="mb-2 text-2xl font-garamond font-bold tracking-tight text-gray-900">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
              {description}
            </p>
          </div>
  
          {/* Author & Date */}
          <div className="flex justify-between items-center text-gray-600 dark:text-gray-900 text-sm py-3">
            <div className="flex items-center">
              <FontAwesomeIcon className="text-red-600" icon={faUser} />
              <span className="ml-1">{author}</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon className="text-red-600" icon={faCalendar} />
              <span className="ml-1">{date}</span>
            </div>
          </div>
  
          {/* Read More Button */}
          <a
            href="#"
            className="mt-auto inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800 w-32 "
          >
            Read more
            <svg
              className="rtl:rotate-180 w-4 h-4 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
