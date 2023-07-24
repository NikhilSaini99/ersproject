import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CodeOfEthicsConduct = ({ h2Styling, arrowStyling }) => {
  const data = [
    {
      subhead:
        "The code of ethics spells out the Authority's values and covers:",
      points: [
        "Avoiding Conflicts of Interest",
        "Prohibition from accepting gifts, benefits and hospitality",
        "Declaring financial and other interests",
        "Avoiding the misuse of resources",
        "Safeguarding official and taxpayer information",
        "Restrictions on political and media activity",
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
          padding: "2rem",
          background: "#F9F9FA",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          margin: { xs: "3rem auto 0", lg: "3rem auto 0" },
        }}
      >
        {data.map((item, index) => (
          <Box key={index}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{fontWeight: "bold" }}
              className="Pointsformatting"
            >
              {item.subhead}
            </Typography>
            {item.points.map((point, index) => (
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

export default CodeOfEthicsConduct;
