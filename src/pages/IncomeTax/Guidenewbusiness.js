import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/pxfuel.jpg'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const Guidenewbusiness = () => {
    return (
        <>
            <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>

                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Step-By Step Guide for New Businesses
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Step-By Step Guide for New Businesses
                    </Typography> */}

                    <Link href="https://www.ers.org.sz:8000/documents/Step-ByStepGuideforNewBusinesses.pdf" className='Pointsformatting text-normalBlue'>Click Here to download Guide for New Businesses</Link>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Guidenewbusiness
