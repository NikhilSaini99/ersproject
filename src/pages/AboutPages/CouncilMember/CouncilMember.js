/* eslint-disable @next/next/no-img-element */
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import profilVector from "@/assets//images/profilevector.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "@/components/Loader";

const CouncilMember = ({ h2Styling, data }) => {
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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



  // const settings = {
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: Math.min(4, data?.length), // Ensure slidesToShow is not greater than data.length
  //   slidesToScroll: 1,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 1280, // screens between 1280px and 960px
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 960, // screens between 960px and 600px
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600, // screens below 600px
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

   if (data === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Box sx={{ margin: "0 auto", textAlign: "center" }}>
        <Stack direction={"column"} spacing={3}>
          <Typography variant="h2" sx={h2Styling}>
            Board and Corporate Governance
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
            At the helm of ERS, an experienced team provides oversight and monitors each function of the organisation.
          </Typography>

          {/*-------------------carousel----------------------- */}

            {data?.length === 1 ? 
            <Box sx={{display:"flex", width:"100%", margin:"0 auto", gap:"1rem", justifyContent:"center"}}>
             <Box
             sx={{
              maxWidth: "350px",
               position: "relative",
               pl: { lg: "0.7rem", xl: "1rem" },
               p: "1rem"
             }}
           >
             <Box sx={{height:"350px", backgroundAttachment:"cover"}}>
             <img
               src={data?.[0]?.url}
               alt="img"
               style={{ width: "100%", height: "100%", objectFit:"cover" }}
             />
             </Box>
             <Box
               sx={{
                 width: "100%",
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
                 {data?.[0]?.name}
               </Typography>
               <Typography variant="body2" sx={{ color: "#f4c402" }}>
                 {data?.[0]?.possition}
               </Typography>
             </Box>
           </Box>
           </Box>
           :
           data?.length === 2 ?
           <Box sx={{display:"flex", width:"100%", margin:"0 auto", gap:"1rem", justifyContent:"center"}}>
           {data?.map((item,i)=>(
           <Box key={i}
           sx={{
            maxWidth: "350px",
             position: "relative",
             pl: { lg: "0.7rem", xl: "1rem" },
             p: "1rem"
            
           }}
         >
           <Box sx={{height:"350px", backgroundAttachment:"cover"}}>
           <img
             src={item?.url}
             alt="img"
             style={{ width: "100%", height: "100%", objectFit:"cover" }}
           />
           </Box>
           <Box
             sx={{
               width: "100%",
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
               {item?.name}
             </Typography>
             <Typography variant="body2" sx={{ color: "#f4c402" }}>
               {item?.possition}
             </Typography>
           </Box>
         </Box>
           ))}
         </Box>
         :
           <Slider {...settings}>
            {data &&
              data.map((item, i) => (
                <div key={item?.id}>
                  <Box
                    sx={{
                      position: "relative",
                      pl: { lg: "0.7rem", xl: "1rem" },
                      p: "1rem",
                    }}
                  >
                    <Box sx={{height:"350px", backgroundAttachment:"cover"}}>
                    <img
                      src={item?.url}
                      alt="imgg"
                      key={i}
                      style={{ width: "100%", height: "100%", objectFit:"cover" }}
                    />
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
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
                        {item?.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#f4c402" }}>
                        {item?.possition}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              ))}
          </Slider>
           }
          {/* ---------Card section----- */}
        </Stack>
      </Box>
    </>
  );
};

export default CouncilMember;
