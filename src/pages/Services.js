import { useEffect } from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import SuccessStory from "../components/Lcomp/SuccessStory";
import Transplant from "../components/Lcomp/Transplant";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <section className="h-max flex flex-col lg:flex-row items-center justify-center pr-0 lg:pr-14 gap-10 mt-5 ">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="mt-24 w-full lg:w-1/2 h-full p-0 lg:p-10 pl-0"
        >
          <img
            src="./assets/bmt/service.png"
            alt=""
            className="object-cover w-full"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 flex flex-col justify-center px-[24px] md:px-16 lg:px-0"
        >
          <h2 className="w-full text-[34px] lg:text-[44px] leading-[1.2] capitalize font-[600] text-primary_red text-start">
            Our Multi-Disciplinary Services
          </h2>
          <div className="w-full lg:w-[90%] text-[18px] md:text-[20px] text-start leading-normal mt-8">
            Explore our services designed to accompany you through the
            transplant processes. These comprises of: <br />
            <ul className="list-decimal pl-14 py-5">
              <li>HLA typing </li>
              <li>Counselling and other psychosocial services</li>
              <li>Pre- transplant evaluation </li>
              <li>Stem Cell Processing</li>
              <li>Post-transplant clinic.</li>
              <li>Chimerism</li>
            </ul>
          </div>
          <Link
            to="/contact"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Book Now"
            />
          </Link>
        </div>
      </section>
      <Badge />
      <Transplant />
      <SuccessStory />
    </>
  );
};

export default Services