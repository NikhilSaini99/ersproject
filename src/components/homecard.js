import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImHome3 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


import CalculateIcon from '@mui/icons-material/Calculate';
import TableChartIcon from '@mui/icons-material/TableChart';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import BarChartIcon from '@mui/icons-material/BarChart';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const Icons = () => {
  const iconStyling = {
    transition:'transform 0.5s',
    fontSize: '2rem', color: '#2F3192', backgroundColor: '#E3E5FF',  width: '80px', height: '80px', p: '18px', '&:hover': {
      backgroundColor: '#2F3192', color: '#E3E5FF', transform:'scale(1.2)' , transition:'transform 0.5s',
    },
    borderRadius: '50% 0 50% 0',
  }
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-center gap-4 xs:gap-6 md:gap-12 xl:gap-20 2xl:gap-24 mt-6">
       
          <Link href="/Calculator" className="flex flex-col gap-2">
           <CalculateIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Tax Calculator
            </p></Link>
      
        
          <Link href="/TaxTables" className="flex flex-col gap-2"> 
          <TableChartIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Tax Tables
            </p></Link>
       
    
          <Link href="https://etax.sra.org.sz/" className="flex flex-col gap-2"> 
          <CurrencyPoundIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
            eTax
            </p></Link>
    
   
          <Link href="/TaxItemTable" className="flex flex-col gap-2">
           <BarChartIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Item Codes
            </p></Link>
   
      
          <Link href="/Hotline" className="flex flex-col gap-2">
          <ConnectWithoutContactIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Hotline
            </p></Link>
  
    
          <Link href="/FAQ" className="flex flex-col gap-2">
          <LiveHelpIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              FAQs
            </p></Link>
  
    
          <Link href="http://www.sra.org.sz/documents/1619530285.pdf" className="flex flex-col gap-2">
          <TrendingUpIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Business
            </p></Link>
     
     
          <Link href="https://www.ers.org.sz/documents/1493283598.pdf" className="flex flex-col gap-2">
          <FlightTakeoffIcon sx={iconStyling} />
            <p className="text-center text-sm font-medium">
              Travelling
            </p></Link>
     
      </div>
    </>
  )
}


function News({ icon, description, img }) {
  return (
    <>
        <div className=" border border-[#E8E8EB] bg-white shadow-lg shadow-zinc-400 ">
        <div className="object-cover relative " >
          <Image src={img} alt="..." className="h-48 w-full" />
          <div className="rounded-2xl absolute -bottom-[76px] left-8 px-8 py-4 bg-white ">
            <Image src={icon} alt="..." className="w-40" />
          </div>
        </div>
        <div className="px-8 pt-14 pb-4 gap-5 flex flex-col ">
          <p className="mt-5 mb-8 text-base font-normal checking">{description}</p>
          <Link href={"/customs"}>
            <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}


  



function Centers({ title, description, contact }) {
  return (
    <>
      <Stack direction={'column'} sx={{ justifyContent: 'space-between' }} spacing={1}>
        <Typography variant="h1" sx={{ fontSize: { xs: '0.8rem', xl: '1rem' }, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Stack direction={'row'} spacing={1}>
          <HomeIcon sx={{ fontSize: { xs: '1.2rem', lg: '1.65rem' } }} />
          <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.7rem', lg: '0.8rem' } }}>{description}</Typography>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <BsTelephoneFill className="sm:text-1xl xl:text-xl" />
          <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.7rem', lg: '0.8rem' } }}>{contact}</Typography>
        </Stack>
        <Stack direction={'row'}>
          <Button variant="contained" href={'/'} sx={{
            fontSize: { xs: '0.6rem', lg: '0.8rem' },
            background: 'black', borderRadius: '50px',
            fontWeight: 'light', marginTop: '1rem', p: { xs: '0.5em 0.8rem', xl: '0.5em 1.5rem' },
            '&:hover': { background: 'black' }
          }}>Get Direction</Button>
        </Stack>
      </Stack>

    </>
  );
}

export { News, Icons, Centers };
