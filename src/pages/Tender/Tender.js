import {
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Loader from "@/components/Loader";
import TableComponent from "@/components/TableComponent/TableComponent";
import bgimg from "../../assets/images/pxfuel.jpg";
import { useFetch } from "../api/api";

const Tender = () => {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/tender");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);
  
  const tableHeaders = ["Title","Document Name", "Deadline", "Published", "Reference","Download",]
  const includeProperties =["tenderName","documentName","deadline","publishedDate","reference","documentUrl"]
  const excluseProperties = ["id","createdAt","updatedAt",];

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
        <Image src={Banner} alt="about_us" width={0} height={0} style={{ width: "100%", height: "100%", objectFit: "cover",
          }}/>
      </Box>
      <Box
        sx={{backgroundImage: `url(${bgimg.src})`,backgroundSize: "cover",backgroundAttachment: "fixed",}}>
         
        <Box
          sx={{width: "100%",margin: { xs: "0 auto", lg: "0  auto" },px: { md: "5rem", lg: "5rem,", xl: "10rem" },py: "2rem",}}>
          <Typography variant="h1">
            Tenders
          </Typography>
          {data?.data ? <TableComponent
                        tableData={data?.data}
                        tableHeaders={tableHeaders}
                        excluseProperties={excluseProperties}
                        includeProperties={includeProperties}
                        isGap={true}
          /> : <Loader/>}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Tender;
