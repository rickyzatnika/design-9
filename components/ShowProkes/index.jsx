import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

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
      <AOSWrapper>
        <div className="w-full min-h-3xl bg-[#f1f1df]  pt-2 pb-6 px-2 sm:px-3  ">
          <div className=" w-full flex flex-col py-8 items-center shadow-lg rounded-xl shadow-black/10  justify-between">
            <div className="text-md w-full   text-center ">
              <h1
                data-aos="fade-down"
                data-aos-duration="1200"
                className=" text-zinc-200 tracking-widest px-4 py-1 bg- w-fit mx-auto bg-[#524446] rounded-full"
              >
                CORONAVIRUS
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-stone-500"
              >
                PREVENTION
              </p>
            </div>
            <div className=" py-4 grid grid-cols-2 px-3 items-center justify-center">
              {images.map((image) => (
                <div key={image.id} className=" w-full h-full col-span-1 ">
                  <Image
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    src={image.src}
                    alt=""
                    width={300}
                    height={350}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={image.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default ShowProtocol;
