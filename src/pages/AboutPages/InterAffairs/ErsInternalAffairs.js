import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ErsInternalAffairs = ({ h2Styling, arrowStyling }) => {
  const data = [
    {
      section: "Duties of the Internal Affairs Division",
      content: {
        subhead:
          "The ERS is committed to consulting with commercial stakeholders in the Kingdom of Eswatini on its strategies, policies, operational programs and administrative procedures that govern and affect the Kingdom's commercial trade. The purpose of these consultations, in general terms, is to promote mutually beneficial collaboration between the ERS and the commercial trade community on border and tax administration matters to the benefit of Eswatini, the country's economy as well as our trade sector. To this end, the ERS established the Business Consultative Committee (BCC) with a mandate, membership and procedures as described below. The BCC provides a mechanism for representatives of business to discuss operational aspects of the tax and customs system with the Eswatini Revenue Service.",
        subPoints: [
          "Detecting and Investigating issues of integrity and unethical behavior including allegations of fraud, corruption and all acts of dishonesty & misconduct occurring and involving personnel of the Eswatini Revenue Service",
          "Undertaking staff and public awareness or educational initiatives on issues of cus fraud, corruption and any unethical behavior relating to ERS activities",
          "Carrying out preventative oversight tasks: These are good governance principles furthering the culture of transparency and accountability which includes management of staff gifts, benefits, and hospitality; management of conflict of interests, enforce and monitors staff declaration of income, assets, and liabilities. ",
        ],
      },
    },
    {
      section: "Reporting Inappropriate Behaviour",
      content: {
        subhead:
          "Any instances or information coming to the knowledge of ERS employees or taxpayers / public on fraud, corruption, nepotism, embezzlement, theft, maladministration, misconduct,  or any act that may constitute a criminal or disciplinary offence or may be prejudicial to the interests of ERS, should be reported.",
      },
    },
    {
      section: "Procedures for reporting to the Internal Affairs Division",
      content: {
        subhead:
          "Reporting maybe done in the following methods",
          subPoints: [
            "Whistleblowing toll free line:  800 8000 The toll-free line was set up so that the public and ERS staff be able to report issues of fraud, corruption, misconduct, and anything detrimental to the mandate of the ERS. Leave a message after the beep with full details of a concern raised, where possible information such as giving names, dates, and places. If you desire to give more details or are in possession of documents relevant to the matter, kindly leave your contact details.",
            "Surface mail reporting: Director Internal Affairs, Eswatini Revenue Service, P. O. Box 5628 Mbabane, Eswatini",
            "Electronic mail (email):  internalaffairs@ers.org.sz",
            "Cell Phone: +268 7606 3107",
            "ERS Website: Complaint Reporting Form",
            "Walk-in / In person reporting: First floor, Ingcamu Building, Mhlambanyatsi Road, Mbabane, Eswatini",             "Anyone reporting a matter may choose to remain anonymous. All information received will be handled in utmost confidence. Where possible, feedback on information received will be given.",
          ],
      },
      
    },
  ];
  return (
    <>
      <Typography variant="h2" sx={{ ...h2Styling }}>
        ERS Internal Affairs
      </Typography>
      <Box
        width={"95%"}
        sx={{
          padding: "2rem",
          background: "#F9F9FA",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "3rem auto 3rem", lg: "3rem auto 3rem" },
        }}
        data-aos="zoom-in-up"
      >
        {data.map((item, index) => (
          <Box key={index} sx={{mb:"2rem"}}>
            <Typography variant="h5" sx={{ 
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#2F248F"}}>
              {item.section}
            </Typography>
            {item.content.subhead && (
              <Typography variant="body1" className="Pointsformatting" sx={{mb:"1rem"}}>
                {item.content.subhead}
              </Typography>
            )}

            {item.content.subPoints?.map((point, index) => (
              <div key={index} className="flex gap-1 items-start pb-2">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={{ ...arrowStyling, color: "#2f2483" }}
                    className="Pointsformatting"
                  />
                </span>
                <Typography className="Pointsformatting">{point}</Typography>
              </div>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default ErsInternalAffairs;
