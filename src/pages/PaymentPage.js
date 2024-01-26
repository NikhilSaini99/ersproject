import React from 'react'
import Image from 'next/image'
import Banner from "../assets/images/registration.jpg";
import Head from 'next/head';
import Header from '@/components/Header';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle';

const PaymentPage = () => {
    const dataPaymentpage = [
        {
            id: 1,
            title: 'ELECTRONIC FUNDS TRANSFER AS WELL AS IN-BRANCH TRANSFERS (ACCOUNT TO ACCOUNT TRANSFERS)',
            details: [
                'The ERS has bank accounts in all 5 banks in Eswatini therefore taxpayers MUST use the designated ERS account within the same bank as that from the payment is being made.',
                'The Domestic Taxes account must be used for all domestic taxes related payments, e.g. PAYE, income tax, domestic VAT, withholding taxes etc; and the Customs account must be used for all transactions that relate to importation of goods.',
                'To facilitate receipting of payments made through the banks, taxpayers MUST reference payments by providng the following information in a single string and in the order listed:',
                'Taxpayer identification number (TIN)',
                'Tax item code (Click HERE for a list of all tax item codes)',
                'Calendar year for which the payment is being made',
                'First three letters of the month for which the payment is being made.',
                'Example: a taxpayer whose TIN is 123 456 789 paying VAT for the tax period March 2020 would reference the payment as follows 123456789VT2020MAR',
            ],
        },
        {
            id: 2,
            title: 'DIRECT BANK DEPOSITS (CASH AND CHEQUES)',
            details: [
                'Only ERS branded deposit slips must be used for this type of transaction; every bank has these deposit slips.',
            ],
        },
        {
            id: 3,
            title: 'POINT OF SALES GADGETS (SPEED-POINTS)',
            details: [
                'The ERS has speed-points that cater for both Debit and Credit Cards at all commercial border posts as well as our Service Centres.',
                'Card Not Present are not allowed',
            ],
        },
        {
            id: 4,
            title: 'MTN MOBILE MONEY *007*3*4#',
            details: [
                'The payment mode is only available for TIN registered Taxpayers.',
                'It works for all ERS payment codes.',
                'It has a transacting limit of E4 000 per day.',
                'It has a 1 day lead time for clearance of payments into the relevant ERS system.',
            ],
        },
    ];

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    return (
        <>
            <Head>
                <title>Bank Accounts</title>
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
            <ContentDiv>

            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Payments
                            <span className="absolute bottom-0 left-0 w-1/6 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
{/* 
                <Typography variant="h1" >
                    Payments
                </Typography> */}
                <Typography variant='body1' className='Pointsformatting mb-2'>The following modes of payment are available for ERS customers to make tax and/or duties payments:</Typography>

                <ol style={{ listStyleType: 'decimal', marginLeft: "1rem" }}>
                    {dataPaymentpage.map((item) => (

                        <li key={item.id} variant='body1' className='Pointsformatting '>
                            {item.title}
                            <ul className='custom-list'
                                style={{ marginLeft: "1rem", fontWeight: 'normal' }}>
                                {item.details.map((item, index) => (
                                    <div key={item.id} className='flex gap-1 items-start pb-2'>
                                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                        <li key={index}>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </li>

                    ))}
                </ol>


            </ContentDiv>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default PaymentPage
