import { Box, Typography } from "@mui/material";

import React from "react";
import styles from "@/pages/AboutPages/OurMission/OurMission.module.css"

const OurMission = ({h2Styling}) => {
  const ourMissionBoxStyle = {
    width: { xs: "100%", lg: "50%" },
    background: "#2F248F",
    mt: "2rem",
    padding: "2rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderBottom: "25px solid transparent",
    borderTop: "25px solid transparent",
    borderRight: "25px solid #f4c402",
    borderLeft: "25px solid #f4c402",
    color: "#FEFEFE",

    transition: "background 0.5s",
    "&:hover": {
      background: "#f4c402",
      color: "#000000",
      borderBottom: "25px solid transparent",
      borderTop: "25px solid transparent",
      borderRight: "25px solid #2F248F",
      borderLeft: "25px solid #2F248F",
      transition: "background 0.5s",
    },
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "1rem",
        }}
        data-aos="fade-up-left"
      >
        <Box sx={ourMissionBoxStyle}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            OUR MISSION
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "0.5rem" }}>
            We are an effective and efficient service-oriented revenue and customs administration, driven by a performance culture that promotes compliance through fair, equitable, and transparent application of the law.
          </Typography>
        </Box>

        <Box sx={ourMissionBoxStyle}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            OUR VISION
          </Typography>
          <Typography variant="body1">
            100% Voluntary Compliance for a better Kingdom of Eswatini.
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h2"
        sx={{ ...h2Styling, textAlign: "center", mb: "2rem" }}
      >
        Our Values
      </Typography>

      <Box
        sx={{ textAlign: "center" }}
        className={styles.custom_effect_container}
        data-aos="zoom-in"
      >
        {/* Performance Excellence */}
        <div className={styles.custom_effect}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Performance Excellence
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Strive for professionalism and continuous improvement.
          </Typography>
        </div>

        {/* Relationships */}
        <div className={styles.custom_effect}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Relationships
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Focus efforts on delivering high-level customer service and
            recognizing the impact of actions on internal and external
            stakeholders.
          </Typography>
        </div>

        {/* Innovative */}
        <div className={styles.custom_effect}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Innovative
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Continuously implement new ideas that re-engineer service offering
            and the way in which ERS operates.
          </Typography>
        </div>

        {/* Integrity */}
        <div className={styles.custom_effect}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Integrity
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Promote honesty, trust, and openness in conducting business.
          </Typography>
        </div>

        {/* Transparency and Accountability */}
        <div className={styles.custom_effect}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Transparency and Accountability
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            Open in operations and communication whilst being responsible for
            actions and decisions.
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default OurMission;
