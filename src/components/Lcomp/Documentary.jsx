"use client";
import React, { useState } from "react";

const Documentary = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <>
      {showVideo ? (
        <div className="relative py-10">
          <button
            className="text-white text-xl md:text-3xl bg-primary_red rounded-full p-2 md:p-5 w-7 md:w-10 h-7 md:h-10 flex items-center justify-center absolute left-3 md:left-32 top-6 md:top-10 hover:box_shadow_hover trans_animate"
            onClick={handleClose}
          >
            X
          </button>
          <video
            className="w-full md:w-[70%] h-auto md:h-[70%] mx-auto mt-8 py-0 md:py-10 px-[10px] md:px-0"
            src="https://www.sicklecellfoundation.com/scfn-luth-api/storage/public/img/Bone%20Marrow%20Transplant%20Documentary%20(1).mp4"
            controls
            autoPlay
          />
        </div>
      ) : (
        <section
          onClick={handleClick}
          style={{
            backgroundImage: "url(./assets/bmt/smiling_male_doctor.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mt-10 md:mt-5 lg:mt-28 w-[100%] sm:w-auto h-[60vh] md:h-[40vh] lg:h-[90vh] relative p-6 sm:p-14"
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
              Documentary
            </h2>
          </div>
        </section>
      )}
    </>
  );
};

export default Documentary;
