import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurTeam from "../components/Hcomp/OurTeam";
import TourFacility from "../components/Hcomp/TourFacility";
import { FaAnglesDown } from "react-icons/fa6";

const Aboutpage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const lineClamp = isExpanded ? "" : "line-clamp-[13]";
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
    <section className="">
      <div
        style={{
          backgroundImage: "url(./assets/bmt/scfn-luth.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[50vh] md:h-screen relative p-14 mt-24"
      >
        <img
          src="/assets/bmt/sfcn_luth_logo.png"
          alt="bmt-logo"
          className="px-[25px] md:px-0 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-14 w-[500px] h-auto"
        />
        <div className="hidden w-full absolute bottom-36 z-50 lg:flex items-center justify-center">
          {showArrow && (
            <FaAnglesDown className="text-4xl text-white/80 shadow-md bounce-animation rounded-full font-extralight" />
          )}
        </div>
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-1 w-full px-[25px] lg:px-14 md:mt-10 lg:mt-2">
        <div className="m-10 w-full lg:w-1/2 md:px-10 lg:px-0">
          <img
            src="/assets/bmt/treatment_team.png"
            alt="Aboutpage Our BMT"
            width={547}
            height={649}
            className="w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 block h-max lg:h-[670px] my-auto pt-[40px] md:px-10 lg:px-0 cursor-pointer overflow-y-auto">
          <p className={lineClamp}>
            <span className="w-full text-[17px] font-[300] font-lexend text-primary_dark leading-tight mt-4 text-justify lg:text-start">
              <span className="capitalize font-bold text-primary_tomato_red block text-[26px] mb-2">
                SCFN | LUTH | VUMC Partnership
              </span>{" "}
              Stem Cell Transplantation or Bone Marrow Transplantation (BMT) is
              the known cure for sickle cell disorder. Sickle Cell Foundation
              Nigeria (SCFN) and Lagos University Teaching Hospital (LUTH) have
              partnered to establish a BMT Programme in Lagos, in order that
              excellent quality, safe, affordable and life-changing cure for
              sickle cell disorder will be locally available and accessible to
              Nigerians in Nigeria. This is indeed fitting as Nigeria is by far
              the country with the highest burden of sickle cell disorder in the
              world. Over 40 million Nigerians are carriers of the sickle cell
              gene and an estimated 150,000 babies are born every year with
              sickle cell in the country. Sadly, 100,000 of these babies do not
              live to celebrate their 5th birthday – dying mostly from ignorance
              and lack of access to proper diagnosis, treatment and care.
              <span>
                <span className="font-[700] text-primary_red block my-5">
                  Our BMT Journey:
                </span>
                Our BMT journey started in 2011 when SCFN and LUTH partnered
                with the Mediterranean Institute of Haematology (IME) Rome and
                nearly 50 Nigerian children travelled to Italy and received free
                BMT. However, the programme was abruptly terminated due to
                funding challenges in Italy.
              </span>
              <br />
              <br />
              <span>
                <span className="font-[700] text-primary_red text-justify lg:text-start">
                  The Tripartite Partnership for BMT:
                </span>
                <br />
                Following the cessation of our BMT project with IME Rome, SCFN
                and LUTH commenced initial discussions with Vanderbilt
                University Medical Center (VUMC) in 2017, culminating in the
                formalisation of partnership with the institution via an MoU in
                2020 with VUMC as technical partners, for the establishment of
                our own BMT Centre in Lagos, Nigeria.
              </span>
              <br />
              <br />
              <span>
                The centre is a state-of-the-art facility and it will be the
                first-ever, comprehensive BMT centre for Sickle Cell Disease in
                Sub-Saharan Africa.
              </span>
              <br />
              <br />
              <span>
                A Public-Private-Partnership, our BMT programme brings
                excellent, quality, safe and affordable cure for sickle cell
                disorder to Nigerians and Africans. .
              </span>
              <br />
              <br />
              <span>
                The SCFN/LUTH BMT Centre was officially opened in January 2022
                and it will serve as a Centre of Excellence for BMT training and
                service provision.
              </span>
              <br />
              <br />
              <span>
                Be a part of this laudable programme. <br />
                <Link
                  to="/donation"
                  className="font-bold text-primary_tomato_red hover:underline"
                >
                  DONATE NOW.
                </Link>
              </span>
            </span>
          </p>
          <button
            className="font-bold text-primary_red cursor-pointer inline mt-5"
            onClick={toggleExpand}
          >
            {!isExpanded ? "Read more" : "See Less"}
          </button>
        </div>
      </section>
      <OurTeam />
      <TourFacility />
    </section>
  );
};

export default Aboutpage;
