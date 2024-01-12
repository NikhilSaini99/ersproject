import { Typography } from "@mui/material";
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
                <Typography variant="h1">
                Income Tax Return Submission Notice 2022
                </Typography>
        <Link href="http://www.ers.org.sz/documents/1674048256.pdf">
          <Typography variant="h2" sx={{"&:hover":{textDecoration:"underline"}}} >Download Notice</Typography>
        </Link>
      </ContentDiv>
      </PageLayout>
    </>
  );
};

export default ITRNotice;
