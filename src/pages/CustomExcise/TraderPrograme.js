import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/pxfuel.jpg'
import Footer from '@/components/Footer'

const TraderPrograme = () => {
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
            alt="about_us"
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

        <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '10rem,', xl: '15rem' }, py: '2rem' }}>
            <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
            Preferred Trader Programme
            </Typography>

            <Link href="http://www.sra.org.sz/documents/1567671955.pdf" className='Pointsformatting text-normalBlue'>ERS - Preferred Trader Programme External Guide and Procedure-Vsn1_ 2019</Link>
        </Box>
    </Box>
    <Footer/>
</>
  )
}

export default TraderPrograme
