import React from 'react'
import PageLayout from '../PagesLayout/Layout'
import { ContentDiv } from '@/styles/globalStyle'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Banner from "../../assets/images/Eswatini_VAT.png";
import bgimg from "../../assets/images/bg-2.png";

const Spreadsheet = () => {
  return (
    <>
    <PageLayout
        title={"Email Disclaimer"}
        bannerImg={Banner}
        contentBackground={bgimg}
      >
        <ContentDiv>
          <Box sx={{ padding: "2rem 0", position: "relative" }}>
            <Typography variant="h1" sx={{ position: "relative !important" }}>
            PAYE Spreadsheet
              <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
            </Typography>
          </Box>
          <Link href="https://www.ers.org.sz/documents/1685441059.xlsx">
          <Typography variant="body1" sx={{ mb: "1rem" }}>
            <strong><u>https://www.ers.org.sz/documents/1685441059.xlsx</u></strong>
          </Typography>
          </Link>
          
        </ContentDiv>
      </PageLayout>
</>
  )
}

export default Spreadsheet