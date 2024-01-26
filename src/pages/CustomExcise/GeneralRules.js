import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "../../assets/images/General-Import-&-Export-Rul.jpg";
import Custom from "../../assets/images/Eswatini_Customs-2.jpg";
import { customData } from "../../content/data";
import { Box, Paper, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgimg from "../../assets/images/pagebackground1.jpg";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";

export default function GeneralRules() {
  const data = customData.find((item) => item.id === 1);
  const data1 = customData.find((item) => item.id === 2);
  const data2 = customData.find((item) => item.id === 3);
  const data3 = customData.find((item) => item.id === 4);
  const data4 = customData.find((item) => item.id === 5);
  const data5 = customData.find((item) => item.id === 6);
  const data6 = customData.find((item) => item.id === 7);
  const data7 = customData.find((item) => item.id === 8);

  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  return (
    <>
         <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
        <ContentDiv>
          {/* ------------------Importants---------------------------- */}

          <div className=" ">

          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> {data.title}
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

            {/* <Typography variant="h1" >
              {data.title}
            </Typography> */}
            <Typography variant="h2">{data.title1}</Typography>
            <Typography variant="body1" className="mt-4">{data.title2}</Typography>
            <ul className="mt-2">
              {data.description.map((desc, index) => (
                <div key={index} className="flex gap-1 items-start pb-2">
                  <span className="Pointsformatting">
                    <ArrowForwardIosIcon
                      sx={arrowStyling}
                      className="Pointsformatting"
                    />
                  </span>
                  <Typography variant="body1"  className="mx-1 lightBlack">{desc}</Typography>
                </div>
              ))}
            </ul>
          </div>

          <div className=" mt-4 ">
            <h1 className="text-md font-semibold Pointsformatting">{data1.title}</h1>
            <ul className="mt-2">
              {data1.description.map((desc, index) => (
                <div key={index} className="flex gap-1 items-start pb-2">
                  <span className="Pointsformatting">
                    <ArrowForwardIosIcon
                      sx={arrowStyling}
                      className="Pointsformatting"
                    />
                  </span>
                  <Typography variant="body1" className="mx-1  lightBlack ">{desc}</Typography>
                </div>
              ))}
            </ul>
            <p className="Pointsformatting">
              Clearance for warehousing, transit/in bond or temporary admission
              requires a security that will cover the duties and taxes
              suspended.
            </p>
          </div>
          <hr className=" border-1 border-gray-400 mt-10"></hr>

          {/* ----------------------Personal Imports------------------------ */}

          <div className="flex mt-10 mb-4">
            <div>
              <div className="  ">
              <Typography variant="h2" >{data2.title}</Typography>
                <p className="mt-4 text-justify">
                <Typography variant="body1" >
                    {data2.description}
                  </Typography>
                </p>
              </div>
            </div>
          </div>

          <div className=" mt-4 ">
          <Typography variant="h2" >{data3.title1}</Typography>
            <ul className="mt-2">
              {data3.description.map((desc, index) => (
                <div key={index} className="flex gap-1 items-start pb-2">
                  <span className="Pointsformatting">
                    <ArrowForwardIosIcon
                      sx={arrowStyling}
                      className="Pointsformatting"
                    />
                  </span>
                  <Typography variant="body1" className="lightBlack">{desc}</Typography>
                </div>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg mt-4 text-justify font-semibold Pointsformatting">
              <span className="lightBlack font-normal"> {data3.title2}</span>
            </h1>
            <Typography variant="body1">
              <span className="lightBlack font-normal"> {data3.title3}</span>
            </Typography>
          </div>

          {/* ----------------------EXPORTATION------------------------ */}
          <div className=" my-10 ">
          <Typography variant="h2">{data4.title1}</Typography>
          <Typography variant="body1">{data4.title2}</Typography>
            <ul>
              {data4.description.map((desc, index) => (
                <div key={index} className="flex gap-1 items-start pb-2">
                  <span className="Pointsformatting">
                    <ArrowForwardIosIcon
                      sx={arrowStyling}
                      className="Pointsformatting"
                    />
                  </span>
                  <Typography variant="body1" className="mx-1 lightBlack">{desc}</Typography>
                </div>
              ))}
            </ul>
            <Typography variant="body1">
              {data4.title5}
              <span className="lightBlack font-normal"> {data4.title3}</span>
            </Typography>
            <Typography variant="body1">
              {data4.title6}
              <span className="lightBlack font-normal Pointsformatting">{data4.title4}</span>
            </Typography>
          </div>

          {/* --------------------CROSS BORDER CASH DECLARATION------------------ */}

          <div className=" my-10  ">
          <Typography variant="h2">{data5.title1}</Typography>
          <Typography variant="body1">
              {data5.title4}
              <span className="lightBlack font-normal Pointsformatting">
                {" "}
                {data5.title2}
              </span>
              </Typography>
              <Typography variant="body1">
              {data5.title5}
              <span className="lightBlack font-normal Pointsformatting">
                {data5.title3}
              </span>
              </Typography>
          </div>
          {/* ------------------------OFFENCE AND CONFISCATION-------------------- */}
          <div className=" my-10 ">
          <Typography variant="h2">{data6.title1}</Typography>
          <Typography variant="body1">
              {data6.title4}
              <span className="lightBlack font-normal Pointsformatting">
                {" "}
                {data6.title2}
              </span>
            </Typography>
            <Typography variant="body1">
              {data6.title5}
              <span className="lightBlack font-normal Pointsformatting">
                {" "}
                {data6.title3}
              </span>
            </Typography>
          </div>
          {/* ------------------------SEARCH-------------------- */}

          <div className=" my-10  ">
          <Typography variant="h2">{data7.title1}</Typography>
          <Typography variant="body1">
              {data7.title4}
              <span className="lightBlack font-normal Pointsformatting">
                {" "}
                {data7.title2}
              </span>
            </Typography>
            <Typography variant="body1">
              {data7.title5}
              <span className="lightBlack font-normal Pointsformatting">
                {" "}
                {data7.title3}
              </span>
              </Typography>
          </div>
        </ContentDiv>
      </PageLayout>
    </>
  );
}
