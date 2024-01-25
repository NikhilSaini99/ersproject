import React from "react";
import { Box,Typography } from "@mui/material";
import Banner from "../../assets/images/Customs_Worksheet.jpg";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";

const CustomWorksheet = () => {
  return (
    <>
      <PageLayout title={"Services"} bannerImg={Banner}>
        <ContentDiv>
        <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Customs Worksheet
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography variant="h1">Customs Worksheet</Typography> */}

          <Typography variant="h2">Information Coming soon</Typography>
        </ContentDiv>
        {/*-----------------------Footer---------------------*/}
      </PageLayout>
    </>
  );
};

export default CustomWorksheet;
