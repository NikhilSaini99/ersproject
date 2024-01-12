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
                    <Typography variant="h1">
                        Step-By Step Guide for New Businesses
                    </Typography>

                    <Link href="http://www.ers.org.sz/documents/1674047725.pdf" className='Pointsformatting text-normalBlue'>http://www.ers.org.sz/documents/1674047725.pdf</Link>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Guidenewbusiness
