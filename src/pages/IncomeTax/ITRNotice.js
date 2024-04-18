import { Box,Typography } from "@mui/material";
import Link from "next/link";
import Banner from "../../assets/images/General-Import-&-Export-Rul.jpg"
import bgimg from "../../assets/images/bg-1.png";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";

const ITRNotice = () => {
  return (
    <>
       <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>
            <ContentDiv>

            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Income Tax Return Submission Notice 2022
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                {/* <Typography variant="h1">
                Income Tax Return Submission Notice 2022
                </Typography> */}
        <Link href="http://website.ers.org.sz:8000/documents/IncomeTaxReturnSubmissionNotice2022.pdf">
          <Typography variant="h2" sx={{"&:hover":{textDecoration:"underline"}}} >Download Notice</Typography>
        </Link>
      </ContentDiv>
      </PageLayout>
    </>
  );
};

export default ITRNotice;
