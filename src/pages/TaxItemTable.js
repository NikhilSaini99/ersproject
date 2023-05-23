import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Paper, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import feedbackimg from '../assets/images/feedbackbg4.svg'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { taxData } from '../content/data'
let myKeys;
const TaxItemTable = () => {

    return (
        <>
            <Head>
                <title>Feedback Form</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/*-----------------------Header---------------------*/}

            <Header />

            <Box sx={{
                position: 'relative',
                backgroundImage: `url(${feedbackimg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                py: '5rem',

            }}>
                <Typography variant='h1' sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', color: 'white', pb: '2rem' }}>Tax Item Codes</Typography>
                <Typography variant='body1' sx={{
                    fontSize: '1rem', textAlign: 'center', color: 'white', pb: '2rem',
                    width: { xs: '96%', md: '95%', xl: '70%' }, margin: '0rem auto'
                }}>For administrative and accounting purposes it is important to include the correct tax item code when making payment. This code provides information on the tax item for which the payment is made and it must be provided regardless of the mode of payment being used.*

                    * The MTN Mobile Money provides an option to select the tax type for which payment is being made, therefore use of the referencing format is not necessary.

                    The table below has the total list of tax item codes for use when referencing payments:</Typography>
                <Box sx={{ width: { xs: '96%', md: '95%', xl: '70%' }, margin: '0rem auto' }}>
                    <Paper elevation={20} sx={{ borderRadius: '10px', width: '90%', margin: '0 auto' }}>
                        <TableContainer sx={{ borderRadius: '10px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f4c203', '& > *': { fontWeight: 'bold', textAlign: 'center' } }}>
                                        <TableCell>Tax Type</TableCell>
                                        <TableCell>Tax Item</TableCell>
                                        <TableCell>Tax Code</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {taxData.map((item, index) => (
                                        item && (
                                            <TableRow key={index}>
                                                <TableCell align='left' sx={{ fontWeight: 'bold' }}>{item["TAX TYPE"]}</TableCell>
                                                <TableCell align='left' sx={{ fontWeight: ['Company Tax', 'Individual Tax', 'Non Resident Tax', 'Provisional Tax', 'Withholding Tax', 'Other', 'Provisional', 'Penalties', 'Interest'].includes(item["TAX ITEM"]) ? 'bold' : 'normal' }}>{item["TAX ITEM"]}</TableCell>
                                                <TableCell align='left' sx={{ fontWeight: 'bold' }}>{item["TAX CODE"]}</TableCell>
                                            </TableRow>
                                        )))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Box>
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />

        </>
    )
}

export default TaxItemTable