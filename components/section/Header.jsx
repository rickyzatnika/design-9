import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const Header = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="w-full animates  absolute top-0  ">
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
          <div className="w-full min-h-screen bg-gradient-to-t from-black  via-stone-900/50  to-black absolute top-0 z-10"></div>
          <div className="w-full h-full relative z-20 flex flex-col items-center space-y-8 justify-between">
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-stone-200/80 titles tracking-widest text-xl sm:text-xl"
            >
              The Wedding Of
            </h1>
            <div className="text-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-5xl  px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500 bg-clip-text text-transparent py-2 "
              >
                Rudy
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="font-[parisienne] text-6xl text-stone-400"
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-5xl   px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500  bg-clip-text text-transparent py-2"
              >
                Astrid
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
              <small className="text-zinc-300/80">scroll down</small>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Header;
