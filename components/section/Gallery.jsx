/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <div
        id="gallery"
        className="w-full bg-[#F5F5DC] min-h-3xl pt-6 pb-8 relative"
      >
        <div className="text-center w-full py-4 leading-relaxed">
          <div className="flex items-center justify-center text-[#705740] text-xl sm:text-2xl">
            <motion.span
              initial={{ x: 80 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-1 text-3xl alex border-b border-stone-500/50 "
            >
              Happiness
            </motion.span>{" "}
            <motion.span
              initial={{ x: -120 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4 }}
              className="alex text-5xl"
            >
              {" "}
              Moments
            </motion.span>
          </div>
        </div>
        <LightGallery
          mode="lg-fade"
          speed={300}
          addClass={true}
          closeOnTap={true}
          isMobile
          elementClassNames="w-full  mx-auto columns-4 gap-1 px-3 py-4 group "
        >
          <Link href="/img/gallery/gallery-1.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-1.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-2.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-2.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-3.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-3.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-4.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-4.png"
              alt=""
            />
          </Link>

          <Link href="/img/gallery/gallery-7.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-7.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-8.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-8.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-11.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-11.png"
              alt=""
            />
          </Link>

          <Link href="/img/gallery/gallery-1.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-1.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-9.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-9.png"
              alt=""
            />
          </Link>

          <Link href="/img/gallery/gallery-10.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-10.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-2.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-2.png"
              alt=""
            />
          </Link>

          <Link href="/img/gallery/gallery-5.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-5.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-6.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-6.png"
              alt=""
            />
          </Link>
          <Link href="/img/gallery/gallery-12.png">
            <img
              className="img-responsive mb-1"
              src="/img/gallery/gallery-12.png"
              alt=""
            />
          </Link>
        </LightGallery>
      </div>
      <ShowProtocol />
    </>
  );
};

export default Gallery;
