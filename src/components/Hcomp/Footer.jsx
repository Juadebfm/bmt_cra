import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { LiaTwitterSquare } from "react-icons/lia";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { PiFacebookLogo, PiInstagramLogoLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

import {Link} from "react-router-dom";
import Button from "../Lcomp/Button";

const Footer = () => {
  return (
    <footer className="grid_col_footer_sm md:grid_col_footer_md lg:grid_col_footer gap-12 px-[25px] sm:px-16 py-14 w-full">
      <div>
        <img src="/assets/bmt/logo_footer.png" alt="BMT Logo" className="" />
        <div className="flex items-center justify-start text-3xl mt-6 text-primary_red space-x-5" target="_blank">
          <Link to="https://instagram.com/sicklecellfoundationng?igshid=MzMyNGUyNmU2YQ==" target="_blank">
            <FaInstagram className="cursor-pointer" />
          </Link>
          <Link to="https://www.facebook.com/sicklecellfoundation?mibextid=ZbWKwL" target="_blank">
            <RiFacebookBoxLine className="cursor-pointer" />
          </Link>
          <Link to="https://twitter.com/sicklecellnig" target="_blank">
            <LiaTwitterSquare className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        <span className="font-bold">Platforms</span>
        <ul className="flex flex-col w-max space-y-5">
          <Link to="/about">About</Link>
          <Link to="/donation">Donation</Link>
          <Link to="/education">Education & Awareness</Link>
          <Link to="/research">Research & Innovation</Link>
          <Link to="/whattoexpect">Patient Information</Link>
        </ul>
      </div>

      <div className="space-y-3">
        <span className="font-bold">Contact Us</span>
        <ul className="flex flex-col w-max space-y-5">
          <Link
            to="tel:+2348100002001"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <MdOutlinePhoneInTalk className="text-2xl" />

            <div>
              <span className="flex flex-col">
                <span>+2348100002001</span>
              </span>
            </div>
          </Link>
          <Link
            to="https://twitter.com/sicklecellnig"
            target="_blank"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <CiTwitter className="text-3xl" />

            <div className="w-full">
              <span>
                <span className="">sicklecellnig</span>
              </span>
            </div>
          </Link>
          <Link
            to="https://instagram.com/sicklecellfoundationng?igshid=MzMyNGUyNmU2YQ=="
            target="_blank"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <PiInstagramLogoLight className="text-3xl" />

            <div className="w-full">
              <div>
                <span className="">sicklecellfoundationng</span>
              </div>
            </div>
          </Link>
          <Link
            to="https://www.facebook.com/sicklecellfoundation?mibextid=ZbWKwL"
            target="_blank"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <PiFacebookLogo className="text-3xl" />

            <div className="w-full">
              <span>
                <span className="">sicklecellfoundation</span>
              </span>
            </div>
          </Link>
          <Link
            to="mailto:info@sicklecellfoundation.com"
            target="_blank"
            className="flex items-center justify-start w-full h-max gap-2"
          >
            <CiMail className="text-3xl" />

            <div className="w-full">
              <div>
                <span className="">sicklecellfoundation</span>
              </div>
            </div>
          </Link>
        </ul>
      </div>
      <div className="space-y-5">
        <span className="font-bold">Subscribe</span>
        <p>
          Subscribe now for valuable information and stay connected with our
          mission.
        </p>

        <Link to="https://zc.vg/MFcKl" target="_blank">
          <Button
            classes="px-[68px] py-[10px] bg-primary_red font-Lexend font-bold rounded-[4px] hover:bg-primary_red/80 trans_animate block text-white mt-5 text-[15px] w-full"
            text="Subscribe"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
