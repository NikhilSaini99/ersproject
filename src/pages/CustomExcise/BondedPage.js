import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Bonded_warehouses_&_rebate_store.jpg";
import bgimg from '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';
const BondedPage = () => {
    const headingSpacing = {
       color:'black',
       fontWeight:'bold',
       fontSize:'2rem',
       py:'1rem'

    }
    

    const data = [
        {
            section: 'Requirements',
            description: 'An applicant for a bonded warehouse & rebate store license must provide building plans, approved by the local municipality, that reflect the area to be bonded as well as material used in the construction place. Among other requirements, the following are guiding principles for the physical security of the bonded area:',
            points: [
                'The perimeter may be of any material but should not allow any goods to be passed through or thrown over it',
                'Minimum height for the fencing should be two (2) meters.',
                'The building must be structurally sound and safeguarded against fire and burglary',
                'The walls of the building should be of brick, stone or concrete and the roof of slate, tiles or iron',
                'Windows, doors, gates and other means of access must be fully secured with adequate locking devices',
                'The building must be equipped with electrical security measures to prevent illegal delivery and dispatch of goods',
                'The building must comply with health and safety regulations',
                'The applicant must provide office space and other facilities for ERS Officers as may be specified by the Commissioner General.',
                'In order to monitor any unauthorized access the applicant must demonstrate that comprehensive security arrangements are provided. The following will assist in determining this',
                'The perimeter fencing may be electrified in full or on the top',
                'The perimeter must be patrolled by security guards with or without dogs',
                'Surveillance cameras (CCTV) may be installed to operate round the clock',
                'A management system to monitor perimeter tampering should be provided',
                'Lighting of the perimeter should be provided throughout the night, and',
                'The number of security staff per shift, during and after office hours, weekends and public holidays should be specified and maintained.',
                'The applicant must demonstrate fully the processes to be implemented to',
                'Control the movement of persons and vehicles entering and exiting the bonded area',
                'Control the movement of goods as per Customs requirements',
                'Record the movements of persons and vehicles entering and exiting the bonded area.',
                'Maintain a separate area for the safekeeping of goods which have not been released due to detention and seizure must be provided',
                'Sufficient space and facilities relevant to conduct examination and necessary staff must be provided to ensure reliable service for the opening, unpacking, and re-packing of goods',
                'The building must be independent from other buildings that serve different purposes',
                'Entry and exit into and out of the warehouse should not lead to another building apart from the warehouse.',
            ],
        },
    ];

    const applicationRedirect = [
        'The Commissioner General',
        'Eswatini Revenue Service',
        'P.O. Box 5628, Mbabane',
        'or delivered to ERS Head Office for the attention of the Commissioner Customs',
        'Portion 419 of Farm 50, Along MR103',
        'Ezulwini'
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
                    <Typography variant="h1" >
                    Bonded warehouses & rebate store</Typography>


                {data.map((item, index) => (
                    <Box key={index}>
                        <Typography variant='h2' >
                            {item.section}
                        </Typography>
                        <Typography variant='body1' className='mb-4'>{item.description}</Typography>
                        <ul className='custom-list'>
                            {item.points.map((points, index) => (
                                <div key={index} className=' flex gap-2 items-star'>
                                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                <Typography variant='body1' className='pb-2'>{points}</Typography>
                                </div>
                            ))}
                        </ul>
                    </Box>
                ))}

                <Typography variant='body1' >Bonded area operators have to keep the records for a period five (5) years.</Typography>
                <Typography variant='h2' sx={{ mt:"0.5rem"}}>Applications should be directed to:</Typography>

                            <ul className='custom-list'>
                                {applicationRedirect.map((direct,index)=>(
                                    <div key={index} className=' flex gap-2 items-star'>
                                    {/* <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span> */}
                                    <Typography variant='body1'>{direct}</Typography>
                                    </div>
                                ))}
                            </ul>  

            </ContentDiv>
            </PageLayout>
        </>
    )
}

export default BondedPage
