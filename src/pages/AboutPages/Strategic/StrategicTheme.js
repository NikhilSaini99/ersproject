import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "@/pages/AboutPages/Strategic/StrategicTheme.module.css";

const StrategicTheme = ({ h2Styling }) => {
  const strategicSection = [
    {
      id: 1,
      title: "Employee Experience",
      description:
        "To create a conducive work environment, with an engaged and productive workforce that possess the appropriate competencies for the digitalised ERS.",
    },
    {
      id: 2,
      title: "Digitalization",
      description:
        "To accelerate digitalization of operations to ensure efficiencies in revenue collection and trade facilitation.",
    },
    {
      id: 3,
      title: "Trade Facilitation and Enforcement",
      description:
      "To reduce the time for moving legitimate goods across our borders and implement the Trade Facilitation Agreement that the country signed into with the World Trade Organization.",
    },
    {
      id: 4,
      title: "Client Experience and Education",
      description: "To provide a rewarding client experience to improve trust and deliver educational programs that shall empower our clients to competently honour their tax and customs obligations in full and on time.",
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
          width: "95%",
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
