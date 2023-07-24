import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import profilVector from "@/assets//images/profilevector.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CouncilMember = ({ h2Styling }) => {
  const memeberData = [
    {
      id: 1,
      img: profilVector,
      name: "David Dlamini",
      role: "Chairman",
    },
    {
      id: 2,
      img: profilVector,
      name: "Brightwell Nkambule (CG)",
      role: "Board Memeber",
    },
    {
      id: 3,
      img: profilVector,
      name: "Carol Muir",
      role: "Director",
    },
    {
      id: 4,
      img: profilVector,
      name: "Phil Mnisi",
      role: "CEO",
    },
    {
      id: 5,
      img: profilVector,
      name: "David Dlamini",
      role: "Chairman",
    },
    {
      id: 6,
      img: profilVector,
      name: "Brightwell Nkambule (CG)",
      role: "Board Memeber",
    },
    {
      id: 7,
      img: profilVector,
      name: "Carol Muir",
      role: "Director",
    },
    {
      id: 8,
      img: profilVector,
      name: "Phil Mnisi",
      role: "CEO",
    },
  ];

  //settings for carousel
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1280, // screens between 1280px and 960px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960, // screens between 960px and 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screens below 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Stack direction={"column"} spacing={3} sx={{ mt: "3rem", mb: "3rem" }}>
          <Typography variant="h2" sx={h2Styling}>
            Meet Council Member
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "grey",
              maxWidth: "500px",
              margin: "0 auto",
              placeSelf: "center",
              pb: "1rem",
            }}
          >
            Denounce with righteous indignation and dislike men who are so
            beguiled & demoralized our power of choice.
          </Typography>

          {/*-------------------carousel----------------------- */}

          <Box className="image-slider">
            <Slider className="h-fit" {...settings}>
              {memeberData.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      position: "relative",
                      pl: { lg: "0.7rem", xl: "1rem" },
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={0}
                      height={0}
                      style={{
                        border: "none",
                        width: "80%",
                        aspectRatio: "1/1",
                      }}
                    />
                    <Box
                      sx={{
                        width:"80%",
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid rgba(0, 0, 0, 0.10)",
                        borderTop: "none !important",
                        overflow: "hidden",
                        p: "25px 20px 18px",
                        gap: "1.5rem",
                        minHeight: "135px",
                        maxHeight: "135px",
                      }}
                    >
                      <Typography variant="body1" fontWeight={"bold"}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#f4c402" }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>

          {/* ---------Card section----- */}
        </Stack>
      </Box>
    </>
  );
};

export default CouncilMember;
