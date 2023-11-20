import Header from "@/components/Header";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  Button,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Banner from "../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from "../assets/images/pxfuel.jpg";
import Footer from "@/components/Footer";
import { useFetch } from "./api/api";
import { useEffect } from "react";
import dayjs from "dayjs";
import TableComponent from "@/components/TableComponent/TableComponent";
const WhatsNewsDetail = () => {

  const {data,fetchAPI} = useFetch("get","/api/whateNew");
    
  useEffect(()=>{
      fetchAPI();
}, [fetchAPI]);

if(data){
  console.log(data)
}

  const handlePDFDownload  = (url) =>{
      window.open(url)
  }

  const tableHeaders = [
    "Title",
    "Description",
    "Upload Date",
    "Download",
  ]

  const excluseProperties = [
    "id",
    "updatedAt",
    "deletedAt",
    "documentName",
    "documentUrl",
  ];


  const includeProperties =[
    "name",
    "description",
    "notice",
    "createdAt",
    "documentUrl"
  ]

  return (
    <>
      <Head>
        <title>Whats New</title>
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
            px: { md: "5rem", lg: "5rem,", xl: "10rem" },
            py: "2rem",
          }}
        >
          <Typography variant="h1" >
            Whats New
          </Typography>
          {data?.data ? <TableComponent
                        tableData={data?.data}
                        tableHeaders={tableHeaders}
                        excluseProperties={excluseProperties}
                        includeProperties={includeProperties}
          /> : <h1>Loading....</h1>}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default WhatsNewsDetail;
