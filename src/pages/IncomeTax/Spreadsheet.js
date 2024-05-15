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
              <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
            </Typography>
          </Box>
          <Link href="http://102.36.181.16:8000/documents/PAYESpreadsheet.xlsx">
          <Typography variant="body1" sx={{ mb: "1rem" }}>
            <strong><u>Click here to download the PAYE Spreadsheet</u></strong>
          </Typography>
          </Link>
          
        </ContentDiv>
      </PageLayout>
</>
  )
}

export default Spreadsheet