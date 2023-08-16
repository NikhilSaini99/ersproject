import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import background from "../assets/images/banner-HIRES.png";
import background2 from "../assets/images/Home_Page_2.jpg";
import background3 from "../assets/images/Advance_Ruling.png";
import background4 from "../assets/images/Etax_registration.jpg";
import background5 from "../assets/images/VAT_Returns.jpg";


export default function Carousal() {
  const slides = [
    { id: 0, icon: background },
    { id: 1, icon: background2 },
    { id: 2, icon: background4 },
    { id: 4, icon: background3 },
    { id: 5, icon: background5 },

  ];
  // border-right:2px;border-left:2px;border-color:mainColor;border-style:solid;
  const titles = [
    "<span style=padding-left:62px;padding-right:62px> ABOUT US </span>",
    "<span style=padding-left:32px;padding-right:32px;> ASYCUDA WORLD </span>",
    "<span style=padding-left:78px;padding-right:78px> e-TAX </span>",
    "<span style=padding-left:24px;padding-right:24px> Advance Ruling </span>",
    "<span style=padding-left:24px;padding-right:24px> VAT Registration </span>",
  ];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>


      <section className="relative">
        {/* Slider Wrapper */}
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {slides.map((slide, index) => (
              <Image className="slide" key={index} src={slide.icon} alt="..." />
            ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex xs:flex-col xs:gap-2 md:gap-0 md:flex-row lg:flex-row justify-center text-subColor bg-[#DAD8CC] w-full font-semibold text-base  ">
          {titles.map((title, id) => (
            <button
              key={id}
              className={`slider-indicator ${id === index ? "active" : ""}  xs:border-t xs:border-slate-500 xs:border-r-0 md:border-r-2 md:border-slate-500 md:border-t-0`}
              onClick={() => { setIndex(id) }}
              dangerouslySetInnerHTML={{ __html: title }}
            ></button>
          ))}
        </div>  
      </section>


      {/* Slider bottom */}
      {/* <div className="bg-[#2F3192E0] px-14 absolute w-full flex justify-between bottom-0">
        <div className="py-4">
          <h1 className="text-[32px] font-bold text-[#FAE08A]"> e-Tax</h1>
          <p className="text-white">
            An online platform where taxpayers can manage their taxes.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#fae08a95] cursor-pointer w-32">
          <Image src={arrow} alt="..." />
          <div className=" text-[#2F3192] font-semibold mt-3">
            <p>know more</p>
          </div>
        </div>
      </div> */}

    </>
  );
}