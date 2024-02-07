"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slidesSm from "../Lcomp/SlidesDataSm";

export default function SmallScreenSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesSm.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container block sm:hidden">
              <div className="image-container">
                <div className="overlay"></div>

                <img
                  className="slide-image"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
