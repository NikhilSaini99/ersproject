import React from 'react'
import Banner from "../../assets/images/Eswatini_VAT.png";
import bgimg from "../../assets/images/bg-2.png";
import PageLayout from '../PagesLayout/Layout';
import { ContentDiv } from '@/styles/globalStyle';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const AdvanceRulingSearch = () => {
  return (
    <PageLayout
      title={"Advance Ruiling Search"}
      bannerImg={Banner}
      contentBackground={bgimg}
    >
      <ContentDiv>
        <Box sx={{ padding: "2rem 0", position: "relative" }}>
          <Typography variant="h1" sx={{ position: "relative !important" }}>
          Advance Ruiling Search
            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
          </Typography>
        </Box>

        <Typography variant="body1" className="Pointsformatting">
        ERS has implemented Advance Rulings in terms of the WTO Agreement on Trade Facilitation (TFA). Advance Rulings allow trade to apply for an official written descision by ERS prior to import or export on Tariff Classification, Origin or Valuation. Advance Rulings are issued and valid for a specified period. This provides traders with the benefit of certainty when exporting or importing the goods covered by the Advance Ruling. Use the tool below to search for a view existing Advance Rulings that have been issued by ERS. If you would like to apply for your own Advance Ruling, <Link style={{color:"blue"}} href="https://art.customs-connect.com/loginers" target="_blank">click here</Link>  to register and apply.
        </Typography>

      </ContentDiv>
    </PageLayout>
  )
}

export default AdvanceRulingSearch