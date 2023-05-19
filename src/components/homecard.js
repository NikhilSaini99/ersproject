import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImHome3 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import calculator from "../assets/icons/calculator.png";


function News({ icon, description, img }) {
  return (
    <>
      {/* <div className=" flex flex-col justify-between relative border-2 border-solid border-[#F5F5F5] h-[360px] w-[320px] group">

        <Image src={img} alt="" className="mt-3" />


        <div className=" flex flex-col group-hover:hidden bg-[#F5F5F5] p-4">
          <h1 className="text-[24px] font-bold ">{title}</h1>
          <h2 className="text-[14px] text-[#2F3192] font-semibold mt-2">{description}</h2>
        </div>


        <div className=" absolute flex flex-col p-4 text-white h-[360px] w-[320px] bg-[rgba(23,25,124,0.8)] opacity-0   group-hover:opacity-100 transition-transform duration-100  ">
          <h1 className="text-[27px] font-bold text-center">{title}</h1>
          <p className="text-base mt-3 leading-[22px]">{p}</p>
          <h2 className="text-lg font-semibold mt-4">{description}</h2>
        </div>

      </div> */}

      {/* <div className="flex main cursor-pointer">
        <div className="basis-1/2 flex flex-col justify-between pt-10">
          <h1 className="text-subColor text-center text-3xl font-semibold head ease-in-out duration-500">
            {title}
          </h1>
          <p className="text-xl px-5 text-center font-medium para ease-in-out duration-500">{description}</p>
          <h3 className="text-white text-base font-medium bg-mainColor py-5 px-10 flex items-center box">
             Know More
            <span>
              <RiArrowDropRightLine className=" ease-in-out duration-500 btn" size={30} />
            </span>
          </h3>
        </div>
        <div className="basis-1/2 bg-[#DAD8CC]">
          <Image
            src={img}
            alt="..."
            className="mx-auto h-96 px-5 py-16 item scale-100 ease-in duration-500"
          />
        </div>
      </div> */}
      {/*  */}
      <div className=" border border-[#E8E8EB] bg-white shadow-lg shadow-zinc-400 ">
        <div className="object-cover relative " >
          <Image src={img} alt="..." className="h-48 w-full" />
          <div className="rounded-2xl absolute -bottom-[76px] left-8 px-8 py-4 bg-white ">
            <Image src={icon} alt="..." className="w-40" />
          </div>
        </div>
        <div className="px-8 pt-14 pb-4 gap-5">
          <p className="mt-5 mb-8 text-base font-normal">{description}</p>
          <Link href={"/customs"}>
            <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
              KNOW MORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

function Resources({ icon, title,link }) {
  return (
    <>
      <Link className="flex flex-col gap-2" href={link}>
        <div className="flex justify-center items-center bg-[#E3E5FF] border-2 border-[#E3E5FF] hover:border-2 hover:border-[#DAD8CC] rounded-full cursor-pointer">
          <Image src={icon} alt="" className="fill h-7 w-7 m-4" />
        </div>
        <h1 className="text-center text-sm font-medium">{title}</h1>
      </Link>
    </>
  );
}





function Centers({ title, description, contact }) {
  return (
    <>
         <Stack direction={'column'} sx={{justifyContent:'space-between'}} spacing={1}>
        <Typography variant="h1" sx={{ fontSize: {xs:'0.8rem',xl:'1rem'}, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Stack direction={'row'} spacing={1}>
          <HomeIcon sx={{fontSize:{xs:'1.2rem',lg:'1.65rem'}}}/>
          <Typography variant="subtitle2" sx={{fontSize:{xs:'0.7rem',lg:'0.8rem'}}}>{description}</Typography>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <BsTelephoneFill className="sm:text-1xl xl:text-xl"/>
          <Typography variant="subtitle2" sx={{fontSize:{xs:'0.7rem',lg:'0.8rem'}}}>{contact}</Typography>
        </Stack>
        <Stack direction={'row'}>
          <Button variant="contained" href={'/'} sx={{
            fontSize:{xs:'0.6rem',lg:'0.8rem'},
            background: 'black', borderRadius: '50px',
            fontWeight: 'light', marginTop: '1rem', p: { xs: '0.5em 0.8rem', xl: '0.5em 1.5rem' },
            '&:hover': { background: 'black' }
          }}>Get Direction</Button>
        </Stack>
      </Stack>

    </>
  );
}

export { News, Resources, Centers };
