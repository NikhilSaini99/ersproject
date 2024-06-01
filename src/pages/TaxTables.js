import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IncomeTaxData } from "@/content/data";
import styles from '@/styles/IncomeTax.module.css'
import downloadIcon from "../assets/icons/downloadicon.svg"
import Banner from "../assets/images/TaxTablesBanner.jpg";
import Image from 'next/image';
import { Box, Typography, Link} from '@mui/material';

import bgimg from '../assets/images/bg-2.png'
const TaxTables = () => {

    const taxTableData = [
        {
            heading: 'Tax Tables',
            content: 'The tax tables provide guidelines on the calculations of Pay As You Earn for employees. The tables summarise the principles of the Income Tax Order, 1975 and practice notes that relate to PAYE. A further resource in the document is tables that employers may use to ascertain the amount of tax they may withhold for various income rates. These tables are separated to cater for <a href="https://www.ers.org.sz:8000/documents/DAILY.pdf" style="color:blue">DAILY,</a>  <a href="https://www.ers.org.sz:8000/documents/WEEKLY.pdf" style="color:blue">WEEKLY </a> and <a href="https://www.ers.org.sz:8000/documents/MONTHLY.pdf" style="color:blue">MONTHLY </a> wages; note that the tables have already incorporated the tax rebate that all employees are entitled to.Note that effective from the 1st July 2013, Volume 22 of the tax tables replaces <a href="https://www.ers.org.sz:8000/documents/Volume21.pdf" style="color:blue">Volume 21</a>  following the amendment of tax rates for individuals.',
            note: 'NOTE. Employers preparing Salary Reconciliations for the tax year ended 30th June 2013 are advised to used <a href="https://www.ers.org.sz:8000/documents/Volume21.pdf" style="color:blue">Volume 21</a> for reference purposes.'
        }
    ]

    return (
        <>
            <Head>
                <title>Tax Tables</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            {/*-----------------------Header---------------------*/}

            <Header />

             {/*-----------------------Banner---------------------*/}
             {/* <Box>
            <Image src={Banner} alt="..." className="h-96 w-full" />
            </Box> */}

        <Box sx={{height:{xs:'15rem',lg:'30rem',xs:'30rem'}}}>
      <Image src={Banner} alt="Tax Table"
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
      </Box>
            <Box sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >
            <section className="py-8  w-95 my-0 flex flex-row leading-8">

                <div className="relative w-3/5 mx-auto my-0">
                    <div className="flex flex-col gap-y-4 float-right clear-right w-20 absolute right-0"
                        style={{ marginRight: 'calc((12.5% + 2px)*2*-1)', top: '1.5rem' }}>
                        <div className="border-t border-black font-bold"></div>
                        <h6 className="font-semibold">DOWNLOADS</h6>
                        <a href="https://www.ers.org.sz:8000/documents/EmployersGuideforPAYE.pdf" target='_blank' className="w-5 text-normalBlue hover:underline">
                            <div className="flex flex-row gap-x-2" style={{ width: '75%' }}>
                                <Image src={downloadIcon} className="fill-current" alt="downloadIcon" width="100%" height="100%" />
                                <p className="">Employers Guide for PAYE</p>
                            </div>
                        </a>
                    </div>

                    {taxTableData.map((item, key) => (

                        <div key={key}>
                            <h1 className=" text-[40px] font-semibold text-subColor mb-10 mt-6 ">
                                {item.heading}
                            </h1>
                            <Typography variant='body1' className='pb-2' dangerouslySetInnerHTML={{ __html: item.content }}>
                            </Typography>
                            {/* <p className="mb-4  mt-2 text-black/80 Pointsformatting" >
                                <span className={`tracking-wide `}>{item.content}{" "}</span>
                            </p> */}
                             <Typography variant='body1' className='pb-2' dangerouslySetInnerHTML={{ __html: item.note }}>
                            </Typography>
                            {/* <p className="mb-4  mt-2 text-black/80 font-bold Pointsformatting">
                                <span className={`tracking-wide `}>{item.note}{" "}</span>
                            </p> */}
                        </div>
                    ))}
                </div>
            </section>
</Box>
            {/*-----------------------Footer---------------------*/}
            <Footer />
        </>
    )
}

export default TaxTables
