import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const TourFacility = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <section data-aos="fade-up" data-aos-duration="1200">
      <h2 className="w-full text-[44px] lg:text-[64px] leading-[1.2] text-center capitalize font-[600] text-primary_red mt-14">
        Tour of Our Facility
      </h2>
      {!showVideo ? (
        <div
          style={{
            backgroundImage: "url(./assets/bmt/medical_professionals.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mt-14 mb-14 h-[50vh] lg:h-screen relative p-14"
        >
          <img
            src="/assets/bmt/playIcon.png"
            alt=""
            width={80}
            height={80}
            className="w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-2xl rounded-full trans_animate pulse-shadow"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div className="relative py-10">
          <button
            onClick={handleClose}
            className="text-white text-3xl bg-primary_red rounded-full p-5 w-10 h-10 flex items-center justify-center absolute left-6 md:left-32 top-3 md:top-10 hover:box_shadow_hover trans_animate"
          >
            X
          </button>{" "}
          <div className="w-full md:w-[70%] h-auto md:h-[70%] mx-auto mt-8 py-0 md:py-10 px-[10px] md:px-0">
            <video controls className="w-full" autoPlay>
              <source
                src="https://www.sicklecellfoundation.com/scfn-luth-api/storage/public/img/Virtual%20Tour%20video%20of%20the%20SCFN_LUTH%20Bone%20Marrow%20Transplant_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default TourFacility;
