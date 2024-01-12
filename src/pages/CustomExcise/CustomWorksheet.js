import React from "react";
import { Typography } from "@mui/material";
import Banner from "../../assets/images/Customs_Worksheet.jpg";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";

const CustomWorksheet = () => {
  return (
    <>
      <PageLayout title={"Services"} bannerImg={Banner}>
        <ContentDiv>
          <Typography variant="h1">Customs Worksheet</Typography>

          <Typography variant="h2">Information Coming soon</Typography>
        </ContentDiv>
        {/*-----------------------Footer---------------------*/}
      </PageLayout>
    </>
  );
};

export default CustomWorksheet;
