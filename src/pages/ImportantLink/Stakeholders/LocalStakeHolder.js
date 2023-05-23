import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import { Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import Banner from "../../../assets/images/images/registration.jpg";
import Link from 'next/link'

export default function LocalStakeHolder() {

    const organizations = [
        {
            name: 'Central Bank of Eswatini',
            website: 'www.centralbank.org.sz',
            link: 'http://www.centralbank.org.sz/',
            description: 'The Central Bank of Swaziland is the custodian of monetary policies in Eswatini.'
        },
        {
            name: 'Eswatini Public Procurement Regulatory Agency (EPPRA)',
            website: 'www.sppra.co.sz',
            link: 'http://www.sppra.co.sz/',
            description: ''
        },
        {
            name: 'Eswatini Government -',
            website: 'Ministry of Finance',
            link: 'http://www.gov.sz/index.php?option=com_content&view=article&id=277&Itemid=405',
            description: 'The official website of the government of Eswatini.'
        },
        {
            name: 'Eswatini Investment Promotion Authority (EIPA)',
            website: 'www.sipa.org.sz',
            link: 'http://www.sipa.org.sz/index.php/en/',
            description: 'The Eswatini Investment Promotion Authority (EIPA) was created through an Act of Parliament, the Eswatini Investment Promotion Act 1998 and its mission is to promote and facilitate foreign direct and local investment in Eswatini, with the objective of creating the wealth necessary to enhance the Social and Economic Development of the Kingdom.'
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

            <Box sx={{ width: { xs: '95%', md: '85%', lg: '80%' }, margin: { xs: '2rem auto', lg: '5rem auto' } }}>
                <Typography variant="h4" component="h1" sx={{ color: '#2f2483', fontWeight: 'bold', my: '3.5rem' }}>
                    Resources
                </Typography>
                {organizations.map((item, index) => (
                    <Box key={index} sx={{ mb: '1.5rem' }}>
                        <Stack sx={{ display: 'flex', gap: '0.8rem', flexDirection: 'row' }}>
                            <Typography variant='h2' component='h5' sx={{ fontSize: '1.2rem', fontWeight: "bold" }}>
                                {item.name}
                            </Typography>
                            <Link href={`${item.link}`} style={{textDecoration:'underline',color:'#2f2483',fontWeight:'bold'}}>{item.website}</Link>
                            </Stack>
                        <Typography variant='body1' >
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}