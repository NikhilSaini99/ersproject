import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/bg-1.png'
import Footer from '@/components/Footer'
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const TraderPrograme = () => {
  return (
    <>
   <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>

        <ContentDiv>
            <Typography variant="h1">
            Preferred Trader Programme
            </Typography>

            <Link href="http://www.sra.org.sz/documents/1567671955.pdf" className='Pointsformatting text-normalBlue'>ERS - Preferred Trader Programme External Guide and Procedure-Vsn1_ 2019</Link>
        </ContentDiv>
    </PageLayout>
</>
  )
}

export default TraderPrograme
