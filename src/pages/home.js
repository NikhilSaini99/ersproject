import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Carousal from "@/components/carousal";
import { Media } from "@/components/media";
import Footer from "@/components/Footer";
import { Resources, News } from "@/components/homecard";
import ETax from "../assets/images/e-tax.jpg";
import ECoustoms from "../assets/images/e-customs.jpg";
import Tax from "../assets/images/e-tax_logo.png";
import Customs from "../assets/images/eCustoms_Tariff_Logo.png";
import CSR from "../assets/images/CSR.jpg";
import calculator from "../assets/icons/calculator.png";
import barcode from "../assets/icons/barcode.png";
import currency from "../assets/icons/currency.png";
import flight from "../assets/icons/flight.png";
import headphone from "../assets/icons/headphone.png";
import help from "../assets/icons/help.png";
import monitoring from "../assets/icons/monitoring.png";
import table from "../assets/icons/table.png";
import { MdOutlineCalendarMonth, AiOutlineArrowDown } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Button, Grid, IconButton, Paper } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from "react";
import { Icons } from "@/components/homecard";
import DatasetLinkedOutlinedIcon from '@mui/icons-material/DatasetLinkedOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';



export default function Home() {
  const [isOpen, setisOpen] = useState(null)
  const [isOpen2, setisOpen2] = useState(null)

  const handleOpen = (index) => {
    if (isOpen === index) {
      setisOpen(null);
    }
    else {
      setisOpen(index); // Open the clicked FAQ
    }
  }

  const handleOpen2 = (index) => {
    if (isOpen2 === index) {
      setisOpen2(null);
    }
    else {
      setisOpen2(index); // Open the clicked FAQ
    }
  }

  const arrowStyling={
    color: '#2f2483',
    fontSize:'1rem'
  }

  // ----------------------Resources-----------------------



  const resourceData = [
    {
      icon: calculator,
      title: "Calculator",
      description: "Some random content ...",
      link: '/Calculator'
    },

    {
      icon: table,
      title: "Tables",
      description: "Some random content ...",
      link: '/TaxTables'
    },

    {
      icon: currency,
      title: "eTax",
      description: "Some random content ...",
      link: 'https://etax.sra.org.sz/'
    },

    {
      icon: barcode,
      title: "Codes",
      description: "Some random content ...",
      link: '/TaxItemTable'
    },

    {
      icon: headphone,
      title: "Hotline",
      description: "Some random content ...",
      link: '/Hotline'
    },

    {
      icon: help,
      title: "FAQs",
      description: "Some random content ...",
      link: '/FAQ'
    },

    {
      icon: monitoring,
      title: "Business",
      description: "Some random content ...",
      link: 'http://www.sra.org.sz/documents/1619530285.pdf'
    },

    {
      icon: flight,
      title: "Travelling",
      description: "Some random content ...",
      link: 'https://www.ers.org.sz/documents/1493283598.pdf'
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
          head: 'Submission of Salary Reconciliations',
          para: "No later than the 7th every month",
        },
        {
          id: 4,
          head: 'Submission of Income Tax Returns',
          para: "All Non-VAT registered entities - 31st October",
          para2: "Individuals with employment income and Individuals with other income - 30th November",
          para3: "All VAT registered entities and Special groups - 31st December",
        }

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
          para3: "Customer Perception Survey",
          link3: "/TaxItemTable",
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
    },

    {
      img: ECoustoms,
      icon: Customs,
      description:
        '"All import and export commercial transactions require commodities on Customs declarations to be classified according to an appropriate tariff heading."',
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

  return (
    <>
      {/*---------------------Header-------------------*/}

      <Header />

      {/*------------------Carousal-------------------*/}

      <Carousal />

      {/*------------------Our Resources-------------------*/}

      <section className="mx-4 md:mx-14 py-16">
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


      <section className="bg-[#F7F7FA] py-16">
        <div className="  md:px-14">
          <h1 className="text-subColor text-center md:text-start text-2xl lg:text-4xl font-semibold">
            Important Links
          </h1>
          <div className="border w-24 md:w-56 border-yellowish mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-6   md:px-32">
          {NewsData.map((item, key) => (
            <News
              key={key}
              img={item.img}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/*---------------------Tab Section----------------------*/}

      <section className="py-16  bg-[#F7F7FA]">
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
        </div>

        {/* Recently Approved */}
        <div className={`${isVisible.div1 ? "block" : "hidden"} bg-subColor text-white w-full `}>
          <div className="flex flex-col md:flex-row justify-between   md:px-12 py-10 h-[22rem]">
            {/* Content for first div */}
            <div className=" flex flex-col text-[inherit] font-inherit w-full md:w-[17.8rem] xl:w-[19.5rem] xl:w-[19.5rem]  justify-between text-midnightblue-100  ">
              <div>
                <p className="text-yellowish text-xl font-normal">Recently Approved Guidelines</p>
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

            <div className="flex flex-col relative justify-end h-full "> 
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div> 

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for second div */}
            <div className=" flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]    justify-between ">
              <div className="">
                <p className=" text-yellowish text-xl font-normal">Approved Practice Notes</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">
                  <li>
                    Click here to download approved practice notes and guidelines
                  </li>
                </ul>
              </div>

            </div>

           <div className="flex flex-col relative justify-end h-full "> 
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for third div */}
            <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
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
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>
            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for fourth div */}
            <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
                <p className="text-yellowish text-xl font-normal">Publication</p>
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
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>
          </div>
        </div>
        {/* Notice Board */}

        <div className={`${isVisible.div2 ? "block" : "hidden"} bg-subColor text-white w-full `}>
          <div className="flex flex-col md:flex-row justify-between   md:px-12 py-10 h-[22rem]">
            {/* Content for first div */}
            <div className=" flex flex-col text-[inherit] font-inherit w-full md:w-[17.8rem] xl:w-[19.5rem] xl:w-[19.5rem]  justify-between text-midnightblue-100  ">
              <div>
                <p className="text-yellowish text-xl font-normal">Tender</p>
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
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for second div */}
            <div className=" flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]    justify-between ">
              <div className="">
                <p className=" text-yellowish text-xl font-normal">Vacancies</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6">
                  <li>
                    There are currently no Vacancies available
                  </li>
                </ul>
              </div>

            </div>

           <div className="flex flex-col relative justify-end h-full "> 
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for third div */}
            <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
                <p className="text-yellowish text-xl font-normal">Public Notice</p>
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
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>

            <div className={`lg:border-r opacity-40 xs:border-t`} ></div>

            {/* Content for fourth div */}
            <div className="flex flex-col w-full md:w-[17.8rem] xl:w-[19.5rem]     justify-between">
              <div>
                <p className="text-yellowish text-xl font-normal">Public Meeting</p>
                <ul className="list-disc pl-[1.5rem] text-base flex flex-col gap-3 pt-6 ">
                  <li className="">SRA Strategic Plan 2015-2018</li>
                  <li className="">
                    There are currently no Public Notices available
                  </li>
                </ul>
              </div>
            </div>
           <div className="flex flex-col relative justify-end h-full "> 
                <DoubleArrowIcon className="cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ..."/>
                </div>
          </div>
          
        </div>


      </section>



      {/* display: isOpen === index ? 'block' : 'none' */}
      {/*---------------------Tax Section----------------------*/}

      <section className="pt-2 pb-16 px-14 bg-[#F7F7FA]">
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
                  className={`flex flex-col gap-2 py-5 text-black ${card.id && key !== item.card.length - 1 ? "border-b border-[#DAD8CC]" : ""
                    }`}
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg font-medium leading-6">{card.head}</h1>
                    <IconButton onClick={() => handleOpen(key)}><KeyboardArrowDownIcon /></IconButton>
                  </div>

                  <ul className={`text-sm font-normal leading-7  ${isOpen === key ? 'block' : 'hidden'}`} >
                    <li>{card.para && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para}</li>
                    <li>{card.para2 && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para2}</li>
                    <li>{card.para3 && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para3}</li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {LinkData.map((item, id) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-subColor text-2xl font-medium leading-8">
                  <DatasetLinkedOutlinedIcon className="text-5xl" sx={{ fontSize: '3rem', lineHeight: 1 }} />
                  {item.title}
                </h1>
              </div>
              {item.card.map((card, key) => (
                <div
                  key={key}
                  className={`flex flex-col gap-2 py-5 ${card.id && "border-b border-[#DAD8CC]"
                    }`}
                >
                  <div className="flex justify-between">
                    <h1 className="text-lg font-medium leading-6">{card.head}</h1>
                    <IconButton onClick={() => handleOpen2(key + 1)}><KeyboardArrowDownIcon /></IconButton>
                  </div>

                  <ul className={`text-sm font-normal leading-7 ${isOpen2 === key + 1 ? 'block' : 'hidden'} `}>
                    <Link href={`${card.link}`}>
                      <li className="">{card.para && <span className="mr-2"><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para}</li>
                    </Link>
                    <Link href={`${card.link2}`}>
                      <li className=""> {card.para2 && <span className="mr-2 "><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para2}</li>
                    </Link>
                    <Link href={`${card.link3}`}>
                      <li className="">{card.para3 && <span className="mr-2 "><ArrowForwardIosIcon sx={arrowStyling}/></span>}{card.para3}</li>
                    </Link>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>


      {/*----------------Corporate Social Responsibility------------------*/}

      <section className="">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="w-full md:w-1/2">
            <Image src={CSR} alt="..." className="h-[500px]" />
          </div>
          <div className="w-full md:w-1/2 py-10 xs:px-5 md:px-10 px-20 bg-[#DAD8CC]  md:h-[500px] xl:h-[500px]">
            <h1 className="text-5xl font-semibold text-subColor leading-snug">
              Corporate Social Responsibility
            </h1>
            <p className="text-2xl leading-9 font-normal text-black mt-8 mb-12">
              The ERS s definition for Corporate Social Responsibility is the process
              of how the organization helps the Swazi society.
            </p>
            <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border border-black rounded-lg py-3 px-5">
              See More Stories
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
            <Link href="/Contact"><span className="border-b-2 border-yellowish">Get in touch</span></Link> with
            us or{""}
            <Link href="/Contact"> <span className="border-b-2 border-yellowish">find an office</span></Link>{" "}
            closest to you.
          </p>  

          <div className="flex gap-0">
            <p className="xs:text-lg text-xl font-normal leading-8">Any Feedback for us?</p>
            <Link href="/Feedback">
              <span className="border-b-2 border-yellowish cursor-pointer ml-2">Feedback</span>
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
