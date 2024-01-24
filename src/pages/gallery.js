import { Box, IconButton, Modal, Typography } from "@mui/material";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Banner from "../assets/images/gallery.jpg";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect } from "react";
import { useFetch } from "./api/api";

export default function Gallery() {
  const [visibleGroup, setVisibleGroup] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { data, fetchAPI, isLoading } = useFetch(
    "get",
    "/api/gallery-images/web"
  );

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  let newgalleryData;
  if (data?.success) {
    newgalleryData = data?.data?.data;
  }
  const openImageViewer = (groupIndex, imageIndex) => {
    setSelectedGroup(groupIndex);
    setSelectedImage(imageIndex); // Start with the clicked image in the group
    setOpen(true);
  };

  const closeImageViewer = () => {
    setOpen(false);
  };

  const nextImage = () => {
    setSelectedImage(
      (prevImage) =>
        (prevImage + 1) % data?.data?.data[selectedGroup]?.imagegroup?.length
    );
  };

  const prevImage = () => {
    setSelectedImage(
      (prevImage) =>
        (prevImage - 1 + data?.data?.data[selectedGroup]?.imagegroup?.length) %
        data?.data?.data[selectedGroup]?.imagegroup?.length
    );
  };
  const handleVisiblity = (i) => {
    setVisibleGroup(i);
  };

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
        <Image src={Banner} alt="about_us" width={0} height={0} className="h-96" style={{ width: "100%", objectFit: "cover"}}/>
      </section>

      {/*-----------------------Gallery---------------------*/}

      <section className="bg-white px-6 py-16">
        <div>
          <h1
            className=" text-[#2F3192] text-4xl font-semibold w-80"
            style={{ marginLeft: "2rem" }}
          >
            ERS Image Gallery
          </h1>
          <div
            className="border w-[264px] border-yellowish mt-2"
            style={{ marginLeft: "2rem" }}
          ></div>
        </div>

        {/* Group Indicator */}
        <div className="flex justify-center items-center gap-5 my-10">
          {data?.data?.data?.map((title, id) => (
            <button
              key={id}
              onClick={() => handleVisiblity(id)}
              className={`text-base text-black/80 bg-[#F7F7FA] text-center leading-6 font-semibold uppercase border border-[#ECECEC] rounded-full px-7 py-1
               hover:text-white hover:bg-mainColor hover:ease-in hover:duration-300 ${
                 visibleGroup === id
                   ? "bg-mainColor text-white"
                   : "bg-[#F7F7FA] text-black/80"
               }`}
            >
              {title.groupName}
            </button>
          ))}
        </div>

        <div className="">
          {data?.data?.data &&
            data?.data?.data.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 sm:w-95 md:w-full xl:w-95 2xl:w-85 mx-auto gap-4 overflow-hidden ${
                  index === visibleGroup ? "block" : "hidden"
                } `}
              >
                {item?.imagegroup?.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="flex  max-w-[450px] h-[400px] flex-col justify-between  group relative "
                    >
                      <div
                        className="  h-full overflow-hidden cursor-pointer "
                        onClick={() => openImageViewer(index, i)}
                      >
                        <img
                          src={item?.url}
                          className="object-cover  group-hover:scale-110  ease-in-out duration-500  group-hover:brightness-50"
                          alt="group-images"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <Typography variant='body1' sx={{
                                                textAlign: 'center', p:"2rem", fontWeight: 'bold',
                                                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                                display: 'flex', alignItems: 'end', justifyContent: 'center',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff',
                                                opacity: 0, transition: 'opacity 0.3s',
                                                backdropFilter: 'blur(5px)',
                                                // backgroundColor: (theme)=>theme.palette.primary.main,
                                                ':hover': { opacity: 1 }
                                            }}>
                                                
                                            </Typography>
                      </div>
                      {/* <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-500  bottom-0 text-center w-full">
                        <h3 className="text-lg text-white font-medium mx-4">
                          {""}
                        </h3>
                        <div className="flex flex-col gap-2 px-6 pt-10 pb-4 text-white bg-mainColor opacity-70">
                          <h1 className="text-[17px] leading-[22px] tracking-wide font-bold">
                          {""}
                          </h1>
                          <h2 className="text-xl leading-5 tracking-normal h-full flex flex font-medium text-center">
                          {"ERS"}
                          </h2>
                        </div>
                      </div> */}
                    </div>
                  );
                })}

                <Modal open={open} onClose={closeImageViewer}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 1024,
                      height: 1024,
                      overflow: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton onClick={prevImage} style={{ color: 'white' }}>
                      <ArrowBackIosIcon />
                    </IconButton>
                    {selectedGroup !== null && selectedImage !== null && (
                      <img
                        src={
                          data?.data?.data[selectedGroup]?.imagegroup[
                            selectedImage
                          ]?.url
                        }
                        alt="Selected"
                        style={{ height: "70%", width: "85%", objectFit: "cover", backgroundAttachment: "fixed" }}
                      />
                    )}
                    <IconButton onClick={nextImage} style={{ color: 'white' }}>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </Box>
                </Modal>
              </div>
            ))}
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
