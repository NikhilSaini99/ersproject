import React from 'react'
import Header from '@/components/Header'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/bg-2.png'
import Footer from '@/components/Footer'
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

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
             <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>
                    <Typography variant="h1">
                        Offices and Operating Hours
                    </Typography>

                    {/* First table start */}
                    <Paper elevation={20} sx={{ width: '100%', margin: '0 auto', mb: '1rem' }}>
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

                    <Typography variant="body1" className='Pointsformatting text-left'>
                    Inland stations (except Saturdays, Sundays and  Public Holidays)
                    </Typography>
                      {/* Second table Start */} 
                      <Paper elevation={20} sx={{ width: '100%', margin: '0 auto', my: '2rem' }}>
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

                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default OfficeandOperating
