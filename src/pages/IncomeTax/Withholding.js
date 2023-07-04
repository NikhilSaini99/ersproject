import React from "react";
import Head from "next/head";
import { IncomeTaxData } from "@/content/data";
import Header from "@/components/Header"; 
import Banner from "../../assets/images/bg2.jpg";
import Image from "next/image";
import bgimg from '../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from "@mui/material";
import Footer from "@/components/Footer";


export default function Withholding() {

  const arrowStyling = {
    color: '#2f2483',
    fontSize: '1rem',
    marginRight: '0.5rem',
}


  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-512 w-full object-fill" width="100%" height="100%" style={{ height: '412px' }} />
      </section>

      <Box sx={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover', backgroundAttachment: 'fixed'
      }} >


        <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '8rem', lg: '10rem,', xl: '14rem' }, py: '2rem' }}>

          <h1 className="text-4xl pt-14 mb-4 font-bold text-primaryColor">
            Withholding Taxes
          </h1>
          {/* <div className="flex flex-col gap-y-4 float-right clear-right w-20 absolute right-0"
            style={{ marginRight: 'calc((12.5% + 2px)*2*-1)', top: '1.5rem' }}>
            <div className="border-t border-black font-bold"></div>
            <h6 className="font-semibold">DOWNLOADS</h6>
            <a href="_target" className="w-5 text-normalBlue hover:underline">
              <div className="flex flex-row gap-x-2" style={{ width: '75%' }}>
                <Image src={downloadIcon} className="fill-current" alt="downloadIcon" width="100%" height="100%" />
                <p className="">Article</p>
              </div>
            </a>
          </div> */}

          {IncomeTaxData.map((item, key) => (

            <div key={key}>
              <h1 className=" text-2xl text-mainColor  mb-8 Pointsformatting font-bold">
                {item.heading1}
              </h1>
              {/* <button>button</button> */}
              <h1 className=" text-3xl text-mainColor mb-2 Pointsformatting font-bold">
                {item.heading2}
              </h1>

              <div className=" ">

                <p className={`text-xl pb-2 Pointsformatting font-bold`}>
                  {item.title}
                </p>
                <p className="    Pointsformatting">
                  <span className={`tracking-wide Pointsformatting`}>{item.description}{" "}</span>
                </p>
                <p className={`   tracking-wide Pointsformatting`}>{item.description1} </p>
                <p className="  tracking-wide Pointsformatting">{item.description2} </p>

                
                
                <p className="tracking-wide Pointsformatting">{item.point}</p>
                
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

        </Box>
      </Box>
      <Footer />
    </>
  );
}


