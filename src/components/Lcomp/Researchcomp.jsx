import {Link} from "react-router-dom";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Researchcomp = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="600"
      className="h-max flex flex-col-reverse lg:flex-row items-center justify-center px-[25px] sm:px-16 gap-10 mt-10 sm:mt-28 "
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[34px] lg:text-[44px] text-start leading-[1.2] capitalize font-[600] text-primary_red">
          Research and Innovations
        </h2>
        <p className="w-full text-[18px] md:text-[20px] leading-normal mt-8 text-start">
          Embark on the frontier of healthcare with our Research and Innovations
          hub. Explore opportunities to participate in groundbreaking clinical
          trials; stay updated on the latest medical innovations enhancing our
          BMT procedures. Join us in shaping the future of healthcare through
          knowledge and progress.
          <Link href="/research" className="pl-1">
            <span className="font-bold text-primary_red pl-2 cursor-pointer">
              Learn More
            </span>
          </Link>
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-full p-0 sm:p-10">
        <img src="./assets/bmt/women2.png" alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default Researchcomp;
