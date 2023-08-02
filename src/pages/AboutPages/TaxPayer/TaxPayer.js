import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { taxpayerCharter, taxpayerCharter2 } from "@/content/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import taxpayersection1 from "@/assets/images/taxpayersection1.png";
import taxpayersection2 from "@/assets/images/taxpayersection2.png";
import Image from "next/image";

const TaxPayer = ({ h2Styling, arrowStyling }) => {
  return (
    <>
      <Box sx={{ position: "relative", margin: "0 auto" }}>
        <Typography variant="h2" sx={h2Styling}>
          Taxpayer Charter
        </Typography>
        <Stack
          direction={"column"}
          sx={{
            position: "relative",
            top: "0",
            margin: "3rem auto",
          }}
        >
          <Box
            width={"95%"}
            sx={{
              background: "#fbfbfb",
              pl: { xs: "0.5rem", lg: "2rem" },
              margin: { xs: "0.5rem auto", lg: "1rem auto 0" },
              py: "3rem",
            }}
            className="Pointsformatting"
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "400" }}
              className="Pointsformatting"
            >
              The Charter sets out the way we will conduct ourselves when
              dealing with you. It will help you understand:
            </Typography>
            <ul>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <li>Your rights as a taxpayer</li>
              </div>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <li>Your important tax obligations</li>
              </div>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <li>
                  The service and other standards you can expect from us, and
                </li>
              </div>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <li>
                  What you can do if you’re dissatisfied with our decisions,
                  actions or services, or you want to lodge a complaint.
                </li>
              </div>
            </ul>
          </Box>

          {/* left side */}
          <Stack
            width={"95%"}
            data-aos="slide-left"
            direction={"row"}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { lg: "1rem" },
              mt: "2rem",
              pl: { xs: "2rem", lg: "3rem" },
            }}
          >
            {taxpayerCharter.map((item, index) => (
              <Box key={index}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#2F248F",
                    marginY: "1rem",
                  }}
                >
                  {item.section}
                </Typography>
                <ul>
                  {item.content.split("\n").map((bulletPoints, index) =>
                    index === 0 ? (
                      <h4
                        key={index}
                        style={{ fontWeight: "400" }}
                        className="Pointsformatting"
                      >
                        {" "}
                        {bulletPoints}
                      </h4>
                    ) : (
                      <div key={index} className="flex gap-1 items-start">
                        <span className="Pointsformatting">
                          <ArrowForwardIosIcon
                            sx={arrowStyling}
                            className="Pointsformatting"
                          />
                        </span>
                        <li className="Pointsformatting">{bulletPoints}</li>
                      </div>
                    )
                  )}
                </ul>
              </Box>
            ))}
            <Image
              src={taxpayersection2}
              alt="taxpayersection1"
              className="w-5/12"
            />
          </Stack>
          {/* left side end */}

          {/* right side start */}
          <Stack
           width={"95%"}
            data-aos="slide-right"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { lg: "1rem" },
              mt: "2rem",
            }}
          >
            <Image
              src={taxpayersection2}
              alt="taxpayersection1"
              className="w-5/12"
            />
            {taxpayerCharter2.map((item, index) => (
              <Box key={index} sx={{ pr: { xs: "0.5rem", lg: "5rem" } }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#2F248F",
                    marginY: "1rem",
                    pr: { xs: "2rem", lg: "3rem" },
                  }}
                >
                  {item.section}
                </Typography>
                <ul>
                  {item.content.split("\n").map((bulletPoints, index) =>
                    index === 0 ? (
                      <h4
                        key={index}
                        style={{ fontWeight: "400" }}
                        className="Pointsformatting"
                      >
                        {" "}
                        {bulletPoints}
                      </h4>
                    ) : (
                      <div key={index} className="flex gap-1 items-start">
                        <span className="Pointsformatting">
                          <ArrowForwardIosIcon
                            sx={arrowStyling}
                            className="Pointsformatting"
                          />
                        </span>
                        <li className="Pointsformatting">{bulletPoints}</li>
                      </div>
                    )
                  )}
                </ul>
              </Box>
            ))}
          </Stack>
          {/* right side end */}
        </Stack>
      </Box>
    </>
  );
};

export default TaxPayer;
