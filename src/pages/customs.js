import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NewsCard } from "@/components/media";
import Banner from "../assets/images/eCustoms_Tariff.jpg";
import Asycuda from "../assets/images/ASYCUDA_LOGO.png";
import Advance from "../assets/images/Advance_Ruling_Logo.png";
import Browse from "../assets/images/TariffBrowseIcon.jpg";
import Duty from "../assets/images/TariffDutyEstimatorIcon.jpg";
import Search from "../assets/images/TariffSearchIcon.jpg";
import Trade from "../assets/images/trade-portal.png";
import education from "../assets/icons/education.png";


import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { customData } from "@/content/data";

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
      id: 1,
      img: Asycuda,
      title: "Asycuda World",
      description:
        "The Automated System for Customs Data (ASYCUDA) is a computerized customs management system that covers most foreign trade procedures. It handles manifests and customs declarations, along with accounting, transit and suspense procedures.",
        path: 'http://asyw.ers.org.sz/'
    },
    {
      id: 2,
      img: Advance,
      title: "Advance Ruling",
      description:
        "ERS has implemented Advance Rulings in terms of the WTO Agreement on Trade Facilitation (TFA). Advance Rulings allow trade to apply for an official written decision by ERS prior to import or export on Tariff Classification, Origin or Valuation.",
        path: '/AdvanceRuiling',
    },

  ];

  const CustomData2 = [
    {
      id: 4,
      img: Browse,
      title: "Tariff Browse",
      description:
        "The Tariff Browse function is used to easily browse through the Customs Tariff by section and chapter and view all the classification notes. If you have an idea of the section and chapter but are not sure of the actual tariff code, the Tariff Browse function will be most useful. It is kept up to date in real-time and removes the requirement to update a paper-based version of a Tariff book and the associated costs.",
        path:'./eCustoms/TarrifBrowse'
    },
    {
      id: 5,
      img: Duty,
      title: "Duty Estimator",
      description:
        "Estimate Customs and Excise Duties using the Duty Estimator. This function removes the need for any manual calculations and allows for more accurate costing. Enter the relevant tariff code, select the country of origin (manufacture) and the system will generate the estimated duties based on the date you select. It also allows you to look at future dates when tariff code amendments come into effect and calculates the estimated duties which will be applicable.",
         path:'./eCustoms/DutyCalculator'
    },
    {
      id: 6,
      img: Search,
      title: "Tariff Search",
      description:
        "The Tariff Search allows for a more targeted way of searching by keyword or tariff code. You can search by specific tariff codes or keywords and can access the relevant information at the click of a button.",
        path:'./eCustoms/TarrifSearch'
    },
  ];

  const BoxWithAnimation = ({ dataArr, span }) => {
    return (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        {dataArr.map((item, index) => (
          <Box
            key={index}
            gridColumn={`span ${span}`}
            component={Paper}
            elevation={20}
            p={4}
            sx={{ position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "80px",
                height: "80px",
                background: "grey",
                transition: "0.5s",
                opacity: "0.5",
                top: "0",
                right: "0",
                borderRadius: "0px 0px 0px 120%",
              }}
            ></Box>
            <Stack
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Box>
                <Image src={item.img} alt={item.alt} width={150} height={150} />
              </Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold", 
                  color: "#003b49",
                }}
              >
               <Link href={`${item.path}`}>{item.title}</Link>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "light", color: "grey" }}
              >
                {item.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <>
      <Head>
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section className="mt-5" style={{ marginBottom: "8rem" }}>
        <div>
          <h1 className="text-subColor text-center text-5xl font-bold uppercase">
            e-Customs
          </h1>
          <div className="border w-[270px] border-yellowish mt-1 mx-auto"></div>
        </div>

        <Box sx={{ position: "relative", mt: "1rem" }}>
          <Stack
            sx={{
              position:"relative",
              width: { xs: "80%" },
              height: { xs: "25rem", lg: "30rem" },
              margin: "0 auto",
            }}
          >
            <Image
              src={Banner}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="images"
            />
          </Stack>
          <Box
            sx={{
              position: "absolute",
              background: "white",
              width: "62%",
              height: { xs: "40%", lg: "20%", xl: "25%" },
              bottom: { xs: "-30%", lg: "-12%", xl: "-15%" },
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "10px",
              p: "2rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {xs:"2rem", md:"2rem", xl:"3rem"},
                fontWeight: "bold",
                color: "#2f2483",
                textAlign: "center",
              }}
            >
              eCustoms Tariff for Eswatini
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "grey", textAlign: "center", }}
            >
             The following page provides access to the Automated System for Customs Data (ASYCUDA) for computerized customs management system and Advance Ruling for seeking prior decision by ERS for import and export purposes.
            </Typography>
          </Box>
        </Box>
      </section>

      {/*-----------------------Customs---------------------*/}

      <Box
        sx={{
          width: { xs: "100%", md: "98%", lg: "80%", xl: "70%" },
          margin: { xs: "0 auto" },
        }}
      >
        <BoxWithAnimation dataArr={CustomData} span={6}/>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "98%", lg: "80%", xl: "70%" },
          margin: { xs: "0 auto" },
        }}
      >
        <Divider sx={{ my: { xs: "3rem", lg: "6rem", xl: "8rem" } }} />
        <BoxWithAnimation dataArr={CustomData2} span={4}/>
      </Box>

      {/*-----------------------Customs ENDS ---------------------*/}
      <section className="m-14 w-4/5 mx-auto">
        <h1 className="text-2xl text-subColor text-center font-semibold uppercase">
          New! HS2022 Amendments are available.
        </h1>

        <div className=" my-5">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            Please click on the links below to access the documentation :-
          </h1>
          <ul className="grid grid-cols-2 gap-x-32 text-mainColor text-[15px] px-4 leading-7 font-normal">
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/SACUCorrelationTable.pdf">SACU Correlation Table</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part1.pdf">Schedule 1 Part 1</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part1LegalNotes.pdf">Schedule 1 Part 1 Legal Notes</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part2A.pdf">Schedule 1 Part 2A</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part2B.pdf">Schedule 1 Part 2B</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part3D.pdf">Schedule 1 Part 3D</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part3E.pdf">Schedule 1 Part 3E</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule3.pdf">Schedule 3</a> 
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule4.pdf">Schedule 4</a> 
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/">Schedule 5</a> 
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "http://website.ers.org.sz:8000/documents/Schedule6.pdf">Schedule 6</a>
            </li>
          </ul>
        </div>

        <div className="">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            Please click on the links below to access the WCO documentation :-
          </h1>
          <ul className="grid grid-cols-2 gap-x-32  text-mainColor text-[15px] px-4 leading-7 font-normal">
            <li className="hover:underline cursor-pointer starclass">
            <a href = "https://www.wcoomd.org/en/media/newsroom/2020/january/wco-has-published-accepted-amendments-to-hs-2022">WCO HS2022 Background</a>
            </li>
            <li className="hover:underline cursor-pointer starclass">
            <a href = "https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2022-edition/correlation-tables-hs-2017-2022.aspx">WCO HS2022 Correlation Tables</a>
            </li>
          </ul>
        </div>

        <div className="my-10 flex gap-20  text-black text-justify text-base leading-7">
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

        <div className=" my-5">
          <h1 className="text-xl text-black font-medium leading-6 mb-3">
            The latest version of the full tariff book and schedules to the
            tariff can be downloaded from the links below :-
          </h1>

          <div className="flex items-center">
            <ul className="text-mainColor text-[15px] px-4 leading-7 font-normal">
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part1-Chapters1to99oftheERSTariffBook.pdf">Schedule 1 Part 1 - Chapters 1 to 99 of the ERS Tariff Book</a> 
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part2-SpecificAndAdValoremExciseDuties.pdf">Schedule 1 Part 2 - Specific and Ad V{" "}</a>
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part5-FuelAndRoadAccidentFundLevy.pdf">Schedule 1 Part 5 - Fuel and Road Accident Fund Levy</a>
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule1Part7-HealthPromotionLevy.pdf"></a>Schedule 1 Part 7 - Health Promotion Levy
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/ATL-AlcoholAndTabaccoLevy.pdf">ATL - Alcohol and Tobacco Levy</a>
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule2-Anti-dumpingCountervailingAndSafeguardDutiesOnImportedGoods.pdf">Schedule 2 - ​Anti-dumping, Countervailing and Safeguard Duties</a>
                on Imported Goods{" "}
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule3-​IndustrialRebatesOfCustomsDuties.pdf">Schedule 3 - ​​Industrial Rebates of Customs Duties</a>
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule4-GeneralRebatesOfCustomsDutiesAndFuelLevy.pdf">Schedule 4 - ​​​General Rebates of Customs Duties and Fuel Levy</a>
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule5-SpecificDrawbacksAndRefundsOfCustomsDutiesAndFuelLevy.pdf">Schedule 5 - ​Specific Drawbacks and Refunds of Customs Duties</a>
                and Fuel Levy
              </li>
              <li className="hover:underline cursor-pointer starclass">
              <a href = "http://website.ers.org.sz:8000/documents/Schedule6-RefundsAndRebatesOfExciseDutiesAndFuelLevy.pdf">Schedule 6 - ​​Refunds and Rebates of Excise Duties and Fuel</a>
                Levy
              </li>
            </ul>
            <div className="mx-auto">
              <Link href={"/FAQ"}>
                <button className="text-white hover:bg-opacity-75 bg-black tracking-wider border hover:border-black rounded-lg py-2 px-6">
                  <p className="text-sm leading-4 font-medium">
                    Frequently Asked Questions
                  </p>
                  <h1 className="text-3xl font-bold">(FAQs)</h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-14">

      <Link href={"https://www.eswatinitradeportal.com"}>
        <div className="border-t border-black mx-5 py-8 flex items-center gap-14 text-base font-normal leading-7 text-black">
          <Image src={Trade} alt="..." className="w-96" />
          <p>
            The Trade Information Portal provides a single platform to create
            transparency on Trade laws, Non-tariff measures and procedures for
            trading in Eswatini.
          </p>
        </div>
        </Link>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
