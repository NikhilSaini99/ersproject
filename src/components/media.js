import React from "react";
import Link from "next/link";
import Image from "next/image";
import Twitter from "../assets/images/twitter-page.jpg";
import Instagram from "../assets/images/insta-page.jpg";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

function Media() {
  return (
    <>
      <section>
        <div className="bg-white px-28 py-10">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <div>
              <h1 className="text-3xl font-medium text-mainColor">Facebook</h1>
              <div className=" border w-24 border-yellowish mt-1"></div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEswatiniRevenueService&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width={"344"}
                height={"450"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem'
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="my-10"
              ></iframe>
              <Link
                href="https://www.facebook.com/EswatiniRevenueService"
                target="_blank"
              >
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                  FOLLOW US
                </button>
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-medium text-mainColor">Twitter</h1>
              <div className="border w-[70px] border-yellowish mt-1"></div>
              {/* <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEswatiniRevenueService&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width={"344"}
                height={"450"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                }}
                scrolling="yes"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="mt-5 mb-10"
              ></iframe> */}
              <Image
                src={Twitter}
                alt=""
                className="my-10"
                width={"344"}
                height={"450px"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem'
                }}
              />
              <Link href="https://twitter.com/AECOM" target="_blank">
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                  FOLLOW US
                </button>
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-medium text-mainColor">Instagram</h1>
              <div className="border w-24 border-yellowish mt-1"></div>
              {/* <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FEswatiniRevenueService&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width={"344"}
                height={"450"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="mt-5 mb-10"
              ></iframe> */}
              <Image
                src={Instagram}
                alt=""
                className="my-10"
                width={"344"}
                height={"450px"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem'
                }}
              />
              <Link href="https://www.instagram.com/aecom" target="_blank">
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                  FOLLOW US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NewsCard({ url, img, title, date, description }) {
  return (
    <>
      {/* OLD CODE  */}
      {/* <Link href={`${url}`}>
      <div className="flex flex-col p-6 gap-4 hover:shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
          <div className="object-cover">
            <Image src={img} alt="..." className="mx-auto" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h1 className="inline-flex text-2xl leading-7 font-medium text-black hover:text-subColor hover:underline">
              {title}
            </h1>
            <h3 className="text-[#969fb0] text-base font-normal">{date}</h3>
            <p className="text-base leading-6 font-normal text-justify">
              {description}
            </p>
          </div>
      </div>
        </Link> */}

      {/* NEW ONE BELOW THIS */}

      <Paper elevation={18} sx={{margin:'0 5rem 4rem auto',width:'60%'}}>
        <Stack sx={{ flexDirection: 'column' }}>
        <Box sx={{'&:hover':{
          opacity:'0.9',
          cursor:'pointer', 
        }}}>
          <Image src={img} alt={title} style={{width:'100%',height:'100%',display:'block',}}/>
          </Box>
          <Stack sx={{flexDirection:'column',p:'3rem',gap:'0.8rem'}}>
          <Typography variant="h4" sx={{"&:hover":{
            textDecoration:'underline',color:'#f4c402'
          }}}>
           <Link href={`${url}`}>{title}</Link>
          </Typography>
          <Typography variant="subtitle2" sx={{color:'grey'}}>
            {date}
          </Typography>
          <Typography variant="body1" sx={{color:'grey'}}>
            {description}
          </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

function GallaryCard({ img, group, date, description }) {
  return (
    <>
      {/* <div className="bg-white cursor-pointer">
        <div className="object-cover">
          <Image
            src={img}
            alt="..."
            className="h-60 hover:brightness-[.25] ease-in-out duration-500"
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-4">
          <h1 className="inline-flex text-[22px] leading-7 font-semibold text-black hover:text-subColor duration-400">
            {group}
          </h1>
          <h3 className="text-base text-[#969fb0] font-normal">
            Published On {date}
          </h3>
          <p className="text-[15px] font-normal text-justify">{description}</p>
        </div>
      </div> */}

      <div className="flex flex-col justify-between relative group cursor-pointer">
        <div className="overflow-hidden object-cover">
          <Image
            src={img}
            alt=""
            className="h-80 scale-100 group-hover:scale-110 ease-in-out duration-500 group-hover:brightness-50"
          />
        </div>

        <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-500  bottom-0 text-center">
          <h3 className="text-lg text-white font-medium mx-4">
            Published On {date}
          </h3>
          <div className="flex flex-col gap-2 px-6 py-3 text-white bg-mainColor">
            <h1 className="text-[22px] leading-[22px] tracking-wide font-bold">{group}</h1>
            <h2 className="text-sm leading-5 tracking-normal font-normal text-justify">{description}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export { Media, NewsCard, GallaryCard };
