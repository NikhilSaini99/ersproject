import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ErsInternalAffairs = ({ h2Styling, arrowStyling }) => {
  const data = [
    {
      //section: "Internal Affairs Division ",
      content: {
        subhead:
          "Internal Affairs Division is charged with the responsibility to devise strategies to prevent and combat fraud and corruption within the ERS. Whilst collecting revenue is in the fore-front, it is essential that such task is executed by staff that is ethically clean and free of corruption and related vices. Internal Affairs Division reports to the Commissioner General who is the CEO of the Organization. Since internal fraud and corruption as business risks and has vulnerabilities, the Division is also required to report to the HR & Ethics Committees of the Governing Board.",
        // subPoints: [
        //   "Detecting and Investigating issues of integrity and unethical behavior including allegations of fraud, corruption and all acts of dishonesty & misconduct occurring and involving personnel of the Eswatini Revenue Service</b>",
        // ],
      },
    },
    {
      //section: "Detect & Investigate",
      content: {
        subhead:
        "To carry out this mandate, the Division uses a three-pronged strategy, namely:"
      },
    },
    {
      section: "Detect & Investigate",
      content: {
        subhead:
          "This requires the need to detect and investigate all suspicions of internal fraud, corruption and related vices that involves ERS employees. Successful cases are referred to the disciplinary hearing process and or referred to other law enforcement agencies for criminal investigation purposes. Information gathered in the course of investigation is handled in terms of the organization's confidential policies. Witnesses and whistleblowers are protected within the dictates of the organizations' Whistleblowing Policy. Cases are investigated without any fear or favour.",
      },
    },

    {
      section: "Integrity and Ethics Awareness/Education",
      content: {
        subhead:
          "Sensitizing staff and the public on the evil and dangerous effects of corruption and all unethical behaviour within the revenue administration is one of the key proactive means to fighting corruption. Information in this regard is disseminated through various means.  Concomitant to integrity and ethics awareness or education is the promotion of whistleblowing platforms, to report suspicious practices of corruption and any unethical behaviour as linked with ERS.  Anonymous reporting is encouraged where necessary.",
      },
    },

    {
      section: "Corruption Preventative Over-sight Responsibilities",
      content: {
        subhead:
          "This aspect of the strategy regulates certain staff practices considered to be of ethical risk and in conflict with the Code of Ethics and Conduct. These includes management of staff gifts, staff outside/external involvement, management of staff conflict of interests conducting staff lifestyles checks through the annual requirement for staff to declare their income and assets.",
      },
    },

    {
      section: "Internal Affairs Contacts",
      content: {
        // subhead:
        //   "Reporting maybe done in the following methods",
          subPoints: [
            "Whistleblowing toll free line 800 000",
            "Slido: www.slido.com passcode 8008000",
            "Cellphone number 76063107",
            "Landline: 24048549",
            "Postal Address: Director Internal Affairs, P.O. Box 5628 Mbabane, Eswatini",
            "Physical Location: 1st Floor, Ingcamu Building, Somhlolo Road, Mbabane, Eswatini",
          ],
      },
      
    },
  ];
  return (
    <>
      <Typography variant="h2" sx={{ ...h2Styling }}>
        ERS Internal Affairs Mandate
      </Typography>
      <Box
        width={"95%"}
        sx={{
          padding: "2rem",
          background: "#F9F9FA",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "3rem auto 0rem auto", lg: "3rem auto 0rem auto" },
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
