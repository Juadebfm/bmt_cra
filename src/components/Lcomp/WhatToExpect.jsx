import {Link} from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const WhatToExpect = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col lg:flex-row items-center justify-center gap-10 sm:pr-14 px-[25px] mt-10 lg:mt-28 w-full "
    >
      <div className="w-full lg:w-1/2 h-full p-0 sm:p-10 pl-0">
        <img
          src="./assets/bmt/women.png"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-0 sm:p-10">
        <h2 className="w-full lg:w-[85%] text-[34px] lg:text-[44px] text-start leading-[1.2] capitalize font-[600] text-primary_red">
          What to expect in stem cell transplantation
          <span className="text-[20px] font-normal ml-2 p-0 mt-0 block">
            (Bone marrow transplantation)
          </span>
        </h2>
        <p className="w-full text-[18px] md:text-[20px] leading-normal mt-4 text-start">
          Welcome to our BMT hub. Learn about procedures, find resources, and be
          inspired by patient stories - your comprehensive guide to a successful
          transplant journey.
          <Link to="/whattoexpect" className="pl-2">
            <span className="font-bold text-primary_red cursor-pointer">
              Learn More
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default WhatToExpect;
