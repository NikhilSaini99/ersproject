import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Mandate = ({ h2Styling, arrowStyling }) => {
  const mandateDatalist = [
    "Assessment and collection of all revenue on behalf of the Government",
    "Administering and giving effect to the laws or the specified provisions of the laws set out in the Schedule and account for all revenue to which those laws apply",
    "Promoting compliance with the revenue laws.",
    "Taking such measures as may be required to counteract tax or revenue fraud and other forms of tax or revenue evasion",
    "Ensuring that all revenue collected is, as soon as reasonably practicable, credited to the Eswatini Government General Account",
    "Subject to the provisions of the Act, take such other measures as considered necessary or desirable for the achievement of the purposes or provisions of the revenue laws.",
  ];

  return (
    <>
      <Typography variant="h2" sx={{ ...h2Styling, mb: "2rem" }}>
        Mandate
      </Typography>

      <Box
        width={"95%"}
        sx={{
          padding: "2rem",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "3rem auto", lg: "3rem auto 0" },
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ paddingLeft: "1.5rem", fontWeight: "bold" }}
          className="Pointsformatting"
        >
          Our Mandate as stated in the Revenue Authority Act, 2008 includes:
        </Typography>
        <ul style={{ paddingLeft: "1.5rem" }}>
          {mandateDatalist.map((item, index) => (
            <div key={index} className="flex gap-1 items-start pb-2">
              <span className="Pointsformatting">
                <ArrowForwardIosIcon
                  sx={{ ...arrowStyling, color: "#2f2483" }}
                  className="Pointsformatting"
                />
              </span>
              <Typography
                component="li"
                variant="body1"
                gutterBottom
                className="Pointsformatting"
              >
                {item}
              </Typography>
            </div>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default Mandate;
