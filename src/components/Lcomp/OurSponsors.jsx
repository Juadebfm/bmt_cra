"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const OurSponsors = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="h-[30vh] md:h-[50vh] lg:h-[60vh] px-[25px] sm:px-16 mt-10 sm:mt-28 flex flex-col items-start justify-start ">
      <h2
        data-aos="fade-right"
        data-aos-duration="600"
        className="text-[34px] lg:text-[44px] text-center lg:text-start w-full leading-[1.2] capitalize font-[600] text-primary_red"
      >
        Our Sponsors
      </h2>
      <div
        data-aos="fade-left"
        data-aos-duration="600"
        className="w-full lg:w-1/2 h-full mt-10 sm:mt-20 self-end"
      >
        <img
          src="./assets/bmt/logos_nnpc.png"
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default OurSponsors;
