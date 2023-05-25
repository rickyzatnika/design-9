/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import AOSWrapper from "../AOS/AOSWrapper";
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
      <AOSWrapper>
        <div
          id="gallery"
          className="w-full bg-[#F5F5DC] min-h-3xl p-0 md:p-14 overflow-hidden relative"
        >
          <div className="text-center w-full py-4 leading-relaxed">
            <div className="flex items-center justify-center text-[#705740] text-xl sm:text-2xl">
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                className="p-1 text-3xl alex border-b border-stone-500/50 "
              >
                Happiness
              </span>{" "}
              <span
                data-aos="fade-right"
                data-aos-duration="1000"
                className="alex text-5xl"
              >
                {" "}
                Moments
              </span>
            </div>
          </div>
          <LightGallery
            mode="lg-fade"
            speed={300}
            addClass={true}
            closeOnTap={true}
            isMobile
            elementClassNames="w-full columns-4 gap-1 px-3 py-4 group "
          >
            <Link href="/img/gallery/gallery-1.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1000"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-1.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-2.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1100"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-2.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-3.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1200"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-3.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-4.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1300"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-4.png"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/gallery-7.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1400"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-7.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-8.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1500"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-8.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-11.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1600"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-11.png"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/gallery-1.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1700"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-1.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-9.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1800"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-9.png"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/gallery-10.png">
              <img
                data-aos="flip-left"
                data-aos-duration="1900"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-10.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-2.png">
              <img
                data-aos="flip-left"
                data-aos-duration="2000"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-2.png"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/gallery-5.png">
              <img
                data-aos="flip-left"
                data-aos-duration="2100"
                x
                className="img-responsive mb-1"
                src="/img/gallery/gallery-5.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-6.png">
              <img
                data-aos="flip-left"
                data-aos-duration="2200"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-6.png"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/gallery-12.png">
              <img
                data-aos="flip-left"
                data-aos-duration="2300"
                className="img-responsive mb-1"
                src="/img/gallery/gallery-12.png"
                alt=""
              />
            </Link>
          </LightGallery>
        </div>
      </AOSWrapper>

      <ShowProtocol />
    </>
  );
};

export default Gallery;
