import React from 'react'
import Header from '@/components/Header'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/pxfuel.jpg'

const OfficeandOperating = () => {

    const customsOffices = [
        { name: 'Ngwenya', operatingHours: '0700hrs to midnight' },
        { name: 'Lavumisa', operatingHours: '0700hrs to 2200hrs' },
        { name: 'Mahamba', operatingHours: '0700hrs to 2200hrs' },
        { name: 'Matsamo', operatingHours: '0700hrs to 2000hrs' },
        { name: 'Mananga', operatingHours: '0700hrs to 1800hrs' },
        { name: 'Sandlane', operatingHours: '0800hrs to 1800hrs' },
        { name: 'Mhlumeni', operatingHours: '24hrs' },
        { name: 'Lomahasha', operatingHours: '0700hrs to 2000hrs' },
        { name: 'Sicunusa', operatingHours: '0800hrs to 1800hrs' },
        { name: 'Nsalitje', operatingHours: '0800hrs to 1800hrs' },
        { name: 'Bulembu', operatingHours: '0800hrs to 1600hrs' },
        { name: 'Lundzi', operatingHours: '0800hrs to 1600hrs' },
        { name: 'Gege', operatingHours: '0800hrs to 1600hrs' },
    ];

    const customsOffices2 = [
        { name: 'Matsapha ICD', operatingHours: '0800hrs to 1700hrs' },
        { name: 'Matsapha AGOA Office', operatingHours: '0800hrs to 1700hrs' },
        { name: 'Mbabane Clearance Office', operatingHours: '0800hrs to 1700hrs' },
        { name: 'Matsapha Airport', operatingHours: '0800hrs to 1700hrs' },
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
                        Offices and Operating Hours
                    </Typography>

                    {/* First table start */}
                    <Paper elevation={20} sx={{ width: '90%', margin: '0 auto', my: '2rem' }}>
                        <TableContainer >
                            <Table className={''} aria-label="Form Table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                        <TableCell align="left" >Border Posts/Customs Office</TableCell>
                                        <TableCell align="left" >Daily Operating Hours</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customsOffices.map((office, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': {},
                                            '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell align="left" >{office.name}</TableCell>
                                            <TableCell align="left" >{office.operatingHours}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    {/* First table End */}

                    <Typography variant="body1" className='Pointsformatting text-center'>
                    Inland stations (except Saturdays, Sundays and  Public Holidays
                    </Typography>
                      {/* Second table Start */} 
                      <Paper elevation={20} sx={{ width: '90%', margin: '0 auto', my: '2rem' }}>
                        <TableContainer >
                            <Table className={''} aria-label="Form Table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                        <TableCell align="left" >Border Posts/Customs Office</TableCell>
                                        <TableCell align="left" >Daily Operating Hours</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {customsOffices2.map((office, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': {},
                                            '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell align="left" >{office.name}</TableCell>
                                            <TableCell align="left" >{office.operatingHours}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                       {/* Second table End */}

                </Box>
            </Box>
        </>
    )
}

export default OfficeandOperating
