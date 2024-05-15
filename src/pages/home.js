import React, { useEffect, useMemo, useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BlackButton } from "@/styles/globalStyle";
 import CSR from "../assets/images/CSR.jpg";
// import CSR from "../assets/images/CR1.jpg";

import Carousal from "@/components/carousal";
import ChatboxMock from "@/components/Chatbox/ChatboxMock";
import Customs from "../assets/images/eCustoms_Tariff_Logo.png";
import DatasetLinkedOutlinedIcon from "@mui/icons-material/DatasetLinkedOutlined";
import ECoustoms from "../assets/images/banner_eTarrif.jpg";
import ETax from "../assets/images/banner_taxease.jpg";
import taxEase from "../assets/images/taxEase.jpeg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconButton } from "@mui/material";
import { Icons } from "@/components/homecard";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Media } from "@/components/media";
import { News } from "@/components/homecard";
import SocialMediaCard from "@/components/SocialMediaCard/SocialMediaCard";
import TCC from "../assets/images/tcc.png";

import quickTCCbg from "../assets/images/banner_tcc.jpg";

import Tax from "../assets/images/e-tax_logo.png";
import notes from "../assets/images/notes.png";
import { useFetch } from "./api/api";
import validation from "../assets/images/validation.png";

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
          para3:"3rd payment is due on receipt of Notice of Assessment after having submitted Income Tax returns",
        },
        {
          id: 2,
          head: "Remittance of Paye",
          para: "No later than the 7th every month",
        },
        {
          id: 3,
          head: "Submission of Salary Reconciliations",
          para: "No later than the 30th September every year",
        },
        {
          id: 4,
          head: "Submission of Income Tax Returns",
          para: "All Non-VAT registered entities - 31st October",
          para2:"Individuals with employment income and Individuals with other income - 30th November",
          para3:"All VAT registered entities and Special groups - 31st December",
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
      icon: taxEase,
      description:
        'Tax Ease your 24 hrs Self-Service Tax Portal. An online platform where taxpayers can manage their taxes.',
      link: "https://taxease.ers.org.sz/",
    },
    {
      img: quickTCCbg,
      icon: TCC,
      description:
        'Click on this tab to access your Instant TCC platform. If you don’t qualify, please visit the nearest ERS Service Centre to resolve possible outstanding issues."',
      link: "https://srasp.ers.org.sz/tcc/",
    },
    {
      img: ECoustoms,
      icon: Customs,
      description:
        'All import and export commercial transactions require commodities on Customs declarations to be classified according to an appropriate tariff heading.',
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
            link: "/LegalandPolicy/Notes_Guidelines",
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
            text: "Current Vacancies",
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
      <div id="chatbot-container"></div>

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
        <div className="grid grid-cols-1  lg:grid-cols-3  md:grid-cols-2 gap-4 md:gap-8 lg:gap-2 mt-6 md:px-16 lg:px-16">
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
            <h3 className="px-6 pt-2 pb-2 text-subColor text-2xl font-medium border-b border-white">
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
              <div className="flex flex-col gap-4 font-medium text-black">

              {tabSection[0]?.items?.map((point, index) => (
              <div key={index} className="flex gap-1 items-start pb-2 font-medium text-black">
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
            <p className="px-6 pt-2 pb-2 text-subColor text-2xl font-medium border-b border-white">
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
              <div className="flex flex-col gap-4 font-medium text-black">
              {tabSection[1]?.items?.map((point, index) => (
              <div key={index} className="flex gap-1 items-start pb-2 font-medium text-black">
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
            <Image src={CSR} alt="..." className="h-[420px]" />
          </div>
          <div className="w-full md:w-1/2 py-10 xs:px-5 md:px-10 px-20 bg-[#DAD8CC]  md:h-[420px] xl:h-[420px]">
          <h1 className="text-subColor text-2xl md:text-4xl font-semibold">
            {/* <h1 className="text-5xl font-semibold text-subColor leading-snug"> */}
              Corporate Social Responsibility
            </h1>
            <div className="border w-72 md:w-72 xl:w-72 border-yellowish mt-1"></div>
            
            <p className="text-2xl leading-9 font-normal text-black mt-8 mb-12">
              The ERS&apos;s definition for Corporate Social Responsibility is the
              process of how the organization helps the Swazi society.
            </p>
            <form action="/CSR/CSR_Detail"  method="get" target="_blank" className="inline">
              <BlackButton type="submit" >See More Stories</BlackButton>
            </form>
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
      {/* <SocialMediaCard/> */}
      {/* <ChatboxMock/> */}

      {/*------------------Footer-------------------*/}

      <Footer />
    </>
  );
}
