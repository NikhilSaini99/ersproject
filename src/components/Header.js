import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import WhatnewComponent from "./shared/WhatnewComponent";
import call from "../assets/icons/call.png";
import logo from "../assets/icons/ERS_Logo.png";
import mail from "../assets/icons/mail.png";
import { styled } from "@mui/material/styles";
import { useFetch } from "@/pages/api/api";
import { useMemo } from "react";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Button, IconButton, InputAdornment, TextField , Box } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";


export default function Header(props) {
  // const {MenuData, menuLoading} = props;
  const router = useRouter();
  const menuRef = useRef(null);
  const servicesRef = useRef(null);
const formsRef = useRef(null);
const mediaRef = useRef(null);
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/whateNew");
  const {
    data: MenuData,
    fetchAPI: MenuCall,
    isLoading: menuLoading,
  } = useFetch("get", "/api/menuService/web");
  let services = ["/VAT", "/IncomeTax", "/CustomExcise"];
  let forms = ["/VatForms", "/IncomeForms", "/CustomsForms"];
  let media = ["/news", "/gallery", "/videos", "/NewsDetails"];

  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isFormsOpen, setFormsOpen] = useState(false);
  const [isMediaOpen, setMediaOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [menuService, setMenuService] = useState({
    formData: [],
    galleryImagesData: [],
    newsData: [],
    videosData: [],
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchAPI();
    MenuCall();
  }, [fetchAPI, MenuCall]);

  useMemo(() => {
    data;
    MenuData;
  }, [data, MenuData]);

  const categories = ["Customs & Excise", "Income Tax", "VAT"];

  const { data: { formData, galleryImagesData, newsData, videosData } = {} } =
    MenuData || {};

  function setLimitItem(filteredData) {
    setMenuService({
      ...menuService,
      formData: filteredData,
      galleryImagesData: galleryImagesData.rows.slice(0, 5),
      newsData: newsData.rows.slice(0, 5),
      videosData: videosData.rows.slice(0, 5),
    });
  }

  useMemo(() => {
    if (
      !menuLoading &&
      formData &&
      galleryImagesData &&
      newsData &&
      videosData
    ) {
      const filteredData = categories.reduce((acc, category) => {
        const categoryData = formData
          .filter((item) => item.category === category)
          .slice(0, 5);
        return {
          ...acc,
          [category.toLowerCase().replace(/&|\s/g, "_")]: categoryData,
        };
      }, {});
      setLimitItem(filteredData);
    }
  }, [formData, galleryImagesData, newsData, videosData]);

  const [windowScroll, setwindowScroll] = useState("hidden");
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const threshold = 0;
      setwindowScroll(yOffset > threshold ? "hidden" : "block");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  useEffect(() => {
    function handleClickOutside(event) {
      if (
       
        !servicesRef.current.contains(event.target) &&
        !formsRef.current.contains(event.target) &&
        !mediaRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
        setFormsOpen(false);
        setMediaOpen(false);
      }
    }
  
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesRef, formsRef, mediaRef]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("data", searchValue)
    router.push({
      pathname: "/SearchResults",
      query: { q: searchValue },
    });
  };

  return (
    <>
      <nav className="w-full bg-white sticky top-0 z-50 shadow-xl">
        <div className="flex justify-between px-10">
          <div className="py-[6px]">
            <Link href={"/"}>
              <Image src={logo} alt="ERS" width={120} />
            </Link>
          </div>

          <div className="flex flex-col justify-between pt-1">
            <Link href={"/Error"}>  </Link>
              <div className="flex text-mainColor float-right gap-10 font-normal items-center justify-end">
              <Box className="RightSide" sx={{ display: 'flex', gap: { xs: '0.8rem', lg: '1.5rem' }, pt: '0rem' }}>
            <Link href="https://www.facebook.com/profile.php?id=100094062796048" target="_blank"><FaFacebookF className="headerIcons" /></Link>
              <Link href="https://www.youtube.com/channel/UCK9y_OZHNmDPwYveSdy5EOw" target="_blank"><IoLogoYoutube className="headerIcons" /></Link>
              <Link href="https://www.linkedin.com/company/100124155/admin/feed/posts/" target="_blank"><GrLinkedinOption className="headerIcons" /></Link>
            </Box>

                <div>
                <a href="mailto:someone@something.com?subject=your title&body=TThe message">
                  <Image src={mail} alt="mail" className="mr-2 inline" />
                  <span>info@ers.org.sz</span>
                </a>
                  
                </div>
                <div>
                  <Image src={call} alt="call" className="mr-2 inline" />
                  <span>(+268) 2406 4050</span>
                </div>
              </div>
          
            <div className="flex space-x-4 items-center">
              <ul className="flex flex-row border-black/40 space-x-5">
                <li className="relative">
                  <div className="items-center">
                    <button
                    >
                      <Link href={"/About"}>
                        <h3
                          className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor mr-3 ${router.asPath === "/About"
                            ? "text-[#2F3192]"
                            : "text-black/80"
                            }`}
                        >
                          About Us
                        </h3>
                      </Link>
                    </button>
                  </div>
                </li>
                <li className="relative main">
                  <div ref={servicesRef} className="items-center relative">
                    <button
                      onClick={() => {
                        setServicesOpen(!isServicesOpen);
                        setFormsOpen(false);
                        setMediaOpen(false);
                      }}
                    >
                    <div className="flex gap-1 items-center">
                      <h3
                        className={`block text-lg leading-5 font-medium hover:text-mainColor transition-colors duration-200 ${services.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Services
                      </h3>
                      <ExpandMoreIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        transition: isServicesOpen
                          ? "transform 0.3s ease-in-out"
                          : "all 0.3s ease",
                        transform: isServicesOpen
                          ? "rotate(180deg)"
                          : undefined,
                      }}
                    />
                      </div>
                    </button>

                 
                    <div
                      className={`absolute z-10  font-normal ${isServicesOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul className={`text-sm font-sans text-white relative`}>
                        <div
                          className={`fixed top-[93px] left-10 right-10 font-normal w-[94%]  bg-mainColor flex  min-min-h-[36rem]  ${isServicesOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* Left side of Menu */}
                          <WhatnewComponent whatNewsData={data} />
                          {/* Right side of Menu */}
                          <div
                            className="py-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]"
                            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                          >
                            <div className="flex flex-col">
                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  VAT
                                </h1>
                                <Link href={"/VAT/Eswatini"} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish min-w-fit ">
                                    Eswatini VAT
                                  </p>
                                </Link>
                                <br />
                                <Link href={"/Registration"} className="line">
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Registration
                                  </p>
                                </Link>
                                <br />
                                <Link href={"/ExemptSupplies"} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish  ">
                                    Exempt Supplies of Goods & Services
                                  </p>
                                </Link>
                                <br />
                                <Link href={"/ReverseCharge"} className="line">
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Reverse Charge Concept
                                  </p>
                                </Link>
                                <br />
                                <Link href={"/VAT/ZeroRated"} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish ">
                                    Zero Rated Goods & Services
                                  </p>
                                </Link>
                                <br />
                                <Link href={"https://vatrefundagency.co.za/check-refund-progress/"} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish ">
                                  VAT Refund With SARS
                                  </p>
                                </Link>
                                <br />
                              </div>
                              

                              <div>
                                <h1 className="text-xl font-bold leading-8 mt-12 mb-3">
                                  Legal and Policy
                                </h1>
                                <Link
                                  href={"/LegalandPolicy/TaxLegislation"}
                                  className="line"
                                >
                                  <p className="text-sm leading-6 font-normal cursor-pointer  hover:text-yellowish ">
                                    Tax Legislations
                                  </p>
                                </Link>
                                <br />

                                <Link
                                  href={"/LegalandPolicy/Taxations"}
                                  className="line"
                                >
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Double Taxation Agreements
                                  </p>
                                </Link>
                                <br />

                                <Link
                                  href={"/LegalandPolicy/VatRegulations"}
                                  className="line"
                                >
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish ">
                                    VAT Regulations
                                  </p>
                                </Link>
                                <br />

                                <Link
                                  href={"/LegalandPolicy/Notes_Guidelines"}
                                  className="line"
                                >
                                  <p className="text-sm leading-6 font-normal mt-1 cursor-pointer hover:text-yellowish ">
                                    Practice Notes and Guidelines
                                  </p>
                                </Link>
                                <br />
                              </div>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3 ">
                                Income Tax
                              </h1>
                              <Link
                                href={"/IncomeTax/EstwaniIncomeTax"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer  hover:text-yellowish ">
                                  Eswatini Income Tax
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/RatesandThres"}
                                className="line"
                              >
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Rates and Thresholds
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/Withholding"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Withholding Taxes
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/Taxationandbenefit"}
                                className="line"
                              >
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Taxation of Benefits
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/IncomeTaxReturn"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Income Tax Returns
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/Retirement"}
                                className="line"
                              >
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Retirement and Redundancy
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/SelfAssessment"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Self Assessment
                                </p>
                              </Link>
                              <br />
                              <Link href={"/IncomeTax/Paye"} className="line">
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  PAYE - Quick Guide
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/PartTime"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Part Time Employees
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/GuidePublicOfficer"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Guide on the Appointment of a Public Officer
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/IncomeTax/TaxationDiplomats"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Taxation of Diplomats and Consul
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/IncomeTax/Spreadsheet"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  PAYE Spreadsheet
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/IncomeTax/Guidenewbusiness"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Step-By Step Guide for New Businesses
                                </p>
                              </Link>
                              <Link
                                href={"/IncomeTax/ITRNotice"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Income Tax Return Submission Notice 2022
                                </p>
                              </Link>
                              <br />
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Customs & Excise
                              </h1>
                              <Link href={"/CustomExcise"} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Eswatini Customs
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/CustomExcise/GeneralRules"}
                                className="line"
                              >
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  General Import & Export Rules
                                </p>
                              </Link>
                              <br />

                              <Link href={"/customs"} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Customs Tariff
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/CustomExcise/CustomProcedure"}
                                className="line"
                              >
                                <p className="text-sm  font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Customs Procedure Codes
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/CustomExcise/BondedPage"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Bonded Warehouses & Rebate Store
                                </p>
                              </Link>

                              <br />
                              <Link
                                href={"/CustomExcise/FreeTrade"}
                                className="line"
                              >
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Free Trade and Preferential Agreements
                                </p>
                              </Link>

                              <br />
                              <Link
                                href={"/CustomExcise/Excisepage"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Excise
                                </p>
                              </Link>
                              <br />

                              <Link
                                href={"/CustomExcise/CustomWorksheet"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Customs Worksheet
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/CustomAgents"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Customs Clearing Agents
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/TraderPrograme"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Preferred Trader Programme
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/OfficeandOperating"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Offices and Operating Hours
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/RebateConcession"}
                                className="line"
                              >
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Rebate Concessions for New / Returning
                                  Residents
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/SekululaVat"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Sekulula VAT
                                </p>
                              </Link>
                              <br />
                              <Link href={"/CustomExcise/AEO"} className="line">
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Authorised Economic Operator (AEO)
                                </p>
                              </Link>
                              <br />
                              <Link
                                href={"/CustomExcise/EuRegistered"}
                                className="line"
                              >
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  EU Registered Exporter System
                                </p>
                              </Link>
                              <br />
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative main">
                  <div  ref={formsRef} className="items-center relative ">
                    <button
                      onClick={() => {
                        setFormsOpen(!isFormsOpen);
                        setServicesOpen(false);
                        setMediaOpen(false);
                      }}
                    >
                    <div className="flex gap-1 items-center">
                      <h3
                        className={`block  text-lg leading-5 font-medium hover:text-mainColor transition-colors ${forms.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Forms
                      </h3>
                      <ExpandMoreIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        transition: isFormsOpen
                          ? "transform 0.3s ease-in-out"
                          : "all 0.3s ease",
                        transform: isFormsOpen
                          ? "rotate(180deg)"
                          : undefined,
                      }}
                    />
                      </div>
                    </button>
                    

                    <div
                      className={`absolute z-10  font-normal ${isFormsOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className={`text-sm  font-sans text-white relative `}
                      >
                        <div
                          className={`fixed top-[93px]  left-10 right-10 font-normal w-[94%]  bg-mainColor flex  min-h-[36rem] ${isFormsOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* Left side of Menu */}
                          <WhatnewComponent whatNewsData={data} />
                          {/* Right Side of Menu */}
                          <div
                            className="py-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]"
                            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                          >
                            <div className="flex flex-col sub_items_text_color">
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                VAT Forms
                              </h1>
                              <div>
                              {menuService.formData &&
                                menuService?.formData?.vat?.map((item) => {
                                  return (
                                    <div key={item?.id}>
                                      <Link href={"/VatForms"} className="line">
                                        <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish  checking">
                                          {item?.formName}
                                        </p>
                                      </Link>
                                    </div>
                                  );
                                })}
                                </div>
                              <h6 className="text-sm leading-6 font-bold mt-3 cursor-pointer">
                                <Link href={"/VatForms"} className="line">
                                  View More
                                </Link>
                              </h6>
                            </div>

                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Income Tax Forms
                              </h1>
                              {menuService.formData &&
                                menuService?.formData?.income_tax?.map(
                                  (item) => {
                                    return (
                                      <div key={item?.id}>
                                        <Link
                                          href={"/IncomeForms"}
                                          className="line"
                                        >
                                          <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish  checking">
                                            {item?.formName}
                                          </p>
                                        </Link>
                                      </div>
                                    );
                                  }
                                )}
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                <Link href={"/IncomeForms"} className="line">
                                  View More
                                </Link>
                              </h6>
                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3 ">
                                Customs & Excise
                              </h1>
                              {menuService.formData &&
                                menuService?.formData?.customs___excise?.map(
                                  (item) => {
                                    return (
                                      <div key={item?.id}>
                                        <Link
                                          href={"/CustomsForms"}
                                          className="line"
                                        >
                                          <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish  checking">
                                            {item?.formName}
                                          </p>
                                        </Link>
                                      </div>
                                    );
                                  }
                                )}
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                <Link href={"/CustomsForms"} className="line">
                                  View More
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative main">
                  <div ref={mediaRef} className="items-center relative ">
                    <button
                      onClick={() => {
                        setMediaOpen(!isMediaOpen);
                        setServicesOpen(false);
                        setFormsOpen(false);
                      }}
                    
                    >
                     <div className="flex gap-1 items-center">
                      <h3
                        className={`block  text-lg leading-5 font-medium hover:text-mainColor ${media.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Media{" "}
                        {/* <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span> */}
                      </h3>
                      <ExpandMoreIcon
                      sx={{
                        width: "24px",
                        height: "24px",
                        transition: isMediaOpen
                          ? "transform 0.3s ease-in-out"
                          : "all 0.3s ease",
                        transform: isMediaOpen
                          ? "rotate(180deg)"
                          : undefined,
                      }}
                    />
                      </div>
                    </button>
                    
                    <div
                      className={`absolute  z-10  font-normal w-24 bg-mainColor ${isMediaOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white relative `}
                     
                      >
                        <div
                          className={`fixed top-[93px] left-10 right-10 font-normal w-[94%]  bg-mainColor min-h-[36rem] flex ${isMediaOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* left side of menu */}
                          <WhatnewComponent whatNewsData={data} />
                          {/* Right Side of menu */}
                          <div
                            className="py-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]"
                            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
                          >
                            <div className="flex flex-col sub_items_text_color">
                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-0">
                                  News
                                </h1>
                                <div>
                                  {menuService.newsData &&
                                    menuService?.newsData?.map((item) => {
                                      return (
                                        <div key={item?.id}>
                                          <Link
                                            href={{
                                              pathname: "/NewsDetails",
                                              query: {
                                                id: item.id,
                                                apiURl: "/api/news",
                                              },
                                            }}
                                            className="line"
                                          >
                                            <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish ">
                                              {item.newsName}
                                            </p>
                                          </Link>
                                        </div>
                                      );
                                    })}
                                </div>
                                <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                  <Link href={`/news`} className="line">
                                    View More
                                  </Link>
                                </h6>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  Gallery
                                </h1>
                                {menuService.galleryImagesData &&
                                  menuService?.galleryImagesData?.map(
                                    (item) => {
                                      return (
                                        <div key={item?.id}>
                                          <Link
                                            href={`/gallery`}
                                            className="line"
                                          >
                                            <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish ">
                                              {item.groupName}
                                            </p>
                                          </Link>
                                        </div>
                                      );
                                    }
                                  )}
                                <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                  <Link href={`/gallery`} className="line">
                                    View More
                                  </Link>
                                </h6>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Videos
                              </h1>
                              {menuService.videosData &&
                                menuService?.videosData?.map((item) => {
                                  return (
                                    <div key={item?.id}>
                                      <Link href={`/videos`} className="line">
                                        <p className="text-sm mt-2 font-normal cursor-pointer hover:text-yellowish ">
                                          {item.name}
                                        </p>
                                      </Link>
                                    </div>
                                  );
                                })}
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                <Link href={`/videos`} className="line">
                                  View More
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative">
                  <div className="items-center">
                    <button
                    // onMouseOver={() => {
                    //   setContactOpen(true);
                    // }}
                    // onMouseLeave={() => {
                    //   setContactOpen(false);
                    // }}
                    >
                      <Link href={"/Contact"}>
                        <h3
                          className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${router.asPath === "/Contact"
                            ? "text-[#2F3192]"
                            : "text-black/80"
                            }`}
                        >
                          Contact Us
                          {/* <span style={{ float: "right" }}>
                            <RiArrowDropDownLine size={25} />
                          </span> */}
                        </h3>
                      </Link>
                    </button>
                    <div
                      className={`absolute z-10 font-normal ${isContactOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className="text-sm font-sans text-white pt-2"
                        onMouseOver={() => {
                          setContactOpen(true);
                        }}
                        onMouseLeave={() => {
                          setContactOpen(false);
                        }}
                      >
                        <div
                          className={`absolute z-10 font-normal w-24 bg-mainColor ${isContactOpen ? "block" : "hidden"
                            }`}
                        ></div>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="border-r-2 border-[#999999] h-5 mb-4"></div>

              {/* <Search className="pb-4">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Search> */}

              <form onSubmit={handleSearchSubmit} style={{ marginBottom: "1rem"}}>
              <TextField variant="outlined" placeholder="Search..." 
                onChange={(e) => setSearchValue(e.target.value)}
                sx={{
                  
    color: "inherit",
    "& .MuiOutlinedInput-input": {
      padding: "1em",
      backgroundColor: "#5D5D5D0A",
      width: "100%",
     
    },
    "& .MuiInputBase-input": {
      height: "5px !important"
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
                }}
                InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton type="submit" sx={{ "&: hover": {background: "transparent", color: (theme)=>theme.palette.primary.main} }}>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
                />
                </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
