import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Transplant = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1500"
      className="px-[25px] lg:px-16 mt-28"
    >
      <h2 className="w-full text-[34px] lg:text-[44px] text-center uppercase leading-[1.2] font-[600] text-primary_red">
        THE TRANSPLANT TEAM
      </h2>
      <p className="text-[18px] leading-normal text-center">
        The Transplant Team is multidisciplinary, consisting of the following
      </p>
      <div className="w-[90%] lg:w-[70%] m-auto grid_special mt-10">
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Social Workers, Psychologists and Counsellors
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Dieticians
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold w-full">
            Physiotherapist
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Multispecialty Physicians
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Pharmacists
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">Nurses</span>
        </div>
      </div>
    </section>
  );
};

export default Transplant;
