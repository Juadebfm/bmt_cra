import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Badge = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section
      data-aos="fade-left"
      className="grid grid-cols-1 md:grid-cols-2 md:place-content-center lg:grid-cols-5 gap-7 md:gap-7 lg:gap-4 px-5 md:px-16 lg:px-5 pt-10 md:pt-20 lg:pt-10 pb-10"
    >
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[20px]">
        <img src="/assets/bmt/bv4.png" alt="quality" width={48} height={48} />
        <div>
          <span className="text-primary_gold font-[600]">Availability</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            We ensure that high-quality services are consistently available.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[20px]">
        <img src="/assets/bmt/bv2.png" alt="quality" width={48} height={48} />
        <div>
          <span className="text-primary_tomato_red font-[600]">
            Accessibility
          </span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Quality healthcare is readily accessible.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[20px]">
        <img src="/assets/bmt/bv5.png" alt="quality" width={48} height={48} />
        <div>
          <span className="text-primary_dark font-[600]">Quality</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Quality healthcare is made easily reachable for everyone.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[20px]">
        <img src="/assets/bmt/bv3.png" alt="quality" width={48} height={48} />
        <div>
          <span className="text-primary_green font-[600]">Safe</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Safety is our top priority
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start sm:justify-center gap-3 box_shadow rounded-[10px] px-[25px] sm:px-[16px] py-[25px] sm:py-[20px] md:w-full md:ml-[55%] lg:ml-[0%]">
        <img src="/assets/bmt/bv1.png" alt="quality" width={48} height={48} />
        <div>
          <span className="text-primary_blue font-[600]">Affordable</span>
          <p className="text-[13px] font-semibold leading-[1.4]">
            Ensuring affordability of quality care
          </p>
        </div>
      </div>
    </section>
  );
};

export default Badge;
