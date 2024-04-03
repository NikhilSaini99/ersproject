import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* eslint-disable @next/next/no-img-element */
import { Box, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import Loader from "@/components/Loader";
import React from "react";
import Slider from "react-slick";

const CouncilMember = ({ h2Styling, data }) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
         className={`${className} !bg-yellowish !p-3 rounded-full `}
        style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center",
            height: "50px", right: "-55px", width: "50px"}}
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
            height: "50px", left: "-55px", width: "50px"}}
        onClick={onClick}
      />
    );
  }

  //settings for carousel
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2048, // screens greater than or equal to 2048px (2k)
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600, // screens between 1600px and 2047px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1366, // screens between 1366px and 1599px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
          slidesToShow: 2,
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


   if (data === undefined) {
    return <Loader />;
  }

  return (
    <>
      <Box sx={{ margin: "0 auto", textAlign: "center", p:"5rem" }}>
        <Stack direction={"column"} spacing={3}>
          <Typography variant="h2" sx={h2Styling}>
            Board and Corporate Governance
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              maxWidth: "800px",
              margin: "0 auto",
              placeSelf: "center",
              pb: "1rem",
            }}
          >
            At the helm of ERS, an experienced team provides oversight and monitors each function of the organisation.
          </Typography>

          {/*-------------------carousel----------------------- */}

            {data?.length === 1 ? 
            <Box sx={{display:"flex", margin:"0 auto", gap:"1rem", justifyContent:"center"}}>
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
                    <Card sx={{ maxWidth: 300, minHeight: 480 }}>
                    <CardMedia
          component="img"
          image={item?.url}
          alt="green iguana"
          sx={{ minHeight:"380px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize="16px" fontWeight="bold">
          {item?.name}
          </Typography>
          <Typography variant="body2" color="#f4c402">
          {item?.possition}
          </Typography>
        </CardContent>
        </Card>
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
