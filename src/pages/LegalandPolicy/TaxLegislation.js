import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import { Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import Banner from "../../assets/images/Tax_Legislations.jpg";
import Link from 'next/link'
import bgimg from  '../../assets/images/pagebackground1.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle'

const TaxLegislation = () => {

    const laws = [
        {
            head: 'Primary Legislations',
            subpoint: [
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'Customs and Excise Act 1971' },
                { link: "http://www.sra.org.sz/documents/1497268165.pdf", text: 'Income Tax Order 1975' },
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'Value Added Tax Act, 2011' },
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'Graded Tax Act 1968' },
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'The Fuel Tax Act 2022' }
            ]
        },
        {
            head: 'Amendments',
            subpoint: [
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'The Value Added Tax (Amendment) Act 2022 Schedules' },
                { link: 'http://www.sra.org.sz/documents/1497268165.pdf', text: 'The Value Added Tax Amendment Act 2022' }]
        }
    ]

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    
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
                            objectFit: 'cover',
                        }}
                    />
                </Box>

            <Box sx={{backgroundImage:`url(${bgimg.src})`,
        backgroundSize:'cover',backgroundAttachment:'fixed'}} >
        
            <ContentDiv>
                <Typography variant="h1">
                    Tax Legislations</Typography>

                <Typography variant='body1' className='Pointsformatting'>The Eswatini Revenue Service derives its authority to administer various revenue laws from the
                <Link href={'http://www.sra.org.sz/documents/1497268284.pdf'} style={{ color: '#2f2483'}} className='Pointsformatting'> Revenue Authority Act 2008</Link></Typography>
               

                <Typography variant='body1' marginY="0.8rem"  className='Pointsformatting'>The laws administered by the Authority include</Typography>
                {laws.map((item, index) => (
                    <Box key={index} sx={{ maxWidth: 'fit-content' }}>
                        <Typography variant='h5' component='h2' sx={{ mt: '2rem', fontWeight: 'bold' }}>{item.head}</Typography>
                        <ul>
                            {item.subpoint.map((itemsub, index) => (
                                <div key={index} className='flex gap-1 items-center'>
                                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling}  className='Pointsformatting'/></span>
                                <Link  href={`${itemsub.link}`} target='_blank'  className='Pointsformatting'><li style={{color: '#2f2483', margin: '0.5rem 0', }} 
                                className='Pointsformatting'>{itemsub.text}</li></Link>
                                </div>
                            ))}
                        </ul>
                    </Box>
                ))}
            </ContentDiv>
            </Box>
            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default TaxLegislation
