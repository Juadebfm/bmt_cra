import { useEffect, useRef, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import LatestNews from "../../../components/Hcomp/LatestNews";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams(); // use useParams hook to get the id from the route
  const [newsDetails, setNewsDetails] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsData, setNewsData] = useState([]);

  const scrollRef = useRef(null);

  const scrollToRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // Adjust this value for scroll distance
    }
  };

  useEffect(() => {
    const storedNewsData = localStorage.getItem("newsData");
    if (storedNewsData) {
      const parsedNewsData = JSON.parse(storedNewsData);
      setNewsData(parsedNewsData);
      const parsedId = parseInt(id, 10); // Parse id to an integer

      const newsItem = parsedNewsData.find((item) => item.id === parsedId);
      if (newsItem) {
        setNewsDetails(newsItem);
        setCurrentIndex(parsedNewsData.indexOf(newsItem));
      } else {
        console.log("News details not found");
      }
    } else {
      console.log("No news data found in local storage");
    }
  }, [id]);

  const navigateNews = (direction) => {
    if (direction === "next" && currentIndex < newsData.length - 1) {
      const nextIndex = currentIndex + 1;
      setNewsDetails(newsData[nextIndex]);
      setCurrentIndex(nextIndex);
    } else if (direction === "back" && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setNewsDetails(newsData[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <>
      <section className="px-[25px] md:px-16 py-[20px] md:py-10 mt-24">
        <div className="flex items-center justify-between py-4">
          <button
            className={`flex items-center justify-center ${
              currentIndex === 0 ? "text-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={() => navigateNews("back")}
            disabled={currentIndex === 0}
          >
            <IoChevronBackSharp className="text-3xl" /> <span>Back</span>
          </button>
          <button
            className={`flex items-center justify-center ${
              currentIndex === newsData.length - 1
                ? "text-gray-400 cursor-not-allowed"
                : ""
            }`}
            onClick={() => navigateNews("next")}
            disabled={currentIndex === newsData.length - 1}
          >
            <span>Next</span> <IoChevronForwardSharp className="text-3xl" />
          </button>
        </div>
        {newsDetails ? (
          <div>
            <h2 className="text-[22px] md:text-[32px] font-bold leading-tight mb-5">
              {newsDetails.events_news_name}
            </h2>
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex overflow-x-auto scroll_snap scrollbar-thin scrollbar-thumb-primary_dark scrollbar-track-primary_faded_grey/50 justify-start gap-5 mt-8 mb-10"
              >
                {newsDetails.event_news_image_array.map((image, index) => (
                  <img
                    key={index}
                    src={image.file_url}
                    alt={`${index + 1}`}
                    className="w-40 h-40 object-cover m-2 h-[260px] w-[350px] rounded-2xl shadow-md border border-slate-100"
                  />
                ))}
              </div>

              <button
                onClick={scrollToRight}
                className="lg:hidden absolute top-1/2 -right-3 transform -translate-y-1/2"
              >
                <IoChevronForwardSharp className="text-3xl text-primary_red" />
              </button>
            </div>
            <div className="text-justify lg:text-start">
              <div
                dangerouslySetInnerHTML={{
                  __html: newsDetails.events_news_content.replace(
                    /\n/g,
                    "<br/>"
                  ),
                }}
              />
            </div>
          </div>
        ) : (
          <div className="w-full h-full text-xl italic text-primary_red text-center">
            Loading...
          </div>
        )}
      </section>
      <LatestNews title="Related News" />
    </>
  );
};

export default NewsDetails;
