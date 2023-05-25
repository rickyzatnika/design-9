import React from "react";
import Image from "next/legacy/image";
import { motion, useAnimation } from "framer-motion";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#f1f1df] flex flex-col items-center justify-center py-10 lg:justify-between relative "
      id="profile"
    >
      {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

      <div className="w-full relative  flex flex-col items-center justify-center  h-full  z-30">
        <div className="flex shadow-inner overflow-hidden w-fit bg-[#F5F5DC] p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-0 items-center relative mx-auto">
          <div className="animated-element absolute -bottom-8 -left-12 w-full">
            <Image
              src="/img/bunga.png"
              width={150}
              height={150}
              priority
              alt=""
              className="bg-goyang"
            />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-[#F5F5DC]/70 via-transparent to-[#F5F5DC]/70 " />
            <Image
              src="/img/man.png"
              alt=""
              width={160}
              height={200}
              objectFit="cover"
              priority
            />
          </div>

          <div className="animated-element flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="titles text-2xl text-[#473727] capitalize ">
              Rudy Hardianto
            </h2>
            <Link
              href="https://instagram.com/rahmadi.irawansyah"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                size={22}
                className="text-zinc-400 mb-2 animate-spin hover:animate-none"
              />
            </Link>
            <div className="text-center text-[#9c8b7a] ">
              <p className=" text-sm">Putra dari :</p>
              <p className="alex text-lg">Bpk. Irawan Yusmiatna </p>
              <p>&</p>
              <p className="alex text-lg">Ibu Rosmini</p>
            </div>
          </div>
        </div>
        <div className="font-[parisienne] text-6xl my-3 text-stone-700 ">&</div>
        <div className="relative  overflow-hidden shadow-inner bg-[#F5F5DC] p-6 sm:p-8 px-10 sm:px-14 w-fit shadow-black/20  flex flex-col items-center justify-center gap-0">
          <div className="absolute -bottom-8 -right-14 ">
            <Image
              src="/img/bunga.png"
              width={150}
              height={150}
              priority
              alt=""
              className="bg-goyang "
            />
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute  left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-[#F5F5DC]/70 via-transparent to-[#F5F5DC]/70" />
            <Image
              src="/img/girl.png"
              alt=""
              width={160}
              height={200}
              objectFit="cover"
              className=""
              priority
            />
          </div>

          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="titles text-2xl capitalize text-[#473727] ">
              astrid diah sari
            </h2>
            <Link
              href="https://instagram.com/dindanovitas"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                className="text-zinc-400 mb-2  animate-spin hover:animate-none"
                size={22}
              />
            </Link>
            <div className="text-center text-[#9c8b7a]">
              <p className=" text-sm">Putra dari :</p>
              <p className="alex text-lg">Bpk. Irawan Yusmiatna </p>
              <p>&</p>
              <p className="alex text-lg">Ibu Rosmini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
