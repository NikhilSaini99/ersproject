import Banner from "../assets/images/tax.jpg"
import {Box} from '@mui/material'
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import Table from "@/components/Table";

export default function CustomsForms() {
  return (
    <>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <Box sx={{height:{xs:'15rem',lg:'30rem',xs:'30rem'}}}>
      <Image src={Banner} alt="etax"
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
      </Box>
      {/*-----------------------Table---------------------*/}
      <Box
        sx={{
          width: "90%",
          margin: { xs: "0 auto", lg: "0  auto" },
          px: { md: "5rem", lg: "5rem,", xl: "10rem" },
          py: "2rem", background: "transparent !important"
        }}
      >

      <Table title={"Customs & Excise Forms"} defaultValue={"Customs & Excise"}/>
        </Box>
      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
