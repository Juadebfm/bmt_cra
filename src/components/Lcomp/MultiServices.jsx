import {Link} from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const MultiServices = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      className="h-auto lg:h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 sm:gap-20 mt-10 md:mt-14 mb-10 md:mb-24 scroll_item "
    >
      <div className="w-full md:w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-[34px] lg:text-[44px] w-full sm:w-[90%] leading-[1.2] capitalize font-[600] text-primary_red text-start">
          Our Multi-disciplinary Team
        </h2>
        <p className="text-[18px] md:text-[20px] text-start leading-normal mt-6">
          Our transplant team which includes Paediatricians, haematologists,
          internists and various specialists, ensures excellent quality, comprehensive
          care. From Social Workers, Psychologists and Counsellors to
          Anaesthetists, we are here for our patients’ well-being, providing
          services and support before and after transplantation. <br />
          <Link to="/services">
            <span className="font-bold text-primary_red cursor-pointer">
              Learn More
            </span>
          </Link>
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <img
          src="./assets/bmt/person1.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default MultiServices;
