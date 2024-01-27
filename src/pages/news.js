/* eslint-disable @next/next/no-img-element */
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import Banner from "../assets/images/news-banner.jpg";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import { NewsCard } from "@/components/media";
import { newses } from "../content/data";
import rightSideBackground from "../assets/images/sidebar-bg-image.jpg";
import { useFetch } from "./api/api";
import dayjs from "dayjs";
import Loader from "@/components/Loader";
import Link from "next/link";

export const LatestNewsSection = ({ isPublic, restNews, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handleNextPage = () => {
    if (
      currentPage <
      Math.ceil(restNews && restNews.length / itemsPerPage) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = restNews && restNews.slice(startIndex, endIndex);

  if (isLoading) return <Loader />;

  return (
    <Grid item xs={4} sx={{ position: "relative", mb:"2rem" }}>
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
      {!isPublic && (
        <>
          {" "}
          <Typography
            variant="h6"
            sx={{
              position: "relative",
              fontWeight: "bold",
              textAlign: "left",
              margin: "0 auto 0 4rem",
              // top: "6.8rem",
            }}
          >
            Latest News
          </Typography>
          <Stack
            sx={{
              width: { xs: "75%", lg: "80%" },
              position: "relative",
              margin: "0 auto",
              // top: "8rem",
            }}
          >
            <Stack
              sx={{ flexDirection: "column", gap: "0.8rem", p: "1rem 0.1rem" }}
            >
              {paginatedNews &&
                paginatedNews.length > 0 &&
                paginatedNews.map((News, index) => (
                  <Stack
                    key={index}
                    sx={{
                      flexDirection: "column",
                      gap: "0.6rem",
                      p: "1.5rem",
                      cursor: "pointer",
                      borderRadius: "25px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Link
                      href={{
                        pathname: "/NewsDetails",
                        query: { id: News?.id, apiURl: "/api/news" },
                      }}
                    >
                    <Box sx={{height:"5rem"}}>
                      <img
                        src={News.url}
                        alt={News.newsName}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      </Box>
                      <Typography variant="subtitle2" sx={{ color: "grey" }}>
                        {dayjs(News.uploadDate).format("DD-MM-YYYY")}
                        <br />
                        By - <strong>{News.author_name}</strong>
                      </Typography>
                      <Typography variant="subtitle1" fontWeight={600}>{News.newsName}</Typography>
                    </Link>
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </>
      )}
      <Box sx={{display:'flex', gap:"1rem", justifyContent:"center", my:"2rem"}}>
      <Button
        variant="contained"
        disabled={currentPage === 0}
        sx={{
          backgroundColor: "#2F2483 !important",
          "&:hover": {
            backgroundColor: "#f4c402 !important",
            color: "#000000",
          },
        }}
        onClick={handlePreviousPage}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        disabled={
          currentPage >=
          Math.ceil(restNews && restNews.length / itemsPerPage) - 1
        }
        sx={{
          backgroundColor: "#2F2483 !important",
          "&:hover": {
            backgroundColor: "#f4c402 !important",
            color: "#000000",
          },
        }}
        onClick={handleNextPage}
      >
        Next
      </Button>
      </Box>
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

      {/*------------------------News----------------------*/}

      <section>
        <Box sx={{ height: { xs: "15rem", lg: "30rem", xs: "30rem" } }}>
          <Image
            src={Banner}
            alt="NEWS Images"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "left" }}>
          All News 
        </Typography>
        <div>
          <Grid container>
            {/* Left Side */}
            <Grid item xs={8} sx={{ marginTop: "8rem" }}>
              {data &&
                data?.data
                  ?.slice(0, 3)
                  ?.map((item, key) => (
                    <NewsCard
                      key={key}
                      img={item?.url}
                      url={item.url}
                      title={item?.newsName}
                      date={item?.uploadDate}
                      description={item?.description}
                      id={item.id}
                      authorName={item?.author_name}
                      apiURl={"/api/news"}
                    />
                  ))}
            </Grid>

            {/* Left Side End */}

            {/* Right Side with latest news*/}
            <LatestNewsSection
              restNews={data?.data?.slice(3)}
              isLoading={isLoading}
            />
            {/* Right Side End */}
          </Grid>
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
