import React, { useEffect, useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const LatestNews = ({ title = "Latest News & Updates", className = "" }) => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const router = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey =
          "eyJpdiI6IjJKbm5aeE9lNTRNWlc2a1pKK3NuUlE9PSIsInZhbHVlIjoiQ2JKTEdpcmpoNUZwUTVwMnJVZHlSR1lTMmgvV1hGRk5zdWhzbTZyM29VVlJhK3VVb21BcFJHbzU5aXFvT2NlUiIsIm1hYyI6IjUwMDFlM2VhM2IwYTFlYTY3YTE3YTQ2MTJmZWE1NTE1Yjc2YTExOGIzYWE2YTE4MzZlNTk0OTAwZDhmZGI4MTUiLCJ0YWciOiIifQ==";

        if (!apiKey) {
          console.error("API key not found!");
          return;
        }

        const requestOptions = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };

        const response = await fetch(
          `https://www.sicklecellfoundation.com/scfn-luth-api/api/admin/get-events-and-news?page=${currentPage}`,
          requestOptions
        );

        if (response.ok) {
          const result = await response.json();
          setNewsData(result.data);
          setTotalPages(result.last_page);
          // Store news data in local storage
          localStorage.setItem("newsData", JSON.stringify(result.data));
          console.log("Fetched news data:", result.data); // Log the fetched data
        } else {
          console.error("Failed to fetch data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePagination = () => {
    const pageNumbers = [];
    const maxVisibleButtons = 5; // Number of page numbers to show before/after ellipsis

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - maxVisibleButtons &&
          i <= currentPage + maxVisibleButtons)
      ) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageClick(pageNumber)}
        className={
          currentPage === pageNumber ? "active-page" : "text-slate-400"
        }
      >
        {pageNumber}
      </button>
    ));
  };

  const isBackDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const colors = ["border-red-500", "border-blue-500", "border-yellow-500"]; // Tailwind classes for border colors

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomBgColor = () => {
    const colors = [
      "rgba(223, 51, 49, 0.2)",
      "rgba(1, 115, 188, 0.2)",
      "rgba(254, 166, 0, 0.2)",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleReadMoreClick = (id) => {
    router(`/news/${id}`);
  };

  return (
    <section className="h-max px-[25px] sm:px-16 md:px-10 lg:px-16 mt-10 w-full flex flex-col items-center justify-start ">
      <h1 className="text-[34px] lg:text-[44px] w-full leading-[1.2] capitalize font-[600] text-primary_red text-center mb-10">
        {title}
      </h1>

      {newsData.length === 0 ? (
        <div className="w-full h-full text-xl italic text-primary_red text-center">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 lg:gap-10 mb-20">
          {newsData.map((newsItem) => (
            <div
              key={newsItem.id}
              onClick={() => handleReadMoreClick(newsItem.id)}
              className="shadow-md rounded-md hover:shadow-xl transition-shadow cursor-pointer border border-slate-100"
            >
              {newsItem.day || newsItem.month || newsItem.year ? (
                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.01)"; // Scale up on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; // Reset on hover out
                  }}
                  style={{ transition: "transform 0.5s ease-in-out" }}
                  className="flex flex-col items-center justify-between min-h-[380px] md:min-h-[430px] p-5"
                >
                  <div className="mb-5 relative bg-white border border-white">
                    <img
                      src={newsItem.events_news_front_image}
                      alt=""
                      className="w-full h-full rounded-lg"
                    />
                    <div className="custom_shape absolute -right-[1px] -bottom-[2px] bg-white border border-white"></div>
                    {newsItem.day && newsItem.month ? (
                      <div className="absolute right-8 top-[70%] text-white bg-red-500 p-3 rounded-b-lg">
                        <div className="flex gap-1 items-center justify-center flex-col w-[45px] h-[60px] font-bold text-sm">
                          <span>{newsItem.day}</span>
                          <span>{newsItem.month}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute right-8 top-[70%] text-white bg-red-500 p-3 rounded-b-lg">
                        <div className="flex gap-1 items-center justify-center flex-col w-[45px] h-[60px] font-bold text-sm">
                          <span>{new Date().getDate()}</span>
                          <span>
                            {new Date().toLocaleString("default", {
                              month: "short",
                            })}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <span
                      className={`inline-block px-2 py-0 text-[#232323]/50 font-bold tracking-wider uppercase text-[15px] border-s-2 ${getRandomColorClass()}`}
                    >
                      {newsItem.category_type}
                    </span>
                    <h2 className="font-bold mb-3 leading-5 line-clamp-4">
                      {newsItem.events_news_name}
                    </h2>
                    <p className="text-[#777777] text-sm pb-8">
                      <span className="line-clamp-5">
                        {newsItem.events_news_content}
                      </span>{" "}
                      <span
                        onClick={() => handleReadMoreClick(newsItem.id)}
                        className="text-primary_red cursor-pointer hover:underline transition pt-3"
                      >
                        Read More
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.01)"; // Scale up on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; // Reset on hover out
                  }}
                  style={{
                    backgroundImage: `linear-gradient(to top, ${getRandomBgColor()} 50%, transparent 100%), url(${
                      newsItem.events_news_front_image
                    })`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "360px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    position: "relative",
                    color: "#fff",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="rounded-md overflow-hidden h-[252px] sm:h-[390px] object-contain"
                >
                  <div className="py-8 px-4">
                    <span
                      className={`inline-block px-2 py-0 text-white font-bold tracking-wider uppercase text-[15px] border-s-2 mb-5 ${getRandomColorClass()}`}
                    >
                      {newsItem.category_type}
                    </span>
                    <h2 className="text_shadow_ text-">
                      {newsItem.events_news_name}
                    </h2>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="self-end flex items-center justify-center space-x-3">
        <button
          className={
            isBackDisabled
              ? "flex items-center space-x-1 justify-center opacity-50"
              : "flex items-center space-x-1 justify-center opacity-100"
          }
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <IoChevronBackSharp /> <span>Back</span>
        </button>
        <span className="flex item-center justify-center space-x-3">
          {generatePagination()}
        </span>
        <button
          className={
            isNextDisabled
              ? "flex items-center space-x-1 justify-center opacity-50"
              : "flex items-center space-x-1 justify-center opacity-100"
          }
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <span>Next</span> <IoChevronForwardSharp />
        </button>
      </div>
    </section>
  );
};

export default LatestNews;
