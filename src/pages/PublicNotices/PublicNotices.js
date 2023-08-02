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
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from "../../assets/images/pxfuel.jpg";
import Footer from "@/components/Footer";

const PublicNotices = () => {
  const dummyData = [
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
    {
      title: "Public meeting on how to save TAX",
      description: "This is a description of the public meeting how to save TAX",
      date : "22-July-2023",
      notice: "This is notice bord for spacial information in the meeting",
    },
  ];
  console.log(
    Object.keys(dummyData[0]).map((item, index) => {
      if (item === "title") console.log("hello");
      else console.log("undefined");
    })
  );
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
          sx={{
            width: "90%",
            margin: { xs: "0 auto", lg: "0  auto" },
            px: { md: "5rem", lg: "5rem,", xl: "10rem" },
            py: "2rem",
          }}
        >
          <Typography variant="h1" sx={{ pt: "2rem", mb: "2rem" }}>
            Public Notice
          </Typography>

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
                {dummyData.map((item, index) => (
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
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell width="12%">{item.date}</TableCell>
                    <TableCell>{item.notice}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ backgroundColor: "#2F2483 !important" }}
                      >
                        Downlaod
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PublicNotices;
