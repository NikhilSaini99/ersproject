import React from "react";
import Image from "next/image";
import Foot from "../assets/images/footer-head.png";
import { RiMailFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { SiHuawei, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { BsTelephoneFill, BsApple } from "react-icons/bs";

export default function Footer() {
  return (
    <>
     <section className="bg-mainColor text-white w-full relative">
  <div className="relative flex">
    <Image src={Foot} alt="..." />
    <div className="absolute flex justify-between w-full py-5 px-14">
      <div className="">
        <h1 className="text-3xl font-semibold">Connect with Us</h1>
        <p className="text-base mt-1 font-normal leading-5">
          Stay updated with ERS news, data, publications, projects, events and
          opportunities.
        </p>
      </div>

      <div className="flex items-center gap-5 text-4xl ">
        <h2>
          <RiMailFill className="hover:text-gray-400 cursor-pointer" />
        </h2>
        <h2>
          <SiTwitter className="hover:text-gray-400 cursor-pointer" />
        </h2>
        <h2>
          <IoLogoYoutube className="hover:text-gray-400 cursor-pointer" />
        </h2>
        <h2>
          <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
        </h2>
        <h2>
          <FiInstagram className="hover:text-gray-400 cursor-pointer" />
        </h2>
        <h2>
          <GrLinkedinOption className="hover:text-gray-400 cursor-pointer" />
        </h2>
      </div>
    </div>
  </div>

  <div className="px-14">
    <div className="py-8 flex flex-col gap-20 w-full">
      <div className="flex flex-col gap-5 w-[40%]">
        <div className="flex flex-col gap-4 pt-4 pb-10 border-y-2 border-yellowish">
          <h1 className="text-2xl font-medium">About ERS</h1>
          <p className="text-base font-normal text-justify leading-5">
            The Eswatini Revenue Service (ERS) is a semi-autonomous revenue
            administration agency, established through the Revenue Authority Act
            No. 1 of 2008. It operates within the broad framework of Government
            but outside of the civil service.
          </p>
        </div>

        <div className="flex justify-between gap-3">
          <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
            <BsApple className="text-4xl" />
            <div>
              <div className="text-[10px] text-start">Download on the</div>
              <div className="text-lg font-semibold leading-4">
                App Store
              </div>
            </div>
          </button>

          <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
            <div>
              <svg viewBox="30 336.7 120.9 129.2" width="28">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      />
                      <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                />
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                />
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                />
              </svg>
            </div>
            <div>
              <div className="text-[10px] text-start">GET IT ON</div>
              <div className="text-base font-semibold leading-4">
                Google Play
              </div>
            </div>
          </button>

          <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
            <SiHuawei className="text-4xl text-[#F7394D]" />
            <div>
              <div className="text-[10px] text-start">EXPLORE IT ON</div>
              <div className="text-lg font-semibold leading-4">
                AppGallery
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t-2 border-yellowish pt-4 w-[30%]">
        <h1 className="text-2xl font-medium">Address</h1>
        <div>
          <h1 className="flex items-center gap-3">
            <p>
              <ImHome3 className="text-xl" />
            </p>
            <p>Portion 419 of Farm 50, Along MR103</p>
          </h1>
          <h1 className="flex items-center gap-3 my-2">
            <p>
              <RiMailFill className="text-xl" />
            </p>{" "}
            <p>info@ers.org.sz</p>
          </h1>
          <h1 className="flex items-center gap-3">
            <p>
              <BsTelephoneFill className="text-xl" />
            </p>{" "}
            <p>(+268) 2406 4050</p>
          </h1>
          <h1 className="flex items-center gap-3 my-2">
            <p>
              <BsTelephoneFill className="text-xl" />
            </p>{" "}
            <p>[+268] 2406 4000</p>
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t-2 border-yellowish w-[30%] pt-4">
          <h1 className="text-2xl font-medium">Opening Hours</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-12">
              <p className="text-base font-normal">Mon - Fri</p>
              <p className="text-base font-normal">8am - 5pm</p>
            </div>
            <div className="flex gap-12">
              <p className="text-base font-normal">Sat - Sun</p>
              <p className="text-base font-normal">Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-yellowish py-5 text-base font-normal flex gap-10">
        <p>© 2023 Eswatini Revenue Service.</p>
        <p>ERS Contacts</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
        <p>Terms of Conditions</p>
      </div>
      <p className="text-center pb-4 text-base font-normal">
        2023 • Powered by Computronics Systems
      </p>
    </div>
  </section>

    </>
  );
}
