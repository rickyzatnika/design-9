import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

const data = [
  {
    id: 1,
    title: "Awal Bertemu - 2010",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .",
    image: "/img/gallery/gallery-1.png",
  },
  {
    id: 2,
    title: "Menjalin Kasih - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. rinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    image: "/img/gallery/gallery-2.png",
  },
  {
    id: 3,
    title: "Jenjang Pernikahan - 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "/img/gallery/gallery-3.png",
  },
];

const Story = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="gallery"
          className="w-full bg-[#f1f1df] overflow-hidden  mx-auto md:px-3 px-2 py-8 "
        >
          <div className="flex relative items-center justify-center text-[#705740] ">
            <div className="absolute -left-4 bg-goyang -bottom-10 ">
              <Image
                src="/img/bunga-2.png"
                alt=""
                width={145}
                height={145}
                objectFit="cover"
                className="rotate-90 "
                priority
              />
            </div>
            <span
              data-aos="fade-left"
              data-aos-duration="1000"
              className="p-1 text-3xl alex border-b border-stone-500/50 "
            >
              Short
            </span>
            <span
              data-aos="fade-right"
              data-aos-duration="1000"
              className="alex text-5xl"
            >
              {" "}
              Story
            </span>
          </div>
          <div className="posts overflow-hidden  pt-14 flex flex-wrap-reverse flex-col gap-10 md:gap-12">
            {data?.map((post, i) => (
              <div
                className="post flex flex-wrap-reverse flex-col-reverse sm:flex-row gap-3 "
                key={i}
              >
                <div
                  data-aos="fade-right"
                  data-aos-duration="1800"
                  className="img relative"
                >
                  <Image
                    src={post?.image}
                    alt={post?.title}
                    width={450}
                    height={350}
                    objectFit="cover"
                    className="rounded-tl-3xl rounded-br-3xl"
                    priority
                  />
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  className="content flex flex-col justify-around items-start gap-4"
                >
                  <div className="title space-y-2 leading-relaxed">
                    <h1 className="text-xl titles font-semibold text-stone-500/80">
                      {post?.title}
                    </h1>
                    <p className="text-stone-500/70  leading-relaxed text-sm">
                      {post?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Story;
