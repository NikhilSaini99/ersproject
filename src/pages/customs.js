import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NewsCard } from "@/components/media";
import Banner from "../assets/images/customs-img.jpg";
import Asycuda from "../assets/images/asys.jpg";
import Advance from "../assets/images/asys2.jpg";
import Browse from "../assets/images/tariff-browse.jpg";
import Duty from "../assets/images/tariff-duty.jpg";
import Search from "../assets/images/tariff-search.jpg";
import Trade from "../assets/images/trade-portal.png"
import education from '../assets/icons/education.png'


import { Box, Grid, Paper, Stack, Typography } from "@mui/material";


export default function Customs() {
  const [isHover, setisHover] = useState(-1);

  function handleHoverEffect(index) {

    setisHover(index);
  }

  function handleHoverExit() {
    setisHover(-1);
  }

  const CustomData = [
    {
      img: education,
      title: "Asycuda World",
      description:
        "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: education,
      title: "Advance Rolling",
      description:
        "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: education,
      title: "Tariff",
      description:
        "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: education,
      title: "Tariff Browse",
      description:
        "The Tariff Browse function is used to easily browse through the Customs Tariff by section and chapter and view all the classification notes.",
    },
    {
      img: education,
      title: "Duty Estimator",
      description:
        "Estimate Customs and Excise Duties using the Duty Estimator. This function removes the need for any manual calculations and allows for more accurate costing.",
    },
    {
      img: education,
      title: "Tariff Search",
      description:
        "The Tariff Search allows for targeted way of searching by tariff code. Tariff classification of goods is one of the more complex issues under the Customs and Excise Act.",
    },
  ];

  return (
    <>
      <Head>
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section className="mt-5" style={{ marginBottom: '8rem' }}>
        <div>
          <h1 className="text-subColor text-center text-5xl font-bold uppercase">
            e-Customs
          </h1>
          <div className="border w-[270px] border-yellowish mt-1 mx-auto"></div>
        </div>

        <Box sx={{ width: "100%", position: 'relative' }}>
          <Stack sx={{ width: { xs: 'fit-content' } }}>
            <Image src={Banner} width={'100%'} height={'auto'} alt="" style={{ width: '2000px' }} />
          </Stack>
          <Box sx={{ position: 'absolute', background: 'white', width: '80%', height: { xs: '40%', lg: '20%', xl: '25%' }, bottom: { xs: '-30%', lg: '-15%', xl: '-15%' }, left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '25px', p: '2rem' }}>
            <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', color: '#2f2483', textAlign: 'center' }}>eCustoms Tariff for Eswatini</Typography>
            <Typography variant="body1" sx={{ color: 'grey', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum libero nostrum, delectus quis in non similique ab doloremque reiciendis incidunt ipsum porro iure, omnis ad provident doloribus sequi. Aperiam, possimus?</Typography>
          </Box>
        </Box>

      </section>

      {/*-----------------------Customs---------------------*/}
      <Box sx={{ width: { xs: '96%', md: '98%', lg: '78%', xl: '70%' }, margin: { xs: '0 auto' } }}>
        <Grid container gap={4}>
          {CustomData.map((item, index) => (
            <Paper elevation={20} key={index} sx={{ width: { xs: '300px', xl: '422px' } }}>
              <Grid item xs={12} md={12} sx={{
                position: 'relative', p: '2rem', transition: '0.5s',
                ...(isHover === index && {
                  transition: '0.5s',
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(244, 196, 2) 0px 0px 0px 2px'
                }),

              }}
                onMouseEnter={() => handleHoverEffect(index)} onMouseLeave={handleHoverExit}>
                <Box sx={{
                  position: 'absolute', width: '80px', height: '80px', background: 'grey', transition: '0.5s', opacity: '0.5',
                  top: '0', right: '0', borderRadius: '0px 0px 0px 120%', ...(isHover === index && {
                    transition: '0.5s',
                    background: '#f4c402',
                    opacity: 1
                  })
                }}></Box>
                <Stack sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: '1.5' }}>
                  <Box >
                    <Image src={item.img} alt="item.title" width={'100%'} height={'auto'}
                      style={{ color: 'yellow' }} />
                  </Box>
                  <Typography variant="h1" sx={{
                    fontSize: '1.5rem', fontWeight: 'bold', color: '#003b49', transition: '0.5s',
                    ...(isHover === index && {
                      transition: '0.5s',
                      color: '#f4c402'
                    })
                  }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'light', color: 'grey' }}>
                    {item.description.substring(0, 50)}
                  </Typography>
                </Stack>
              </Grid>
            </Paper>
          ))}

        </Grid>
      </Box>
      {/*-----------------------Customs ENDS ---------------------*/}
      <section className="m-14">
        <h1 className="text-2xl text-subColor text-center font-semibold uppercase">
          New! HS2022 Amendments are available.
        </h1>

        <div className="px-3 my-5">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            Please click on the links below to access the documentation :-
          </h1>
          <ul className="grid grid-cols-2 gap-x-32 list-disc text-mainColor text-[15px] px-10 leading-7 font-normal">
            <li className="hover:underline cursor-pointer">
              SACU Correlation Table
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 1
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 1 Legal Notes
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 2A
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 2B
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 3D
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 1 Part 3E
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 3
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 4
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 5
            </li>
            <li className="hover:underline cursor-pointer">
              Schedule 6
            </li>
          </ul>
        </div>

        <div className="px-3">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            Please click on the links below to access the WCO documentation :-
          </h1>
          <ul className="grid grid-cols-2 gap-x-32 list-disc text-mainColor text-[15px] px-10 leading-7 font-normal">
            <li className="hover:underline cursor-pointer">
              WCO HS2022 Background
            </li>
            <li className="hover:underline cursor-pointer">
              WCO HS2022 Correlation Tables
            </li>
          </ul>
        </div>

        <div className="my-10 flex gap-20 px-8 text-black text-justify text-base leading-7">
          <p>
            All import and export commercial transactions require commodities on
            Customs declarations to be classified according to an appropriate
            tariff heading. The tariff classification code is directly linked to
            the rate of duty payable on that commodity. Classification operates
            as part of the international Harmonised Commodity and Coding System,
            under the WCO Harmonised System Convention.
          </p>
          <p>
            In cases where the tariff classification of goods is complex, i.e.
            the goods could easily be classified under two tariff headings or if
            there is no clearly identifiable appropriate tariff heading, it is
            the duty of the importer to approach the ERS and apply for a written
            tariff determination. To contact ERS please approach the ERS contact
            centre, the contact centre information can be found.
          </p>
        </div>

        <div className="px-3 my-5">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            The latest version of the full tariff book and schedules to the
            tariff can be downloaded from the links below :-
          </h1>

          <div className="flex items-center">
            <ul className="list-disc text-mainColor text-[15px] px-10 leading-7 font-normal">
              <li className="hover:underline cursor-pointer">
                Schedule 1 Part 1 - Chapters 1 to 99 of the ERS Tariff Book
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 1 Part 2 - Specific and Ad V              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 1 Part 5 - Fuel and Road Accident Fund Levy
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 1 Part 7 - Health Promotion Levy
              </li>
              <li className="hover:underline cursor-pointer">
                ATL - Alcohol and Tabacco Levy
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 2 - ​Anti-dumping, Countervailing and Safeguard Duties
                on Imported Goods{" "}
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 3 - ​​Industrial Rebates of Customs Duties
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 4 - ​​​General Rebates of Customs Duties and Fuel Levy
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 5 - ​Specific Drawbacks and Refunds of Customs Duties
                and Fuel Levy
              </li>
              <li className="hover:underline cursor-pointer">
                Schedule 6 - ​​Refunds and Rebates of Excise Duties and Fuel
                Levy
              </li>
            </ul>
            <div className="mx-auto">
              <Link href={"/FAQ"}>
                <button className="text-white hover:bg-opacity-75 bg-black tracking-wider border hover:border-black rounded-lg py-2 px-6">
                  <p className="text-sm leading-4 font-medium">Frequently Asked Questions</p>
                  <h1 className="text-3xl font-bold">(FAQs)</h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-14">
        <div className="border-t border-black mx-5 py-8 flex items-center gap-14 text-base font-normal leading-7 text-black">
          <Image src={Trade} alt="..." className="w-96" />
          <p>The Trade Information Portal provides a single platform to create transparency on Trade laws, Non-tariff measures and procedures for trading in Eswatini.</p>
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
