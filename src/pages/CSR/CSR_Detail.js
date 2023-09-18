import React from 'react'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Header from '@/components/Header'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Banner from "../../assets/images/Eswatini_VAT.png";
import bgimg from "../../assets/images/bg-2.png";
import { useFetch } from '../api/api';
import { useEffect} from 'react';
import Loader from '@/components/Loader';
import style from "./CSR.module.css"


const CSR_Detail = () => {

  const {data,fetchAPI,isLoading} = useFetch("get", "/api/csr");

  useEffect(()=>{
   fetchAPI();
     },[fetchAPI]);

     console.log(data?.data)

  
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

            <Box sx={{ position: "relative", width: "100%", height: '30rem' }}>
        <Image
          src={Banner}
          alt="about_us"
          width={0}
          height={0}
          style={{
            width: "100%", height: "100%",
            objectFit: 'cover'
          }}
        />
        </Box>

          <Box sx={{position:"relative"}}>
        <Box sx={{
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >

              <Box variant="h1" sx={{ mt: '0rem', py: '4rem', px:'1rem', bgcolor:"#2F248F", maxWidth:'75%', position:"relative", width:"100%",
                transform: "translate(-50% ,-50%)", top:"50%", left:"50%",
            }}>
              <Typography  variant="h1" sx={{ mt: '0rem', mb: '1rem', maxWidth:"80%", mx:"auto", color:'#FFFFFF !important', fontWeight:'bold' }}> Corporate Social Responsibility</Typography>
                </Box>

                
                {isLoading ? <Loader/> : (
                <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '10rem,', xl: '0rem' }, pb: '2rem', }}>

                    <Box sx={{display:'flex', flexDirection:'column', gap:'1rem', justifyContent:"center"}}>
                  {data?.data && data?.data?.map((item,index) =>(
                      <Box key={item.id} className={style.CSR_CARD} sx={{width:{lg:"100%"},display:'flex', gap:'0', flexDirection: {xs:'column',  md:'row'}, mx:"auto", justifyContent:'center',transition:"0.7s",
                        "&:hover":{
                          boxShadow: "rgba(100, 100, 111, 0.8) 0px 7px 29px 0px",
                          transition:"0.7s",
                        },
                        }}> 

                            <Box sx={{ height:"300px", minWidth:'250px', width:{lg:"100%"}}}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={item.url} alt={item.id} style={{width:"100%", height:'100%',  objectFit:'cover'}}/>
                            </Box>
                            
                              <Box sx={{display:'flex', flexDirection:'column', gap:'0.5rem', alignItems:'start', p:'2rem 1rem', background:"#FFC43A",
                                maxWidth:{xs:"100%",lg:"60%"}, minWidth:"80%"}}>
                                <Typography  variant="h5" sx={{ mt: '0rem', mb: '1rem', fontWeight:"600" }}>{item.name}</Typography>
                                <Typography  variant="body1" sx={{ mt: '0rem', mb: '1rem', lineHeight:'2rem' }}>{item.description}</Typography>
                                </Box>
                        </Box>
                  ))}
                  </Box>
                      
                    </Box>
                )}
                  
            </Box>
            </Box>
            {/*-----------------------Footer---------------------*/}
            <Footer />
        </>
  )
}

export default CSR_Detail