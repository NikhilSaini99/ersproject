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
import React, { useEffect } from "react";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from "../../assets/images/pxfuel.jpg";
import Footer from "@/components/Footer";
import { useFetch } from "../api/api";
import Loader from "@/components/Loader";
import TableComponent from "@/components/TableComponent/TableComponent";

const RecentlyApprovedContainer = (props) => {
    const {title , array} = props
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/recentlyApproved");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

    const approvedArryGuidelines = data?.data?.filter((item)=>item.type===array)

    const handlePDFDownload = (url) => {
    window.open(url, "_blank");
  };
  const tableHeaders = ["Name","Description", "Document Name", "Upload Date","Download",]
  const includeProperties =["name","description","documentName","createdAt","documentUrl"]

  const excluseProperties = ["id","updatedAt","deletedAt","documentName","type"];

  return (
    <>
    
      <Head>
        <title>Recently Approved Forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*-----------------------Header---------------------*/}

      <Header />
      <Box sx={{ position: "relative", width: "100%", height: "30rem" }}>
        <Image src={Banner}  alt="about_us" width={0}  height={0}  style={{width: "100%",   height: "100%",   objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{  backgroundImage: `url(${bgimg.src})`,  backgroundSize: "cover",  backgroundAttachment: "fixed",
        }}
      >
         
        <Box
          sx={{  width: "90%", margin: { xs: "0 auto", lg: "0  auto" },  px: { md: "5rem", lg: "5rem,", xl: "10rem" }, py: "2rem",
          }}
        >
          
          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> {title}
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography variant="h1" >
            {title}
          </Typography> */}

          {data?.data ? <TableComponent
                        tableData={approvedArryGuidelines}
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

export default RecentlyApprovedContainer;
