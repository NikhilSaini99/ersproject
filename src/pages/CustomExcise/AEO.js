import { Box, Typography } from '@mui/material'
import { Point1, Point2, Point3, Point5, Point6 } from '@/content/AEO-data'

import AEO_table from '@/content/AEO-table'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Banner from "../../assets/images/Eswatini_VAT.png";
import { ContentDiv } from '@/styles/globalStyle'
import Link from 'next/link'
import PageLayout from '../PagesLayout/Layout'
import React from 'react'
import bgimg from "../../assets/images/bg-2.png";

const arrowStyling = {
    color: '#2f2483',
    fontSize: '1rem',
    marginRight: '0.5rem',
}

const AEO = () => {
  return (
    <>
    <PageLayout
        title={"AEO"}
        bannerImg={Banner}
        contentBackground={bgimg}
      >
        <ContentDiv style={{paddingRight:"none !important"}}>
          <Box sx={{ padding: "2rem 0", position: "relative" }}>
            <Typography variant="h1" sx={{ position: "relative !important" }}>
            Authorised Economic Operator (AEO)
              <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
            </Typography>
          </Box>
         <Box>
         <Typography variant="h2" >
                  {Point1.title}
                </Typography>
                {Point1.subpoints.map((item, index) => (
                   
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1'  sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                    
                ))}
                {
                    Point1.subHeading && <Typography variant="h2" >
                        {Point1.subHeading.subHeadTitle}
                    </Typography>
                }
                {Point1.subHeading && Point1.subHeading.subHeadPoints.map((item, index) => (
                   
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1'  sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                   
                ))}
                
                {
                    Point1.bulletPoints && <Typography variant="body1" >
                        {Point1.bulletPoints.bulletTitle}
                        </Typography>
                }
                { 
                    Point1.subHeading.bulletPoints.bulletPointsList.map((item, index) => (
                   
                        <div className='flex gap-1  items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div"  variant='body1'  sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item.bulletPointTitle}
                                <br/>
                                <div style={{ paddingLeft: '20px' }}>{item.bulletPointDesc}</div></Typography>
                        </div>
                    
                ))}


                <Box sx={{ my: "2rem"}}>
                <Typography variant="h2" >
                         {Point2.title}
                  </Typography>
                  <Typography component="div" variant="body1" gutterBottom>
                         {Point2.bulletPoints.bulletPointTitle}
                  </Typography>
                {Point2.bulletPoints && Point2.bulletPoints.bulletPointsList.map((item, index) => (
                   
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1' sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                    ))}

                    {Point2.subHeading && <Typography variant="h2" >{Point2.subHeading.title}</Typography>}
                    {Point2.subHeading && Point2.subHeading.bulletPoints.bulletPointsList.map((item, index) => (
                  
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1'  sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                   ))}
                </Box>

                <Box sx={{ my: "2rem"}}>
                <Typography variant="h2" >
                  {Point3.title}
                </Typography>
                {Point3.subpoints.map((item, index) => (
                  
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1' sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                 
                ))}
                </Box>
                <Box sx={{ my: "2rem" , width:"unset"}}>
                <Typography variant="h2" >
                What are the AEO criteria and requirements
                  </Typography>
                  <AEO_table/>
                </Box>

                <Box sx={{ my: "2rem"}}>
                <Typography variant="h2" >
                  {Point5.title}
                </Typography>
                {Point5 && Point5.bulletPoints.bulletPointsList.map((item, index) => (
                  
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1'  sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                    ))}
                </Box>


                <Box sx={{ my: "2rem"}}>
                <Typography variant="h2" >
                  {Point6.title}
                </Typography>
                {Point6.bulletPoints.bulletPointsList.map((item, index) => (
                   
                        <div className='flex gap-1 items-start' key={index}>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography component="div" variant='body1' sx={{ mb: '1rem' }}
                                className='Pointsformatting'>
                                {item}</Typography>
                        </div>
                  
                ))}
                </Box>
              <Typography variant="body1" sx={{color:"blue"}}><Link href="https://www.ers.org.sz:8000/documents/AuthorisedEconomicOperatorAEOEXTERNALGUIDE&PROCEDURE.docx">AEO External Guide and Procedure - 2022-02-02</Link></Typography>
              <Link href="https://www.ers.org.sz:8000/documents/AuthorisedEconomicOperator-AEOApplicationForm.docx"><Typography variant="body1" sx={{color:"blue"}}>AEO application form</Typography></Link>

         </Box>
          
        </ContentDiv>
      </PageLayout>
</>
  )
}

export default AEO