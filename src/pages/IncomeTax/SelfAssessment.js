import React, { useState } from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image'
import Banner from "../../assets/images/Self_Assessment.jpg";
import rightarrow from '../../assets/images/rightarrow.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const SelfAssessment = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


    const [isOpen, setisOpen] = useState(null)

    const handleOpen = (index) => {
        if (isOpen === index) {
            setisOpen(null);
        }
        else {
            setisOpen(index); // Open the clicked FAQ
        }
    }
    const FaqContainerStyling = {
        maxWidth: '95%',
        borderRadius: '20px',
        marginBottom: '3rem'
    }

    const accordionStyling = {
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }

    const insideAccordionStyle = {

        background: '#FFFFFF',
        /* Buttons/ Color - Default */
        boxShadow: '0px 6px 10px 0px rgba(74, 58, 255, 0.19)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        px: '2rem',
        py: '0.2rem'
    }

    const questionStyling = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        lineHeight: '28px',
        fontWeight: '500',

    }



    const questionandanswer = [
        {
            question: 'What is self-assessment?',
            answer: 'This is a simple mechanism by which taxpayers make their own assessment from which they pay due taxes or be refunded overpaid taxes without having to wait for an assessment by ERS. Under self-assessment, the taxpayer is expected to make payment based on their own assessment before the return submission due date.',
            note: 'Note: A self-assessed return is subject to an audit, therefore taxpayers should exercise diligence when completing returns in order to avoid any omissions of incorrect statements. When in doubt, taxpayers are encouraged to seek guidance from the ERS.'
        },
        {
            question: 'How is self-assessment different from the traditional assessment?',
            answer: 'With self-assessment, when the taxpayer furnishes their own assessment and submit same to the ERS, that submitted income tax return is deemed to be an assessment by the Commissioner General. Hence, any taxable income that is declared by the taxpayer and any tax payable as indicated in the return submitted is considered due and payable. Therefore, NO notice of assessment confirming tax due will be sent to the taxpayer under self-assessment. Meanwhile, the traditional method of assessment required the taxpayer to submit returns and await a notice of assessment from the Commissioner General informing the taxpayer of their tax liability.'
        },
        {
            question: 'Who is required to be self-assess?',
            answer: 'All taxpayers are required to be on self-assessment.'
        },
        {
            question: 'What are the implications of self-assessment?',
            answer: 'Taxpayers are given the role of assessing themselves to determine their tax liability. Keeping of business records remains a compliance requirement. \nPayment are to be made on or before the return submission due date.',

        },
    ]



    const selfAssessmentData = [

        {
            title: 'ADVANTAGES OF SELF-ASSESSMENT',
            description: 'The self-assessment mechanism has the following advantages',
            points: ['Taxpayers will have a better understanding and appreciation of tax computations.',
                'Provides better control of taxpayers’ tax affairs as they ensure that their assessments are up to date and reflect the true tax position.',
                ' The direct involvement of the taxpayer in the tax computation leads to better financial planning.',
                ' Compliance is enhanced as a result of better financial planning.']
        },
        {
            title: 'TAXPAYER’S OBLIGATIONS UNDER SELF-ASSESSMENT',
            points: ['To be honest when computing their tax liability penalty is charged for fraudulent declarations.',
                'To submit tax returns on or before the due date. If the last day of submitting returns falls on a public holiday or weekend, the return must be submitted on the last working day prior to the public holiday or weekend. Late return submission attracts late submission penalties.',
                'To pay Provisional Tax on or before the due date. The first payment must be made within six months from the commencement of the year of assessment (July each year) or approved financial year-end date; the second payment must be made not later than the last day of the year of assessment or approved financial year-end date; and the third payment must be paid on or before the due date of the tax return. Interest is imposed on late payments.',
                'To reference payments correctly.',
                'To keep full and accurate records of business activity. The records must be sufficient to enable proper return of income kept in Swaziland in English or siSwati language and must be kept for at least 5 years. Failure to keep proper records or failure to keep them for the necessary five years is an offence.'

            ],

            note: 'NOTE: Section 39 of the Income Tax Order, 1975 provides for the ERS to carry out administrative assessments (i.e. raising estimated assessments) for taxpayers who do not submit income tax returns within the stipulated time and in the manner prescribed.'
        },
        {
            title: 'ERS’S RESPONSIBILITIES TOWARDS SUPPORTING SELF-ASSESSMENT INCLUDE:',
            points: ['Taxpayer Education, Awareness campaigns, mobile support',
                'Issuance of pre-transaction rulings and',
                'Tax audits and investigations.']
        }
    ];

    return (
        <>
             <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner}>

            <ContentDiv>


                <Box sx={FaqContainerStyling}>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Self Assessment
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    <Stack sx={accordionStyling}>
                   
                        {/* <Typography variant="h1" >
                            Self Assessment</Typography> */}
                        {/* question and arrow*/}
                        {questionandanswer.map((item, index) => (
                            <Stack key={index} sx={insideAccordionStyle}>
                                <Stack sx={questionStyling}>
                                    <Typography variant='h6' sx={{ color: '#14142B', fontSize: '1.5rem', textTransform: 'capitalize' }}>{item.question}</Typography>
                                    <Box sx={{ cursor: 'pointer', background: 'cover' }} onClick={() => handleOpen(index)}>
                                        <Image src={rightarrow} width={0} height={0} alt="arrow" />
                                    </Box>
                                </Stack>
                                {isOpen === index && <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />}
                                {/* answer */}
                                <Typography variant='body1' sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: '30px', color: 'rgba(0,0,0,0.8)', pb: '2rem',
                                    display: isOpen === index ? 'block' : 'none'
                                }}>{item.answer}</Typography>
                                {item.note &&  <Typography variant='body1' sx={{
                                    fontSize: '1.1rem',
                                    lineHeight: '30px', color: 'rgba(0,0,0,0.8)', pb: '2rem',
                                   
                                }}>{item.note}</Typography>}
                            </Stack>
                        ))}
                    </Stack>
                </Box>


                {selfAssessmentData.map((item, index) => (
                    <Box key={index} my='1rem'>
                        <Typography variant='h2' sx={{ my: '0.3rem' }} >
                            {item.title}
                        </Typography>
                        <Typography variant='body1' >
                            {item.description}
                        </Typography>
                        {item.points && <ul className='custom-list '>
                            {item.points.map((item, index) => (
                                <div key={index} className='flex gap-1 items-start pb-2'>
                                    <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                    <li className='Pointsformatting'>{item}</li>
                                </div>
                            ))}
                        </ul>}
                        {item.note && <Typography variant='body1' sx={{ fontWeight: 'bold', my: '1.5rem' }} className='Pointsformatting'>
                            {item.note}
                        </Typography>}
                    </Box>
                ))}

            </ContentDiv>
            </PageLayout>
        </>
    )
}

export default SelfAssessment
