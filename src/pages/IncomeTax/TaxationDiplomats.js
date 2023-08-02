import React, { useState } from 'react'
import Header from '@/components/Header'
import { Box, Divider, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '@/components/Footer'
import bgimg from '../../assets/images/pxfuel.jpg'
import rightarrow from '../../assets/images/rightarrow.svg'

const TaxationDiplomats = () => {


    const [isOpen, setisOpen] = useState(null)

    const handleOpen = (index) => {
        console.log(index)
        console.log(isOpen)
        if (isOpen === index) {
            setisOpen(null);
        }
        else {
            setisOpen(index); // Open the clicked FAQ
        }
    }
    const FaqContainerStyling = {
        margin: '0 auto',
        borderRadius: '20px',
    }

    const accordionStyling = {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        py:'2rem'
    }

    const insideAccordionStyle = {

        background: '#FFFFFF',
        boxShadow: '0px 6px 16px 0px rgba(74, 58, 255, 0.19)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        px: '2rem',
        py: '0.2rem'
    }

    const questionStyling = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        lineHeight: '28px',
        fontWeight: '500',
        textTransform: 'capitalize',
    }


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


    const questionandAnswer = [
        {
            question: "Who is a Diplomat?",
            answer:
                "A person, with diplomatic rank, officially appointed by a state to conduct diplomacy with another state or an international organisation."

        },
        {
            question: "Who is a Consul?",
            answer:
                "A person with diplomatic rank performing the function of protecting and furthering the interests of commercial and economic relations between Swaziland and a country that chooses to send a Consul. (which may be a third state)."

        },
        {
            question: "Honorary and Career Consul?",
            answer:
                "Honorary Consul may have come on their own initiative, but by virtue of their business enterprises and interest of the person's state, such person may be made a Consul through the explicit authority of their national state.  Career Consul are usually present in Swaziland primarily for the furtherance of Consular functions."

        }
    ];


    const data = [
        {
            head: "Characteristics of a Diplomat/Consul",
            subpoints: [
                "Shall have been sent by his state to perform diplomatic or consular functions in Swaziland.",
                "Shall have been confirmed by the Ministry of Foreign Affairs and International Relations (MoFAIR) to be a diplomat or consul."
            ]
        },
        {
            head: "Persons Excluded?",
            subpoints: [
                "Locally recruited staff by Diplomatic or Consular Missions may never attain diplomatic or consular status.",
                "A Swazi national without the express consent of the Ministry of Foreign Affairs and International Relations."
            ]
        },
        {
            head: "Taxation of Diplomats/Consul",
            subpoints: [
                "Tax treatment is provided for by Section 12 of the Income Tax Order 1975 and Section 50 of the VAT Act 2011 which makes reference to the Vienna Conventions on Diplomatic and Consular Relations. It provides as follows:",
                "Diplomats/Consulshall be exempt from taxation, except in respect of;",
                "dues and taxes on private income having its source in Swaziland as well as capital taxes on investments made in commercial undertakings.",
                "indirect taxes of a kind which are normally incorporated in the price of goods or services",
                "dues and taxes on private immovable property situated in the territory of the receiving State, unless held on behalf of the sending State",
                "charges levied for specific services rendered",
                "Members of the administrative and technical staff of the mission, together with members of their families forming part of their respective households, if they are nationals of or permanently resident in Swaziland.",
                "Where any person is not defined as a Diplomat or Consul, or there is no international agreement providing for exemption, such person shall be taxable to the extent defined in Swaziland taxation laws.",
                "Note: In the case of VAT, exemptions are not automatic. Applications are required in all circumstances.",
                "The establishment of diplomatic and Consular relations between states takes place by mutual consent.",
                "The Commissioner General may direct the method of exemption and the time limit for the applicability of the exemption in accordance with the Income Tax Order or VAT Act.",
                "Where the Diplomat, Consul or International Organisation has paid tax which they should not have paid, in terms of the law, they may apply for a refund from ERS using the VAT REFUND FORM FOR DIPLOMATS, DIPLOMATIC AND CONSULAR MISSIONS AND INTERNATIONAL ORGANISATIONS which may be downloaded from the ERS website www.ers.org.sz"
            ]
        }
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
                        Taxation of Diplomats and Consul
                    </Typography>

                    {/* question and answers */}
                    <Box sx={FaqContainerStyling}>

                        <Stack sx={accordionStyling}>
                            {/* question and arrow*/}
                            {questionandAnswer.map((item, index) => (
                                <Stack key={index} sx={insideAccordionStyle}>
                                    <Stack sx={questionStyling}>
                                        <Typography variant='h6' sx={{ color: '#14142B', fontSize: '1.5rem', }}>{item.question}</Typography>
                                        <Box sx={{ cursor: 'pointer', background: 'cover' }} onClick={() => handleOpen(index)}>
                                            <Image src={rightarrow} width={0} height={0} alt="arrow" />
                                        </Box>
                                    </Stack>
                                    {isOpen === index && <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />}
                                    {/* answer */}
                                    <Typography variant='body1' sx={{
                                        fontSize: '1.1rem',
                                        lineHeight: '30px', color: 'rgba(0,0,0,0.8)', pb: '2rem',
                                        display: isOpen === index ? 'block' : 'none'
                                    }}>{item.answer}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>

                    {/* question and answers end here*/}

                    {/* second section start */}

                    {data.map((item, index) => (
                        <Box key={index}>
                            <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', pb: '1rem' }}>
                                {item.head}
                            </Typography>
                            {item.subpoints.map((item, index) => (
                                <div key={index} className='flex gap-1 items-start pb-2'>
                                    <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                    <Typography variant="body1" sx={{ pb: '1rem' }} className='Pointsformatting'>
                                        {item}
                                    </Typography>
                                </div>
                            ))}
                        </Box>
                    ))}

                    {/* Second section end here */}
                </Box>
            </Box>

            <Footer />
        </>
    )
}

export default TaxationDiplomats
