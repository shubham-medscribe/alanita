import Image from "next/image";
import Blog1 from "../../assests/blog1.jpg";
import Blog2 from "../../assests/blog2.jpg";
import Blog3 from "../../assests/blog3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const blogPosts = [
  {
    id: 1,
    title: "How to Get Cheap Flight Tickets to India",
    image: Blog1,
    description: "10 Busiest Indian Airports and Interesting Facts About Them",
  },
  {
    id: 2,
    title:
      "Best Time to Book Flights to India from USA: A Guide for Smart Travelers",
    image: Blog2,
    description: "7 Expert Tips to Sleep Comfortably on a Plane Seat",
  },
  {
    id: 3,
    title: "Booking Flights in Advance: The Smart Way to Travel",
    image: Blog3,
    description: "8 Must-Try Delicious Dishes from Street Foods in India",
  },
];

export default function OurBlogOffers() {
  return (
    <section className="py-12 bg-white">
      <div
        style={{ color: "#1C1C1C" }}
        className="container max-w-w-[1347px] mx-auto px-4 text-center"
      >
        <h2 className="text-5xl font-bold mb-6 font-garamond">
          Our Blogs Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-fit gap-6  justify-center">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="w-full bg-white shadow-lg rounded-3xl overflow-hidden mx-auto"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-auto   object-cover object-center "
              />
              <div className="p-5 w-full">
                <h3 className="text-left text-[20px] font-semibold">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
        <div className="w-full md:w-1/2 flex justify-between  items-center pt-5 gap-2">
          <button className="bg-[#FFE4E4] w-14 h-14 flex items-center justify-center  rounded-full">
            <FontAwesomeIcon
              className="text-sm text-black"
              icon={faArrowLeft}
            />
          </button>
          <div className="w-[90%]">
            <div className={`h-[2px] rounded-xl w-[50%] bg-[#FE0000]`}></div>
          </div>
          <button className="bg-[#FFE4E4] w-14 h-14 flex items-center justify-center rotate-180  rounded-full">
            <FontAwesomeIcon
              className="text-sm text-black"
              icon={faArrowLeft}
            />
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
