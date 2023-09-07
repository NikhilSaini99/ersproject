import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GrPlayFill } from "react-icons/gr";
import { Box, Divider, Typography } from "@mui/material";
import Banner from "../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from "../assets/images/pxfuel.jpg";
import dayjs from "dayjs";
import { useFetch } from "./api/api";

export default function Videos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const boxRef = useRef(null);

  function slider() {
    if (boxRef.current) {
      clearTimeout(boxRef.current);
    }
  }

  // useEffect(() => {
  //   slider();
  //   boxRef.current = setTimeout(
  //     () =>
  //       setCurrentSlide((prevSlide) =>
  //         prevSlide === videoSlider.length - 1 ? 0 : prevSlide + 1
  //       ),
  //     5000
  //   );

  //   return () => {
  //     slider();
  //   };
  // }, [currentSlide]);

  const { data, fetchAPI, isLoading } = useFetch("get", "/api/videos");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);


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
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*-----------------------Header---------------------*/}

      <Header />
      <Box sx={{ position: "relative", width: "100%", height: "30rem" }}>
        <Image
          src={Banner}
          alt="about_us"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bgimg.src})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            width: "90%",
            margin: { xs: "0 auto", lg: "0  auto" },
            py: "2rem",
          }}
        >
          <Typography variant="h1" sx={{ pt: "2rem", mb: "2rem" }}>
            Things to see
          </Typography>

          <Box className="slideshow">
            {data&& data?.data?.map((item, id) => (
              <Box key={id} sx={{my:'2rem'}} >
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb:'1rem'}}>
                  <Divider/>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#2F248F",
                    }}
                  >
                    {dayjs(item.uploadDate).format("YYYY")}
                  </Typography>
                  <Divider></Divider>
                </Box>
                <div
                  className="slideshowSlider grid-cols-2 "
                  style={{
                    transform: `translate3d(${-currentSlide * 10}%, 0, 0)`,
                  }}
                >
                    <div key={id} className="flex flex-col gap-3 mb-3">
                      <iframe
                        width="375"
                        height="225"
                        src={item?.url}
                        title="YouTube video player"
                        allowFullScreen=""
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                      <h1 className="flex items-center gap-5 text-base font-medium">
                        <GrPlayFill className="text-sm" />
                        {item?.name}
                      </h1>
                    </div>
                </div>
                {/* <div className="slideshowDots">
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
                </div> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
