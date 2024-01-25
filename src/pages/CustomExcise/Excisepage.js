import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Excise.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bgimg from '../../assets/images/pxfuel.jpg'
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';
const Excisepage = () => {
    
    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }
    const TypoStyling = {
        margin: '0.5rem 0'
    }

    return (
        <>
          <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Excise Duties
                            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Excise</Typography> */}

                    {/* <Typography variant='h2' >
                        EXCISE DUTIES</Typography> */}


                    <Typography variant="body1" sx={TypoStyling}  >
                        In Eswatini, Excise duties are paid on alcoholic drinks, tobacco products, road fuels, cars, TVs, and refrigerators. As is the case in the other SACU member states, Excise duties are collected both at import into a SACU country or at the place of domestic manufacture of these items.
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        Excise duties are of two sorts - <strong>Specific</strong> and Ad <strong>Valorem:</strong>
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        Specific duties are charged by quantity – e.g. E2 per litre;
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        Ad valorem duties are levied at a set % of the value.
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        The rate of excise to be charged is indicated on the <a href="https://www.sars.gov.za/Legal/Primary-Legislation/Pages/Schedules-to-the-Customs-and-Excise-Act.aspx">SACU tariff schedule</a> and these are amended from time to time.
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        <strong>Specific</strong> excise duties are often levied on products such as all types of alcohol and cigarettes.
                    </Typography>

                    <Typography variant="body1" sx={TypoStyling}  >
                        <strong>Ad Valorem:</strong> excise duties are most frequently levied on products such as phones, videos, TVs, air conditioners, perfumes, firearms, cosmetics, and motor vehicles.
                    </Typography>


                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Excisepage
