import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bgimg from '../../assets/images/pxfuel.jpg'

const GuidePublicOfficer = () => {
    const publicOfficerData = [
        {
            question: 'Who qualifies to be appointed as Public Officer?',
            answer:
                'A natural person, holding a position of authority within the company who resides in Swaziland qualifies to be appointed as a Public Officer.',
        },
        {
            question: 'What is the purpose of appointing a Public Officer?',
            answer:
                'To have a natural person managing the tax affairs of the company as a company is an artificial person and therefore cannot manage its own tax affairs.',
        },
        {
            question: 'Does an artificial person qualify to be appointed as Public Officer?',
            answer:
                'An artificial person cannot be appointed as a public officer for the following reasons',
            subpoints: [
                'Cannot be held personally liable for actions of another artificial person, company.',
                'Their appointment presents a challenge when it comes to accepting the liability of the actions of the company that they may be representing.',
            ],
        },
        {
            question: 'Exclusions',
            answer:
                'The following entities DO NOT qualify to be appointed as Public Officers hence the ERS will not approve such appointments',
            subpoints: [
                'Auditing Firms',
                'Accounting firms',
                'Tax advisory firms',
                'Law firms',
                'Unauthorized persons',
            ],
        },
        {
            question: 'How to apply to be a Public officer?',
            answer:
                'An application for approval must be made in writing to the Commissioner General, accompanied by the following documents',
            subpoints: [
                'A resolution by the company board of directors wherein the appointment was made.',
                'An acceptance letter signed by the appointed person.',
                'A certified copy of an ID document of the person appointed as public officer.',
                'A valid certified copy of the working permit where the person appointed is not a Swazi National.',
                'A completed form titled "Application to be Public Officer ERS-ITPO 01."',
            ],
        },
        {
            question: 'Liabilities of a Public Officer',
            answer:
                'In terms of Sections 44, 45, 46, 47 and 51(11) of the Income Tax Order, a public Officer shall upon approval of his appointment by the Commissioner General',
            subpoints: [
                'Be answerable for all acts or matters as required to be performed by the company under the Income Tax Order.',
                'Represent the taxpayer in respect of the income of the company.',
                'Be personally liable to penalties in cases of default.',
            ],
        },
        {
            question: 'What are the duties of the Public Officer?',
            answer:
                'The public officer shall amongst other things ensure:',
            subpoints: [
                'All communication of the company to the Commissioner General is signed by him or her.',
                'Company tax returns are submitted on time as required.',
                'Timeous payment of all taxes.',
                'Proper business records are kept in the premises of the business.',
                'Such records are made available as and when required by the Commissioner General.',
                'All information requested by the Commissioner General is submitted timeously.',
                'Withholding and remittance of taxes is complied with where applicable.',
                'All obligations of the company as an employer are carried out.',
                'The company complies with any other provisions under the Income Tax Order.',
            ],
        },
        {
            question: 'What are the duties of a company?',
            subpoints: [
                'That the office of the public officer is filled at all times.',
                'The Commissioner General is notified where there is a change of public officer.',
            ],
        },

        {
            question: 'Failure to appoint a Public Officer Failure to appoint a public officer by a company shall',
            subpoints: [
                'Result in the imposition of a penalty not exceeding sixty Emalangeni (E60) for every day that the default continues (Subject to the Commissioner General\'s review of the penalty).',
                'Not exonerate any company from the obligation of complying with the Income Tax Order.',
                'The Commissioner General shall designate a managing director or other officer of the company as its public officer.'
            ],
        },
    ];
    const boardList = [
        'The company through the board of directors',
        'By an agent',
        'By an attorne',
        'Any other body authorized to make such appointment'

    ]


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    const boardlistStyling = {

        width: 'fit-content',
        borderRadius: '10px',
        border: '0.5px solid grey',
        p: '1rem',
        color: '#2f248f',
        // boxShadow: 'blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px'
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
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
                            objectFit: 'cover'
                        }}
                    />
                </Box>
            <Box sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >

                <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '10rem,', xl: '15rem' }, py: '2rem' }}>
                    <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
                        Guide on the Appointment of a Public Officer
                    </Typography>

                    <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 'bold', pb: '1rem' }}>
                        Introduction
                    </Typography>

                    <Typography variant="body1" className='Pointsformatting'>
                        The Income Tax Order of 1975 as amended requires that a company carrying on business in Swaziland appoints a Public Officer to represent the company in all their tax obligations.
                    </Typography>
                    <Typography variant="body1" className='Pointsformatting '>
                        In terms of Section 51(2) of the Order, a public officer shall be appointed by:
                    </Typography>

                    
                        {boardList.map((item, index) => (
                           <div key={index} className='flex gap-1 items-start pb-2'>
                           <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                           <ul>
                           <li Pointsformatting className='Pointsformatting'>{item}</li></ul>
                       </div>
                        ))}
                    

                    {publicOfficerData.map((item, index) => (
                        <Box key={index} sx={{ my: '0.5rem' }}>
                            <Typography variant='h2' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }} className='Pointsformatting pb-2'>{item.question}</Typography>
                            {item.answer ? <Typography variant='body1' className='Pointsformatting'>{item.answer}</Typography> : null}
                            {item.subpoints ? <ul className='custom-list'>
                                {item.subpoints.map((subpoint, index) => (
                                    <div key={index} className='flex gap-1 items-start pb-2'>
                                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                        <li className='Pointsformatting'>{subpoint}</li>
                                    </div>
                                ))}
                            </ul> : null}
                        </Box>
                    ))}



                </Box>
            </Box>
            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default GuidePublicOfficer
