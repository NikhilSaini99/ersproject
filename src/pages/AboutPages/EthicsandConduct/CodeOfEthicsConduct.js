import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/pages/AboutPages/EthicsandConduct/CodeOfEthicsConduct.module.css";

const CodeOfEthicsConduct = ({ h2Styling, arrowStyling }) => {
  const data = [
    {
      points: [
        "Prohibition from accepting gifts, benefits and hospitality",
        "Avoiding Conflicts of Interest",
        "Declaring financial and other interests",
        "Upholding integrity and ethical behaviour. ",
        "Safeguarding official and taxpayer information",
        "Restrictions on political and media activity",
        "Prohibition of misuse of resources",
        "Reporting of fraud, corruption, misconduct, and anything prejudicial to the interest of the ERS"
      ],
    },
  ];

  return (
    <>
      <Typography variant="h2" sx={{ ...h2Styling }}>
        Code of Ethics and Conduct
      </Typography>
      <Box
        width={"95%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          p: "1.5rem",
          background: "#F9F9FA",
          margin: { xs: "3rem auto 1rem auto", lg: "3rem auto 0.5rem auto"},
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}>
        <Typography variant="body1" className="Pointsformatting">
        The ERS Employee Code of Ethics Conduct spells out the minimum expected standards of personal and professional behaviour required of employees. The code applies to all employees, associates, and members of the governing board and any other person who acts on behalf of and in the interest of the ERS as maybe applicable.
        </Typography>
      </Box>

      <Box
        className={`${styles.cardeffect} ${styles.borderLine}`}
        width={"95%"}
        sx={{
          position: "relative",
          padding: "2rem",
          background: "#F9F9FA",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "0rem auto 0", lg: "0rem auto 0" },
        }}>
        <Grid container rowGap={4} data-aos="fade-up">
          {data.map((item, index) => (
              item.points.map((point, index) => (
                <Grid
                  item
                  key={index}
                  sx={{ zIndex: "99", px: { xs: "0.5rem", xs:'2.5rem',  xl: "6rem" } }}
                  xs={12}
                  md={6}
                  lg={6}>
                  <div key={index} className="flex gap-1 items-start pb-2">
                    <span className="Pointsformatting">
                      <ArrowForwardIosIcon
                        sx={{ ...arrowStyling, color: "#2f2483" }}
                        className="Pointsformatting"
                      />
                    </span>
                    <Typography className="Pointsformatting">
                      {point}
                    </Typography>
                  </div>
                </Grid>
              ))
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CodeOfEthicsConduct;
