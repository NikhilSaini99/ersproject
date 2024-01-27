/* eslint-disable @next/next/no-img-element */
import { Grid, Stack, Typography, Box, Button, IconButton } from "@mui/material";
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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    <Grid item xs={4} sx={{ position: "relative",  }}>
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
      
      {paginatedNews && paginatedNews.length > 0 ? (
        <div>
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
              marginTop: "3rem"
            }}
          >
            Latest News
          </Typography>
          <Stack
            sx={{
              width: { xs: "75%", lg: "80%" },
              position: "relative",
              margin: "0 auto",
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
                      p: " 1.5rem 1.5rem 1.5rem 1.5rem",
                      cursor: "pointer",
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
                    <Box sx={{height:{md:"6rem",lg:"15rem"}}}>
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
                      <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", mt:"0.5rem"}}>
                      <Typography variant="subtitle2" sx={{ color: "grey" }}>
                      <strong>Author: {News.author_name}</strong>
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: "grey" }}>
                         Posted on {dayjs(News.uploadDate).format("MMM D YYYY")}
                      </Typography>
                      </Box>
                      <Typography variant="body1" fontWeight={600} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', clamp: '2', '@media (max-width: 600px)': { clamp: '1' } }}>{News.newsName}</Typography>
                    </Link>
                  </Stack>
                ))}
            </Stack>
          </Stack>
        </>
      )}
      <Box sx={{display:'flex', justifyContent:"space-between", my:"2rem", width:"80%", m:"0 auto"}}>
      <IconButton  disabled={currentPage === 0}  onClick={handlePreviousPage} sx={{cursor: "pointer"}}>
      <ArrowBackIosIcon sx={{color:(theme)=> theme.palette.secondary.main}}/>
      </IconButton>

      <IconButton disabled={ currentPage >= Math.ceil(restNews && restNews.length / itemsPerPage) - 1 } onClick={handleNextPage}  sx={{cursor:"pointer"}}>
      <ArrowForwardIosIcon sx={{color:(theme)=> theme.palette.secondary.main}}/>
      </IconButton>
      </Box>
        </div>
      ) : (
        <div>
        <Typography variant="h4" sx={{mt:"3rem", fontWeight: "bold", textAlign: "center", height:"100%",zIndex:"9999"
        }}>No other NEWS</Typography>
</div>
      ) }
        
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
        <div>
          <Grid container>
            {/* Left Side */}
            <Grid item xs={8} sx={{ marginTop: "3rem" }}>
            <Box sx={{ mb:"2rem"}}>
            <Typography variant="h4"  sx={{textAlign:"center", m: "0px auto !important", fontWeight: "bold", width: { xs: "85%", md: "90%", lg: "78%", xl: "70%" } }}>
          All News 
        </Typography>
        </Box>
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
