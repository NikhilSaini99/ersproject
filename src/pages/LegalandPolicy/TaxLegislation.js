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
import PageLayout from '../PagesLayout/Layout'

const TaxLegislation = () => {

    const laws = [
        {
            head: 'Primary Legislations',
            subpoint: [
                { link: 'http://102.36.181.16:8000/documents/CustomsandExciseAct1971.pdf', text: 'Customs and Excise Act 1971' },
                { link: "http://102.36.181.16:8000/documents/IncomeTaxOrder1975.pdf", text: 'Income Tax Order 1975' },
                { link: 'http://102.36.181.16:8000/documents/ValueAddedTaxAct2011.pdf', text: 'Value Added Tax Act, 2011' },
                { link: 'http://102.36.181.16:8000/documents/GradedTaxAct1968.pdf', text: 'Graded Tax Act 1968' },
                { link: 'http://102.36.181.16:8000/documents/TheFuelTaxAct2022.pdf', text: 'The Fuel Tax Act 2022' }
            ]
        },
        {
            head: 'Amendments',
            subpoint: [
                { link: 'http://102.36.181.16:8000/documents/IncomeTaxAmendmentAct2023.pdf', text: 'Income Tax Amendment Act 2023' },
                { link: 'http://102.36.181.16:8000/documents/TheValueAddedTax(Amendment)Act 2022_Schedules.pdf', text: 'The Value Added Tax (Amendment) Act 2022 Schedules' },
                { link: 'http://102.36.181.16:8000/documents/TheValueAddedTaxAmendmentAct2022.pdf', text: 'The Value Added Tax Amendment Act 2022' }]
        }
    ]

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    
    return (
        <>
         <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
            <ContentDiv>

            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Tax Legislations
                            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                {/* <Typography variant="h1">
                    </Typography> */}

                <Typography variant='body1' className='Pointsformatting'>The Eswatini Revenue Service derives its authority to administer various revenue laws from the
                <Link href={'http://102.36.181.16:8000/documents/RevenueAuthorityAct2008.pdf'} style={{ color: '#2f2483'}} className='Pointsformatting'> Revenue Authority Act 2008</Link></Typography>
               

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
            </PageLayout>
        </>
    )
}

export default TaxLegislation
