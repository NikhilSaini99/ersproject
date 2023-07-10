import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/pxfuel.jpg'
import Link from 'next/link'

const Guidenewbusiness = () => {
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
                        Step-By Step Guide for New Businesses
                    </Typography>

                    <Link href="http://www.ers.org.sz/documents/1674047725.pdf" className='Pointsformatting text-normalBlue'>http://www.ers.org.sz/documents/1674047725.pdf</Link>
                </Box>
            </Box>
        </>
    )
}

export default Guidenewbusiness
