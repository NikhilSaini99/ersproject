import Header from '@/components/Header'
import { Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '@/components/Footer'
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const CustomAgents = () => {

    const section1 = [
        {
            head: "BACKGROUND",
            description:
                "The ASYCUDA World system is a Customs administration system which is based on the full Direct Trader Input (DTI) functionality. This capability ended the role of DataNet at the border posts, which was to capture entries into the Customs System. Accordingly, all importers, exporters or persons importing goods of a commercial nature or in commercial quantities (hereunder referred to as 'Traders') have to either input the data themselves or seek the services of a Customs Clearing Agent."

        },
        {
            head: "THE ROLE OF CLEARING AGENTS",
            description: "The Customs and Excise Act, 1971, hereinafter referred to as the 'Act', allows traders to do their own Customs clearing or to use a Clearing Agent. Traders who opt to use Clearing Agents are advised to take note of the following:",
            subpoints: [
                "Every trader shall be responsible for any act done by a Clearing Agent acting on their behalf. An act or omission of the agent is taken to be an act or omission by the trader. In terms of Section 98 of the Act a trader is bound by all the actions or omissions of his or her agent. Accordingly, a trader cannot seek to escape liability for penalties on the basis that 'it was the fault of the Clearing Agent'.",
                "Clearing Agents appointed by traders shall be liable for the fulfilment of all obligations, including the payment of duties and taxes by such trader in terms of Section 99 of the Act.",
                "Whilst all Clearing Agents are licensed by the ERS in terms of Section 60 of the Act, they remain independent entities. They are not employees of the ERS; as such the ERS shall not be responsible for any acts or omissions of any Clearing Agent;",
                "Monies paid into a prepayment account, although receipted into an Account opened in the name of the ERS, remains the property of the trader and under the full control of that trader or his or her agent;",
                "The ERS has no control over how that money will be allocated by the Clearing Agent to the declarations that they submit to Customs. It is only after the assessment of the Customs declaration that such monies shall be recognised as government revenue and transferred to the ERS revenue accounts;",
                "Accordingly, the ERS cannot be held liable for acts done by such licensed Clearing Agents on behalf of their principals (traders). This includes misallocation of funds in prepayment accounts such as using that money to clear goods belonging to third parties without the authority of the trader; and",
                "Traders are requested to report to the ERS any fraudulent or inappropriate acts done by Clearing Agents so that appropriate action, which may include revoking a license, can be taken."
            ]
        },
        {
            head: "CONNECTIVITY TO ASYCUDAWorld",
            description: "Being a web based system, ASYCUDAWorld requires that the SRA provides sufficient bandwidth to host the system. This has been done. However, each and every Clearing Agent or user of the system must also provide sufficient bandwidth to carry ASYCUDA World traffic from their computers to the ERS Network via their Internet Service Provider.\nWhilst the system may be up and running on the ERS network, users will not be able to access the system if the facilities provided by their Internet Service Provider are inadequate. Challenges that traders experience sometimes vary from one Internet Service Provider to another; users are therefore advised to assess the services and facilities offered by their Internet Service Providers in case the challenges they may be facing emanate from the inadequacy of such services or facilities."
        },
        {
            head: "LICENSED CLEARING AGENTS",
            description: "Hereunder is a list of licenced clearing agents as at the 18th February, 2019, whose licences expire on the 31st  December, 2019. The SRA undertakes to notify the public of newly registered and renewed Clearing Agents’ licences on a periodic basis. The listing of licensed Clearing Agents should not, in any way, be taken to mean that the ERS is vouching for their proficiency and/or integrity."
        }
    ];




    const licenseesTable = [
        { id: 1, name: 'AL-HARAM INVESTMENTS', tin: '101-501-684' },
        { id: 2, name: 'ALL IN INVESTMENTS', tin: '104-508-684' },
        { id: 3, name: 'AMAZING GRACE', tin: '103-852-650' },
        { id: 4, name: 'BERLIND INVESTMENTS', tin: '104-275-942' },
        { id: 5, name: 'CAR JUNCTION (PTY) LTD', tin: '102-266-676' },
        { id: 6, name: 'CJA INVESTMENTS', tin: '101-373-218' },
        { id: 7, name: 'CONSAKHI INVESTMENTS', tin: '104-053-218' },
        { id: 8, name: 'CROSS CONTINENTAL  CARRIERS', tin: '100-274-026' },
        { id: 9, name: 'DATA NETWORK SERVICES', tin: '100-176-984' },
        { id: 10, name: 'DHL SWAZILAND', tin: '100-199-376' },
        { id: 11, name: 'ELEGANT INVESTMENTS', tin: '100-226-968' },
        { id: 12, name: 'ELIANG COURIER SERVICES', tin: '100-348-242' },
        { id: 13, name: 'ELITE MOTORS', tin: '100-237-076' },
        { id: 14, name: 'ENJOY SWAZILAND INVESTMENTS (PTY) LTD', tin: '105-371-076' },
        { id: 15, name: 'EZM INVESTMENTS', tin: '101-494-742' },
        { id: 16, name: 'FEDEX', tin: '102-450-576' },
        { id: 17, name: 'GIL VINCENTE IMPORTS& EXPORTS', tin: '100-184-800' },
        { id: 18, name: 'GLOBEFLIGHT WORLDWIDE EXPRESS', tin: '102-35-718' },
        { id: 19, name: 'GMR FREIGHTS', tin: '100-106-026' },
        { id: 20, name: 'GRINROD LOGISTICS AFRICA (PTY) LTD', tin: '100-309-018' },
        { id: 21, name: 'INTERFREIGHT SWAZILAND', tin: '100-181-326' },
        { id: 22, name: 'JAPANZ INTERNATIONAL', tin: '100-306-950' },
        { id: 23, name: 'JETS INVESTMENTS', tin: '104-217-526' },
        { id: 24, name: 'JHME INVESTMENTS', tin: '105-162-634' },
        { id: 25, name: 'KAHLOON MOTORS', tin: '105 769 684' },
        { id: 26, name: 'LINKS PORT INVESTMENTS(PTY) LTD', tin: '104-953-442' },
        { id: 27, name: 'LOMAPAM INVESTMENTS', tin: '100-264-500' },
        { id: 28, name: 'MBUNHLE INVESTMENTS', tin: '102-313-750' },
        { id: 29, name: 'METAL SOLUTIONS', tin: '101-496-768' },
        { id: 30, name: 'MONTIGNY INVESTMENTS', tin: '100-204-034' },
        { id: 31, name: 'MOTHER TRUCKERS', tin: '100-170-184' },
        { id: 32, name: 'MPONZA INVESTMENT', tin: '103-076-018' },
        { id: 33, name: 'N&N CLEARING AGENT', tin: '104-517-068' },
        { id: 34, name: 'NAGRA MOTORS', tin: '102-532-034' },
        { id: 35, name: 'NGIYAFUNAKWENTEKILE INVESTMENTS', tin: '101-384-384' },
        { id: 36, name: 'NSK INVESTMENTS', tin: '100-240-234' },
        { id: 37, name: 'ON-POINT CLEARING AGENT', tin: '101-337-434' },
        { id: 38, name: 'PAVILLION INVESTMENTS', tin: '100-270-242' },
        { id: 39, name: 'PHUTFUMANI COURIERS AND FREIGHT', tin: '104-510-384' },
        { id: 40, name: 'POPULAR INVESTMENTS', tin: '103-491-868' },
        { id: 41, name: 'PORCUPINE INVESTMENTS (PTY) LTD', tin: '105-054-784' },
        { id: 42, name: 'PPV CLEARING & FORWARDING (PTY) LTD', tin: '102-137-350' },
        { id: 43, name: 'PSSN INVESTMENTS (PTY) LTD', tin: '103-922-126' },
        { id: 44, name: 'PUNJAB INVESTMENTS', tin: '100-345-476' },
        { id: 45, name: 'RIGHT WAY INVESTMENTS', tin: '100-173-668' },
        { id: 46, name: 'ROADLINK INVESTMENTS (PTY) LTD', tin: '104-827-026' },
        { id: 47, name: 'SEYLAN FREIGHT', tin: '100-204-450' },
        { id: 48, name: 'SHARP FREIGHT SWAZILAND (PTY) LTD', tin: '100-295-526' },
        { id: 49, name: 'SS.MM INVESTMENTS (PTY) LTD', tin: '105-339-076' },
        { id: 50, name: 'STEEL QUICK INVESTMENTS (PTY) LTD', tin: '105-304-726' },
        { id: 51, name: 'SUPERWORLD CLEARING AGENT', tin: '101-590-150' },
        { id: 52, name: 'TAKBRO SERVICES (PTY) LTD', tin: '100-480-850' },
        { id: 53, name: 'TIMELESS INVESTMENTS', tin: '103-453-800' },
        { id: 54, name: 'TRITON EXPRESS(PTY) LTD', tin: '100-581-184' },
        { id: 55, name: 'TT GLOBAL INVESTMENTS', tin: '100-159-976' },
        { id: 56, name: 'UNICARGO SWAZILAND', tin: '100-112-476' },
        { id: 57, name: 'WETHUPO INVESTMENTS (PTY) LTD', tin: '104-622-850' },
        { id: 58, name: 'ZIA INVESTMENTS', tin: '100-241-826' },

    ]


    const licenseesTable2 = [
        { name: 'AMAZING GRACE CLEARING AGENT', tin: '103-852-650' },
        { name: 'BERLIND INVESTMENTS', tin: '104-275-026' },
        { name: 'CROSS CONTINENTAL CARRIERS', tin: '100-274-026' },
        { name: 'DATA NETWORK SERVICES', tin: '100-176-984' },
        { name: 'GIL VICENTE IMPORT & EXPORT', tin: '100-184-800' },
        { name: 'GRINROD LOGISTICS AFRICA(PTY) LTD', tin: '100-309-018' },
        { name: 'INTERFREIGHT SWAZILAND', tin: '100-181-326' },
        { name: 'ON-POINT CLEARING AGENT', tin: '101-337-434' },
        { name: 'PHUTFUMANI COURIERS', tin: '104-510-384' },
        { name: 'PORCUPINE INVESTMENTS', tin: '105-054-784' },
        { name: 'ROADLINK INVESTMENTS', tin: '104-827-026' },
        { name: 'RSSC  (PTY) LTD', tin: '100-170-500' },
        { name: 'SEYLAN FREIGHT', tin: '100-208-650' },
        { name: 'SOUTHERN STAR LOGISTICS', tin: '105-140-250' },
        { name: 'TAKBRO SERVICES', tin: '100-480-850' },
        { name: 'TIMELESS INVESTMENTS', tin: '103-453-800' },
        { name: 'USA DISTILLERS', tin: '100-131-826' },
        { name: 'ZHENG YONG ESWATINI', tin: '100-177-150' }
    ];


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


    return (
        <>
          <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>

                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Customs Clearing Agents
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Customs Clearing Agents
                    </Typography> */}

                    <Typography variant="h2">
                        GUIDE FOR LICENSING CLEARING AGENTS
                    </Typography>
                    <Box sx={{ py: '1rem' }}>
                        {section1.map((item, index) => (
                            <Box key={index} sx={{ mb: '1rem' }}>
                                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.head}</Typography>
                                <Typography variant='body1' className='Pointsformatting' sx={{mt:"1rem"}}>{item.description}</Typography>
                                {item.subpoints && item.subpoints.map((points, index) => (
                                    <div key={index} className='flex gap-1 items-start pb-2'>
                                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                        <ul>
                                            <li className='Pointsformatting'>{points}</li>
                                        </ul>
                                    </div>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ py: '0rem' }}>
                        <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', }}>
                            IMPORTANT NOTE
                        </Typography>
                        <Typography variant='body1' className='Pointsformatting' sx={{my:"1rem"}}>
                            For purposes of determining the liability of traders for the acts and omissions of their agents, the law does not require Customs to verify if a person transacting Customs business on behalf of a trader is formally appointed or authorised by the trader to act as such. Thus any person, including the driver or person in charge of the means of transport on which the goods are imported or exported, who makes a declaration of the goods on board is considered in law as an agent of the trader.
                        </Typography>
                    </Box>

                    {/* section 3 */}

                    {/* first table */}
                    <Paper elevation={20} sx={{ width: '100%', margin: '0 auto' }}>
                        <TableContainer >
                            <Table className={''} aria-label="Form Table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                        <TableCell >#</TableCell>
                                        <TableCell align="left" >NAME OF THE LICENSEE</TableCell>
                                        <TableCell align="left" >TAXPAYER IDENTIFICATION NUMBER</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {licenseesTable.map((form, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': {},
                                            '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell component="th" scope="row" align="right" >
                                                {form.id}
                                            </TableCell>
                                            <TableCell align="left" >{form.name}</TableCell>
                                            <TableCell align="left" >{form.tin}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    {/* first table end*/}

                    <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', my: '2.5rem', 
                    textAlign: 'left' }}>
                        ACTIVE TRANSIT BOND HOLDERS
                    </Typography>
                    {/* Second table */}
                    <Paper elevation={20} sx={{ width: '100%', margin: '0 auto', my: '2rem' }}>
                        <TableContainer >
                            <Table className={''} aria-label="Form Table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                        <TableCell align="left" >NAME OF THE LICENSEE</TableCell>
                                        <TableCell align="left" >TIN</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {licenseesTable2.map((form, index) => (
                                        <TableRow key={index} sx={{
                                            '& > *': {},
                                            '&:hover': {
                                                background: '#F2F2F2'
                                            }
                                        }}>
                                            <TableCell align="left" >{form.name}</TableCell>
                                            <TableCell align="left" >{form.tin}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    {/* Second table end*/}

                    <Divider sx={{ my: '2rem' }} />
                    <Link href="http://102.36.181.13:8000/documents/2021ACTIVECLEARINGAGENTSASAT150421.pdf" className='text-normalBlue block Pointsformatting'>2021 ACTIVE CLEARING AGENTS AS AT 150421</Link>
                    <Link href="http://102.36.181.13:8000/documents/2021ACTIVETRANSITBONDHOLDERSASAT250221.pdf" className='text-normalBlue block Pointsformatting'>2021 ACTIVE TRANSIT BOND HOLDERS AS AT 250221</Link>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default CustomAgents
