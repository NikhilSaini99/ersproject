import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from "../../assets/images/registration.jpg";
import bgimg from  '../../assets/images/pxfuel.jpg'

const WithholdingTax = () => {

    const taxWithholdingdata = [
        {
            title: "Withholding Tax on Interest",
            description: "This should be deducted from the payment of interest to any person other than a company not ordinarily resident; a company not registered in Swaziland; or the estate of a deceased person, who at the date of his death was ordinarily resident in Swaziland.",
            description2:
                "The debtor in respect of such amount; and who is ordinarily resident or carries on business in Swaziland shall withhold and remit to SRA tax equal to ten per cent of the interest that accrues to or in favour of the non-resident."
        },
        {
            title: "Non Resident Shareholders Tax",
            description: "This is imposed on dividends paid to shareholders who are not residents of the Kingdom of Swaziland.",
            points: [
                "Where the shareholder is a natural person, he must not only be a non-resident but should not be carrying on a business in Swaziland.",
                "In the case of a company, it should not be registered and controlled in Swaziland.",
                "In the case of an estate of any deceased person, at the date of death, he should not have been a resident or carrying on business in Swaziland.",
                "In the case of a holder of bearer scrip, (irrespective of whether he is resident or not), is liable to shareholders tax and normal tax on the same dividend.",
                "The non-resident should have been a shareholder at the date of declaration of the dividend or any other specified date of entitlement to the dividend."
            ]
        },
        {
            title: "Sportsmen and Entertainers",
            description: "This is imposed on any remuneration paid to, or the gross receipts of, public entertainers, sportsman, theatrical, and musical, group of public entertainers from outside Swaziland or not ordinarily resident in Swaziland.",
            description2:
                "A local agent, promoter or any other person making payment to a non-resident entertainer or sportsperson should deduct non-residents' entertainers tax at the rate of fifteen percent of the gross amount and shall issue a statement to that person showing the gross amount of payment due and the rate and amount of tax deducted."

        },
        {
            title: "Withholding Tax on Payments to Non-Resident Contractors",
            description: "This applies to any person who makes payment (as a result of an agreement relating to construction operations), to a person whose principal place of business is outside Swaziland.",
            description2:
                "A withholding tax of fifteen percent must be withheld from payments made by resident persons to the foreign entity in relation to construction contracts, excluding the amount relating directly to the cost of materials.\nThis withholding tax is on account of the tax liability of the non-resident. The withholder should furnish the non-resident person with a certificate showing amount of the payment under the agreement and tax deducted."
        },
        {
            title: "Non Resident Withholding Tax on Royalties and Management Fees",
            description: "Every person who makes any payment of royalty or management fee or both to a person not ordinarily resident in Swaziland is required to withhold tax. The rate of tax is fifteen percent of the gross amount of any management charge",
            description2:
                "The tax is final and a certificate should be furnished to the non-resident person."

        },
        {
            title: "Withholding Tax on Repatriated Income",
            description: "The tax is levied in addition to any normal tax, on deemed repatriated income of the branch of a non-resident company carrying on business in Swaziland for any year of assessment.The calculation formula is A minus B",
            points: [
                "A is taxable income of the branch for the year of assessment",
                "B is the Swaziland tax payable on that taxable income of the branch for the year of assessment."
            ]
        },
        {
            title: "Withholding Tax on Payments to Non Resident Persons",
            description: "A person who makes payment to any non-resident person is required to withhold tax on the gross amount resulting from a contract which has a Swazi source of income excluding an employment contract.",
            description2:
                "The main purpose of the contract should be the performance of a service. Goods supplied in the performance of the service are included in the calculation of the tax as they are only incidental i.e. a non-resident mechanic who comes with tools and service parts is liable to tax on the labour fees and the service parts.\n The non-resident person is liable to withholding tax at the rate of fifteen percent on the gross amount of any payment derived by the non-resident under a Swaziland source services contract."

        },
        {
            title: "Withholding Taxes for Residents",
            subcategories: [
                {
                    title: "On interest",
                    description: "Every financial institution, unit trust company, building society, mutual loan association or co-operative society, which makes a payment of interest or dividend on society shares to any person, other than a company, a person or institution, ordinarily resident in Swaziland should withhold tax at the rate of ten percent of the gross amount of the payment.The tax withheld is on account of the tax liability to tax of the person ordinarily resident in Swaziland."
                },
                {
                    title: "On rental payments",
                    description: "A person, other than a natural person, who makes a payment to a lessor (other than a company) for the use or occupation or the right of use or occupation of land or buildings; OR collects such rent for or on behalf of the lessor, should withhold tax at the rate of ten per cent of the gross amount.Tax withheld is on account of the tax liability and a certificate should be issued by the withholder."
                },
                {
                    title: "On beneficiaries of trusts",
                    description: "Every trustee who makes any payment from trust income to a beneficiary who has vested rights to such income should withhold tax at a rate of thirty-three percent of the gross amount.The tax withheld is on account of the tax liability of such beneficiary on the income derived from the trust."
                },
                {
                    title: "Dividends Paid to Residents",
                    description: "Tax should be charged, levied and paid in respect of the amount of any dividend if the shareholder to whom the dividend has been paid or is payable is a person (other than a company), who is ordinarily resident or carrying on business in Swaziland.A resident company, which makes any payment of dividend to a person ordinarily resident or carrying on business in Swaziland, should withhold tax at the rate of ten percent of the gross amount of the dividend."
                }
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
            <Box sx={{backgroundImage:`url(${bgimg.src})`,
        backgroundSize:'cover',backgroundAttachment:'fixed'}} >
           
             
            <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: {md:'16rem', lg: '18rem,', xl: '20rem' },py:'2rem' }}>

                <Typography variant="h1"  sx={{ pt: '5rem', mb: '2rem' }}>
                    Withholding taxes</Typography>

                <Typography variant='h6' my='1rem' fontWeight='bold'>Non-Resident Withholding TAXES <Link href={'http://www.sra.org.sz/documents/1496926588.pdf'}
                    style={{ color: '#2f2483', fontWeight: 'bold' }}>See Rates</Link></Typography>

                <Box >
                    {taxWithholdingdata.map((item, index) => (
                        <Box key={index} my='0.5rem'>
                            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: '1rem',fontStyle:'italic',pt:'2rem' }} className='Pointsformatting'>
                                {item.title}
                            </Typography>
                            <Typography variant='body1' sx={{ fontWeight: 'grey', }} className='Pointsformatting'>
                                {item.description ?
                                    item.description : null}
                            </Typography>
                            <Typography variant='body1' sx={{ fontWeight: 'grey' }} className='Pointsformatting'>
                                {item.description2 ?
                                    item.description2 : null}
                            </Typography>
                            {item.points &&
                                <ul className='custom-list'>
                                    {item.points.map((descpoints, index) => (
                                        <li key={index} className='Pointsformatting'>{descpoints}</li>
                                    ))}
                                </ul>}
                            {item.subcategories &&
                                <Box>
                                    {item.subcategories.map((subCat, index) => (
                                        <Box key={index} my='0.5rem'>
                                            <Typography variant='body1'
                                                sx={{ fontWeight: 'bold', fontSize: '0.9rem',fontStyle:'italic' }} className='Pointsformatting'>{subCat.title}</Typography>
                                            <Typography variant='body1' className='Pointsformatting'>{subCat.description}</Typography>
                                        </Box>
                                    ))}
                                </Box>}
                        </Box>
                    ))}
                </Box>
            </Box>
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default WithholdingTax
