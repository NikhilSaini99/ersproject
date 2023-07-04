import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import { Box, Typography, TableContainer, Paper, Table, TableCell, TableRow, TableBody, TableHead } from '@mui/material'
import Image from 'next/image'
import Banner from "../../assets/images/registration.jpg";
import bgimg from '../../assets/images/pagebackground1.jpg'

const Taxations = () => {
    const countries = [
        { name: "South Africa", dateOfSignature: "November 2004, replacing DTA signed in 1973" },
        { name: "Mauritius", dateOfSignature: "1995" },
        { name: "United Kingdom", dateOfSignature: "December 1968, replacing DTA signed in 1949" },
        { name: "Seychelles", dateOfSignature: "2015" },
        { name: "Republic of China on Taiwan", dateOfSignature: "2019" },
        { name: "Botswana", dateOfSignature: "2019" },
        { name: "Lesotho", dateOfSignature: "29 September 2020" },
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
            <Box sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >


                <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '16rem', lg: '18rem,', xl: '20rem' }, py: '2rem' }}>
                    <Typography variant="h1" sx={{ pt: '5rem', mb: '2rem' }}>
                        Double Taxation Agreements</Typography>

                    <Typography variant='h6'  sx={{ mt: '2rem', mb: '1rem',  }}>Status of Double Taxation Avoidance Agreement (DTAA’s) & Tax Information Exchange Agreements (TIEA’s)</Typography>
                    <ol style={{ listStyleType: 'decimal', marginLeft: '1rem' }}>
                        <li style={{ fontWeight: 'bold' ,fontSize:'1.35rem'}}>Double Taxation Avoidance Agreement (DTAA)
                            <ol style={{ listStyleType: 'lower-roman', marginLeft: '1rem', fontWeight: 'normal', }}>
                                <li>In force</li>
                                <Paper elevation={20} sx={{  width: '90%', margin: '2rem 0' }}>
                                    <TableContainer sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.4)' } }}>
                                        <Table aria-label="Double Taxation Table">
                                            <TableHead>
                                                <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                                    <TableCell>Country</TableCell>
                                                    <TableCell>Date of Signature</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {countries.map((item, index) => (
                                                    item && (
                                                        //to get the grey background hover effect
                                                        <TableRow key={index} sx={{
                                                            '&>*': {
                                                                fontWeight: 'bold',
                                                            },
                                                            '&:hover': {
                                                                background: '#F2F2F2'
                                                            }
                                                        }}>
                                                            <TableCell align='left' >{item.name}</TableCell>
                                                            <TableCell align='left'>{item.dateOfSignature}</TableCell>
                                                        </TableRow>
                                                    )))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </ol>
                        </li>
                        <li style={{ fontWeight: 'bold',fontSize:'1.35rem' }}>Tax Information Exchange Agreements (TIEA)
                            <ol style={{ listStyleType: 'lower-roman', marginLeft: '1rem', fontWeight: 'normal' }}>
                                <li>In force
                                    <ul className='custom-list'>
                                        <li>Isle of Man</li>
                                        <li>States of Guernsey</li>
                                    </ul></li>
                            </ol>
                        </li>
                    </ol>
                </Box>
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default Taxations
