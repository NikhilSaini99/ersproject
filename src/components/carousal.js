import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
export default function Carousal({ bannerData }) {
  const mySlides = bannerData?.map(({ id, imageurl, link, imageName }) => ({
    id,
    imageurl,
    link,
    imageName,
  }));

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
          prevIndex === mySlides.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );
    return () => {
      resetTimeout();
    };
  }, [index, mySlides]);

  return (
    <>
      <section className="relative">
        {/* Slider Wrapper */}
        <div className="slideshow">
          <div
            className="slideshowSlider cursor-pointer"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            onClick={() => {window.open(mySlides[index]?.link)}}
          >
            {mySlides?.map((slide, index) => (
              <Image
                className="slide"
                key={index}
                src={`${slide.imageurl}`}
                alt={slide?.imageName}
                width={768}
                height={768}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex xs:flex-col xs:gap-2 md:gap-0 md:flex-row lg:flex-row justify-center text-subColor bg-[#DAD8CC] w-full font-semibold text-base  ">
          {mySlides?.map((title, id) => (
            <button
              key={id}
              className={`slider-indicator ${
                id === index ? "active" : ""
              }  xs:border-t xs:border-slate-500 xs:border-r-0 md:border-r-2 md:border-slate-500 md:border-t-0`}
              onClick={() => {
                setIndex(id);
              }}
              dangerouslySetInnerHTML={{
                __html: `<span style="padding-left:62px;padding-right:62px">${title?.imageName}</span>`,
              }}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}
