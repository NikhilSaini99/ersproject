import { Box, Button, Stack, Typography, styled } from "@mui/material";

import BarChartIcon from "@mui/icons-material/BarChart";
import { BlackButton } from "@/styles/globalStyle";
import CalculateIcon from "@mui/icons-material/Calculate";
import CallIcon from '@mui/icons-material/Call';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HomeIcon from "@mui/icons-material/Home";
import IconComponent from "./IconComponent/IconComponent";
import Image from "next/image";
import Link from "next/link";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import React from "react";
import TableChartIcon from "@mui/icons-material/TableChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { getUrlMap } from "@/pages/utils/helperFunction";

const Icons = () => {
  const iconStyling = {
    transition: "transform 0.5s",
    fontSize: "2rem",
    color: "#2F3192",
    backgroundColor: "#E3E5FF",
    width: "80px",
    height: "80px",
    p: "18px",
    "&:hover": {
      backgroundColor: "#2F3192",
      color: "#E3E5FF",
      transform: "scale(1.2)",
      transition: "transform 0.5s",
    },
    borderRadius: "50% 0 50% 0",
  };
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-center gap-4 xs:gap-6 md:gap-12 xl:gap-20 2xl:gap-24 mt-6">
        <Link href="/Calculator" className="flex flex-col gap-2">
          <CalculateIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Tax Calculator</p>
        </Link>

        <Link href="/TaxTables" className="flex flex-col gap-2">
          <TableChartIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Tax Tables</p>
        </Link>

        <Link href="https://taxease.ers.org.sz/" className="flex flex-col gap-2">
          <PaymentsOutlinedIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Tax Ease</p>
        </Link>

        <Link href="/TaxItemTable" className="flex flex-col gap-2">
          <BarChartIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Item Codes</p>
        </Link>

        <Link href="/Hotline" className="flex flex-col gap-2">
          <ConnectWithoutContactIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Hotline</p>
        </Link>

        <Link href="/FAQ" className="flex flex-col gap-2">
          <LiveHelpIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">FAQs</p>
        </Link>

        <Link
          href="/BusinessFAQ"
          className="flex flex-col gap-2"
        >
          <TrendingUpIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Business</p>
        </Link>

        <Link
          href="/TravellingFAQ"
          className="flex flex-col gap-2"
        >
          <FlightTakeoffIcon sx={iconStyling} />
          <p className="text-center text-sm font-medium">Travelling</p>
        </Link>
      </div>
    </>
  );
};

function News({ icon, description, img, link }) {
  return (
    <>
      <div className=" border border-[#E8E8EB] bg-white shadow-lg shadow-zinc-400 ">
        <div className="object-cover relative ">
          <Image src={img} alt="..." className="h-48 w-full" style={{objectFit:"cover"}}/>
          <div className="rounded-2xl absolute -bottom-[76px] left-8 px-8 py-4 bg-white ">
            <Image src={icon} alt="..." className="w-40" />
          </div>
        </div>
        <div className="px-8 pt-14 pb-4 gap-5 flex flex-col ">
          <p className="mt-5 mb-8 text-base font-normal checking">
            {description}
          </p>
          <Link href={link}>
           <BlackButton>Know More</BlackButton>
          </Link>
        </div>
      </div>
    </>
  );
}

function Centers({ branchName, branchLocation, contact, timing,branchState,branchCity, lat, long }) {
  const handleOpenMap = (lat, long)=>{
    window.open(getUrlMap(lat,long), "_blank");
    
  }
  return (
    <>
      <Stack
        direction={"column"}
        sx={{ justifyContent: "space-between" }}
        spacing={1}
      >
        <Typography
          variant="body1"
          sx={{color:(theme)=>theme.palette.primary.main, fontSize: { xs: "0.8rem", xl: "1rem" }, fontWeight: "bold" }}
        >
          {branchName}
        </Typography>
        <Box sx={{display:"flex", gap:"0.3rem", alignItems:"center"}}>
        <Box sx={{display:"flex", maxWidth:"50px", justifyContent:"flex-start"}}>
        <HomeIcon sx={{width:"26px", height:"26px"}} />
        {/* <IconComponent src={homeIcon.src} width={"26px"} height={"26px"} color={"black"}/> */}
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: { xs: "0.7rem", lg: "0.8rem" } }}
          >
            {branchLocation}, {branchState},{branchCity}
          </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"0.3rem",  alignItems:"center"}}>
        <Box sx={{display:"flex", maxWidth:"50px", justifyContent:"flex-start"}}>
        <WatchLaterIcon sx={{width:"26px", height:"26px"}}/>
        {/* <IconComponent src={clockIcon.src} width={"26px"} height={"26px"} color={"black"}/> */}
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: { xs: "0.7rem", lg: "0.8rem", } }}
          >
            {`08:00 - 17:00`}
          </Typography>
        </Box>
        <Box sx={{display:"flex", gap:"0.3rem", alignItems:"center"}}>
        <Box sx={{display:"flex", maxWidth:"50px", justifyContent:"flex-start"}}>
        <CallIcon sx={{width:"26px", height:"26px"}}/>
        {/* <IconComponent src={contactIcon.src} width={"26px"} height={"26px"} color={"black"}/> */}
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: { xs: "0.7rem", lg: "0.8rem" } }}
          >
            {contact}
          </Typography>
        </Box>

        <Stack direction={"row"}>
          <Button
            variant="contained"
            onClick={()=>handleOpenMap(lat, long)}
            sx={{
              fontSize: { xs: "0.6rem", lg: "0.8rem" },
              background: "black !important",
              borderRadius: "50px",
              fontWeight: "light",
              marginTop: "1rem",
              p: { xs: "0.5em 0.8rem", xl: "0.5em 1.5rem" },
              "&:hover": { background: "black" },
            }}
          >
            Get Direction
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export { News, Icons, Centers };
