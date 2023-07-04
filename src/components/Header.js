import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/icons/favicon.png";
import call from "../assets/icons/call.png";
import mail from "../assets/icons/mail.png";
import search from "../assets/icons/search.png";
import searchIcon from "../assets/icons/search-icon.png";

export default function Header() {
  const router = useRouter();
  let services = ["/VAT", "/IncomeTax", "/CustomExcise"];
  let forms = ["/VatForms", "/IncomeForms", "/CustomsForms"];
  let media = ["/news", "/gallery", "/videos", "/NewsDetails"];

  // const [isAboutOpen, setAboutOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isFormsOpen, setFormsOpen] = useState(false);
  const [isMediaOpen, setMediaOpen] = useState(false);
  // const [isContactOpen, setContactOpen] = useState(false);

  const [isOpen, setSearchOpen] = useState(false);
  function toggleSearch() {
    setSearchOpen(!isOpen);
  }

  const [windowScroll, setwindowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const threshold = 0;
      setwindowScroll(
        yOffset > threshold && yOffset - 0 > threshold ? "hidden" : "block"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="w-full bg-white">
        <div className="flex justify-between px-10">
          <div className="pt-[6px]">
            <Link href={"/"}>
              <Image src={logo} alt="ERS" width={120} />
            </Link>
          </div>
          <div className="flex flex-col justify-between pt-1">
            <Link href={"/Error"}>
              <div className="flex text-mainColor float-right gap-10 font-normal items-center justify-end">
                <div>
                  <Image src={mail} alt="mail" className="mr-2 inline" />
                  <span>info@ers.org.sz</span>
                </div>
                <div>
                  <Image src={call} alt="call" className="mr-2 inline" />
                  <span>(+268) 2406 4050</span>
                </div>
              </div>
            </Link>

            <div className="flex space-x-4 items-center">
              <ul className="flex flex-row border-black/40 space-x-5">
                <li className="relative">
                  <div className="items-center">
                    <button
                    // className=""
                    // onMouseOver={() => {
                    //   setAboutOpen(!isAboutOpen);
                    // }}
                    // onMouseLeave={() => {
                    //   setAboutOpen(false);
                    // }}
                    >
                      <Link href={"/about"}>
                        <h3
                          className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor mr-3 ${router.asPath === "/about"
                            ? "text-[#2F3192]"
                            : "text-black/80"
                            }`}
                        >
                          About Us
                          {/* <span style={{ float: "right" }}>
                          <RiArrowDropDownLine size={25} />
                        </span> */}
                        </h3>
                      </Link>
                    </button>
                    {/* <div
                      className={`absolute z-10 font-normal ${
                        isAboutOpen ? "block" : "hidden"
                      }`}
                    >
                    </div> */}
                  </div>
                </li>
                <li className="relative main">
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        setServicesOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${services.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Services
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal ${isServicesOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setServicesOpen(true);
                        }}
                        onMouseLeave={() => {
                          setServicesOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${isServicesOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* Left side of Menu */}
                          {/* <div className="bg-subColor pt-5 max-w-lg min-w-max sub_items_text_color lg:w-[30%] 2xl:w-[20%]"> */}
                          <div className=" bg-subColor flex flex-col lg:w-[30%] 2xl:w-[20%] pt-5 sub_items_text_color">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-8 mb-3">
                              What{"'"}s New
                            </h1>
                            {/* first News */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                UNMASK TAX CORRUPTION:
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3 ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* second news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                Click here to see VAT Schedule
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3 "
                              >
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* third news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                ERS Merchandise Trade Report
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                              <p className="px-8 text-sm leading-6 font-normal text-right pb-12 viewMoreColor">
                                View More
                              </p>
                            </div>
                          </div>
                          {/* </div> */}
                          {/* Right side of Menu */}
                          <div className="pt-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                            <div className="flex flex-col" >
                              <div >
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  VAT
                                </h1>
                                <Link href={"/VAT/EstwaniVat"} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish min-w-fit ">
                                    Eswatini VAT
                                  </p>
                                </Link>
                                <br />
                                <Link href={'/Registration'} className="line">
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Registration
                                  </p>

                                </Link>
                                <br />
                                <Link href={'/ExemptSupplies'} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish  ">
                                    Exempt Supplies of Goods & Services
                                  </p>
                                </Link>
                                <br />
                                <Link href={'/ReverseCharge'} className="line">
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Reverse Charge Concept
                                  </p>

                                </Link>
                                <br />
                                <Link href={'/VAT/ZeroRated'} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish ">
                                    Zero Rated goods & Services
                                  </p>
                                </Link>
                                <br />
                              </div>

                              <div>
                                <h1 className="text-xl font-bold leading-8 mt-12 mb-3">
                                  Legal and Policy
                                </h1>
                                <Link href={'/LegalandPolicy/TaxLegislation'} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer  hover:text-yellowish ">
                                    Tax Legislations
                                  </p>
                                </Link>
                                <br />

                                <Link href={'/LegalandPolicy/Taxations'} className="line">
                                  <p className="text-sm leading-6 font-normal my-1 cursor-pointer hover:text-yellowish ">
                                    Double Taxation Agreements
                                  </p>
                                </Link>
                                <br />

                                <Link href={'/LegalandPolicy/VatRegulations'} className="line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish ">
                                    VAT Regulations
                                  </p></Link>
                                <br />

                                <Link href={'/LegalandPolicy/Notes_Guidelines'} className="line">
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
                              <Link href={"/IncomeTax"} className="line">
                                <p className="text-sm font-normal cursor-pointer  hover:text-yellowish ">
                                  Eswatini Income Tax
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/RatesandThres'} className="line">
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Rates and Thresholds
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/WithholdingTax'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Withholding Taxes
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/Taxationandbenefit'} className="line">
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Taxation of Benefits
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/IncomeTaxReturn'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Income Tax Returns
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/Retirement'} className="line">
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Retirement and Redundancy
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/SelfAssessment'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Self Assessment
                                </p>
                              </Link>
                              <br />
                              <Link href={'/IncomeTax/Paye'} className="line">
                                <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  PAYE - Quick Guide
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/PartTime'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Part Time Employees
                                </p>
                              </Link>
                              <br />

                              <Link href={'/IncomeTax/GuidePublicOfficer'} className="line">
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Guide on the Appointment of a  Public
                                  Officer
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

                              <Link href={'/CustomExcise/GeneralRules'} className="line">
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

                              <Link href={'/CustomExcise/CustomProcedure'} className="line">
                                <p className="text-sm  font-normal my-2 cursor-pointer hover:text-yellowish ">
                                  Customs Procedure Codes
                                </p>
                              </Link>
                              <br />

                              <Link href={'/CustomExcise/BondedPage'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Bonded Warehouses/Rebate Store
                                </p>
                              </Link>
                              <br />

                              <p className="text-sm font-normal my-2 cursor-pointer hover:text-yellowish ">
                                Free Trade and Preferential  Agreements
                              </p>

                              <Link href={'/CustomExcise/Excisepage'} className="line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                  Excise
                                </p>
                              </Link>
                              <br />

                              <Link href={'/CustomExcise/CustomWorksheet'} className="line">
                                <p className="text-sm font-normal mt-2 cursor-pointer hover:text-yellowish ">
                                  Customs Worksheet
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
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setFormsOpen(!isFormsOpen);
                      }}
                      onMouseLeave={() => {
                        setFormsOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${forms.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Forms
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal ${isFormsOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setFormsOpen(true);
                        }}
                        onMouseLeave={() => {
                          setFormsOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${isFormsOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* Left side of Menu */}
                          <div className=" bg-subColor flex flex-col lg:w-[30%] 2xl:w-[20%] pt-5 sub_items_text_color">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-8 mb-3">
                              What{"'"}s New
                            </h1>
                            {/* first News */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                UNMASK TAX CORRUPTION:
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* second news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                Click here to see VAT Schedule
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* third news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                ERS Merchandise Trade Report
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                              <p className="px-8 text-sm leading-6 font-normal text-right pb-12 viewMoreColor">
                                View More
                              </p>
                              
                            </div>
                          </div>
                          {/* Right Side of Menu */}
                          <div className="pt-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                            <div className="flex flex-col sub_items_text_color">
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                VAT Forms
                              </h1>
                              <div>
                                <Link href={"/VatForms"} className="lineclamping line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish  text-slate-400 checking">
                                    VAT Refunds for Diplomats,  Diplomatic
                                    and Consular Missions & International
                                    Organizations Printable
                                  </p>
                                </Link>
                                <Link href={"/VatForms"} className="lineclamping line">
                                  <p className="text-sm leading-6 font-normal my-3 cursor-pointer hover:text-yellowish  checking">
                                    VAT Refunds for Diplomats,  Diplomatic
                                    and Consular  Missions & International{" "}
                                    Organizations
                                  </p>
                                </Link>
                                <Link href={"/VatForms"} className="lineclamping line">
                                  <p className="text-sm leading-6 font-normal cursor-pointer hover:text-yellowish  checking">
                                    VAT Return Printable
                                  </p>
                                </Link>
                                <h6 className="text-sm leading-6 font-bold mt-3 cursor-pointer">
                                  View More
                                </h6>
                              </div>
                            </div>

                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Income Tax Forms
                              </h1>
                              <Link href={"/IncomeForms"} className="lineclamping line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish  checking">
                                  Notice of Objection  Form Printable
                                </p>
                              </Link>
                              <Link href={"/IncomeForms"} className="lineclamping line">
                                <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish  checking">
                                  TIN Registration Form Company
                                </p>
                              </Link>
                              <Link href={"/IncomeForms"} className="lineclamping line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish  checking">
                                  Taxpayer Profile Maintenance  Form
                                  Individuals
                                </p>
                              </Link>
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                View More
                              </h6>

                            </div>
                            <div>
                              <h1 className="text-xl font-bold leading-8 mb-3 ">
                                Customs & Excise
                              </h1>
                              <Link href={"/CustomsForms"} className="lineclamping line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish  checking">
                                  CE 73 Application For Special {" "}
                                  Attendance
                                </p>
                              </Link>
                              <Link href={"/CustomsForms"} className="lineclamping line">
                                <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish  checking">
                                  CE 101 Declaration on Transfer of {" "}
                                  Residence
                                </p>
                              </Link>
                              <Link href={"/CustomsForms"} className="lineclamping line">
                                <p className="text-sm font-normal cursor-pointer hover:text-yellowish  checking">
                                  CE66 Application For Refund
                                </p>

                              </Link>
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                View More
                              </h6>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="relative main">
                  <div className="items-center">
                    <button
                      onMouseOver={() => {
                        setMediaOpen(true);
                      }}
                      onMouseLeave={() => {
                        setMediaOpen(false);
                      }}
                    >
                      <h3
                        className={`block pb-4 text-lg leading-5 font-medium hover:text-mainColor ${media.includes(router.asPath)
                          ? "text-[#2F3192]"
                          : "text-black/80"
                          }`}
                      >
                        Media{" "}
                        <span style={{ float: "right" }} className="arrow">
                          <RiArrowDropDownLine size={25} />
                        </span>
                      </h3>
                    </button>
                    <div
                      className={`absolute z-10 font-normal w-24 bg-mainColor ${isMediaOpen ? "block" : "hidden"
                        }`}
                    >
                      <ul
                        className={`text-sm font-sans text-white ${windowScroll}`}
                        onMouseOver={() => {
                          setMediaOpen(true);
                        }}
                        onMouseLeave={() => {
                          setMediaOpen(false);
                        }}
                      >
                        <div
                          className={`fixed left-10 right-10 font-normal w-[94%] bg-mainColor flex ${isMediaOpen ? "block" : "hidden"
                            }`}
                        >
                          {/* left side of menu */}
                          <div className=" bg-subColor flex flex-col lg:w-[30%] 2xl:w-[20%] pt-5 sub_items_text_color">
                            <h1 className="text-xl font-bold text-yellowish leading-8 px-8 mb-3">
                              What{"'"}s New
                            </h1>
                            {/* first News */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                UNMASK TAX CORRUPTION:
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* second news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                Click here to see VAT Schedule
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                            </div>
                            {/* third news */}
                            <div className="flex flex-col">
                              <h3 className="px-8 text-sm leading-6 font-bold">
                                ERS Merchandise Trade Report
                              </h3>
                              <p className="px-8 text-sm leading-6 font-normal mb-3  ">
                                The ERS is calling all taxpayers to  “unmask
                                tax corruption” by reporting such cases via
                                our TOLL  FREE line..
                              </p>
                              <hr className="border-white/30 my-5" />
                              <p className="px-8 text-sm leading-6 font-normal text-right pb-12 viewMoreColor">
                                View More
                              </p>
                            </div>
                          </div>
                          {/* Right Side of menu */}
                          <div className="pt-5 px-12 grid grid-cols-3 gap-32 my-1 sub_items_text_color w-[80%]" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                            <div className="flex flex-col sub_items_text_color">

                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  News
                                </h1>
                                <div>
                                  <div>
                                    <Link href={"/news"} className="line">
                                      <p className="text-sm font-normal mt-3 cursor-pointer hover:text-yellowish ">
                                        Authorised Economic
                                        Operator Accreditation
                                      </p>
                                    </Link>
                                  </div>
                                  <div>
                                    <Link href={"/news"} className="line">
                                      <p className="text-sm font-normal mt-3 cursor-pointer hover:text-yellowish ">
                                        ERS Donates To Ekululameni Center
                                      </p>
                                    </Link>
                                  </div>
                                  <div>
                                    <Link href={"/news"} className="line">
                                      <p className="text-sm font-normal mt-3 cursor-pointer hover:text-yellowish">
                                        Pay your Tax on Time
                                      </p>
                                    </Link>
                                  </div>
                                </div>
                                <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                  View More
                                </h6>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <div>
                                <h1 className="text-xl font-bold leading-8 mb-3">
                                  Gallery
                                </h1>
                                <div>
                                  <Link href={"/gallery"} className="line">
                                    <p className="text-sm font-normal cursor-pointer  hover:text-yellowish ">
                                      Income Tax Mobile  Clinic
                                    </p>
                                  </Link>
                                </div>
                                <div>
                                  <Link href={"/gallery"} className="line">
                                    <p className="text-sm font-normal mt-3 cursor-pointer hover:text-yellowish ">
                                      PM Submits Income Tax  Returns
                                    </p>
                                  </Link>
                                </div>
                                <div>
                                  <Link href={"/gallery"} className="line">
                                    <p className="text-sm  mt-3 cursor-pointer  hover:text-yellowish ">
                                      Lomahasha Border  Hours Extension
                                    </p>
                                  </Link>
                                </div>
                                <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                  View More
                                </h6>
                              </div>
                            </div>

                            <div className="flex flex-col">
                              <h1 className="text-xl font-bold leading-8 mb-3">
                                Videos
                              </h1>
                              <div>
                                <Link href={"/videos"} className="line">
                                  <p className="text-sm font-normal cursor-pointer hover:text-yellowish ">
                                    ERS Public
                                    Meeting in Ezulmini
                                  </p>
                                </Link>
                              </div>
                              <div>
                                <Link href={"/videos"} className="line">
                                  <p className="text-sm font-normal my-3 cursor-pointer hover:text-yellowish ">
                                    Pay your Tax
                                    in Three Steps
                                  </p>
                                </Link>
                              </div>
                              <h6 className="text-sm font-bold mt-3 cursor-pointer  ">
                                View More
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
                    {/* <div
                      className={`absolute z-10 font-normal ${
                        isContactOpen ? "block" : "hidden"
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
                          className={`absolute z-10 font-normal w-24 bg-mainColor ${
                            isContactOpen ? "block" : "hidden"
                          }`}
                        ></div>
                      </ul>
                    </div> */}
                  </div>
                </li>
              </ul>
              <div className="border-r-2 border-[#999999] h-5 mb-4"></div>

              <div className={`${isOpen ? "search-container-open" : ""}`}>
                <button
                  className="flex gap-3 items-center search-toggle mb-4"
                  onClick={toggleSearch}
                >
                  <div>
                    <Image src={search} alt="search" height={17} width={17} />
                  </div>
                  <h3
                    className={`text-lg leading-5 font-semibold hover:text-mainColor ${isOpen ? "text-[#2F3192]" : "text-black/80"
                      }`}
                  >
                    Search
                  </h3>
                </button>
                <div className={`search-input px-5 py-3 hidden`}>
                  <h1 className="inline-block text-lg font-semibold text-white">
                    SEARCH
                  </h1>
                  <input
                    type="text"
                    placeholder="Keyword..."
                    className="py-[10px] px-4 w-[350px] focus:outline-none text-base font-normal ml-5 mr-3"
                  ></input>
                  <button className="p-2">
                    <Image
                      src={searchIcon}
                      alt="search"
                      height={17}
                      width={17}
                      className="inline-block"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
