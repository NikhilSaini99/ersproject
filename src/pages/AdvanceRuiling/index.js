import React from "react";
import PageLayout from "../PagesLayout/Layout";
import { ContentDiv } from "@/styles/globalStyle";
import { Box, IconButton, Typography } from "@mui/material";
import Banner from "../../assets/images/Eswatini_VAT.png";
import bgimg from "../../assets/images/bg-2.png";
import CustomAccordion from "@/components/Accordion/Accordion";
import { GridAutoColumn3, GridAutoColumnAdv } from "../Contact";
import SearchIcon from '@mui/icons-material/Search';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const AdvanceRuiling = () => {
  return (
    <PageLayout
      title={"Advance Ruiling"}
      bannerImg={Banner}
      contentBackground={bgimg}
    >
      <ContentDiv>
        <Box sx={{ padding: "2rem 0", position: "relative" }}>
          <Typography variant="h1" sx={{ position: "relative !important" }}>
            Advance Ruiling Platform
            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
          </Typography>
        </Box>

        <Typography variant="body1" className="Pointsformatting">
          The ERS issues Advance Rulings in terms of the Customs and Excise Act,
          1971. The practice is also recommended in the WTO Agreement on Trade
          Facilitation (TFA) as a measure through which the administration
          issues binding decisions on the classification, valuation and origin
          of goods. This is for the benefit of a trader (importer, exporter or
          declarants) as they can apply for the Advance Ruling prior to
          importing or exporting the goods and thus have certainty on the
          treatment of the goods on the area / subject covered by the ruling.<br/><br/> To
          apply for an Advance Ruling, an entity must be registered on the ‘ERS
          Advance Rulings Platform. Please use the link below to register and
          apply.<br/><br/> The platform also allows users to search for and view existing
          Advance Rulings that have been issued by ERS.
        </Typography>

        <GridAutoColumnAdv>
          <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem", background:"#EDEDED", p:"1rem", borderRadius:"10px"}}>
          <IconButton LinkComponent={"a"} href="/AdvanceRuiling/AdvanceRulingSearch"  sx={{"&.MuiButtonBase-root": {
                color:(theme)=>theme.palette.primary.main,
                ":hover":{
                  backgroundColor:"transparent"
                }
              }}}>
                  <SearchIcon sx={{width:"96px", height:"96px"}}/>
              </IconButton>
              <Typography variant="body1">
              Search for existing Advance Rulings that have been issued by ERS. Existing advance rulings can guide you in the application of tariff, origin and valuation rules based on similar scenarios, without having to apply for your own Advance Ruling.
              </Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem", background:"#EDEDED", p:"1rem", borderRadius:"10px"}}>
              <IconButton LinkComponent={"a"} href="https://art.customs-connect.com/registerers" target="_blank" sx={{"&.MuiButtonBase-root": {
                color:(theme)=>theme.palette.primary.main,
                ":hover":{
                  backgroundColor:"transparent"
                }
              }}}>
                  <RecentActorsIcon sx={{width:"96px", height:"96px"}}/>
              </IconButton>
              <Typography variant="body1">
              Register on the Advance Ruling Platform by completing the online form with your company details. Once your registration has been approved you will be able to apply for your own Advance Rulings.
              </Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem", background:"#EDEDED", p:"1rem", borderRadius:"10px"}}>
          <IconButton LinkComponent={"a"} href="https://art.customs-connect.com/loginers" target="_blank" sx={{"&.MuiButtonBase-root": {
                color:(theme)=>theme.palette.primary.main,
                ":hover":{
                  backgroundColor:"transparent"
                }
              }}}>
                  <NewspaperIcon sx={{width:"96px", height:"96px"}}/>
              </IconButton>
              <Typography variant="body1">
              Once you are registered on the Advance Ruling Platform, you can apply for an Advance Ruling by completing the application form and uploading supporting documentation. Once the Advance Ruling has been issued it should be presented / submitted with the goods declaration.
              </Typography>
          </Box>
        </GridAutoColumnAdv>

        <Typography variant="h2" sx={{ position: "relative !important", textAlign:"center" }} my={2}>
        Want to know more about Advance Rulings? Read the Frequently Asked Questions below.
          </Typography>

        <CustomAccordion/>

      </ContentDiv>
    </PageLayout>
  );
};

export default AdvanceRuiling;
