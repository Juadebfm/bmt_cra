import {Link} from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const STC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] sm:px-16 mt-10 sm:mt-28 "
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[34px] lg:text-[44px] leading-[1.2] text-start mt-7 lg:mt-0 capitalize font-[600] text-primary_red">
          Understanding stem cell transplantation
          <span className="text-[22px] font-normal ml-2 block">
            (Bone marrow transplantation)
          </span>
        </h2>
        <p className="w-[95%] text-[18px] md:text-[20px] leading-normal mt-8 text-start">
          Access in-depth disease information on conditions like Sickle Cell
          Disease and Leukemia treated with BMT. Stay informed and engaged with
          upcoming webinars and workshops, fostering knowledge of BMT and
          related health topics.
          <Link to="/education" className="pl-2">
            <span className="font-bold text-primary_red cursor-pointer">
              Learn More
            </span>
          </Link>
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-full relative">
        <img
          src="./assets/bmt/red_slash2.png"
          alt=""
          className="object-cover"
        />
        <img
          src="./assets/bmt/red_slash.png"
          alt=""
          className="object-cover absolute bottom-5 w-full h-auto"
        />
      </div>
    </section>
  );
};

export default STC;
