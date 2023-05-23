import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Banner from "../assets/images/bg2.jpg";




const ReverseCharge = () => {
    const data = [
        {
            id: 1,
            content:
                'The Value Added Tax Act, provides for a reverse charge system in connection with importation of taxable services from foreign suppliers.',
        },
        {
            id: 2,
            content:
                'Under this provision, the obligation to calculate VAT on the value of the supply of the imported service and subsequently pay the calculated tax due to the ERS has been reversed from the foreign supplier to the Swazi purchaser.',
        },
        {
            id: 3,
            content:
                'The objective of this new system is to ensure that VAT is paid on imported services and to protect local suppliers of similar taxable services. Local suppliers are obliged to charge, collect and pay VAT on similar services they provide locally.',
        },
        {
            id: 4,
            content:
                'The reverse charge system is NOT a withholding system. The calculation of VAT must be done on the total payment of the services and the calculated tax is not going to be withheld in the payment to the foreign service provider.',
        },
        {
            id: 5,
            content:
                'Note that the reverse charge system has no implication on withholding tax. Swazi importers of foreign services must still withhold income tax on their payments to foreign supplies of services and pay it to the ERS.',
        },
        {
            id: 6,
            content:
                'An example: A Swazi business engages a foreign service provider to do a job in Eswatiniat a price of E100,000. After the job is done the Swazi business must calculate VAT at 15% of E100,000 and pay the E15,000 to SRA. Furthermore, the Swazi business MUST withhold 15% income tax on E100,000 and pay that E15,000 to the ERS. The end result for the Swazi business is as follows:',
        },
        {
            id: 7,
            content: 'Payment to the foreign service provider E100,000 less E15,000 equals E85,000',
        },
        {
            id: 8,
            content: 'Payment of withholding tax to ERS equals E15,000',
        },
        {
            id: 9,
            content: 'Payment of VAT to ERS equals E15,000',
        },
        {
            id: 10,
            content: 'Total cost to the Swazi business equals E115,000',
        },
        {
            id: 11,
            content:
                'Had the Swazi business engaged a local service provider to do the same job at the same price, the Swazi supplier would have invoiced E100,000 and charged VAT at 15%. Consequently, under a reverse charge system, the cost for the Swazi business will be the same no matter if the service provider is local or foreign.',
        },
    ];

    return (
        <>
            <Head>
                <title>Reverse Charge Concept</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*-----------------------Header---------------------*/}

            <Header />
            {/*-----------------------Banner---------------------*/}

            <Box>
                <Image src={Banner} alt="..." className="h-96 w-full" />
            </Box>
            <Box sx={{ width: "80%", margin: { xs: "2rem auto", lg: "5rem auto" } }}>

                <Typography variant="h4" component="h1" sx={{ color: '#2f2483', fontWeight: 'bold', my: '3.5rem' }}>
                    Reverse Charge Concept
                </Typography>

                {data.map((item) => (
                    <Typography variant='body1' key={item.id}>{item.content}</Typography>
                ))}


                <Typography variant='h5' component='h2' sx={{ my: '2rem' }}>
                    DECLARATION AND PAYMENT</Typography>
                <Typography variant='body1' sx={{ my: '2rem'}}>
                    The VAT reverse charge declaration form and payment must be submitted to the ERS within 30 days of the invoice date.</Typography>
                <Typography variant='body1' sx={{ my: '2rem', fontWeight: 'bold' }}>
                    NOTE: The VAT reverse charge system does not apply to registered businesses with a full right to input tax deduction.</Typography>
            </Box>

            {/*-----------------------Footer---------------------*/}
            <Footer />
        </>
    )
}

export default ReverseCharge