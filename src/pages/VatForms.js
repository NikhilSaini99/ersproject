import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "../assets/images/tax.jpg"
import FormTable from "@/components/Table";
import {Box} from '@mui/material'

export default function VatForms() {
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

      <Box sx={{height:{xs:'15rem',lg:'25rem',xs:'30rem'}}}>
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

      <FormTable title={"VAT Forms"} />

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
