import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Banner from "../assets/images/customs.jpg";
import Image from 'next/image'
const Hotline = () => {
    const hotLineData = [
        {
            heading: 'Hotline',
            description: 'If you have a complaint or wish to convey compliments on our services we will be pleased to hear from you. Also if you wish to give us information about malpractice by our staff or about evasion of taxes or Customs duties by any person or business you can contact us:-',
            subHeading: 'Head of internal Affairs',
            contact: '(+268) 2404 8449',
            email: 'internalaffairs@sra.org.sz',
            alternateContact: 'You may also call on our hotline 800 8000'
        }
    ]

    return (
        <>
            <Head>
                <title>Hotline</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            {/*-----------------------Header---------------------*/}

            <Header />
             {/*-----------------------Banner---------------------*/}
             <Box>
            <Image src={Banner} alt="..." className="h-96 w-full" />
            </Box>

            <Box sx={{ width: '80%', margin: {xs:'2rem auto',lg:'5rem auto'} }}>
                {hotLineData.map((item, index) => (
                    <Stack key={index} direction={'column'} spacing={2}>
                        <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                            {item.heading}
                        </Typography>
                        <Typography variant='body1' fontSize={'1rem'}>{item.description}</Typography>
                        <Typography variant='body1' component={'h2'} sx={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.5rem' }}>
                            {item.subHeading}
                        </Typography>
                        <Stack direction={'row'} spacing={2}>
                            <CallIcon />
                            <Typography variant='body1' fontSize={'1rem'}>{item.contact}</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <EmailIcon />
                            <Typography variant='body1' fontSize={'1rem'}>{item.email}</Typography>
                        </Stack>
                        <Typography variant='body1' fontSize={'1rem'}>{item.alternateContact}</Typography>
                    </Stack>
                ))}
            </Box>

            {/*-----------------------Footer---------------------*/}
            <Footer />

        </>
    )
}

export default Hotline
