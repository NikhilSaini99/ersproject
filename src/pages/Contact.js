import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled
} from "@mui/material";

import CallIcon from '@mui/icons-material/Call';
import { Centers } from "@/components/homecard";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import { ImHome3 } from "react-icons/im";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { Media } from "@/components/media";
import React from "react";
import { RiMailFill } from "react-icons/ri";
import bgimg from "../assets/images/contact_us_banner.jpg";
import getUrlMap from "./utils/helperFunction";
import { useEffect } from "react";
import { useFetch } from "./api/api";

const MyDiv = styled("div")({
    display:'grid',
    gridTemplateColumns: "repeat(auto-fill , minmax(350px, 1fr))",
    justifyContent:"space-between",
    gap:'2.5rem',
    margin:'1.5rem 0',
})

export const GridAutoColumn3 = styled("div")(({theme})=>({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
  gap: "1rem",
}))

export const GridAutoColumnAdv = styled("div")(({theme})=>({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1rem",
}))

export default function Contact() {

  const { data, fetchAPI, isLoading } = useFetch("get", "/api/contact");

  useEffect(()=>{
    fetchAPI()
  },[fetchAPI])

  const headQuarter = data?.data?.filter((item)=>item?.isHeadQuater)
  const serviceCenter = data?.data?.filter((item)=>item?.isHeadQuater===false)
  
  const locations = [
    {
      data: [
        { name: "Ngwenya", time: "24/7" },
        { name: "Lavumisa", time: "07:00 - 22:00" },
        { name: "Mahamba", time: "07:00 - 22:00" },
        { name: "Sandlane", time: "08:00 - 18:00" },
        { name: "Lomahasha", time: "07:00 - 12 Midnight" },
        { name: "Mhlumeni", time: "06:00 - 12 Midnight" },
        { name: "Mananga", time: "07:00 - 18:00" },
        { name: "Matsamo", time: "07:00 - 20:00" },
      ],
    },
    {
      data: [
        { name: "Bulembu", time: "08:00 - 16:00" },
        { name: "Lundzi", time: "08:00 - 16:00" },
        { name: "Gege", time: "08:00 - 16:00" },
        { name: "Sicunusa", time: "08:00 - 18:00" },
        { name: "Nsalitje", time: "08:00 - 18:00" },
        {
          name: "King Mswati III International Airport",
          time: "06:00 - 18:00",
        },
        {
          name: "Inland Container Depo-ICD",
          time: "08:00 - 17:00",
        },
      ],
    },
  ];

  const handleOpenMap = (lat, long)=>{
    window.open(getUrlMap(lat,long), "_blank");
    
  }
  
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*------------------Contact Background-------------------*/}
      
      <section>
        <div className="relative">
         
        <Box sx={{ position: "relative", width: "100%", height: "40rem" }}>
          {/* <Box sx={{height:{xs:'30rem',lg:'30rem',xs:'30rem'}}}> */}
         <Image src={bgimg} alt="Contact Us"
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
      </Box>
          
          <div className="absolute bottom-0 bg-white/80 w-full pl-10 py-[14px]">
            <h1 className="text-subColor text-3xl font-bold leading-8">
              CONTACT ERS
            </h1>
            <div className="border mr-12 border-yellowish mt-1 w-14 "></div>
          </div>
        </div>
      </section>

      {/*------------------Head Section-------------------*/}

      <section>
      <div className="px-10 flex flex-col sm:flex-col md:flex-row lg:flex-row">
      <div className="flex flex-col w-full gap-4 sm:gap-8 bg-subColor text-[#f5f5f5] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:w-32">
           
           {headQuarter && headQuarter.map((item,index)=>(
            <div className="flex flex-col gap-2" key={index}>
             <h1 className="text-xl font-bold leading-6 mb-1">
                {item?.branchName}
              </h1>
              <p className="flex  gap-2  item">
                <ImHome3 className="text-2xl min-w-[24px]" />

                <span className="text-sm leading-6 font-normal">
                {item?.branchLocation},{item?.branchCity}, {item?.branchState}
                </span>
              </p>
              <p className="flex  gap-2">
                <CallIcon className="text-2xl min-w-[24px]" />

                <span className="text-sm leading-6 font-normal">
                  {item?.contactNo}
                </span>
              </p>
            </div>
           )) } 
           
            <div className="flex flex-col justify-start gap-2 pr-6">
              <h1 className="text-xl font-bold leading-6 mb-1">
                ERS Contact Centre
              </h1>
              <p className="text-sm leading-6 font-normal">
                For all your tax related enquiries call or email
              </p>
              <p className="text-sm leading-6 font-normal">
                the ERS Contact Centre on
              </p>
              {/* <p className="flex  gap-1">
                <CallIcon className="text-xl min-w-[24px]" />

                <span className="text-sm leading-6 font-normal">
                (+268) 2406 4050
                </span>
              </p> */}
              <p className="flex  gap-1">
                <CallIcon className="text-xl min-w-[24px]" />
                <span className="text-sm leading-6 font-normal">
                2406 4050
                </span>
              </p>
              <p className="flex  gap-1">
                <IoLogoWhatsapp className="text-xl min-w-[24px]" />
                <span className="text-sm leading-6 font-normal">
                7606 3735
                </span>
              </p>

              <p className="flex  gap-1">
                <RiMailFill className="text-xl min-w-[24px]" />

                <span className="text-sm leading-6 font-normal">
                  info@ers.org.sz
                </span>
               <br></br>
              </p>
                <button  
                  onClick={()=>handleOpenMap(headQuarter[0]?.lat,headQuarter[0]?.long)}
                  type="button"
                  className="rounded-full bg-[#f4c402] w-[10rem] p-2 text-black text-bold">
                  Get Directions
                </button>
            </div>
          </div>

          <div className="px-10 sm:px-[40px] pt-9 bg-[#F5F5F5] w-full md:w-[68%]">

          <Typography
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#2F248F",
            }} >
            Service Centres and Branches
            <div className="border mr-12 border-yellowish mt-1 w-32 "></div>
          </Typography>
          
            <MyDiv >
              {data && serviceCenter?.map((item, key) => (
                <Centers
                  key={key}
                  branchName={item?.branchName}
                  branchLocation={item?.branchLocation}
                  contact={item?.contactNo}
                  timing={item?.timing}
                  branchCity={item?.branchCity}
                  branchState={item?.branchState}
                  lat={item?.lat}
                  long={item?.long}
                />
              ))}
              </MyDiv>
          </div>
        </div>

        <Box
          sx={{ my: "2rem", pb: "2rem", pt: "1rem" }}
          className="px-10 bg-[#F5F5F5]"
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#2F248F",
              marginY: "1rem",
            }} >
            Border Operations
            <div className="border mr-12 border-yellowish mt-1 w-14 "></div>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection:{xs:"column",md:"row"},
              gap: {xs:"2rem", md: "2rem", lg: "2rem" },
              flexWrap: "wrap",
              justifyContent: "space-between",
              flex: "1 1 0",
            }}
          >
            {locations.map((item, index) => (
              <Paper
                elevation={20}
                sx={{ width: {xs:"100%", md: "45%", lg: "45%" } }}
                key={index}
              >
                <TableContainer
                  sx={{
                    "& th, & td": { border: "0.1rem solid rgba(0,0,0,0.4)" },
                  }}
                >
                  <Table aria-label="Double Taxation Table">
                    <TableHead>
                      <TableRow
                        sx={{
                          backgroundColor: "#2f2483",
                          "& > *": {
                            color: "white !important",
                            fontWeight: "bold !important",
                            fontSize: "1rem !important",
                          },
                        }}
                      >
                        <TableCell align="center">Post Name</TableCell>
                        <TableCell align="center">Operational Hours</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {item.data.map(
                        (item, index) =>
                          item && (
                            <TableRow
                              key={index}
                              sx={{
                                "&>*": {
                                  fontWeight: "bold",
                                },
                                "&:hover": {
                                  background: "#F2F2F2",
                                },
                              }}
                            >
                              <TableCell align="center">{item.name}</TableCell>
                              <TableCell align="center">{item.time}</TableCell>
                            </TableRow>
                          )
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            ))}
          </Box>
        </Box>
        {/* Map */}

        <div className="px-10 py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.816287766545!2d31.17508431726318!3d-26.418809908319176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8cee83ab4d14b%3A0x2c8213d352acb5f3!2sEswatini%20Revenue%20Service!5e0!3m2!1sen!2sin!4v1680769959819!5m2!1sen!2sin"
            width={"100%"}
            height={"420"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/*------------------Social Media-------------------*/}

      <Media />

      {/*------------------Footer-------------------*/}

      <Footer />
    </>
  );
}
