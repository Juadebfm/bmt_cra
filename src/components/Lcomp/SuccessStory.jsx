"use client";
import React, { useState } from "react";

const SuccessStory = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <>
      <h1 className="w-full text-[34px] lg:text-[44px] text-center mt-10 lg:mt-28 leading-[1.2] capitalize font-[600] text-primary_red">
        Testimonial
      </h1>

      {showVideo ? (
        <div className="relative pb-10">
          <button
            className="text-white text-xl md:text-3xl bg-primary_red rounded-full p-2 md:p-5 w-7 md:w-10 h-7 md:h-10 flex items-center justify-center absolute left-3 md:left-32 top-6 md:top-10 hover:box_shadow_hover trans_animate"
            onClick={handleClose}
          >
            X
          </button>
          <video
            className="w-full md:w-[70%] h-auto md:h-[70%] mx-auto mt-8 py-0 md:pb-10 px-[10px] md:px-0"
            src="https://www.sicklecellfoundation.com/scfn-luth-api/storage/public/img/SCFN%20Bone%20Marrow%20Transplant%20Impact%20Story%20%20%20Nothing%20ventured,%20Nothing%20gained_compressed.mp4"
            controls
            autoPlay
          />
        </div>
      ) : (
        <section
          onClick={handleClick}
          style={{
            backgroundImage: "url(./assets/bmt/nurse.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mt-10 md:mt-5 w-[100%] sm:w-auto h-[60vh] md:h-[40vh] lg:h-[90vh] relative p-6 sm:p-14"
        >
          <img
            src="/assets/bmt/playIcon.png"
            alt=""
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:box_shadow_hover rounded-full trans_animate pulse-shadow"
            width={80}
            height={80}
          />
          <div className="absolute bottom-5 sm:bottom-10 w-max">
            <h2 className="w-max text-[34px] sm:text-[44px] text-center leading-[1.2] capitalize font-[600] text-primary_red text_shadow_">
              John N.
            </h2>
            <p className="capitalize text-[18px] md:text-[20px] text_shadow_">
              Bone marrow transplant beneficiary
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default SuccessStory;
