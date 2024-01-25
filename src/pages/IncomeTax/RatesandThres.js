import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Zero_Rated_Goods_&_Services.png";
import bgimg from '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';
const RatesandThres = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    const normalTaxTable = [
        {
            exceeds: "E0",
            doesNotExceed: "E100 000",
            rates: "0 + 20% of the excess of E0"
        },
        {
            exceeds: "E100 000",
            doesNotExceed: "E150 000",
            rates: "E20 000 + 25% of the excess of E100 000"
        },
        {
            exceeds: "E150 000",
            doesNotExceed: "E200 000",
            rates: "E32 500 + 30% of the excess of E150 000"
        },
        {
            exceeds: "E200 000",
            doesNotExceed: "",
            rates: "E47 500 + 33% of the excess of E200 000"
        }
    ];

    const concessionarytaxTable = [
    
        {
            exceeds: "E0",
            doesNotExceed: "E200 000",
            rates: "E0 + 25% of the excess of E0"
        },
        {
            exceeds: "E200 000",
            doesNotExceed: "E300 000",
            rates: "E50 000 + 30% of the excess of E200 000"
        },
        {
            exceeds: "E300 000",
            doesNotExceed: "",
            rates: "E80 500 + 33% of the excess of E300 000"
        }
    ]

    const withholdingTaxTable = [
        {
            "PaymentType": "Interest",
            "Rate": "10%",
            "DueDate": "Due 14 days after the date of accrual"
        },
        {
            "PaymentType": "Dividends for companies in Botswana, Lesotho, Namibia and South Africa",
            "Rate": "12.5%",
            "DueDate": "30 days after the date on which the dividend is payable"
        },
        {
            "PaymentType": "Dividends - for other countries",
            "Rate": "15%",
            "DueDate": "30 days after the date on which the dividend is payable"
        },
        {
            "PaymentType": "Sportsmen and entertainers",
            "Rate": "15%",
            "DueDate": "Within 15 days from the date of payment"
        },
        {
            "PaymentType": "Contractors",
            "Rate": "15%",
            "Due Date": "Within 15 days from the date of payment"
        },
        {
            "PaymentType": "Royalty and management fees",
            "Rate": "15%",
            "DueDate": "Within 15 days from the date of payment"
        },
        {
            "PaymentType": "Repatriated branch profits to neighboring countries (Botswana, Lesotho, Mozambique, Namibia and South Africa",
            "Rate": "12.5%",
            "DueDate": "Within 15 days from the date of payment"
        },
        {
            "PaymentType": "Repatriated branch profits to other countries",
            "Rate": "15%",
            "DueDate": "Within 15 days from the date of payment"
        },
        {
            "PaymentType": "Payments to persons",
            "Rate": "15%",
            "DueDate": "Within 15 days from the date of payment"
        }
    ]


    const residentTableData = [
        {
            PaymentType: 'Interest',
            Rate: '10%',
            DueDate: 'Within 15 days from the end of the month in which interest was paid'
        },
        {
            PaymentType: 'Rental',
            Rate: '10%',
            DueDate: 'Within 15 days from the date of payment'
        },
        {
            PaymentType: 'Dividends',
            Rate: '10%',
            DueDate: 'Within 15 days from the date of payment'
        },
        {
            PaymentType: 'Trusts',
            Rate: '33%',
            DueDate: 'Within 15 days from the date of payment'
        }
    ];


    return (
        <>
           <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Rates and Thresholds
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Rates and Thresholds</Typography> */}

                    {/* <Typography variant='body1' my='1rem'>The rates of Income Tax applicable are as follows</Typography> */}
                    <Typography variant='h2'>Rates of normal TAX for individual</Typography>


                    {/*  ---------------------------------table 1--------------------------------- */}
                    <Box>
                        <Paper elevation={20} sx={{ margin: '1rem auto' }}>
                            <TableContainer>
                                <Table sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.4)' } }} aria-label="Form Table">
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                            <TableCell colSpan={2}>Taxable Income </TableCell>
                                            <TableCell rowSpan={2} sx={{ borderBottom: 'none' }}>Rates</TableCell>
                                        </TableRow>

                                    </TableHead>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                            <TableCell>Exceeds</TableCell>
                                            <TableCell>Does not exceed</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {normalTaxTable.map((row, index) => (
                                            <TableRow key={index} sx={{
                                                '& > *': { textAlign: 'center !important' }, '&:hover': {
                                                    background: '#F2F2F2'
                                                }
                                            }}>
                                                <TableCell>
                                                    <p>{row.exceeds}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <p>{row.doesNotExceed}</p>
                                                </TableCell>
                                                <TableCell>
                                                    <p>{row.rates}</p>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Box>

                    <Typography variant='bdoy1' className='Pointsformatting'>When applying the above rates, the following should be taken into account:</Typography>
                    
                    <ul className='custom-list'>

                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting'/> </span>
                                <li  className='Pointsformatting'>Tax payable by a natural person will be reduced by a tax rebate amount not exceeding E8 200 per tax year</li>
                               
                        </div>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting'/></span>
                                <li className='Pointsformatting'>The rates are applicable on the amount exceeding E41 000</li>
                        </div>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting'/></span>
                                <li className='Pointsformatting'>The tax rebate does not apply in the case of redundant or retiring individuals</li>
                        </div>

                    </ul>

                    <Typography variant='h6' mt='1.5rem' fontWeight='bold' >Concessionary Rates Of Normal TAX In The Case of Redundant Or Retiring Individuals</Typography>

                    {/*  ---------------------------------table 2--------------------------------- */}
                    <Paper elevation={20} sx={{ margin: '1rem auto', }}>
                        <TableContainer >
                            <Table sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.4)' } }} aria-label="Form Table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                        <TableCell colSpan={2}>Taxable Income </TableCell>
                                        <TableCell rowSpan={2} sx={{ borderBottom: 'none' }}></TableCell>
                                    </TableRow>

                                </TableHead>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                        <TableCell>Exceeds</TableCell>
                                        <TableCell>Does not exceed</TableCell>
                                        <TableCell>Rates</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {concessionarytaxTable.map((row, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': { textAlign: 'center !important' }, '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell>
                                                <p>{row.exceeds}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.doesNotExceed}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.rates}</p>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <Typography variant='body1'  className='Pointsformatting'>Tax rebate in respect of individuals over the age of 60 years is E2 700 in excess of the normal rebate</Typography>

                    <Typography variant='h6' mt='1.5rem' mb="0.5rem" fontWeight='bold' textAlign='left'>BENEFITS</Typography>
                    <Typography variant='body1'  className='Pointsformatting'><Link href={"/IncomeTax/Taxationandbenefit"}> Click here </Link> for information on the taxation of benefits.</Typography>
                    
                    <Typography variant='h6' mt='1.5rem' mb="0.5rem" fontWeight='bold' textAlign='left'>TAX RATE FOR COMPANIES</Typography>
                    <Typography variant='body1'  className='Pointsformatting'>The effective tax rate for companies (since the 1st July 2013) is 27.5% of taxable income.</Typography>

                    
                    <Typography variant='h6' mt='1.5rem' fontWeight='bold' textAlign='left'>Withholding TAX</Typography>

                    {/* ---------------------------------table 3--------------------------------- */}
                    <Paper elevation={20} sx={{ margin: '1rem auto', }}>
                        <TableContainer >
                            <Table sx={{ border: '0.5px solid grey', '& th, & td': { border: '0.5px solid grey' }, borderRadius: '10px' }}>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                        <TableCell colSpan={3}>Payments to Non-Residents </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {withholdingTaxTable.map((row, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': { textAlign: 'center !important' }, '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell>
                                                <p>{row.PaymentType}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.Rate}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.DueDate}</p>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                    <Typography variant="body1" sx={{
                        fontWeight: 'bold', mt: '3rem',
                       }} className='Pointsformatting'>
                        NB: The above stated Rates are influenced by Double Tax Agreement applicable</Typography>

                    {/* ---------------------------------table 4--------------------------------- */}
                    <Paper elevation={20} sx={{ margin: '1rem auto' }}>
                        <TableContainer >
                            <Table sx={{ border: '0.5px solid grey', '& th, & td': { border: '0.5px solid grey' } }}>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { fontWeight: 'bold !important', textAlign: 'center !important', color: 'white !important', fontSize: '1rem !important' } }}>
                                        <TableCell colSpan={3}>Payments to Non-Residents </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {residentTableData.map((row, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': { textAlign: 'center !important' }, '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell>
                                                <p>{row.PaymentType}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.Rate}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p>{row.DueDate}</p>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default RatesandThres
