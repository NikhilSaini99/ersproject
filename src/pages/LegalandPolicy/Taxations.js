import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
} from "@mui/material";
import Image from "next/image";
import Banner from "../../assets/images/Double_Taxation_Agreements.jpg";
import bgimg from "../../assets/images/pagebackground1.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";


const arrowStyling = {
  color: '#2f2483',
  fontSize: '1rem',
  marginRight: '0.5rem'
}

const Taxations = () => {
  const countries = [
    {
      name: "South Africa",
      dateOfSignature: "November 2004, replacing DTA signed in 1973",
      link:"http://www.sra.org.sz/documents/1497275199.pdf"
    },
    { name: "Mauritius", dateOfSignature: "1995" ,link:"http://www.sra.org.sz/documents/1497275422.pdf"},
    {
      name: "United Kingdom",
      dateOfSignature: "December 1968, replacing DTA signed in 1949",
      link:"http://www.sra.org.sz/documents/1497275572.pdf"
    },
    { name: "Seychelles", dateOfSignature: "2015",link:"http://www.sra.org.sz/documents/1497275706.pdf" },
    { name: "Republic of China on Taiwan", dateOfSignature: "2019",link:"http://www.sra.org.sz/documents/1562159490.pdf" },
    { name: "Botswana", dateOfSignature: "2019",link:"http://www.sra.org.sz/documents/BOTSWANA%20DTA.pdf" },
    { name: "Lesotho", dateOfSignature: "29 September 2020",link:"http://www.sra.org.sz/documents/1605082062.pdf" },
  ];

  return (
    <>
     <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
        <ContentDiv>
        <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Double Taxation Agreements
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography variant="h1" >
            
          </Typography> */}

          <Typography variant="h6" sx={{mb: "1rem" }}>
            Status of Double Taxation Avoidance Agreement (DTAA’s) & Tax
            Information Exchange Agreements (TIEA’s)
          </Typography>
          <Box sx={{ marginLeft: { sm: "1.3rem", lg: "1.3rem", xl:'0' } }}>
            <ol style={{ listStyleType: "decimal", start: "2 !important" }}>
              <li style={{ fontWeight: "bold", fontSize: "1.35rem" }}>
                Double Taxation Avoidance Agreement (DTAA)
                <ol
                  style={{ listStyleType: "lower-roman", fontWeight: "normal" }}
                >
                  <li>In force</li>
                </ol>
              </li>
            </ol>
          </Box>
          <Paper elevation={20} sx={{ margin: "2rem 0" }}>
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
                    <TableCell align="center">Country</TableCell>
                    <TableCell align="center">Date of Signature</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countries.map(
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
                          <TableCell align="center">
                            <Link href={item.link}><u>{item.name}</u></Link>
                            </TableCell>
                          <TableCell align="center">
                           {item.dateOfSignature}
                          </TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Box sx={{ marginLeft: { sm: "1.3rem", xl: "none" } }}>
            <ol style={{ listStyleType: "decimal", fontWeight: "normal" }}>
              <li style={{ fontWeight: "bold", fontSize: "1.30rem" }}>
                Tax Information Exchange Agreements (TIEA)
                <ol
                  style={{ listStyleType: "lower-roman", fontWeight: "normal" }}>
                  <li>
                    In force
                    <ul className="custom-list">
                    <li className="Pointsformatting"> <ArrowForwardIosIcon sx={arrowStyling} />
                     Isle of Man</li>
                      <li className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} />
                      States of Guernsey</li>
                    </ul>
                  </li>
                </ol>
              </li>
            </ol>
          </Box>
        </ContentDiv>
        </PageLayout>
    </>
  );
};

export default Taxations;
