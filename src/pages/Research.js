import { Link } from "react-router-dom";

import { useEffect } from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import SuccessStory from "../components/Lcomp/SuccessStory";
import LatestNews from "../components/Hcomp/LatestNews";

import AOS from "aos";
import "aos/dist/aos.css";

const Research = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <section className="h-max flex flex-col lg:flex-row items-center justify-center px-[25px] lg:px-16 gap-10 md:gap-20 mt-10 ">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="w-full lg:w-1/2 h-full p-5 mt-24"
        >
          <img src="./assets/bmt/female_doc.png" alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="w-full text-[30px] text-start lg:text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
            Research & Innovations
          </h2>
          <p className="w-full text-[18px] md:text-[20px] text-start leading-normal mt-8">
            Embark on the frontiers of healthcare with our Research and
            Innovations hub. Explore opportunities to participate in
            ground-breaking clinical trials. Stay updated on the latest medical
            innovations enhancing our BMT procedures.
            <br />
            <br />
            Join us in shaping the future of healthcare.
          </p>
          <Link
            to="/donation"
            className="md:flex md:items-center md:justify-center lg:block"
          >
            <Button
              classes="px-[48px] py-[12px] bg-primary_red font-Lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/90 trans_animate tracking-wider block text-white mt-7 w-full md:w-[60%] lg:w-auto"
              text="Donate Now"
            />
          </Link>
        </div>
      </section>
      <Badge />
      <div className="my-20">
        <div className="px-[25px] lg:px-0">
          <h2 className="text-[30px] lg:text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center">
            Advancements & Technologies
          </h2>
          <p className="w-full lg:w-[70%] text-[18px] md:text-[20px] text-center md:text-start lg:text-center m-auto mt-3 leading-[1.3]">
            Here are some of the latest advancements and technologies used in
            BMT procedures
          </p>
        </div>
        <div className="mt-16">
          <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research1.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Haploidentical BMT
                </span>
                <p>
                  This type of BMT uses bone marrow from a donor who is only
                  half-matched with the recipient. This makes it possible to
                  find a donor for more patients, including those who have rare
                  tissue types.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research2.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Cord blood transplantation
                </span>
                <p>
                  Cord blood is blood that is collected from the umbilical cord
                  and placenta after childbirth. Cord blood is a rich source of
                  stem cells, which can be used to treat a variety of diseases.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research3.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  CAR-T cell therapy
                </span>
                <p>
                  CAR-T cell therapy is a type of immunotherapy that uses the
                  patient&apos;s own immune cells to fight cancer. This therapy
                  has shown to be effective in treating certain types of
                  leukemia and lymphoma.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 w-[80%] m-auto hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px] invisible">
              <img src="./assets/bmt/research4.png" alt="" className="w-full" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/research4.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px] invisible">
              <img src="./assets/bmt/research4.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[20px] capitalize font-bold mb-5">
                  Gene editing
                </span>
                <p>
                  Gene editing is a technology that can be used to change the
                  DNA of cells. This technology has the potential to be used to
                  improve the success of BMT by making it possible to create
                  stem cells that are more compatible with the recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessStory />
      <LatestNews />
    </>
  );
};

export default Research;
