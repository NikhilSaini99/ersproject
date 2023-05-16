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
import Tax from "../assets/images/tax.png";
import Customs from "../assets/images/customs.png";
import CSR from "../assets/images/CSR.jpg";
import calculator from "../assets/icons/calculator.png";
import barcode from "../assets/icons/barcode.png";
import currency from "../assets/icons/currency.png";
import flight from "../assets/icons/flight.png";
import headphone from "../assets/icons/headphone.png";
import help from "../assets/icons/help.png";
import monitoring from "../assets/icons/monitoring.png";
import table from "../assets/icons/table.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Paper } from "@mui/material";
import styles from '@/styles/Home.module.css'

export default function Home() {
  // ----------------------Resources-----------------------

  const resourceData = [
    {
      icon: calculator,
      title: "Calculator",
      description: "Some random content ...",
    },

    {
      icon: table,
      title: "Tables",
      description: "Some random content ...",
    },

    {
      icon: currency,
      title: "eTax",
      description: "Some random content ...",
    },

    {
      icon: barcode,
      title: "Codes",
      description: "Some random content ...",
    },

    {
      icon: headphone,
      title: "Hotline",
      description: "Some random content ...",
    },

    {
      icon: help,
      title: "FAQs",
      description: "Some random content ...",
    },

    {
      icon: monitoring,
      title: "Business",
      description: "Some random content ...",
    },

    {
      icon: flight,
      title: "Travelling",
      description: "Some random content ...",
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
          head: "Remittance of Paye",
          para: "No later than the 7th every month",
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
          para2: "Annual Reports",
          para3: "Customer Perception Survey",
        },
        {
          id: 2,
          head: "Payments",
          para: "Bank Accounts",
          para2: "Tax Item Codes",
          para3: "Payments",
        },
        {
          head: "Stakeholders",
          para: "Local Stakeholders",
          para2: "International Stakeholders",
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

      <section className=" mx-14 my-16">
        <div>
          <div className="flex flex-col">
            <h1 className="text-subColor text-4xl font-semibold">
              Our Resources
            </h1>
            <div className="border w-[204px] border-yellowish mt-1"></div>
          </div>

          <div className="flex justify-center gap-20 mt-10">
            {resourceData.map((item, key) => (
              <Resources
                key={key}
                icon={item.icon}
                title={item.title}
              // description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/*------------------News Section-------------------*/}

      <section className="bg-[#F7F7FA] pt-12 pb-16">
        <div className="px-14">
          {" "}
          <h1 className=" text-subColor text-center lg:text-start text-4xl font-semibold">
            Important Links
          </h1>
          <div className="border w-56 border-yellowish mt-2"></div>
        </div>
        <div className="grid grid-cols-2 gap-32 mt-10 px-32">
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

      <section className="mt-24 mb-14">
        <div className="flex flex-row bg-white text-xl justify-center font-semibold leading-6">
          <button
            onClick={() => toggleVisibility("div1")}
            className={`py-3 w-60 rounded-t-xl ${isVisible.div1 ? "bg-subColor text-white" : "bg-white text-black"
              }`}
          >
            Recently Approved
          </button>

          <button
            onClick={() => toggleVisibility("div2")}
            className={`py-3 w-60 rounded-t-xl ${isVisible.div2 ? "bg-subColor text-white" : "bg-white text-black"
              }`}
          >
            Notice Board
          </button>
        </div>

        {/* Recently Approved */}
        <div
          className={`${isVisible.div1 ? "block" : "hidden"
            } bg-subColor text-white w-full`}
        >
          <div className="flex justify-between px-14 py-8 h-[364px]">
            {/* <!-- Content for first div --> */}
            <div className="text-[inherit] font-inherit inline-block w-[17.8rem] h-[16.5rem] text-midnightblue-100">
              <p className="text-xl font-normal">
                Recently Approved Guidelines
              </p>
              <ul className="list-disc pl-[1.5rem] text-sm flex flex-col">
                <li className="my-8">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299306.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>
                    SRA-Minstry of Finance Guidelines to Taxpayers- COVID-19
                  </span>
                </li>
                <li className="">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299470.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>Guideline on Donor Funded Projects</span>
                </li>
                <li className="mt-8">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299603.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>Guideline on Domestic Taxes Exemptions</span>
                </li>
              </ul>
            </div>
            
            <div style={{position:'relative'}}>
            <div className={styles.borderLine}></div>
            </div>
          

            {/* <!-- Content for second div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Approved Practice Notes</p>
              <ul className="list-disc pl-[1.5rem] text-sm my-8">
                <li>
                  Click here to download approved practice notes and guidelines
                </li>
              </ul>
            </div>

            <div style={{position:'relative'}}>
            <div className={styles.borderLine}></div>
            </div>

            {/* <!-- Content for third div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Recently Approved Forms</p>
              <ul className="list-disc pl-[1.36rem] text-sm flex flex-col">
                <li className="my-8">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299306.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>VAT De-Registration Form</span>
                </li>
                <li className="">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299470.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>Public Officer Application Form</span>
                </li>
                <li className="my-8">
                  {/* <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299603.pdf"
                    target="_blank"
                  >
                  </a> */}
                  <span>Notice of Objection Form</span>
                </li>
              </ul>
            </div>
            <div style={{position:'relative'}}>
            <div className={styles.borderLine}></div>
            </div>
            {/* <!-- Content for fourth div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Publication</p>
              <ul className="list-disc pl-[1.36rem] text-sm">
                <li className="my-8">SRA Strategic Plan 2015-2018</li>
                <li className="">
                  {" "}
                  Swaziland Revenue Authority - Strategic Plan 2012/13 - 2014/15
                </li>
                <li className="my-8">15% VAT Presentation</li>
                <li className="">Trade Statistics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notice Board */}
        <div
          className={`${isVisible.div2 ? "block" : "hidden"
            } bg-subColor text-white w-full`}
        >
          <div className="px-14 pt-4 text-lg font-medium leading-6">
            For the latest tenders, Vacancies, Public Notes and Meetings. Click
            below to check if any are available.
          </div>
          <div className="flex justify-between px-14 mt-5 pb-10">
            {/* <!-- Content for first div --> */}
            <div className="text-[inherit] font-inherit inline-block w-[17.8rem] h-[16.5rem] text-midnightblue-100">
              <p className="text-xl font-normal">Tender</p>
              <ul className="list-disc pl-[1.5rem] text-sm flex flex-col">
                <li className="my-3">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299306.pdf"
                    target="_blank"
                  >
                    <span>Approved R1.1 RFT002 - Manage Printing Services</span>
                  </a>
                </li>
                <li className="">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299470.pdf"
                    target="_blank"
                  >
                    <span>Approved R2.1 RFT003 - HVAC Services</span>
                  </a>
                </li>
                <li className="mt-3">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299603.pdf"
                    target="_blank"
                  >
                    <span>Approved R3.1 RFT004 - Solar Energy</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className=" inline-block border-l border-gray-400"></div>

            {/* <!-- Content for second div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Vacancies</p>
              <ul className="list-disc pl-[1.5rem] text-sm my-3">
                <li>There are currently no Vacancies available</li>
              </ul>
            </div>

            <div className=" inline-block border-l border-gray-400"></div>

            {/* <!-- Content for third div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Public Notice</p>
              <ul className="list-disc pl-[1.36rem] text-sm flex flex-col">
                <li className="my-3">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299306.pdf"
                    target="_blank"
                  >
                    <span>Approved R1.1 RFT002 - Manage Printing Services</span>
                  </a>
                </li>
                <li className="">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299470.pdf"
                    target="_blank"
                  >
                    <span>Approved R2.1 RFT003 - HVAC Services</span>
                  </a>
                </li>
                <li className="my-3">
                  <span className="text-whitesmoke">{`Download this tender document to apply: `}</span>
                  <a
                    className="text-[inherit]"
                    href="https://www.ers.org.sz/administrator/notices/1679299603.pdf"
                    target="_blank"
                  >
                    <span>Approved R3.1 RFT004 - Solar Energy</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className=" inline-block border-l border-gray-400"></div>
            {/* <!-- Content for fourth div --> */}
            <div className=" inline-block w-[17.8rem] h-[16.5rem]">
              <p className="text-xl font-normal">Public Meeting</p>
              <ul className="list-disc pl-[1.36rem] text-sm my-3">
                <li>There are currently no Public Notices available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*---------------------Tax Section----------------------*/}

      <section className="my-14 p-14 bg-[#F7F7FA]">
        <div className="grid grid-cols-2 gap-48">
          {TaxData.map((item, id) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-subColor text-2xl font-medium leading-8">
                  <MdOutlineCalendarMonth className="text-5xl" />
                  {item.title}
                </h1>
                <button className="text-white hover:bg-opacity-75 bg-black text-base leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5">
                  See all
                </button>
              </div>
              {item.card.map((card, key) => (
                <div key={key} className={`flex flex-col gap-2 py-5 text-black ${card.id && "border-b border-[#DAD8CC]"}`}>
                  <h1 className="text-lg font-medium leading-6">{card.head}</h1>
                  <ul className=" text-sm font-normal leading-7">
                    <li
                    // className={`${card.para && "before:content-['\\2726']"}`}
                    >{card.para && <span className="mr-2">&#10022;</span>}
                      {card.para}
                    </li>
                    <li
                    // className={`${card.para2 && "before:content-['\\2726']"}`}
                    >
                      {card.para2 && <span className="mr-2">&#10022;</span>}
                      {card.para2}
                    </li>
                    <li
                    // className={`${card.para3 && "<span>&#10022;</span>"}`}
                    >
                      {card.para3 && <span className="mr-2">&#10022;</span>}
                      {card.para3}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {LinkData.map((item, id) => (
            <div key={id} className="flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="flex items-center gap-1 text-subColor text-2xl font-medium leading-8">
                  <FcAbout className="text-5xl" />
                  {item.title}
                </h1>
                <button className="text-white hover:bg-opacity-75 bg-black text-base leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5">
                  See all
                </button>
              </div>
              {item.card.map((card, key) => (
                <div key={key} className={`flex flex-col gap-2 py-5 ${card.id && "border-b border-[#DAD8CC]"}`}>
                  <h1 className="text-lg font-medium leading-6 text-black">
                    {card.head}
                  </h1>
                  <ul className=" text-sm font-normal leading-7 text-mainColor">
                    <Link href={""}>
                      <li>{card.para && <span className="mr-2">&#10022;</span>}
                        {card.para}
                      </li>
                    </Link>
                    <Link href={""}>
                      <li>
                        {card.para2 && <span className="mr-2">&#10022;</span>}
                        {card.para2}
                      </li>
                    </Link>
                    <Link href={""}>
                      <li>
                        {card.para3 && <span className="mr-2">&#10022;</span>}
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

      <section>
        <div className="flex justify-between item-center w-full">
          <div className="basis-1/2">
            <Image src={CSR} alt="..." className="h-[500px]" />
          </div>
          <div className="basis-1/2 py-10 px-20 bg-[#DAD8CC]">
            <h1 className="text-5xl font-semibold text-subColor leading-snug">
              Corporate Social Responsibility
            </h1>
            <p className="text-2xl leading-9 font-normal text-black mt-8 mb-12">
              The ERS{"'"}s definition for Corporate Social Responsibility is
              the process of how the organization helps the Swazi society.
            </p>
            <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5">
              SEE MORE STORIES
            </button>
          </div>
        </div>

        <div
          className="py-16 text-white flex flex-col items-center gap-2 w-full"
          style={{ background: "linear-gradient(90deg, #051C2C, #04308A)" }}
        >
          <h1 className="text-5xl font-medium leading-tight">
            How can we help you?
          </h1>
          <p className="text-xl font-normal leading-8">
            <span className="border-b-2 border-yellowish">Get in touch</span>{" "}
            with us or{" "}
            <span className="border-b-2 border-yellowish">find an office</span>{" "}
            closest to you.
          </p>
        </div>
      </section>

      {/*------------------Social Media-------------------*/}

      <Media />

      {/*------------------Footer-------------------*/}

      <Footer />
    </>
  );
}
