import Link from "next/link";
import React from "react";
import AOSWrapper from "../AOS/AOSWrapper";

const Footer = () => {
  return (
    <AOSWrapper>
      <footer className="bg-stone-700 text-stone-200/80 flex relative w-full h-28 lg:h-auto py-2 flex-nowrap items-start lg:items-center justify-center gap-1">
        <p data-aos="fade-up" data-aos-duration="1000" className="text-sm">
          Powered By :{" "}
        </p>
        <Link
          data-aos="fade-up"
          data-aos-duration="1000"
          href="https://dboard.webqodes.com"
          className="text-sm"
        >
          WebQodes
        </Link>
      </footer>
    </AOSWrapper>
  );
};

export default Footer;
