import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/registration.jpg";

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

            <Box sx={{ width: { xs: '95%', md: '85%', lg: '80%' }, margin: { xs: '2rem auto', lg: '5rem auto' },lineHeight:'1.8' }}>
                <Typography variant="h4" component="h1" sx={{ color: '#2f2483', fontWeight: 'bold', my: '2.5rem' }}>
                    Guide on the Appointment of a Public Officer
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: '1rem' }}>
                    Introduction
                </Typography>

                <Typography variant="body1">
                    The Income Tax Order of 1975 as amended requires that a company carrying on business in Swaziland appoints a Public Officer to represent the company in all their tax obligations.
                </Typography>
                <Typography variant="body1">
                    In terms of Section 51(2) of the Order, a public officer shall be appointed by
                </Typography>

                <ul className='custom-list'>
                    <li>The company through the board of directors or</li>
                    <li>By an agent</li>
                    <li>By an attorne</li>
                    <li>Any other body authorized to make such appointment</li>
                </ul>

                {publicOfficerData.map((item, index) => (
                    <Box key={index} sx={{my:'0.5rem'}}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{item.question}</Typography>
                        {item.answer ? <Typography variant='body1'>{item.answer}</Typography> : null}
                        {item.subpoints ? <ul className='custom-list'>
                            {item.subpoints.map((subpoint, index) => (
                                <li key={index}>{subpoint}</li>
                            ))}
                        </ul> : null}
                    </Box>
                ))}



            </Box>
            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default GuidePublicOfficer
