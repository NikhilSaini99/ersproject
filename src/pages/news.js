import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NewsCard } from "@/components/media";
import Banner from "../assets/images/news-banner.jpg";
import { Grid, Stack, Typography } from "@mui/material";
import rightSideBackground from "../assets/images/sidebar-bg-image.jpg";
import { newses } from "../content/data";
import { useFetch } from "./api/api";

export const LatestNewsSection = () => {
  return (
    <Grid item xs={4} sx={{ position: "relative" }}>
      <Image
        src={rightSideBackground}
        alt="rightSideBackground"
        style={{
          position: "absolute",
          width: "3000px",
          minWidth: "100%",
          minHeight: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background: "#f1f1f1",
          opacity: "0.90",
        }}
      ></div>
      <Typography
        variant="h6"
        sx={{
          position: "relative",
          fontWeight: "bold",
          textAlign: "left",
          top: "5rem",
          margin: "0 auto 0 4rem",
          top: "6.8rem",
        }}
      >
        Latest News
      </Typography>
      <Stack
        sx={{
          background: "white",
          width: { xs: "74%", lg: "50%" },
          position: "relative",
          margin: "0 auto 0 4rem",
          top: "8rem",
        }}
      >
        <Stack
          sx={{ flexDirection: "column", gap: "0.5rem", p: "1rem 0.1rem" }}
        >
          {newses.map((item, index) => (
            <Stack
              key={index}
              sx={{ flexDirection: "column", gap: "0.6rem", p: "1.5rem" }}
            >
              <Image src={item.img} alt={item.title} />
              <Typography variant="subtitle2" sx={{ color: "grey" }}>
                {item.date}
              </Typography>
              <Typography variant="h6">{item.title}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default function News() {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/news");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);
  
  return (
    <>
      <Head>
        <title>Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      {/*------------------------News----------------------*/}

      <section>
        <Grid container>
          {/* Left Side */}
          <Grid item xs={8} sx={{ marginTop: "8rem" }}>
            {data &&
              data?.data?.map((item, key) => (
                <NewsCard
                  key={key}
                  img={item?.url}
                  url={item.url}
                  title={item?.newsName}
                  date={item?.uploadDate}
                  description={item?.description}
                  id={item.id}
                  apiURl={"/api/news"}
                />
              ))}
          </Grid>

          {/* Left Side End */}

          {/* Right Side with latest news*/}
          <LatestNewsSection />
          {/* Right Side End */}
        </Grid>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
