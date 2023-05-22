import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import bgimg from "../assets/images/contact.jpg";
import { Centers } from "@/components/homecard";
import { Media } from "@/components/media";
import Footer from "@/components/Footer";
import { RiMailFill } from "react-icons/ri";
import { ImHome3 } from "react-icons/im";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from "next/link";
export default function Contact() {

  const CentersData = [
    {
      title: "MANZINI SERVICE CENTRE",
      description:
        "Sivuno Building, Ground floor, adjacent to Estel House, Manzini MANZINI",
      contact: '[+268] 2406 4050'
    },
    {
      title: "MATSAPHA BRANCH",
      description: "Matsamo Shopping Complex (kaMahhala) MATSAPHA",
      contact: '[+268] 2406 4050'
    },
    {
      title: "MBABANE SERVICE CENTRE",
      description:
        "3rd Floor, Corporate Place, Swazi  Plaza MBABANE ",
      contact: '[+268] 2406 4050'
    },
    {
      title: "NHLANGANO BRANCH",
      description:
        "Old Skonkwane Building  Corner of 6th Street and 3rd Avenue NHLANGANO",
      contact: '[+268] 2406 4050'
    },
    {
      title: "PIGGS PEAK SERVICE CENTRE",
      description:
        "1st Floor, Supreme Building  Evelyn Baring Road  PIGGS PEAK",
      contact: '[+268] 2406 4050 '
    },
    {
      title: "SITEKI SERVICE CENTRE",
      description: "Mafumbe Building Jacaranda Road  SITEKI",
      contact: '[+268] 2406 405'
    },
  ];

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*------------------Contact Background-------------------*/}

      <section>
        <div className="relative">
          <div className="h-96">
            <Image src={bgimg} alt=""
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="absolute bottom-0 bg-white/80 w-full pl-10 py-[14px]">
            <h1 className="text-subColor text-3xl font-bold leading-8">
              CONTACT ERS
            </h1>
            <div className="border mr-12 border-yellowish mt-1 w-14 "></div>
          </div>
        </div>
      </section>

      {/*------------------Head Section-------------------*/}

      <section>
        <div className="px-10 flex">

          <div className="flex flex-col gap-8 bg-subColor text-[#f5f5f5] pl-10 pr-12 pt-9 pb-16 w-[32%]">
            <div className="flex flex-col gap-2">

              <h1 className="text-xl font-bold leading-6 mb-1">
                Head Quarters
              </h1>
              <p className="flex  gap-1">
                <ImHome3 className="text-xl" />

                <span className="text-sm leading-6 font-normal">
                  Portion 419 of Farm 50, Along MR103, Ezulwini
                </span>
              </p>
              <p className="flex  gap-1">
                <BsTelephoneFill className="text-xl" />

                <span className="text-sm leading-6 font-normal">[+268] 2406 4000</span>
              </p>
            </div>
            <div className="flex flex-col justify-start gap-2 pr-6">
              <h1 className="text-xl font-bold leading-6 mb-1">
                ERS Contact Centre -
              </h1>
              <p className="text-sm leading-6 font-normal">
                For all your tax related enquiries call or email
              </p>
              <p className="text-sm leading-6 font-normal">
                the ERS Contact Centre on
              </p>
              <p className="flex  gap-1">
                <BsTelephoneFill className="text-xl" />

                <span className="text-sm leading-6 font-normal">[+268] 2406 4000</span>
              </p>
              <p className="flex  gap-1">
                <BsTelephoneFill className="text-xl" />

                <span className="text-sm leading-6 font-normal">[+268] 2406 4000</span>
              </p>
              <p className="flex  gap-1">
                <IoLogoWhatsapp className="text-xl" />
                <span className="text-sm leading-6 font-normal">WhatsApp-7606 3735</span>
              </p>

              <p className="flex  gap-1">
                <RiMailFill className="text-xl" />

                <span className="text-sm leading-6 font-normal">info@ers.org.sz</span>
              </p>
              <Link href={' '}>
                <button type="button" className="rounded-full bg-[#f4c402] w-[10rem] p-2 text-black text-bold">Get Directions</button>
              </Link>
            </div>
          </div>


          <div className="px-[40px] pt-9 bg-[#F5F5F5] w-[68%]">
            <h1 className="text-xl text-mainColor font-bold leading-8">
              Service Centers and Branches
            </h1>
            <div className="border mr-12 border-yellowish mt-1 w-32"></div>
            <div className="grid grid-cols-3 gap-x-16 gap-y-10 pt-5">
              {CentersData.map((item, key) => (
                <Centers
                  key={key}
                  title={item.title}
                  description={item.description}
                  contact={item.contact}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Map */}

        <div className="px-10 py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4331.816287766545!2d31.17508431726318!3d-26.418809908319176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee8cee83ab4d14b%3A0x2c8213d352acb5f3!2sEswatini%20Revenue%20Service!5e0!3m2!1sen!2sin!4v1680769959819!5m2!1sen!2sin"
            width={"100%"}
            height={"420"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


      </section>

      {/*------------------Social Media-------------------*/}

      <Media />

      {/*------------------Footer-------------------*/}

      <Footer />
    </>
  );
}
