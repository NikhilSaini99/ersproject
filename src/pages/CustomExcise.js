import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "../assets/images/Eswatini_Customs.png";
import bgimg from "../assets/images/bg-1.png";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CustomExcise() {

  const points = [
    'To collect the revenues due - Enforcement of controls to protect society',
    'Prohibitions, restrictions and regulatory (for example, narcotics, unlicensed medicines, arms and ammunitions, pornography etc.)',
    'To identify and interdict illegitimate trade (for example counterfeit or substandard goods; trade in endangered species - CITES obligations)',
    'Collection of trade statistics',
    'Trade facilitation'
  ]


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

      <Box sx={{ position: "relative", width: "100%", height: '30rem' }}>
         
         <Image
             src={Banner}
             alt="about_us"
             width={0}
             height={0}
             style={{
                 width: "100%", height: "100%",
                 objectFit: 'cover'
             }}
         />
       
     </Box>


      <Box sx={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover', backgroundAttachment: 'fixed'
      }} >

        <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '10rem,', xl: '15rem' }, py: '2rem' }}>
          <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
            Eswatini Customs
          </Typography>

          <Typography variant="body1" className="Pointsformatting pb-2">
            Eswatini is a member of the oldest Customs Union in the World; established in 1910 the Southern African Customs Union (SACU) consists of what is now Eswatini, Lesotho, Botswana, Namibia and South Africa. Importations between these countries are free of Customs and Excise duty with all importations to the Union being at a Common Customs external tariff. The revenue collected from those duties is pooled and shared under an agreed mechanism. Eswatini is also a member of both SADC and COMESA and goods originating from those countries also enjoy preferential Tariff rates. Full details of preferences and international trade agreements can be found here. Customs in Eswatini is administered by the ERS Customs and Excise Department in accordance with the Customs and Excise Act of 1971. The Department performs key functions for the countrys development including:
          </Typography>

          {points.map((item, index) => (
            <div key={index} className="flex gap-1 items-start pb-2">
              <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
              <Typography variant="body2" className="Pointsformatting ">{item}</Typography>
            </div>
          ))}

          <Typography variant="body1" className="Pointsformatting py-4">
          Goods imported into Eswatini from outside of the Southern African Customs Union (SACU) are liable to Customs duty and for some classes of goods also Excise duty. Value Added Tax is also payable on imports both from SACU and elsewhere. Information for businesses importing to, or exporting from, Eswatini can be found here. Travellers entering Eswatini must make a declaration at one of our 14 border posts/points of entry. There also are (rebate) allowances for bona fide personal importations Excise duty is also payable on a small range of domestically produced goods (alcoholic drinks, cigarettes etc.).
          </Typography>
        </Box>
      </Box>
      <Footer />

    </>
  );
}
