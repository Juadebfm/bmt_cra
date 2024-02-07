import { Link } from "react-router-dom";

import { CiMail, CiTwitter } from "react-icons/ci";
import { PiFacebookLogo, PiInstagramLogoLight } from "react-icons/pi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-24 mt-10 ">
      <div className="w-full lg:w-1/2 h-full p-0 lg:p-10 pl-0 mt-24 lg:mt-0">
        <img
          src="./assets/bmt/smiling_family.png"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:mt-24">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_dark">
          Reach Out To Us
        </h2>
        <div className="w-full lg:w-[90%] text-[18px] leading-normal mt-4">
          <ul className="flex flex-col w-full space-y-7">
            <Link
              to="tel:+2348100002001"
              className="flex flex-row items-center justify-start w-full h-max gap-2"
            >
              <MdOutlinePhoneInTalk className="text-2xl" />

              <div>
                <span className="flex items-center justify-center">
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
                <span>
                  <span className="">sicklecellfoundationng</span>
                </span>
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
                <span>
                  <span className="">info@sicklecellfoundation.com</span>
                </span>
              </div>
            </Link>
          </ul>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0039438906288!2d3.3515826759381895!3d6.521182093471343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c338965108b%3A0xae04381509ac4eef!2sChildren%20Emergency%20Building!5e0!3m2!1sen!2sng!4v1706652144945!5m2!1sen!2sng"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex items-start justify-start gap-3 w-full lg:w-[80%] mt-10">
            <CiLocationOn className="text-[10rem] lg:text-[5rem] font-bold" />
            <p className="text-[18px] md:text-[20px]">
              3rd Floor,
              <br /> SCFN/LUTH Bone Marrow Transplant Centre, Olikoye Ransome
              Kuti Children Emergency Centre, LUTH, Idi-Araba, Lagos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
