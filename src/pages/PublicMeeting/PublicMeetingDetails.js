import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PublicMeetingData } from "@/content/data";
import Banner from "../../assets/images/contact-bg.png"
import { LatestNewsSection } from '../../pages/news'
import { Grid, Stack, Typography,Box } from "@mui/material";


export default function PublicMeetingDetails() {
  return (
    <>
      <Head>
        <title>Public Meeting Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      {/* <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section> */}

      <Box sx={{height:{xs:'15rem',lg:'30rem',xs:'30rem'}}}>
      <Image src={Banner} alt="Public Meeting"
              width={0}
              height={0}
              style={{
                width: "100%", height: "100%",
                objectFit: 'cover'
              }}
            />
      </Box>
      {/*-----------------------Detailed News---------------------*/}

      <section>
        <Grid container>

          {/* LEFT SIDE START */}
          <Grid item xs={10} sx={{ marginTop: '5rem' }}>
            {PublicMeetingData.map((item, index) => {
              return (

                <Stack key={index} sx={{ flexDirection: 'column', margin: { xs: '0px 5rem 4rem 6rem', md: '0px 5rem 4rem 2rem', lg:'0px 5rem 4rem 6rem', xl: '0px 5rem 4rem 15rem' }, width: { xs: '85%', md:'90%', lg: '78%',xl:'70%' }, gap: '2rem' }}>
                  <Image src={item.img} alt={item.title} style={{ width: '100%', height: '100%' }} />
                  <Typography variant="body1" sx={{ color: 'grey' }}>{item.head}</Typography>
                  <Stack sx={{ flexDirection: 'column', gap: '1.5rem' }}>
                    <Typography variant="body1" sx={{ fontWeight: '400', fontSize: '2rem' }}>{item.title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'grey' }}>{item.about}</Typography>
                    <Typography variant="subtitle1" sx={{ color: 'grey' }}>{item.para}</Typography>

                    <Stack sx={{ background: '#F9F6F0', wordSpacing: '0.2rem', fontWeight: '600', p: '2rem 1rem', position: 'relative', height: '130px', textAlign: 'center' }}>
                      {/* <Image src={item.quoteicon} style={{ width: '50px', height: '50px', position: 'absolute', top: '5px', left: '0', display: 'block' }} alt='quote_icon' /> */}
                      <Stack sx={{ flexDirection: 'column', alignItems: 'start' }}>
                        <Typography variant="inherit" sx={{ textIndent: '3rem' }}>{item.quote}</Typography>
                        <Typography variant="subtitle1" sx={{ textIndent: '4.8rem', textTransform: 'uppercase', color: '#f4c402' }}>- ERS</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="body1" sx={{ color: 'grey' }}>{item.description}</Typography>
                    <Typography variant="body1"></Typography>
                  </Stack>
                </Stack>
              )
            })}
          </Grid>
        </Grid>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
