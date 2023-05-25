/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/legacy/image";
import { images } from "../MyImage";
import Navbar from "../Navbar";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// import Canvas from "../canvas/Canvas";

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
      <div className="w-full relative min-h-screen hidden lg:flex flex-col items-center justify-center">
        {/* <Canvas /> */}
        <div className="fixed z-40 top-6 titles text-stone-600 text-2xl ">
          Wedding Invitation
        </div>
        <div className="w-full min-h-screen fixed top-0 left-0  z-20 bg-[#F5F5DC]" />
        <Navbar />
        <div className="w-[40%] h-full flex items-center justify-center fixed bottom-0 top-0 z-30">
          <Slick {...settings}>
            {images.map((image, i) => (
              <img
                key={i}
                src={image.src}
                alt=""
                placeholder="blur"
                blurdataurl={image.src}
                className="w-96 h-auto my-2 object-cover rounded-full shadow-md  shadow-black "
              />
            ))}
          </Slick>
          <div className="absolute bg-gradient-to-t from-[#F5F5DC] via-transparent to-[#F5F5DC] bottom-0 z-30 w-full h-full" />
        </div>

        <div className="flex flex-col gap-9 items-center justify-center fixed bottom-16 z-30">
          <div className="text-center capitalize">
            <h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl text-zinc-100 font-[parisienne] tracking-widest"
            >
              Rudy
            </h1>
            <span className="text-5xl font-[parisienne] text-stone-600">&</span>
            <h1 className="text-3xl text-zinc-100 font-[parisienne] tracking-widest">
              Astrid
            </h1>
          </div>
          <p className="alex text-stone-400/80 text-xl">10 September 2023</p>
        </div>
      </div>
    </>
  );
};

export default Aside;
