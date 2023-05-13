import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "../assets/images/bg4.jpg";
import { GrPlayFill } from "react-icons/gr";

export default function Videos() {  
  const [currentSlide, setCurrentSlide] = useState(0);
  const boxRef = useRef(null);

  function slider() {
    if (boxRef.current) {
      clearTimeout(boxRef.current);
    }
  }

  useEffect(() => {
    slider();
    boxRef.current = setTimeout(
      () =>
        setCurrentSlide((prevSlide) =>
          prevSlide === videoSlider.length - 1 ? 0 : prevSlide + 1
        ),
      5000
    );

    return () => {
      slider();
    };
  }, [currentSlide]);

  const videoSlider = [
    {
      year: "2023",
      video: [
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
      ],
    },
    {
      year: "2022",
      video: [
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
        {
          url: "https://www.youtube.com/embed/mk3qDuYCrZs",
          head: "SRA e-Tax Platform",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      {/*-----------------------Videos---------------------*/}

      <section className="my-16 mx-14">
        <div>
          <h1 className=" text-[#2F3192] text-4xl font-semibold">
            Things To See
          </h1>
          <div className="border w-[203px] border-yellowish mt-2"></div>
        </div>

        <div className="slideshow">
          {videoSlider.map((item, id) => (
            <div key={id} className="my-8">
              <h1 className="text-2xl text-subColor font-medium mb-5">
                {item.year}
              </h1>
              <div
                className="slideshowSlider flex gap-10"
                style={{
                  transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
                }}
              >
                {item.video.map((video, id) => (
                  <div key={id} className="flex flex-col gap-3 mb-3">
                    <iframe
                      width="375"
                      height="225"
                      src={video.url}
                      title="YouTube video player"
                      allowFullScreen=""
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    <h1 className="flex items-center gap-5 text-base font-medium">
                      <GrPlayFill className="text-sm" />
                      {video.head}
                    </h1>
                  </div>
                ))}
              </div>
              <div className="slideshowDots">
                {item.video.map((_, id) => (
                  <div
                    key={id}
                    className={`slideshowDot${
                      currentSlide === id ? " active" : ""
                    }`}
                    onClick={() => {
                      setCurrentSlide(id);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
