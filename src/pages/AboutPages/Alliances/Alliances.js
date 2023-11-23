import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pageData = {
  allianceContent:
    "In furtherance of the ERS mandate, and in working towards adopting best practices, the ERS is a member of various international organisations, such as the: African Tax Administration Forum (ATAF); World Customs Organisation (WCO); and the Commonwealth Association of Tax Administrators (CATA). Furthermore, we collaborate with the International Monetary Fund (IMF) to improve our efficiencies through conducting assessments, such as the Tax Administration Diagnostic Assessment Tool (TADAT). We then compare our performance at all angles against other revenue administrations across the globe. We also utilise the WCO Data Model (DM) as the data foundation for global trade interoperability for over two decades. The aim of this is to suggest areas of improvement. We constantly pursue alliances and cooperation agreements with other reputable revenue agencies and other international organisations. The list below shows our current agreements.",
  allianceContent2:
    "",
};

const Alliances = ({ h2Styling, arrowStyling }) => {
  const allianceTableData = [
    {
      double: "South Africa",
      exchange: "Isle of Man",
      agreements: "South Africa (VAT Refund Scheme)",
    },
    {
      double: "United Kingdom",
      exchange: "The States of Guernsey",
      agreements: "Mozambique",
    },
    {
      double: "Mauritius",
      exchange: "",
      agreements: "Mauritius",
    },
    {
      double: "Seychelles",
      exchange: "",
      agreements: "Lesotho",
    },
    {
      double: "Taiwan (Republic of China)",
      exchange: "",
      agreements: "Botswana",
    },
    {
      double: "Botswana",
      exchange: "",
      agreements: "Mauritius",
    },
    {
      double: "Lesotho",
      exchange: "",
      agreements: "Seychelles",
    },
    {
      double: "",
      exchange: "",
      agreements: "Tanzania",
    },
    {
      double: "",
      exchange: "",
      agreements: "Zimbabwe",
    },
  ];

  const agreements = [
    "African Tax Administration Forum Agreement on Mutual Assistance in Tax Matters",
    "Southern African Development Community (SADC) Agreement on Assistance in Tax Matters",
    "The Multilateral Convention on Mutual Administrative Assistance in Tax Matters",
    "SADC Amended Protocol on Trade, Annex II - Customs Cooperation within SADC",
    "International Convention on Mutual Administrative Assistance for the Prevention, Investigation and Repression of Customs Offences",
  ];

  return (
    <>
      <Typography variant="h2" sx={h2Styling}>
        Alliances and Agreements
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
        data-aos="fade-up"
      >
        <Typography variant="body1" className="Pointsformatting">
          {pageData.allianceContent}
        </Typography>
        <Typography variant="body1" className="Pointsformatting">
          {pageData.allianceContent2}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#2F248F",
            marginY: "1rem",
          }}
        >
          ERS’s Alliances and Agreements.
        </Typography>

        <Paper elevation={10} sx={{ margin: "2rem 0" }}>
          <TableContainer
            sx={{ "& th, & td": { border: "0.1rem solid rgba(0,0,0,0.4)" } }}
          >
            <Table aria-label="Double Taxation Table">
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#2f2483",
                    "& > *": {
                      color: "white !important",
                      fontWeight: "bold !important",
                      fontSize: "1rem !important",
                    },
                  }}
                >
                  <TableCell align="center">
                    Double Taxation Agreements
                  </TableCell>
                  <TableCell align="center">
                    Tax Information Exchange Agreements
                  </TableCell>
                  <TableCell align="center">
                    Cooperation Agreements with Other Revenue Authorities
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allianceTableData.map(
                  (item, index) =>
                    item && (
                      //to get the grey background hover effect
                      <TableRow
                        key={index}
                        sx={{
                          "&>*": {
                            fontWeight: "bold",
                          },
                          "&:hover": {
                            background: "#F2F2F2",
                          },
                        }}
                      >
                        <TableCell align="center">{item.double}</TableCell>
                        <TableCell align="center">{item.exchange}</TableCell>
                        <TableCell align="center">{item.agreements}</TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Box mt="2rem">
          <Typography variant="body1" className="Pointsformatting" my="1rem">
            Other Agreements in Force
          </Typography>
          {agreements.map((agreeItem, index) => (
            <div key={index} className="flex gap-1 items-start pb-2">
              <span className="Pointsformatting">
                <ArrowForwardIosIcon
                  sx={{ ...arrowStyling, color: "#2f2483" }}
                  className="Pointsformatting"
                />
              </span>
              <ul>
              <Typography
                component="li"
                variant="body1"
                gutterBottom
                className="Pointsformatting"
              >
                {agreeItem}
              </Typography>
              </ul>
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Alliances;
