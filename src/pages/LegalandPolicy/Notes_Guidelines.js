import React from 'react';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Practice_Notes_and_Guidelines.jpg";
import Link from 'next/link';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import bgimg from '../../assets/images/pagebackground1.jpg'
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const Notes_Guidelines = () => {
    const documents = [

        {
            name: 'PRACTICE NOTES',
            points: [
                'Practice Note-VAT Reverse Charge Instrument - Forestry Industry',
                'Public Notice_AfCFTA Implementation',
                'PUBLIC NOTICE TO TAXPAYERS-Reconciliations',
                'Notice to furnish returns_2020',
                'Guide - Taxable Value on Imported Goods with VAT on Invoice.pdf',
                'ERS-Minstry of Finance Guidelines to Taxpayers- COVID-19',
                'Notice to taxpayers COVID-19',
                'Guideline on the application of de minimus rule',
                'Practice note on Voluntary disclosure',
                'VAT reverse charge for Sugar Cane Growers',
                'Transactions for TIN',
                'Issuance of TCC',
                'Taxability of Diplomats',
                'Practice Note on the Recovery of Tax in cases of Default',
                'Practice Note on the Advance Payment of VAT',
                'Practice Note Withholding Tax on Interest Payable to all Resident Person',
                'Practice Note Issuance of Tax Directives for Lump Sum Payments Payable to Employees and Former Employees',
                'Practice Note Defination and Interpretation of Proper books of Accounts',
                'Appointment of Public Officers',
                'Guideline of initial allowance',
                'Guideline on deductible bad debts',
                'Guideline on the tax treatment of donations and sponsorships (003)',
                'Guidelines for the Waiver and Abatement of penalties',
                'New guideline on domestic taxes exemptions',
                'Guideline on Donor Funded Projects',
            ]
        },
        {
            name: 'DOMESTIC TAXES',
            points: ['Notional Input Tax Guideline',
                'Guideline on the Issuance of Tax Compliance',
                'Guideline on Domestic Taxes Exemptions 1',
                'Guide on appointment and liabilities of a public officer',
                'GUIDELINES ON THE RIGHTS-BASED APPROACH TO CHARECTERISING SOFTWARE PAYMENTS',]
        },


        {
            name: 'CUSTOMS & EXCISE',
            points: ['Guide for Licensing of Clearing Agents',
                'Guideline on Registration of Exporters for Preferential Treatment Access',
                'Guideline Importation of Motor Vehicles',
                'ERS External Guideline - Disposing Products from Rebated Goods to the Local Market - 2020']
        }
    ];


    return (
        <>
             <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
            <ContentDiv>
                <Typography variant="h1" >
                    Practice Notes and Guidelines</Typography>

             
                <Typography variant="body1" sx={{ mb: '1rem' }} className='Pointsformatting'>
                    Practice notes are developed using the applicable legislations and are meant to assist with simplifying the application of the law. They do not replace the legislation but purely provide means for better understanding the principles of the law.
                </Typography>


                <Paper elevation={20}>
                    <TableContainer sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.4)' } }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{backgroundColor: '#2f2483', '& th': { fontWeight: 'bold !important', color:'white !important', textAlign: 'center !important' } }}>
                                
                                    <TableCell>Type</TableCell>
                                    <TableCell>Name</TableCell>

                                    {/* <TableCell>Download</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {documents.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{item.name}</TableCell>

                                        {/* <TableCell><ul>{item.points.map((subpoints, index) => (
                                            <li key={index}>{subpoints}</li>
                                        ))}</ul></TableCell> */}


                                        <TableCell sx={{px:'0'}}>
                                            {item.points.map((subpoints, index) => (

                                                <TableRow component='div' key={index} sx={{ py:'none !important',
                                                    '& div': { border: 'none', '&:hover': { background: '#F2F2F2' } },
                                                    display: 'flex', justifyContent: 'space-between', width: '100%',
                                                    borderBottom: index !== item.points.length - 1 ? '0.1rem solid rgba(0,0,0,0.4)' : 'none',
                                                }}>
                                                    <TableCell component='div'>{subpoints}</TableCell>
                                                    <TableCell component='div' sx={{padding:"5px"}}>
                                                        <IconButton><DownloadForOfflineIcon sx={{ color: 'black' }} />
                                                        </IconButton></TableCell>
                                                </TableRow>
                                            ))}
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

export default Notes_Guidelines
