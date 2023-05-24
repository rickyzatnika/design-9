import React, { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const ShowProtocol = () => {
  const images = [
    {
      id: 1,
      src: "/img/prokes-1.png",
    },
    {
      id: 2,
      src: "/img/prokes-2.png",
    },
    {
      id: 3,
      src: "/img/prokes-3.png",
    },
    {
      id: 4,
      src: "/img/prokes-4.png",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="w-full min-h-3xl bg-[#f1f1df]  pt-2 pb-6 px-2 sm:px-3  "
      >
        <div className=" w-full flex flex-col py-8 items-center shadow-lg rounded-xl shadow-black/10  justify-between">
          <div className="text-md w-full   text-center ">
            <motion.h1
              initial={{ y: 120 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className=" text-zinc-200 tracking-widest px-4 py-1 bg- w-fit mx-auto bg-[#524446] rounded-full"
            >
              CORONAVIRUS
            </motion.h1>
            <motion.p
              initial={{ y: -90 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-stone-500"
            >
              PREVENTION
            </motion.p>
          </div>
          <div className=" py-4 grid grid-cols-2 px-3 items-center justify-center">
            {images.map((image) => (
              <motion.div
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className=" w-full h-full col-span-1 "
              >
                <Image
                  src={image.src}
                  alt=""
                  width={300}
                  height={350}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={image.src}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ShowProtocol;
