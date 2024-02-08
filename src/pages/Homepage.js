import React, { useEffect, useState } from "react";
import Slider from "../components/Hcomp/Slider";
import slides from "../components/Lcomp/SlidesData";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import MultiServices from "../components/Lcomp/MultiServices";
import SupportServices from "../components/Lcomp/SupportServices";
import About from "../components/Lcomp/About";
import OurSponsors from "../components/Lcomp/OurSponsors";
import Documentary from "../components/Lcomp/Documentary";
import STC from "../components/Lcomp/STC";
import WhatToExpect from "../components/Lcomp/WhatToExpect";
import CTA from "../components/Lcomp/CTA";
import SuccessStory from "../components/Lcomp/SuccessStory";
import Contact from "../components/Lcomp/Contactcomp";
import LatestNews from "../components/Hcomp/LatestNews";
import {Link} from "react-router-dom";
import SmallScreenSlider from "../components/Hcomp/SmallScreenSlider";
import slidesSm from "../components/Lcomp/SlidesDataSm";
import { FaAnglesDown } from "react-icons/fa6";
import Researchcomp from "../components/Lcomp/Researchcomp";

const Homepage = () => {
  // show arrow state
  const [showArrow, setShowArrow] = useState(true);

  // use effect for showing the arrow
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Remove event listener and hide arrow when scrolled
      setShowArrow(false);
      window.removeEventListener("scroll", handleScroll);
    };

    // Add event listener to handle scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-screen lg:mt-24">
      <div className="relative md:pt-[6.5rem] lg:pt-0 h-max">
        <Slider slides={slides} />
        <SmallScreenSlider slidesSm={slidesSm} />
        <div className="absolute top-[25%] md:top-[35%] lg:top-[25%] z-20 w-full lg:w-[55%] h-auto px-[1.5rem] sm:px-16 text-white">
          <h1 className="w-full lg:w-full text-[34px] md:text-[38px] lg:text-[48px] leading-[1.2] md:leading-[1] lg:leading-[3.4rem] tracking-wide capitalize text-center lg:text-start font-bold text_shadow_">
            Providing, safe, quality, affordable healthcare for persons living
            with sickle cell disorder
          </h1>
          <p className="text-[18px] lg:text-[20px] text-center sm:text-start md:text-center lg:text-start 3xl:text-center  my-8 md:my-4 lg:my-8 w-[90%] lg:w-full mx-auto lg:mx-0 text_shadow_ tracking-wide leading-normal md:leading-[1.4] lg:leading-normal">
            Be part of a mission dedicated to making a lasting impact in
            healthcare delivery.
          </p>
          <Link
            href="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/80 md:hover:bg-primary_red trans_animate tracking-wider w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </div>

        <div className="w-full absolute bottom-20 md:bottom-36 z-50 flex items-center justify-center md:hidden lg:flex">
          {showArrow && (
            <FaAnglesDown className="text-4xl text-white/80 shadow-md bounce-animation rounded-full font-extralight" />
          )}
        </div>
      </div>
      <Badge />
      <MultiServices />
      <SupportServices />
      <About />
      <OurSponsors />
      <Documentary />
      <STC />
      <WhatToExpect />
      <Researchcomp />
      <CTA />
      <SuccessStory />
      <Contact />
      <LatestNews />
    </section>
  );
};

export default Homepage;
