import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Banner from "../assets/images/registration.jpg";
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import pdfimg1 from '../assets/images/pdfimages/SpPdf1.jpg'
import pdfimg2 from '../assets/images/pdfimages/SpPdf2.jpg'
import pdfimg3 from '../assets/images/pdfimages/SpPdf3.jpg'
import pdfimg4 from '../assets/images/pdfimages/SpPdf4.jpg'
import Link from 'next/link';

// import pdf1 from '../assets/Pdf/SpPdf1.pdf'
// import pdf2 from '../assets/Pdf/SpPdf2.pdf'
// import pdf3 from '../assets/Pdf/SpPdf3.pdf'
// import pdf4 from '../assets/Pdf/SpPdf4.pdf'

const StrategicPlans = () => {

    const startegicPlanPdf = [
        {
            imgs: pdfimg1,
            link: 'https://www.ers.org.sz/documents/1616518535.pdf',
            year: '2021-24'
        },
        {
            imgs: pdfimg2,
            link: 'https://www.ers.org.sz/documents/1582541042.pdf',
            year: '2018-21'
        },
        {
            imgs: pdfimg3,
            link: 'https://www.ers.org.sz/documents/1536136982.pdf',
            year: '2015-18'
        },
        {
            imgs: pdfimg4,
            link: 'https://www.ers.org.sz/documents/1536136837.pdf',
            year: '2012-15'
        },
    ]

    return (
        <>
            <Head>
                <title>Strategic Plans</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*-----------------------Header---------------------*/}

            <Header />

            <Box sx={{ height: { xs: '15rem', lg: '25rem', xs: '30rem' } }}>
                <Image src={Banner} alt=""
                    width={0}
                    height={0}
                    style={{
                        width: "100%", height: "100%",
                        objectFit: 'cover'
                    }}
                />
            </Box>

            <Box sx={{ width: {xs:'95%',md:'85%',lg:'80%'}, margin: { xs: '2rem auto', lg: '5rem auto' } }}>
                <Typography variant="h4" component="h1" sx={{ color: '#2f2483', fontWeight: 'bold', my: '3.5rem' }}>
                    Strategic Plans
                </Typography>
                <Stack sx={{
                    display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' },
                    gap: '0.5rem', justifyContent: 'center', alignItems: 'center'
                }}>
                    {startegicPlanPdf.map((item, index) => (
                        <Paper elevation={20} key={index} sx={{ maxWidth: { xs: 'inherit',md:'180px', lg: '220px' },cursor:'pointer'}}
                         component='div'>
                         <Stack sx={{direction:'column',gap:'0.5rem'}}>
                         <Link href={`${item.link}`} target='_blank'>
                            <Image src={item.imgs} alt="img"
                                width={0}
                                height={0}
                                style={{
                                    width: "100%", height: "100%",
                                }}
                            />
                            </Link>
                            <Typography variant='body1' sx={{textAlign:'center',fontWeight:'bold',color:'#323491'}}>
                            {item.year}</Typography>
                            </Stack>
                        </Paper>
                    ))}
                </Stack>
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default StrategicPlans
