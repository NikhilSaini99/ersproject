import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Banner from "../../assets/images/VAT_Regulations.jpg";
import Link from 'next/link'
import bgimg from '../../assets/images/pxfuel.jpg'
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const VatRegulations = () => {
    return (
        <>
           <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
             
            <ContentDiv>
            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>VAT Regulations
                            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

                {/* <Typography variant="h1"  >
                    VAT Regulations</Typography> */}

                <Typography variant='h6' className='Pointsformatting'>The VAT Regulations <Link href={'http://102.36.181.16:8000/documents/TheVATRegulations.pdf'} target='_blank'
                    style={{ color: '#2f2483', fontWeight: 'bold' }}>(click here to download) </Link>
                    give clarity to certain sections of the VAT Act. These must be read with the Act for better understanding of the provisions of the VAT act no. 12 of 2011.</Typography>

                <Link href='http://102.36.181.16:8000/documents/VATRateAmendmentRegulation2018.pdf' target='_blank'><Typography variant="body1" className='Pointsformatting' sx={{ color: '#2f2483', }} >VAT (Rate) (Amendment) Regulation 2018</Typography></Link>
                
            </ContentDiv>
          </PageLayout>
        </>
    )
}

export default VatRegulations
