import { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  return (
    <>
      <div
        className="w-full overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
        id="header"
      >
        <div className="w-full animates min-h-screen absolute top-0  ">
          <Image
            src="/img/gallery/gallery-3.png"
            alt=""
            width={350}
            height={800}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
            blurDataURL="/img/gallery-12.png"
            placeholder="blur"
            priority
          />
        </div>
        <div className="w-full h-screen bg-gradient-to-t from-black  via-stone-900/50  to-black absolute top-0 z-10"></div>
        <div className="w-full h-full relative z-20 flex flex-col items-center space-y-8 justify-between">
          <motion.h1
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-stone-200/80 titles tracking-widest text-xl sm:text-xl"
          >
            The Wedding Of
          </motion.h1>
          <div className="text-center leading-relaxed py-4">
            <motion.h3
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl  px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500 bg-clip-text text-transparent py-2 "
            >
              Rudy
            </motion.h3>
            <motion.p
              initial={{ scale: 2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="font-[parisienne] text-6xl text-stone-400"
            >
              &
            </motion.p>
            <motion.h4
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl   px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500  bg-clip-text text-transparent py-2"
            >
              Astrid
            </motion.h4>
          </div>
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col relative z-50 items-center gap-1 justify-center"
          >
            <div className="mouse"></div>
            <small className="text-zinc-300/80">scroll down</small>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
