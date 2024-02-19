import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BlackButton } from "@/styles/globalStyle";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import dayjs from "dayjs";

function Media() {
  // return (
  //   <>
  //     <section data-aos="fade-up-left">
  //       <div className="bg-zinc-300  bg-opacity-50 md:px-12 px-28 py-16  ">
  //         <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            
  //            <div>
  //             {/* <h1 className="text-3xl font-medium text-mainColor">Facebook</h1>
  //             <div className=" border w-[70px] border-yellowish mt-1"></div> */}
  //             <Typography variant="h4" sx={{ pb: "0.3rem", position: "relative !important", color: (theme) => theme.palette.primary.main }}>Facebook
  //               <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
  //             </Typography>

  //             <div className="flex flex-col justify-between gap-3 my-3 ">
  //             <div className="h-[480px] overflow-auto relative">
  //             <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D245556705256421%26id%3D100094062796048&show_text=true&width=500"
  //                width="350"
  //                height="754"
  //                style={{ border: "none", overflow: "auto" }} scrolling="yes" 
  //                frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  //             </div>
  //               {/* <iframe
  //                 src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D245164751962283%26id%3D100094062796048&show_text=true&width=500"
  //                 width="350px"
  //                 height="480px"
  //                 style={{ border: "none", overflow: "auto" }}
  //                 scrolling="no"
  //                 frameBorder="0"
  //                 allowFullScreen={true}
  //                 allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  //               ></iframe> */}
  //               <Link
  //                 href="https://www.facebook.com/profile.php?id=100094062796048"
  //                 target="_blank">
  //                 <BlackButton>Follow Us</BlackButton>
  //               </Link>
  //             </div>
  //           </div> 


  //           {/* <div>
  //             <Typography variant="h4" sx={{ pb: "0.3rem", position: "relative !important", color: (theme) => theme.palette.primary.main }}>Youtube
  //               <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
  //             </Typography>
  //             <div className="flex flex-col justify-between gap-3 my-3">
  //               <iframe
  //                 width="340px"
  //                 height="480px"
  //                 src="https://www.instagram.com/p/BdJRABkDbXU/embed/"
  //                 frameBorder="0"
  //               ></iframe>

  //               <Link href="https://www.youtube.com/channel/UCK9y_OZHNmDPwYveSdy5EOw" target="_blank">
  //                 <BlackButton>Follow Us</BlackButton>
  //               </Link>
  //             </div>
  //           </div> */}

  //           {/* <div>
  //             <Typography variant="h4" sx={{ pb: "0.3rem", position: "relative !important", color: (theme) => theme.palette.primary.main }}>Instagram
  //               <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
  //             </Typography>
  //             <div className="flex flex-col justify-between gap-3 my-3">
  //               <iframe
  //                 width="340px"
  //                 height="480px"
  //                 src="https://www.instagram.com/p/BdJRABkDbXU/embed/"
  //                 frameBorder="0"
  //               ></iframe>

  //               <Link href="https://www.instagram.com/aecom" target="_blank">
  //                 <BlackButton>Follow Us</BlackButton>
  //               </Link>
  //             </div>
  //           </div> */}
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
}

function NewsCard({
  url,
  img,
  title,
  date,
  description,
  id,
  apiURl,
  authorName,
}) {
  const truncate = (str) => {
    return str.substring(0, 200) + "...";
  };
  const [cardHover, setCardHover] = useState(false);
  return (
    <>
      {/* NEW ONE BELOW THIS */}

      <Paper
        elevation={12}
        sx={{
          margin: {
            xs: "0px 5rem 4rem 2rem",
            md: "0px 5rem 4rem 2rem",
            lg: "0px 5rem 4rem 6rem",
            xl: "0px 5rem 4rem 15rem",
          },
          width: { xs: "85%", md: "90%", lg: "78%", xl: "70%" },
        }}
      >
        <Stack sx={{ flexDirection: "column", overflow: "hidden" }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                transition: "0.5s",
                ...(cardHover && {
                  transform: "scale(1.1)",
                  cursor: "pointer",
                  transition: "0.5s",
                  filter: "brightness(60%)",
                }),
                height: "15.625rem",
                backgroundSize: "cover",
                position: "relative",
              }}
              onMouseOver={() => setCardHover(true)}
              onMouseOut={() => setCardHover(false)}
            >
              <img
                src={img}
                alt={title}
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Link href={{ pathname: "/NewsDetails", query: { id, apiURl } }}>
              <Button
                variant="contained"
                style={{ background: "#f4c402", color: "black" }}
                sx={{
                  textTransform: "capitalize",
                  position: "absolute",
                  bottom: "3rem",
                  right: "1rem",
                  "&:hover": { background: "#f4c402" },
                  opacity: "0",
                  fontWeight: "bold",
                  ...(cardHover && {
                    opacity: "100%",
                  }),
                }}
                onMouseOver={() => setCardHover(true)}
              >
                Read More
              </Button>
            </Link>
          </Box>
          <Stack
            sx={{
              flexDirection: "column",
              p: "3rem",
              gap: "0.8rem",
              pb: "2rem !important",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                transition: "0.5s",
                "&:hover": {
                  transition: "0.5s",
                  textDecoration: "underline",
                  color: "#f4c402",
                },
              }}
            >
              <Link href={{ pathname: "/NewsDetails", query: { id, apiURl } }}>
                {title}
              </Link>
            </Typography>
            {/* <Typography
              variant="body1"
              sx={{ color: "grey" }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncate(description))  }}
            ></Typography> */}
            <Divider />

            <Stack
              direction={"row"}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "0.3rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* <Avatar /> */}
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "black", fontSize: "14px" }}
                >
                  Author:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "black", fontSize: "14px" }}
                >
                  {authorName?.toString()?.charAt(0)?.toUpperCase() +
                    authorName?.slice(1)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "grey" }}>
                  Posted on {dayjs(date).format("MMM D YYYY")}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

function GallaryCard({ img, group, date, description, checking, item }) {
  const [imgIndex, setimgIndex] = useState(0);
  const [imageModal, setimageModal] = useState(false);
  function handleImageOpen(item) {
    setimageModal(true);
    setimgIndex(item);
  }

  function handlePreviousImg() {
    setimgIndex(imgIndex - 1);

    if (imgIndex < 1) {
      setimgIndex(checking.length - 1);
    }
  }

  function handleNextImg() {
    setimgIndex(imgIndex + 1);
    if (imgIndex >= checking.length - 1) {
      setimgIndex(0);
    }
  }

  const handleClose = () => setimageModal(false);
  return (
    <>
      <div className="flex flex-col justify-between relative group cursor-pointer ">
        <div className="overflow-hidden" onClick={() => handleImageOpen(item)}>
          <Image
            src={img}
            alt=""
            className="h-80 scale-100 group-hover:scale-110 ease-in-out duration-500 group-hover:brightness-50 object-cover"
          />
        </div>

        <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-500  bottom-0 text-center w-full">
          <h3 className="text-lg text-white font-medium mx-4">{date}</h3>
          <div className="flex flex-col gap-2 px-6 pt-10 pb-4 text-white bg-mainColor">
            <h1 className="text-[17px] leading-[22px] tracking-wide font-bold">
              {group}
            </h1>
            <h2 className="text-sm leading-5 tracking-normal font-normal text-center">
              {description.substring(0, 18)}
            </h2>
          </div>
        </div>
      </div>
      <Modal
        open={imageModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{}}
      >
        <Box
          sx={{
            width: { xs: "96%", lg: "70%" },
            margin: "0 auto",
            position: "relative",
            height: "80%",
            display: "flex",
            top: "10%",
            border: "none",
          }}
        >
          <IconButton
            sx={{ position: "absolute", left: "0", top: "50%" }}
            onClick={handlePreviousImg}
          >
            <ArrowBackIosIcon sx={{ fontSize: "3rem", color: "#f4c402" }} />
          </IconButton>
          <Image
            src={checking[imgIndex].img.src}
            alt=""
            width={`${checking[imgIndex].img.width}`}
            height={`${checking[imgIndex].img.height}`}
            style={{
              justifyContent: "center",
              alignContent: "center",
              objectFit: "cover",
              width: "100%",
              height: "auto",
              transition: "opacity 0.5s ease-in-out",
              display: "block",
              borderRadius: "12px",
            }}
          />
          <IconButton
            sx={{ position: "absolute", right: "0", top: "50%" }}
            onClick={handleNextImg}
          >
            <ArrowForwardIosIcon sx={{ fontSize: "3rem", color: "#f4c402" }} />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}

export { Media, NewsCard, GallaryCard };
