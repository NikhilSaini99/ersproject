import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/bg-1.png'
import Footer from '@/components/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle'
import PageLayout from '../PagesLayout/Layout'

const RebateConcession = () => {


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


    const data = [

        {
            title: 'RETURNING RESIDENTS',
            desc: 'Goods are usually exported by residents of Eswatini for their own use while abroad and subsequently re-imported either as accompanied or unaccompanied passengers baggage (e.g Residents who have been away for purposes of attending an educational institution abroad; residents who have been away because they were employed abroad etc.)',
            subData: [
                {
                    subTitle: 'Conditions for returning individuals',
                    subpoints: [
                        'For personal effects, sporting and recreational equipment the goods should be identified as the same goods which were taken out of Eswatini',
                        'For household furniture, effects (including equipment necessary for the exercise of a trade or profession) the returning resident must have been absent from the country for a period of six (6) months or more.  NB: Returning Residents that have purchased personal effects from abroad do not qualify.',
                        'The resident must be returning to the country permanently.'
                    ],
                },
                {
                    subTitle: 'Conditions for new residents',
                    subDesc: 'The goods (whether personal effects, sporting and recreational equipment; household furniture, effects including equipment necessary for the exercise of a trade or profession) must be owned by the immigrant at the time of his/her arrival and at the time of their importation.',
                },
                {
                    subTitle: 'Other qualifying individuals are NEW RESIDENTS',
                    subDesc: 'Goods may also be imported by immigrants taking up residence for the first time (e.g. an immigrant coming to Eswatini to take up employment or permanent residence, an immigrant coming to Eswatini for purposes of attending any educational institution, temporary professional contractors etc.)',
                    subpoints: [
                        'Conditions for new residents: The goods (whether personal effects, sporting and recreational equipment; household furniture, effects including equipment necessary for the exercise of a trade or profession) must be owned by the immigrant at the time of his/her arrival and at the time of their importation.',
                        'Spouses of such persons are included.'
                    ]
                }

            ]
        },
        {
            title: 'Procedure',
            points: [
                'The applicant must complete the form <a href="http://website.ers.org.sz:3000/" target="_blank" style="color:blue">CE101</a> PRIOR TO THE ARRIVAL OF THE GOODS INTO THE KINGDOM',
                'Form <a href="http://website.ers.org.sz:3000/" target="_blank" style="color:blue">CE 101</a> is obtainable at the Legislative unit (Eswatini Revenue Service Headquarters, Departments of Customs and Excise Building 02, 3rd Floor, Mbabane Office Park, Mbabane) or the Eswatini Revenue Service website at www.ers.org.sz',
                'The applicant must specify all the goods to be imported in an identifiable manner (serial numbers, marks etc.)',
                'The applicant must also submit supporting documentation.',
                'Form CE 101, together with the supporting documents must be submitted to the Legislative unit. All documents must be submitted in triplicate.',
                'Once the application has been approved, the applicant may then be able to import the goods.',
                'The approved CE101 must be presented at the entry point and ONLY THOSE GOODS LISTED ON THE FORM WILL QUALIFY FOR REBATES AND EXEMPTIONS.',
            ],
        },
        {
            title: 'What are the supporting documents that are required?',
            points: [
                'Identification documents of the applicant',
                'Transportation documents, i.e. bill of lading, airway bill etc.',
                'Proof of date of arrival into Eswatini',
                'Schedule of goods to be imported',
                'Entry/residence/work/study permit, in the case of new residents',
                'Contract of employment, in the case of new residence assuming residence due to a professional calling',
                'Proof of residence in the country of exportation, in the case of returning residence',
                'Registration documents, in the case of a motor vehicle',
            ],
        },
        {
            title: 'What kind of goods can be imported under the rebate?',
            points: [
                'Personal effects, sporting and recreational equipment',
                'Household effects and equipment necessary for the exercise of a trade or profession (except industrial, commercial or agricultural equipment)',
                'Motor Vehicle. Returning residents or new residents may import under full rebate of customs duties and exemption of taxes.',
                'Conditions for importation of vehicle:',
                'ONE MOTOR VEHICLE PER FAMILY may be imported.',
                'The vehicle so imported must have been the personal property of the importer',
                'The motor vehicle must be imported for personal use.',
                'The motor vehicle must have been owned and used by the importer for a period of not less than 12 months prior to the Importer\'s departure;',
                'New residents must obtain permanent residence in Eswatini.',
                'Returning residents must have originally emigrated from Eswatini; obtained residents\' status abroad; and are returning to Eswatini permanently.',
                'Should the vehicle have been owned and used for a period of less than twelve months prior to departure, the amount of duty rebated will be reduced pro-rata, according to the number of days less than 12 months.',
                'An application for an import permit must be obtained prior to shipment of the vehicle to Eswatini.',
            ],
        },
        {
            note: "ANY VIOLATION OF THE CONDITIONS MAKES THE GOODS LIABLE TO SEIZURE. MISUSE OR ATTEMPTS TO MISUSE THE PROVISIONS IS AN OFFENCE AND CAN RESULT IN PROSECUTION OR PENALTIES OR SEIZURE OF THE GOODS."
        }
    ];


    return (
        <>
           <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>

                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Rebate Concessions for New Residents
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

                    {/* <Typography variant="h1" >
                        Rebate Concessions for New/Returning Residents
                    </Typography> */}
                    <Typography variant="h2">
                        REBATE CONCESSION FOR NEW/RETURNING RESIDENTS <a href="http://website.ers.org.sz:8000/documents/RebateCustoms-GuidelineforProcessingRebatesandExemptionsforNew.pdf" target='_blank' style={{color:"blue"}}> (Click here for the full  guideline)</a>
                    </Typography>
                    <Typography variant="body1" sx={{ my: '1rem' }} >
                        Goods imported by qualifying individuals/natural persons (not companies) can qualify for a rebate of duty and import in Eswatini
                        <br />
                        Qualifying individuals are:
                    </Typography>
                    <Box sx={{ my: '1.2rem' }}>
                        {data.map((item, index) => (
                            <Box key={index}>
                                <Typography variant='h2' >{item.title}</Typography>
                                {item.desc && <Typography variant='body1' className='mb-4'>{item.desc}</Typography>}
                                {item.subData && item.subData.map((subData, index) => (
                                    <Box key={index}>
                                        <Typography variant='h2'>{subData.subTitle}</Typography>
                                        {subData.subDesc && <Typography variant='body1' className=' mb-4'>{subData.subDesc}</Typography>}
                                        <div className=' mb-4'>
                                        {subData.subpoints && subData.subpoints.map((subitem, index) => (
                                            <div key={index} className='flex gap-1 items-start pb-2'>
                                                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                                <Typography variant='body1' className=''>{subitem}</Typography>
                                            </div>
                                        ))
                                    }
                                    </div>
                                    </Box>
                                ))}
                                 <div className=' mb-4'>
                                {item.points && item.points.map((mainPoints, index) => (
                                    <div key={index} className='flex gap-1 items-start pb-2'>
                                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                        <ul>
                                            <li className='Pointsformatting' dangerouslySetInnerHTML={{__html: mainPoints}}></li>
                                        </ul>
                                    </div>
                                ))}
                                </div>
                                {item.note && <Typography variant='body1' className='font-bold'>{item.note}</Typography>}
                            </Box>
                        ))}
                    </Box>
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default RebateConcession
