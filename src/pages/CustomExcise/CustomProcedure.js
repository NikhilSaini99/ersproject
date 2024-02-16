import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Customs_Procedure_Codes.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bgimg from '../../assets/images/bg-2.png'
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const CustomProcedure = () => {

    const headingSpacing = {
        margin: '1rem 0 0.5rem 0',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color:'black',
        py:'0.8rem'
    }

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    const data = [
        {
            section: '1. DEFINITION',
            content: 'All customs declarations are made by <a href="http://102.36.181.13:8000/documents/CustomsProcedueCodes-CompletionofSAD500Form.pdf" style="color:blue">completion of an SAD500</a> in which all information pertinent for effective processing of that declaration is provided by the importer/declarant. Part of that information is the <a href="http://102.36.181.13:8000/documents/CustomProcedureCodes-CustomProcedureCodes(CPCs).pdf" style="color:blue">Customs Procedure Codes (CPCs)</a> which when correctly used inform the ERS on what the goods are being imported as well as the regime under which Customs will treat it.\nAdditional codes are denoted by the last 3-digit code in the 7-digit Customs Procedure Codes (CPC). A complete CPC may be 4000 444 where: 4000 is the extended code and 444 is the additional code.\nWhen selected, the interpretation would be goods imported for home use (Extended Code 4000) where the VAT payable would be deferred (Additional Code 444).',
        },
        {
            section: '2. PURPOSE',
            content: 'Additional codes in the CPC are designed to segregate Customs clearance procedures for imported, exported or in transit goods. They are meant to cater for special national concessions such as VAT exemptions, Customs rebates, suspense procedures, special arrangements and zero rated goods for VAT purposes etc.',
        },
        {
            section: '3. LEGAL IMPLICATIONS',
            content: 'The choice of an additional code should not be based solely on the explanatory notes provided below. A declarant has to note that each procedure and additional code has to be backed by provisions of legislation in Eswatini.\nAccordingly, the selection of an additional code constitutes an integral part of a declaration to Customs in terms of Section 13 as read with Section 39 of the Customs and Excise Act, 1971 and other applicable legislation.\nDeclarants, importers and exporters are therefore advised to familiarize themselves with all provisions of legislation impacting on each CPC and specific additional codes that they select in declaring goods on the SAD 500.\nNote: In all Extended Procedures the selection of a general Additional Code 000 denotes that no relief from duties and taxes payable is applicable. That is to say all applicable Customs Duties (unless the goods are admissible Customs duty free) as per the Tariff Handbook and / or VAT are payable upon entry at the port of clearance. Click HERE to download the full Customs Procedure Codes Explanatory Notes.',
        },
    ];


    return (
        <>
           <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Customs Procedure Codes
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                    Customs Procedure Codes</Typography> */}


                {data.map((item, index) => (
                    <Box key={index} sx={{mb:"0.5rem"}}>
                        <Typography variant='h2'  >
                            {item.section}
                        </Typography>
                        {item.content.split('\n').map((content, index) => (
                            <div key={index} className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                            <Typography key={index} variant='body1' className='pb-2' dangerouslySetInnerHTML={{ __html: content }}>
                            </Typography>
                            </div>
                        ))}
                    </Box>
                ))}
                <Typography variant='body1'  className=' pb-2'>Click here to download the full Customs Procedures Codes Explanatory notes</Typography>
                
            </ContentDiv>
            </PageLayout>
        </>
    )
}

export default CustomProcedure
