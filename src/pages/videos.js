import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";
import React, {useEffect} from "react";

import Banner from "../assets/images/Guide-on-the-Appointment-of.png";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Slider from "react-slick";
import bgimg from "../assets/images/pxfuel.jpg";
import dayjs from "dayjs";
import { useFetch } from "./api/api";

export default function Videos() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
         className={`${className} !bg-yellowish !p-3 rounded-full `}
        style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center",
            height: "33px", right: "-39px", width: "33px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !bg-yellowish !p-3 rounded-full `}
        style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center",
            height: "33px", left: "-35px", top: "228px", width: "33px", zIndex:1}}
        onClick={onClick}
      />
    );
  }
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/videos/web");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2048, // screens greater than or equal to 2048px (2k)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600, // screens between 1600px and 2047px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366, // screens between 1366px and 1599px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // screens between 1280px and 960px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960, // screens between 960px and 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screens below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reverseArr = data?.data ? [...data?.data?.yearwisearray]?.reverse() : [] ;

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
      
      <Box sx={{height:{xs:'15rem',lg:'30rem',xs:'30rem'}}}>
      <Image src={Banner} alt="Vidos Image"
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
      </Box>

      {/* <Box sx={{ position: "relative", width: "100%", }}>
      <Image src={Banner} alt="about_us" width={0} height={0} className="h-96" style={{ width: "100%", objectFit: "cover"}}/>
      </Box> */}

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
          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Things to See
                            <span className="absolute bottom-0 left-0 w-1/6 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

       
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {data &&
              reverseArr?.map((item) => {
                return (
                  <div key={item?.yearofupload}>
                    <Typography
                      variant="h4"
                      sx={{ mb: "2rem", textAlign: "center", color: "#2F248F" }}
                    >
                      {item?.yearofupload}
                    </Typography>
                    {item?.video?.length === 1 ? (
          <div className="lg:w-[50%] p-5 flex flex-col gap-2">
            <iframe
              style={{  width: "100%" }}
              height="355"
              src={item?.video[0]?.url?.slice(
                item?.video[0]?.url?.indexOf("https"),
                item?.video[0]?.url?.indexOf("title") - 2
              )}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <p className="text-center font-semibold text-base">{item?.video?.[0]?.name}</p>
          </div>
        ) : (
          <Slider {...settings} key={item?.yearofupload}>
            {item?.video?.map((video) => {
              return (
                <div key={video?.id} className="w-32 p-5 flex flex-col gap-2">
                  <iframe
                    style={{ width: "100%" }}
                    height="355"
                    src={video?.url?.slice(
                      video?.url?.indexOf("https"),
                      video?.url?.indexOf("title") - 2
                    )}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <p className="text-center font-semibold text-base mt-2">{video?.name}</p>
                  <p className="text-center font-semibold text-base mt-2"><span>Uploaded on: {dayjs(video?.uploadDate).format("MMM YYYY")}</span></p>
                </div>
              );
            })}
          </Slider>
        )}
                  </div>
                );
              })}
          </Box>
        </Box>
      </Box>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
