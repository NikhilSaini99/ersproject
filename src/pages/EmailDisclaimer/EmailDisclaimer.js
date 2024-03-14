import React from "react";
import PageLayout from "../PagesLayout/Layout";
import { ContentDiv } from "@/styles/globalStyle";
import { Box, Typography } from "@mui/material";
import Banner from "../../assets/images/Eswatini_VAT.png";
import bgimg from "../../assets/images/bg-2.png";
const EmailDisclaimer = () => {
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
             ERSE-mail Disclaimer
              <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: "1rem" }}>
            <strong>NOTE: </strong>
            Privileged/Confidential information may be contained in any e-mail
            message sent from theERSserver and may be subject to legal
            privilege. Access to such e-mail messages by anyone other than the
            intended is unauthorized. If you are not the intended recipient (or
            responsible for delivery of the message to such person), you may not
            use, copy, distribute or deliver to anyone such a message (or any
            part of its contents) or take any action in reliance on it. In such
            case, you should destroy such message, and notify the ERS
            immediately. If you have received such an email in error, please
            notifyERSimmediately by e-mail or telephone and delete the e-mail.
            All reasonable precautions have been taken to ensure no viruses are
            present in e-mails sent through theERSserver. As theERScannot
            accept responsibility for any loss or damage arising from the use of
            such e-mails or attachments we recommend that you subject these to
            your virus checking procedures prior to use. The views, opinions,
            conclusions and other information expressed in any electronic mail
            are not given or endorsed by theERSunless otherwise indicated by
            an authorized representative independent of the message.
          </Typography>
        </ContentDiv>
      </PageLayout>
    </>
  );
};

export default EmailDisclaimer;
