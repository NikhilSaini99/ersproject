import { Box, List, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/pages/AboutPages/BsCommitte/BusinessCommitte.module.css";
import Link from "next/link";

const BusinessCommitte = ({ h2Styling, arrowStyling }) => {
  const data = [
    {
      section: "Purpose",
      content:
        "The ERS is committed to consulting with commercial stakeholders in the Kingdom of Eswatini on its strategies, policies, operational programs and administrative procedures that govern and affect the Kingdom's commercial trade. The purpose of these consultations, in general terms, is to promote mutually beneficial collaboration between the ERS and the commercial trade community on border and tax administration matters to the benefit of Eswatini, the country's economy as well as our trade sector. To this end, the ERS established the Business Consultative Committee (BCC) with a mandate, membership and procedures as described below. The BCC provides a mechanism for representatives of business to discuss operational aspects of the tax and customs system with the Eswatini Revenue Service.",
    },
    {
      section: "Role",
      content: {
        head: "1. The role of the BCC is to foster a stronger relationship and greater understanding between businesses and Eswatini Revenue Service, taking a strategic-level view and aiming to improve the:",
        subPoints: [
          "Administration of the tax system",
          "Implementation of Government policy-on tax related issues.",
          "Understanding of the commercial environment",
          "Awareness of the concerns of business",
          "Formulation and review of the tax planning on an ongoing basis.",
        ],
        head2: "2. The BCC will consider cross-cutting tax and customs issues, and provide a forum for discussion on strategic issues, focusing on administration and operational policy.",
      },
      
    },
    {
      section: "Framework / Membership",
      content: {
        head: "The BCC comprises a number of members drawn from businesses (maximum ten) including some nominated by the Business Eswatini, Eswatini Institute of Accountants, Law Society of Eswatini SIPA, SEDCO, Eswatini Commercial Amadoda and FESBC. The Commissioner General chairs the BCC and his office provides secretariat support to the Committee. Other ERS attendees will are:",
        subPoints: [
          "All Commissioners",
          "Chief Legal Officer",
          "Other ERS Directors and professional advisers will be invited to attend as and when a need arises.",
        ],
      },
    },
    {
      section: "Meetings",
      content:
        "The BCC meets on a quarterly basis or may meet more frequently should circumstances dictate. As part of its obligation to foster open communications, the Committee is expected to meet with respective business representatives, associations, and any relevant stakeholders in separate executive sessions to discuss any matters that the Committee or each of the smaller working groups believe should be discussed privately.",
    },
    {
      section: "Reporting and Outputs",
      content:
        "The Chairperson of the BCC is expected to account to the relevant authority (Minister for Finance) for activities undertaken by the Committee and make recommendations to the Minister concerning the adoption of any matters arising from the forum. Minutes of each meeting of the BCC will be published on the SRA website.",
    },
    {
      section: "Performance Measures",
      content:
        "All issues that arise from the BCC are meant to be progressed or dealt with within three months of being raised; exceptions are fully reported at the next BCC meeting.",
    },
    {
      section: "Minutes of previous meetings",
      content: {
        links: [
          {
            text: "1. February 21, 2013",
            link: "http://www.sra.org.sz/documents/1492785325.pdf",
          },
          {
            text: "2. February 21, 2013",
            link: "http://www.sra.org.sz/documents/1492785325.pdf",
          },
          {
            text: "3. February 21, 2013",
            link: "http://www.sra.org.sz/documents/1492785325.pdf",
          },
        ],
      },
    },
  ];

  return (
    <>
      <Typography variant="h2" sx={{ ...h2Styling, mb: "2rem" }}>
        Business Consultative Committe
      </Typography>

      <Box
        width={"95%"}
        sx={{
          padding: "2rem",
          background: "#F9F9FA",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "3rem auto", lg: "3rem auto 0" },
        }}
        data-aos="fade-left"
      >
        <Box className={styles.container}>
          {data.map((item) => (
            <Box key={item.section} className={styles.section}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#2F248F",
                }}
              >
                {item.section}
              </Typography>
              {typeof item.content === "string" ? (
                <Typography variant="body1" className="Pointsformatting">
                  {item.content}
                </Typography>
              ) : (
                <>
                  <Typography variant="body1" className="Pointsformatting">
                    {item.content.head}
                  </Typography>
                  <List dense>
                    {item.content.subPoints &&
                      item.content.subPoints.map((subPoint, index) => (
                        <div
                          key={index}
                          className="flex gap-1 items-start pb-2"
                        >
                          <span className="Pointsformatting">
                            <ArrowForwardIosIcon
                              sx={{ ...arrowStyling, color: "#2f2483" }}
                              className="Pointsformatting"
                            />
                          </span>
                          <Typography
                            component="li"
                            className="Pointsformatting"
                          >
                            {subPoint}
                          </Typography>
                        </div>
                      ))}

                    {item.content.links &&
                      item.content.links.map((links, index) => (
                        <div
                          key={index}
                          className="flex gap-1 items-start pb-2 "
                        >
                          <Link href={links.link}>
                            <Typography
                              color="primary"
                              component="li"
                              className="Pointsformatting"
                            >
                              {links.text}
                            </Typography>
                          </Link>
                        </div>
                      ))}
                  </List>
                  <Typography variant="body1" className="Pointsformatting">
                    {item.content.head2}
                  </Typography>
                </>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default BusinessCommitte;
