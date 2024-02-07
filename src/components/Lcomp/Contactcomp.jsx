import React, { useEffect } from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Contactcomp = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 mt-10 sm:mt-28 "
    >
      <div className="w-full lg:w-1/2 h-full p-0 sm:p-10">
        <img
          src="./assets/bmt/smiling_family.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[34px] lg:text-[44px] text-start leading-[1.2] capitalize font-[600] text-primary_red">
          Do you live with Sickle Cell Disorder or seeking support for a Loved
          one? Click the Contact Us Button Below
        </h2>
        <div className="w-full text-[18px] leading-normal mt-1">
          <Link
            href="/contact"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Contact Us"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contactcomp;
