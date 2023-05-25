/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

import { images } from "../MyImage";
import Navbar from "../Navbar";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    fade: true,
    className: "w-full h-full ",

    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <div className="w-full relative min-h-screen flex flex-col items-center justify-center">
        {/* <Canvas /> */}
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="fixed z-40 top-6 titles text-stone-600 text-2xl "
        >
          Wedding Invitation
        </div>

        <Navbar />
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-[40%]  overflow-hidden flex items-center justify-center fixed bottom-0 top-0 z-30"
        >
          <Slick {...settings}>
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                alt=""
                placeholder="blur"
                blurdataurl={image.src}
                className="w-96 h-auto object-cover shadow shadow-black/20  rounded-full "
              />
            ))}
          </Slick>
          <div className="absolute  rounded-full bg-gradient-to-t from-[#2e2e2a] via-transparent to-[#F5F5DC] top-0 z-30 w-full h-[87.5%]" />
        </div>

        <div className="flex flex-col gap-9 items-center justify-center fixed bottom-16 z-30">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-center capitalize"
          >
            <h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl text-zinc-100 font-[parisienne] tracking-widest"
            >
              Rudy
            </h1>
            <span className="text-5xl font-[parisienne] text-stone-400">&</span>
            <h1 className="text-3xl text-zinc-100 font-[parisienne] tracking-widest">
              Astrid
            </h1>
          </div>
          <p className="alex text-stone-400/80 py-0 text-xl">
            10 September 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Aside;
