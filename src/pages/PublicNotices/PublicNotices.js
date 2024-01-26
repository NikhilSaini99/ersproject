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
import dayjs from "dayjs";
import { useFetch } from "../api/api";
import Loader from "@/components/Loader";
import TableComponent from "@/components/TableComponent/TableComponent";

const PublicNotices = () => {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/noticeBoard");

  useEffect(() => {
    fetchAPI();
  }, []);

  const handlePDFDownload = (url) => {
    window.open(url, "_blank");
  };

  const tableHeaders = [
    "Title",
    "Description",
    "Notice",
    "Date",
    "Download",
  ]
  const includeProperties =[
    "name",
    "description",
    "notice",
    "date",
    "documentUrl"
  ]
  const excluseProperties = [
    "id",
    "updatedAt",
    "deletedAt",
    "documentName",
    "documentUrl",
  ];

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
           sx={{width: "90%",margin: { xs: "0 auto", lg: "0  auto" },px: { md: "5rem", lg: "5rem,", xl: "10rem" },py: "2rem",}}>

        <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Public Notice
                            <span className="absolute bottom-0 left-0 w-1/6 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

          {/* <Typography variant="h1" >
            Public Notice
          </Typography> */}

          {data?.data ? <TableComponent
                        tableData={data?.data}
                        tableHeaders={tableHeaders}
                        excluseProperties={excluseProperties}
                        includeProperties={includeProperties}
          /> : <Loader />}


          {/* {isLoading  ? (
            <Loader />
          ) : (
            
            <TableContainer
              component={Paper}
              sx={{ "& th, & td": { border: "0.1rem solid rgba(0,0,0,0.1)" } }}
            >
              <Table aria-label="Tender-Table">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "#DFDFDF",
                      "& > *": {
                        fontWeight: "bold !important",
                        fontSize: "1rem !important",
                        textAlign: "center !important",
                      },
                    }}
                  >
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Date & Time</TableCell>
                    <TableCell>Notice</TableCell>
                    <TableCell>
                      <CloudDownloadOutlinedIcon />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& > *": {
                          textAlign: "center !important",
                        },
                        "&:hover": {
                          background: "#F2F2F2",
                        },
                      }}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell width="12%">
                        {dayjs(item.date).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell>{item.notice}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          sx={{ backgroundColor: "#2F2483 !important" }}
                          onClick={() => handlePDFDownload(item.documentUrl)}
                        >
                          Downlaod
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )} */}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PublicNotices;
