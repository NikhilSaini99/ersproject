import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Banner from "../../assets/images/bg2.jpg";

const EstwaniVat = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }
    const TypoStyle = {
        fontWeight: 'bold',
        my: '1rem'
    }

    const estwaniVatarr = [
        {
            text: 'Income Tax was first introduced in Swaziland in 1921 by the Income Tax Proclamation of 1921. This Proclamation was administered under the Treasury Department until 1962 when a separate unit was established to be administered by the Assistant Collector of Taxes as a small section of the Treasury Department. Later it became a Government Department the Department of Taxes – under the Ministry of Finance, and in 2011 the functions passed to the Eswatini Revenue Service.',
        },
        {
            text: 'The Income Tax Legislation between 1962 and 1975 went through 12 amendments, the major one being in 1975, resulting in the current Income Tax Order 1975. Since 1975, the Order 1975 has had many amendments aimed at simplifying the administration of taxes in Swaziland; the most significant of these amendments being the recognition of women as taxpayers in their own right as well as the introduction of the Final Deduction System (FDS) which is a simple procedure whereby the employer deducts employees tax (PAYE) as a final tax.',
        },
        {
            text: 'The Income Tax year in Swaziland runs from 1st July to 30 June. Any variation from this year-end has to be approved by the  ERS Commissioner General.',
        },
    ]

    const fiveways = [
        {
            head: 'P.A.Y.E:',
            text: 'Employers are required to deduct Income Tax from the earnings of their employees (Pay As You Earn-PAYE) and to remit that monthly to the ERS. The due date for these remittances is the 7th day of the  following month',

        },
        {
            head: 'Provisional Income Tax:',
            text: 'All businesses are required to make provisional tax payments twice annually; these advance payments are due on the 31st December and 30th June for each tax year. A third payment is due when there is a short-fall after the provisional taxpayer has submitted a tax return and has been assessed. A business whose approved tax year is different from that which is legislated is required to make first payment within the first six months of the tax year and the second payment before the end of the tax year. A third payment (where due) must be made on receipt of a notice of assessment which clearly states the actual tax liability.'
        },
        {
            head: 'Corporate Income Tax:',
            text: 'Like all taxpayers, companies are required to make an annual Income tax return by no later than 31st October annually. Tax returns for Companies which have an approved variation from the year ending 30 June are due 120 days after the approved financial year end.Self Employed Individual Income Tax: Individuals, including those who are self-employed are also required to make an annual Income tax return before the 31st October annually.'
        },
        {
            head: 'Withholding Taxes:',
            text: 'These are taxes on income imposed at source. A third party is charged with the responsibility of deducting the tax from specified types of payments and remitting the tax to ERS. It may either be a final payment or a payment on account. The categories and rates are shown here.'
        },
        {
            head: 'Graded Tax:',
            text: 'Is an annual levy payable by adults in Swaziland. Unemployed male adults (18 years and over) are expected to pay E4.50 per annum whilst unemployed females are not required to pay anything. Employed adults (both male and female) pay E18 per annum.'
        },
        {
            text: 'A Tax Clearance Certificate is granted to taxpayers who are compliant in respect of all tax affairs (i.e. P.A.Y.E remittances up to date, tax fully paid from an assessment, all tax returns submitted; provisional tax fully paid, in the case of VAT vendors all returns and payments up to date).'
        }
    ]

    return (
        <>
            <Head>
                <title>Estwani Vat</title>
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
            <Box sx={{ width: "75%", margin: { xs: "2rem auto", lg: "2rem  auto" }, pr: { md: '16rem', lg: '18rem,', xl: '20rem' } }}>

                <Typography variant="h1" sx={{ mt: '5rem', mb: '2rem' }}>
                    Estwani Vat
                </Typography>
                <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                    HISTORICAL BACKGROUND</Typography>

                {estwaniVatarr.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item.text}</Typography>
                        </div>
                    </>
                ))}
                <Typography variant='body1' sx={{ mb: '1rem' }}
                    className='Pointsformatting'>
                    Income Tax in Swaziland is collected in five main ways:</Typography>

                {fiveways.map((item, index) => {
                    return (
                        <div key={index} className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item.head && <b>{item.head}</b>}{item.text}</Typography>
                        </div>
                    )
                })}
            </Box>

            {/*-----------------------Footer---------------------*/}
            <Footer />
        </>
    )
}

export default EstwaniVat
