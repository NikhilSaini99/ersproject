import { AiOutlineArrowDown, MdOutlineCalendarMonth } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { Button, Grid, IconButton, Paper } from "@mui/material";
import { News, Resources } from "@/components/homecard";
import React, { useEffect, useMemo, useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CSR from "../assets/images/CSR.jpg";
import Carousal from "@/components/carousal";
import Customs from "../assets/images/eCustoms_Tariff_Logo.png";
import DatasetLinkedOutlinedIcon from "@mui/icons-material/DatasetLinkedOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ECoustoms from "../assets/images/e-customs.jpg";
import ETax from "../assets/images/e-tax.jpg";
import { FcAbout } from "react-icons/fc";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Icons } from "@/components/homecard";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { Media } from "@/components/media";
import TCC from "../assets/images/tcc.png";
import Tax from "../assets/images/e-tax_logo.png";
import barcode from "../assets/icons/barcode.png";
import calculator from "../assets/icons/calculator.png";
import currency from "../assets/icons/currency.png";
import flight from "../assets/icons/flight.png";
import headphone from "../assets/icons/headphone.png";
import help from "../assets/icons/help.png";
import monitoring from "../assets/icons/monitoring.png";
import notice_board from "../assets/images/Notice_Board.png";
import validation from "../assets/images/validation.png";
import notes from "../assets/images/notes.png";
import recentlyApproved from "../assets/images/Recently_Approved.png";
import table from "../assets/icons/table.png";
import { useFetch } from "./api/api";
import { useRef } from "react";


export default function Home() {
  const { data, fetchAPI } = useFetch("GET", "/api/banner-images");
  const [isOpen, setisOpen] = useState(null);
  const [isOpen2, setisOpen2] = useState(null);

  const handleOpen = (index) => {
    if (isOpen === index) {
      setisOpen(null);
    } else {
      setisOpen(index); // Open the clicked FAQ
    }
  };

  const handleOpen2 = (index) => {
    if (isOpen2 === index) {
      setisOpen2(null);
    } else {
      setisOpen2(index); // Open the clicked FAQ
    }
  };

  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  // ----------------------Resources-----------------------

  const resourceData = [
    {
      icon: calculator,
      title: "Calculator",
      description: "Some random content ...",
      link: "/Calculator",
    },

    {
      icon: table,
      title: "Tables",
      description: "Some random content ...",
      link: "/TaxTables",
    },

    {
      icon: currency,
      title: "eTax",
      description: "Some random content ...",
      link: "https://etax.sra.org.sz/",
    },

    {
      icon: barcode,
      title: "Codes",
      description: "Some random content ...",
      link: "/TaxItemTable",
    },

    {
      icon: headphone,
      title: "Hotline",
      description: "Some random content ...",
      link: "/Hotline",
    },

    {
      icon: help,
      title: "FAQs",
      description: "Some random content ...",
      link: "/FAQ",
    },

    {
      icon: monitoring,
      title: "Business",
      description: "Some random content ...",
      link: "http://www.sra.org.sz/documents/1619530285.pdf",
    },

    {
      icon: flight,
      title: "Travelling",
      description: "Some random content ...",
      link: "https://www.ers.org.sz/documents/1493283598.pdf",
    },
  ];

  // -----------------------Tax---------------------

  const TaxData = [
    {
      title: "Tax Calendar",
      card: [
        {
          id: 1,
          head: "Provisional Tax",
          para: "1st payment is due no later than 31st December",
          para2: "2nd payment is due no later than 30th June",
          para3:
            "3rd payment is due on receipt of Notice of Assessment after having submitted Income Tax returns",
        },
        {
          id: 2,
          head: "Remittance of Paye",
          para: "No later than the 7th every month",
        },
        {
          id: 3,
          head: "Submission of Salary Reconciliations",
          para: "No later than the 7th every month",
        },
        {
          id: 4,
          head: "Submission of Income Tax Returns",
          para: "All Non-VAT registered entities - 31st October",
          para2:
            "Individuals with employment income and Individuals with other income - 30th November",
          para3:
            "All VAT registered entities and Special groups - 31st December",
        },
      ],
    },
  ];

  const LinkData = [
    {
      title: "Important Links",
      card: [
        {
          id: 1,
          head: "Publications",
          para: "Strategic Plans",
          link: "/StrategicPlans",
          para2: "Annual Reports",
          link2: "/AnnualReports",
        },
        {
          id: 2,
          head: "Payments",
          para: "Bank Accounts",
          link: "/BankAccounts",
          para2: "Tax Item Codes",
          link2: "/TaxItemTable",
          para3: "Payments",
          link3: "/PaymentPage",
        },
        {
          head: "Stakeholders",
          para: "Local Stakeholders",
          link: "ImportantLink/Stakeholders/LocalStakeHolder",
          para2: "International Stakeholders",
          link2: "ImportantLink/Stakeholders/InternationalStake",
        },
      ],
    },
  ];

  // ----------------------News-----------------------

  const NewsData = [
    {
      img: ETax,
      icon: Tax,
      description:
        '"e-Tax is an electronic platform through which taxpayers are required to submit VAT, PAYE, Income Tax and Provisional Tax returns."',
      link: "https://etax.sra.org.sz/",
    },
    {
      img: ECoustoms,
      icon: TCC,
      description:
        '"Click on this tab to access your Instant TCC platform. If you don’t qualify, please visit the nearest ERS Service Centre to resolve possible outstanding issues."',
      link: "https://srasp.sra.org.sz/tcc/",
    },
    {
      img: ECoustoms,
      icon: Customs,
      description:
        '"All import and export commercial transactions require commodities on Customs declarations to be classified according to an appropriate tariff heading."',
      link: "/customs",
    },
  ];

  // ----------------------Tabs-----------------------

  const [isVisible, setIsVisible] = useState({
    div1: true,
    div2: false,
  });

  function toggleVisibility(divName) {
    setIsVisible(() => {
      const newState = {
        [divName]: [divName],
      };
      return newState;
    });
  }

  const tabSection = useMemo(
    () => [
      {
        type: "Recently Approved",
        items: [
          {
            link: "/RecentlyApproved/ApprovedGuidelines",
            text: "Recently Approved GuideLines",
          },
          {
            link: "/legalandpolicy/notes_guidelines",
            text: "Approved Practice Notes",
          },
          {
            link: "/RecentlyApproved/ApprovedForms",
            text: "Recently Approved Forms",
          },
          {
            link: "/RecentlyApproved/Publications",
            text: "Publications",
          },
        ],
      },
      {
        type: "Notice Board",
        items: [
          {
            link: "/Tender/Tender",
            text: "Latest Tenders",
          },
          {
            link: "https://ers.mcidirecthire.com/external/currentopportunities",
            text: "Current Vaccines",
          },
          {
            link: "/PublicNotices/PublicNotices",
            text: "Public Notices",
          },
          {
            link: "/PublicMeeting/PublicMeetingList",
            text: "Public Meetings",
          },
        ],
      },
    ],
    []
  );

  return (
    <>
      {/*---------------------Header-------------------*/}

      <Header />

      {/*------------------Carousal-------------------*/}

      <Carousal bannerData={data?.data} />

      {/*------------------Our Resources-------------------*/}

      <section className="mx-4 md:mx-14 py-16" data-aos="fade-left">
        <div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-subColor text-2xl md:text-4xl font-semibold">
              Our Resources
            </h1>
            <div className="border w-20 md:w-32 xl:w-14 border-yellowish mt-1"></div>
          </div>

          <Icons />
        </div>
      </section>

      {/*------------------News Section-------------------*/}

      <section className="bg-[#F7F7FA] py-16" data-aos="fade-right">
        <div className="  md:px-14">
          <h1 className="text-subColor text-center md:text-start text-2xl lg:text-4xl font-semibold">
            Important Links
          </h1>
          <div className="border w-24 md:w-56 border-yellowish mt-2"></div>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 md:gap-8 lg:gap-2 mt-6 md:px-16 lg:px-16">
          {NewsData.map((item, key) => (
            <News
              key={key}
              img={item.img}
              icon={item.icon}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </section>

      {/*---------------------Tab Section----------------------*/}

      <section className="relative h-[380px] my-10" data-aos="fade-up">
        <div className="absolute -z-50 h-[80%] w-full bg-primaryColor bottom-0"></div>
        <div className="w-[80%] flex gap-0 mx-auto bg-gray-200 shadow-2xl">

          <div className="w-[50%] flex flex-col gap-4 pt-4 md:px-8 2xl:px-20 pb-8 flex-grow bg-gray-200">
            <h3 className="px-6 pt-2 pb-2 font-bold text-2xl border-b border-white">
              Recently Approved
            </h3>
            <div className="flex md:gap-6 xl:gap-10 2xl:gap-14 p-2">
              <div className="bg-cover">
                <Image
                  src={validation}
                  width={150}
                  height={150}
                  alt="recentlyApproved"
                  style={{}}
                />
              </div>
              <div className="flex flex-col gap-4 font-semibold">

              {tabSection[0]?.items?.map((point, index) => (
              <div key={index} className="flex gap-1 items-start pb-2 font-semibold">
                <span >
                  <ArrowForwardIosIcon className="mr-2"
                    sx={{ ...arrowStyling, }}
                  />
                </span>
                <Link href={point.link} className="hover:underline hover:text-primaryColor">  <p>{point.text}</p></Link>
              </div>
            ))}
              </div>
            </div>
          </div>

          <div className=" w-[50%] flex flex-col gap-4 pt-4  md:px-8 2xl:px-20 pb-8 flex-grow bg-gray-100">
            <p className="px-6 pt-2 pb-2 font-bold text-2xl border-b border-white">
              Notice Boards
            </p>
            <div className="flex md:gap-6 xl:gap-10 2xl:gap-14 p-2">
              <div className="bg-cover">
                <Image
                  src={notes}
                  width={150}
                  height={150}
                  sizes="fill"
                  alt="recentlyApproved"
                  style={{}}
                />
              </div>
              <div className="flex flex-col gap-4 font-semibold">
              {tabSection[1]?.items?.map((point, index) => (
              <div key={index} className="flex gap-1 items-start pb-2 font-semibold">
                <span >
                  <ArrowForwardIosIcon className="mr-2"
                    sx={{ ...arrowStyling }}
                  />
                </span>
                <Link href={point.link}  className="hover:underline hover:text-primaryColor">  <p>{point.text}</p></Link>
              </div>
            ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <section className=" bg-transparent relative h-full my-16" data-aos="fade-up">
        <div className="absolute -z-50 h-[84%] w-full bg-primaryColor bottom-0"></div>
        <div className="flex flex-col  min-h-[400px] w-4/5 mx-auto ">
          <div className="flex gap-0 sm:flex-col md:flex-col lg:flex-row  justify-between bg-yellowish  font-bold text-white p-4">
            <div className="flex justify-end w-2/4 ">
              <h3 className="text-2xl">Recently Approved</h3>
            </div>
            <div className="flex justify-end w-2/4 pl-4 ">
              <p className="text-2xl"> Notice Board</p>
            </div>
          </div>
          <div className="flex gap-3  sm:flex-col sm:gap-16 md:gap-16 md:flex-col 
            lg:flex-row
          pl-4 justify-between pb-4 bg-white  shadow-2xl relative">
            <div className="flex bg-cover w-[50%] sm:w-full md:w-full">
              <div className="w-[50%] h-[200px]">
                <Image
                  className="object-cover relative -top-11"
                  src={recentlyApproved}
                  alt="Recently_approve"
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
              <div className="flex flex-col gap-2 items-start pl-2 pt-8  flex-grow">
                <p className="border-b w-full pl-6">
                  Recently Approved Guidelines
                </p>
                <p className="border-b w-full  pl-6">Approved Practice Notes</p>
                <p className="border-b w-full pl-6">Recently Approved Forms</p>
                <p className="border-b w-full pl-6">Publications</p>
              </div>
            </div>

            <div className="flex bg-cover w-[50%] sm:w-full md:w-full">
              <div className="w-[50%] h-[200px]">
                <Image
                  className="object-cover relative -top-11"
                  src={notice_board}
                  alt="Recently_approve"
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
              <div className="flex flex-col gap-2 items-start pl-2 pt-8 flex-grow ">
                <p className="border-b w-full pl-6">Latest Tenders</p>
                <p className="border-b w-full pl-6">Current Vaccines</p>
                <p className="border-b w-full pl-6">Public Notices</p>
                <p className="border-b w-full pl-6">Public Meetings</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16  bg-[#F7F7FA]" data-aos="fade-up">
        <div className="flex flex-row bg-[#F7F7FA] text-xl justify-center font-semibold leading-6">
          <button
            onClick={() => toggleVisibility("div1")}
            className={`py-3 w-60 rounded-t-xl ${isVisible.div1 ? "bg-subColor text-white" : "bg-white text-black shadow-2xl"}`}
          >
            Recently Approved
          </button>

          <button
            onClick={() => toggleVisibility("div2")}
            className={`py-3 w-60 rounded-t-xl ${isVisible.div2 ? "bg-subColor text-white" : "bg-white text-black shadow-2xl"}`}
          >
            Notice Board
          </button>
        </div> */}

      {/* Recently Approved */}
      {/* <div className={`${isVisible.div1 ? "block" : "hidden"} bg-subColor text-white w-full `}>
          <div className="flex flex-col md:flex-row justify-between  md:px-8 py-10 h-[25rem] gap-4">
            {/* Content for first div */}
      {/* <div className=" flex flex-col text-[inherit] font-inherit w-full md:w-[17.8rem] xl:w-[19.5rem]  justify-between text-midnightblue-100  ">
              <div>
                <p className="text-yellowish text-xl font-normal ">Recently Approved Guidelines</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">
                  <li className="">
                    <span>SRA-Minstry of Finance Guidelines to Taxpayers- COVID-19</span>
                  </li>
                  <li className="">
                    <span>Guideline on Donor Funded Projects</span>
                  </li>
                  <li className="">
                    <span>Guideline on Domestic Taxes Exemptions</span>
                  </li>
                </ul>

                <div>
                </div>

              </div>

            </div>

            <div className="flex flex-col relative justify-end h-full">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div> */}

      {/* Content for second div */}
      {/* <div className=" flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]    justify-between ">
              <div className="">
                <p className=" text-yellowish text-xl font-normal">Approved Practice Notes</p>
                <ul className="list-disc pl-[0rem] text-base flex flex-col gap-0 pt-0">
                <Typography className="list-disc pl-[0rem] text-base flex-col gap-0 pt-6 "><Link href={"/LegalandPolicy/Notes_Guidelines"}> Click to view </Link> approved practice notes to assist with simplifying the application of law.
                </Typography>
                </ul> */}
      {/* 
              </div>

            </div>

            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div> */}

      {/* Content for third div */}
      {/* <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
                <p className="text-yellowish text-xl font-normal">Recently Approved Forms</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">

                  <li className="">
                    <span>VAT De-Registration Form</span>
                  </li>
                  <li className="">
                    <span>Public Officer Application Form</span>
                  </li>
                  <li className="">
                    <span>Notice of Objection Form</span>
                  </li>
                </ul>
              </div>

            </div>
            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>
            <div className={`lg:border-r opacity-40 xs:border-t`} ></div> */}

      {/* Content for fourth div */}
      {/* <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
                <p className="text-yellowish text-xl font-normal">Publications</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6 ">
                  <li className="">SRA Strategic Plan 2015-2018</li>
                  <li className="">
                    Swaziland Revenue Authority - Strategic Plan 2012/13 - 2014/15
                  </li>
                  <li className="">15% VAT Presentation</li>
                  <li className="">Trade Statistics</li>
                </ul>
              </div>

            </div>
            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>
          </div>
        </div> */}
      {/* Notice Board

        <div className={`${isVisible.div2 ? "block" : "hidden"} bg-subColor text-white w-full `}>
          <div className="flex flex-col md:flex-row justify-between   md:px-8 py-10 h-[25rem] gap-4">
            {/* Content for first div */}
      {/* <div className=" flex flex-col text-[inherit] font-inherit w-full md:w-[17.8rem] xl:w-[19.5rem]  justify-between text-midnightblue-100  ">
              <div>
               <Link href={"/Tender/Tender"}> <p className="text-yellowish text-xl font-normal">Latest Tenders</p></Link>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">
                  <li className="">
                    <span>Approved R1.1 RFT002 - Manage Printing Services</span>
                  </li>
                  <li className="">
                    <span>Approved R2.1 RFT003 - HVAC Services</span>
                  </li>
                  <li className="">
                    <span>Approved R3.1 RFT004 - Solar Energy</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>  */}

      {/* Content for second div
            <div className=" flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]    justify-between ">
              <div className="">
                <p className=" text-yellowish text-xl font-normal">Current Vacancies</p>
                <Typography className="list-disc pl-[0rem] text-base flex-col gap-3 pt-6 "><Link href={"https://ers.mcidirecthire.com/external/currentopportunities"}> Click here </Link> to visit our job portal for vacancy announcements as they become available from ERS.
                </Typography>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">
                </ul>
              </div>

            </div>

            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div> */}

      {/* Content for third div */}
      {/* <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
              <Link href={"/PublicNotices/PublicNotices"}> <p  className="text-yellowish text-xl font-normal">Public Notices</p></Link> 
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">

                  <li className="">
                    <span>  Approved R1.1 RFT002 - Manage Printing Services</span>
                  </li>
                  <li className="">
                    <span>  Approved R2.1 RFT003 - HVAC Services</span>
                  </li>
                  <li className="">
                    <span>  Approved R3.1 RFT004 - Solar Energy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div> */}

      {/* Content for fourth div */}
      {/* <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
              <Link href={"/PublicMeeting/PublicMeetingList"}>  <p  className="text-yellowish text-xl font-normal">Public Meetings</p></Link>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6 ">
                  <li className="">SRA Strategic Plan 2015-2018</li>
                  <li className="">
                    There are currently no Public Notices available
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col relative justify-end h-full ">
              <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..." />
            </div>
          </div> 
            </div>
             </section> 
          */}

      {/* display: isOpen === index ? 'block' : 'none' */}
      {/*---------------------Tax Section----------------------*/}

      <section className="pt-2 pb-16 px-14 bg-[#F7F7FA]" data-aos="fade-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-48">
          {TaxData.map((item, id) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-subColor text-2xl font-medium leading-8">
                  <MdOutlineCalendarMonth className="text-5xl" />
                  {item.title}
                </h1>
              </div>
              {item.card.map((card, key) => (
                <div
                  key={key}
                  className={`flex flex-col gap-2 py-5 text-black ${
                    card.id && key !== item.card.length - 1
                      ? "border-b border-[#DAD8CC]"
                      : ""
                  }`}
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg font-medium leading-6">
                      {card.head}
                    </h1>
                    <IconButton onClick={() => handleOpen(key)}>
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>

                  <ul
                    className={`text-sm font-normal leading-7  ${
                      isOpen === key ? "block" : "hidden"
                    }`}
                  >
                    {card.para && (
                      <div className="flex gap-1 items-start">
                        <span className="mr-2">
                          <ArrowForwardIosIcon sx={arrowStyling} />
                        </span>
                        <li>{card.para}</li>
                      </div>
                    )}

                    {card.para2 && (
                      <div className="flex gap-1 items-start">
                        <span className="mr-2">
                          <ArrowForwardIosIcon sx={arrowStyling} />
                        </span>
                        <li>{card.para2}</li>
                      </div>
                    )}

                    {card.para3 && (
                      <div className="flex gap-1 items-start">
                        <span className="mr-2">
                          <ArrowForwardIosIcon sx={arrowStyling} />
                        </span>
                        <li>{card.para3}</li>
                      </div>
                    )}

                    {/* <li>{card.para2 && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling} /></span>}{card.para2}</li>
                    <li>{card.para3 && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling} /></span>}{card.para3}</li> */}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {LinkData.map((item, id) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-subColor text-2xl font-medium leading-8">
                  <DatasetLinkedOutlinedIcon
                    className="text-5xl"
                    sx={{ fontSize: "3rem", lineHeight: 1 }}
                  />
                  {item.title}
                </h1>
              </div>
              {item.card.map((card, key) => (
                <div
                  key={key}
                  className={`flex flex-col gap-2 py-5 ${
                    card.id && "border-b border-[#DAD8CC]"
                  }`}
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg font-medium leading-6">
                      {card.head}
                    </h1>
                    <IconButton onClick={() => handleOpen2(key + 1)}>
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>

                  <ul
                    className={`text-sm font-normal leading-7 ${
                      isOpen2 === key + 1 ? "block" : "hidden"
                    } `}
                  >
                    <Link href={`${card.link}`}>
                      <li className="">
                        {card.para && (
                          <span className="mr-2">
                            <ArrowForwardIosIcon sx={arrowStyling} />
                          </span>
                        )}
                        {card.para}
                      </li>
                    </Link>
                    <Link href={`${card.link2}`}>
                      <li className="">
                        {" "}
                        {card.para2 && (
                          <span className="mr-2 ">
                            <ArrowForwardIosIcon sx={arrowStyling} />
                          </span>
                        )}
                        {card.para2}
                      </li>
                    </Link>
                    <Link href={`${card.link3}`}>
                      <li className="">
                        {card.para3 && (
                          <span className="mr-2 ">
                            <ArrowForwardIosIcon sx={arrowStyling} />
                          </span>
                        )}
                        {card.para3}
                      </li>
                    </Link>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/*----------------Corporate Social Responsibility------------------*/}

      <section className="" data-aos="fade-up-right">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="w-full md:w-1/2">
            <Image src={CSR} alt="..." className="h-[500px]" />
          </div>
          <div className="w-full md:w-1/2 py-10 xs:px-5 md:px-10 px-20 bg-[#DAD8CC]  md:h-[500px] xl:h-[500px]">
            <h1 className="text-5xl font-semibold text-subColor leading-snug">
              Corporate Social Responsibility
            </h1>
            <p className="text-2xl leading-9 font-normal text-black mt-8 mb-12">
              The ERS s definition for Corporate Social Responsibility is the
              process of how the organization helps the Swazi society.
            </p>
            <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border border-black rounded-lg py-3 px-5">
              <Link href="/CSR/CSR_Detail">See More Stories</Link>
            </button>
          </div>
        </div>

        <div
          className="py-16 text-white flex flex-col items-center gap-2 w-full xs:px-5 md:px-10"
          style={{ background: "linear-gradient(90deg, #051C2C, #04308A)" }}
        >
          <h1 className="xs:text-3xl lg:text-5xl font-medium leading-tight">
            How can we help you?
          </h1>
          <p className="xs:text-base text-xl font-normal leading-8 xs:px-5 md:px-10">
            <Link href="/Contact">
              <span className="border-b-2 border-yellowish">Get in touch</span>
            </Link>{" "}
            with us or{""}
            <Link href="/Contact">
              {" "}
              <span className="border-b-2 border-yellowish">
                find an office
              </span>
            </Link>{" "}
            closest to you.
          </p>

          <div className="flex gap-0">
            <p className="xs:text-lg text-xl font-normal leading-8">
              Any Feedback for us?
            </p>
            <Link href="/Feedback">
              <span className="border-b-2 border-yellowish cursor-pointer ml-2">
                Feedback
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/*------------------Social Media-------------------*/}

      <Media />

      {/*------------------Footer-------------------*/}

      <Footer />
    </>
  );
}
