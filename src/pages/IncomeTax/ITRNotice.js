import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../assets/images/General-Import-&-Export-Rul.jpg"
import bgimg from "../../assets/images/bg-1.png";
import Footer from "@/components/Footer";

const ITRNotice = () => {
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

            <Box sx={{ position: "relative", width: "100%", height: '30rem' }}>
                    <Image
                        src={Banner}
                        alt="Part_Time_Employees"
                        width={0}
                        height={0}
                        style={{
                            width: "100%", height: "100%",
                            objectFit: 'cover'
                        }}
                    />
                </Box>

         <Box sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >
            <Box sx={{ width: "80%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '6rem', lg: '8rem,', xl: '10rem' }, py: '2rem' }}>
                <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
                Income Tax Return Submission Notice 2022
                </Typography>
        <Link href="http://www.ers.org.sz/documents/1674048256.pdf">
          <Typography variant="h5" className="Pointsformatting">Download Notice</Typography>
        </Link>
      </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default ITRNotice;