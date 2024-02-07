import React, { useEffect } from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const CTA = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 lg:gap-20 mt-10 md:mt-14 lg:mt-28 "
    >
      <div className="w-full lg:w-1/2 h-full p-0">
        <img
          src="./assets/bmt/donation_latest.png"
          alt=""
          className="object-cover md:w-full lg:w-auto"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="w-full lg:w-[95%] text-[34px] lg:text-[44px] text-start leading-[1.2] capitalize font-[600] text-primary_red">
          This is a CALL TO ACTION! BE A HERO!
          <br /> CONTRIBUTE TODAY!
        </h2>
        <p className="w-full text-[18px] md:text-[20px] leading-normal mt-8 text-start">
          Your contributions will help subsidise the cost of this life-saving
          procedure for the vast majority of Nigerians living with sickle cell
          disorder, giving them access to this cure
          <br />
          <br /> Help make this cure a reality for many! 
          <br />
          <br /> THANK YOU!
          <Link
            href="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTA;
