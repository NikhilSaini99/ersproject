import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "@/pages/AboutPages/Strategic/StrategicTheme.module.css";

const StrategicTheme = ({ h2Styling }) => {
  const strategicSection = [
    {
      id: 1,
      title: "COST EFFICIENCIES",
      description:
        "To collect the required revenue effectively and efficiently, manage cost of doing business whilst building a financially sustainable organisation.",
    },
    {
      id: 2,
      title: "MODERNISATION",
      description:
        "Develop an effective institutional framework that promotes correct, uniform and consistent administration of revenue laws/legislation and ease of doing business with and within ERS.",
    },
    {
      id: 3,
      title: "HUMAN CAPITAL",
      description:
        "To attract, retain and build capacity of our staff to meet our revenue, operational and strategic objectives.",
    },
    {
      id: 4,
      title: "CUSTOMER AND STAKEHOLDER CENTRICITY",
      description: "To deliver customer and stakeholder centricity.",
    },
  ];

  return (
    <>
      <Typography variant="h2" sx={h2Styling}>
        Strategic Themes
      </Typography>

      <Box
        className={`${styles.cardeffect} ${styles.borderLine}`}
        sx={{
          width: "98%",
          margin: "3rem auto 0",
          position: "relative",
          textAlign: "left",
          minHeight: "fit-content",
          maxHeight: "fit-content",
        }}
      >
        <Grid
          container
          rowGap={4}
          data-aos="fade-up"
          sx={{
            position: "relative",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            p: { xs: "1rem", md: "2.2rem", lg: "5rem" },
          }}
        >
          {strategicSection.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={6}
              lg={6}
              sx={{ px: { xs: "0.5rem", sm: "1.5rem" } }}
            >
              <Stack direction={"column"} sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  className="Pointsformatting"
                  variant="h4"
                  fontWeight={"bold"}
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="Pointsformatting"
                  variant="body1"
                  fontWeight={"400"}
                  sx={{ fontSize: { xs: "0.9rem", sm: "0.95rem" } }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default StrategicTheme;
