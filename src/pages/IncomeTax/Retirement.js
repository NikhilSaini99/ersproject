import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Retirement-and-Redundancy.png";
import bgimg from  '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const Retirement = () => {
    const data = [
        {
            section: 'Section 12(1)(j)(iv) of the Income Tax Order provides an exemption for any lump sum of up to E60 000 where such amount has been gained or is due as a result of the termination of an employment contract. The exemption is available when the termination of the employee’s service is due to',
            points: [
                'The employer having ceased carrying on trade in respect of which such employee was employed',
                'Such employee having become redundant in consequence of the employer having effected a general reduction or reduction of a particular class of employees',
                'The employee having reached the retiring age or the termination of employment of such is due to ill-health or infirmity'
            ]
        },
        {
            section: 'The situation in 1(a) may occur as a result of the closing down of the business or its liquidation',
        },
        {
            section: 'The effect of the provision that when the person’s redundancy results from a reduction of employees, 1(b), that reduction must be - n',
            points: [
                'A general reduction',
                'A reduction of a particular class of employees.'
            ]
        },
        {
            section: 'In granting the exemption on lump sum payments arising as a result of retrenchment,  the retrenchment must be part of a general reduction of staff or a reduction in the complement of a particular class of employees. Whether a redundancy has been effected or not in terms of the foregoing is a question of fact which can be substantiated by the production of relevant proof to that effect.',
        },
        {
            section: 'In the case of redundancy coming as a result of an employer ceasing operation or the employer having effected a general reduction or reduction of a particular class of employees, the following information must be provided to the ERS',
            points: [
                'The number of employees being made redundant',
                'The occupations and remunerations of the employees affected',
                'The reasons for the redundancies',
                'The date when the redundancies would take effect',
                'A copy of the letter of approval submitted to the Labour Commissioner, sanctioning the redundancies where the termination of employment affects five or more employees.'
            ]
        },
        {
            section: 'The exemption extends to all lump payments, as defined in Section 7(c) of the Income Tax Order being a result of redundancy or normal retirement (including early retirement) or retirement on medical grounds',

        },
        {
            section: 'These provisions are applied to income received and accrued to the employee.'
        },
        {
            section: 'There are three instances that give rise to the conferral of the E60 000 exemption.',
            points: [
                'Where the employer ceases to trade.',
                'Where the redundancy is as a result of a general reduction or reduction of a particular class of employees.',
                'The employee reaches the retiring age or the termination of employment is due to ill-health or infirmity.'
            ]
        },
        {
            section: (
                <>
                    In terms of the proviso to section 12(1)(j)(iv) any amount in excess of E60 000 is taxable at the special
                    <Link href="/IncomeTax/RatesandThres"><b style={{color:'blue'}}> concessionary rates </b></Link>
                     prescribed in Part III of the Third Schedule to the Income Tax Order, 1975, as amended.
                </>
            ),
        }
    ];

    
    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem'
    }


    return (
        <>
            <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>
            <ContentDiv>

            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Retirement and Redundancy
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                {/* <Typography variant="h1" >
                    Retirement and Redundancy </Typography> */}
                    <Box sx={{pl:{xs:'1.3rem', xl:'0'}}}>
                <ol style={{ listStyleType: 'decimal' }}>
                    {data.map((item, index) => (
                        <li key={index} className='Pointsformatting mb-2'>{item.section} 
                            {item.points && <ul className='custom-list'>
                                {item.points.map((item, index) => (
                                    <div key={index} className='flex gap-1 items-start pb-2'>
                                    <span className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                    <li className='Pointsformatting'>{item}</li>
                                    </div>
                                ))}
                            </ul>}
                        </li>
                    ))}
                </ol>
                </Box>
            </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Retirement
