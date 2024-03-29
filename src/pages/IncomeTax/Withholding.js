import React from "react";
import Head from "next/head";
import { IncomeTaxData } from "@/content/data";
import Header from "@/components/Header"; 
import Banner from "../../assets/images/Withholding_Taxes.jpg";
import Image from "next/image";
import bgimg from '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import { ContentDiv } from "@/styles/globalStyle";
import  defaultTheme  from "../../styles/muiTheme";
import PageLayout from "../PagesLayout/Layout";


export default function Withholding() {

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
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Withholding Taxes
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography variant="h1">
            Withholding Taxes
          </Typography> */}
          
          {IncomeTaxData.map((item, key) => (

            <div key={key}>
               <Typography variant="h2" sx={{ color: defaultTheme.palette.primary.main}}>
                {item.heading1}
                </Typography>
              {/* <button>button</button> */}
              {item.heading2 && <Typography variant="h2" sx={{ color: defaultTheme.palette.primary.main, mt: "1rem"}}>
                {item.heading2}
                </Typography>}

              <div className=" ">

                <Typography variant="h2" >
                  {item.title}
                </Typography>
                <p className="    Pointsformatting">
                  <span className={`tracking-wide Pointsformatting`}>{item.description}{" "}</span>
                </p>
                <p className={`   tracking-wide Pointsformatting`}>{item.description1} </p>
                <p className="  tracking-wide Pointsformatting">{item.description2} </p>

                
                {/* <p className="tracking-wide Pointsformatting">{item.point}</p> */}
                {item.point1&&<div className='flex gap-1 items-start'>
                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                <p className="  tracking-wide Pointsformatting">{item.point}</p>
                </div>}
                
               {item.point1&&<div className='flex gap-1 items-start'>
                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                <p className="  tracking-wide Pointsformatting">{item.point1}</p>
                </div>}

              {item.point2&&<div className='flex gap-1 items-start'>
                  <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                  <p className=" tracking-wide Pointsformatting">{item.point2}</p>
                  </div>}


               {item.point3&&<div className='flex gap-1 items-start'>
                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                <p className="  tracking-wide Pointsformatting">{item.point3} </p>
                </div>}

                <p className="Pointsformatting">{item.line} </p>

              </div>
            </div>
          ))}

        </ContentDiv>
        </PageLayout>
    </>
  );
}



