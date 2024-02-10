import React from 'react'
import Header from '@/components/Header'
import { Box, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/bg-2.png'
import Footer from '@/components/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const EuRegistered = () => {

    const data1 = [
        {
            para: 'The Registered Exporter System (REX system) is the new system for certifying the origin of goods that the European Union (EU) is progressively introducing for the purpose of its preferential trade arrangements.\nThe REX system will progressively and completely replace the current system of certifying origin based on certificates-of-origin issued by the ERS. It will be implemented by the ERS as of the 01st January 2018.\nThe system is based on a principle of self-certification by exporters who will create for themselves so-called statements on origin.\nWith the REX system, the statement on origin is a statement on the originating status of goods added by the registered exporter on the invoice or any other commercial document. To be entitled to make out a statement on origin, an exporter will have to be registered on a database by the ERS and become a "registered exporter".\nThe REX system is supported by an IT system, which is basically a database in which the ERS will register exporters who intend to export products under a GSP trade arrangement and keep their data up to date. The system takes the form of a web application accessed with a username and a password through the Internet. In the context of the GSP, the European Commission has put its REX application at the disposal of the beneficiary countries so that they do not have to develop their own repository of registered exporters.'
        }
    ]

    const data2 = [
        {
            heading: 'Functionalities of the REX IT system',
            desc: 'The main functionalities of the REX system are:',
            subdata: [
                {
                    subhead: 'Registration of exporters',
                    desc: 'Exporters will apply to become registered exporters by filling in an application form and returning it to the ERS for processing. The ERS will register exporters who submit complete and correct application forms and are found to qualify as per the GSP Rules of Origin.'
                },
                {
                    subhead: 'Modification of registration data',
                    desc: 'Once registered, a registered exporter has the obligation to communicate to the ERS all changes on his registered data. The ERS will then perform the modifications in the REX system for the registered exporter.'
                },
                {
                    subhead: 'Revocation of exporters',
                    desc: 'In some cases, a registered exporter will be revoked from the REX system; examples of instances that may prompt this include closure of a company\'s operations or if the registered exporter is convicted for fraud. Depending on the reason, the revocation will be done either on request of the registered exporter or on the initiative of the ERS.'
                }
            ]
        },
        {
            heading: 'Certifying the origin of goods with statements on origin',
            desc: 'The REX system does not impact the rules for determining the origin of goods. It only concerns the method for certifying the origination of goods.'
        },
        {
            note: 'The data on the REX system are publically made available. The address to view the public data is below.'
        }
    ]

    const links = [
        {
            text: 'Pre-Application to become an EU Registered Exporter',
            link: 'https://customs.ec.europa.eu/rex-pa-ui/#/create-preapplication/'
        },
        {
            text: 'REX Number Validation',
            link: 'http://ec.europa.eu/taxation_customs/dds2/eos/rex_validation.jsp?Lang=en'
        },
        {
            text: 'eLearning Course on Registered Exporter',
            link: 'http://69.63.70.60/REX/story.html'
        },
        {
            text: 'REX System EU Information',
            link: 'http://ec.europa.eu/taxation_customs/business/calculation-customs-duties/rules-origin/general-aspects-preferential-origin/arrangements-list/generalised-system-preferences/the_register_exporter_system_de'
        },

    ]

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
                        <Typography variant="h1" sx={{ position: "relative !important" }}>EU Registered Exporter System
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

                    {/* <Typography variant="h1" >
                        EU Registered Exporter System
                    </Typography> */}
                    <Typography variant="h2">
                        General information
                    </Typography>

                    {data1.map((item, index) => (
                        item.para.split('\n').map((item, index) => (
                            <Typography key={index} variant='body1' className=' pb-4'>{item}</Typography>
                        ))
                    ))}

                    {
                        data2.map((section, index) => (
                            <Box key={index} >
                              {section.heading &&  <Typography variant="h2" >
                                    {section.heading}
                                </Typography>}
                               {section.desc && <Typography variant='body1' className=' pb-4'>{section.desc}</Typography>}
                                {section.subdata && section.subdata.map((subitem, index) => (
                                    <Box key={index}>
                                        <Typography variant="h2">
                                            {subitem.subhead}
                                        </Typography>
                                        <div className='flex gap-1 items-start '>
                                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                            <Typography variant='body1' className=' pb-4'>{subitem.desc}</Typography>
                                        </div>
                                    </Box>
                                ))}
                                {section.note && <Typography variant='body1' className=' font-bold'>{section.note}</Typography>}
                            </Box>
                        ))
                    }
                    <Typography variant='body1' className=' '>Links:</Typography>
                    <Stack direction="column" >
                        {links.map((link, index) => (
                            <Link href={link.link} className='Pointsformatting text-normalBlue' key={index}>{link.text}</Link>
                        ))}
                    </Stack>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default EuRegistered
