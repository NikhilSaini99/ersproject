import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Banner from "../assets/images/customs.jpg";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Loader from "@/components/Loader";
import PageLayout from "./PagesLayout/Layout";
import bgimg from "../assets/images/bg-1.png";
import { taxData } from "../content/data";
import { useFetch } from "./api/api";

let myKeys;
const TaxItemTable = () => {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/textIteamCode");

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  //   const tax_type = data?.data?.map((item) => item.text_type_two);
  //   const taxItem_name = data?.data?.map((item) => item.item_name);
  //   const check = {};

  //   const newarr = [];

  //   for (let i = 0; i < tax_type?.length && i < taxItem_name?.length; i++) {
  //     const subarr = [];
  //     subarr.push({ new_tax_type: tax_type[i] });
  //     subarr.push({ new_tax_Name: taxItem_name[i] });
  //     newarr.push(subarr);
  //   }

  return (
    <>
    <PageLayout title={"Item Tax Code"} bannerImg={Banner} contentBackground={bgimg}>

      
        <Box
          sx={{
            width: "85%",
            margin: { xs: "0rem auto", lg: "0rem  auto" },
            py: "2rem",
          }}
        >
          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Tax Item Codes
                            <span className="absolute bottom-0 left-0 w-1/5 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography
            variant="h1"
            sx={{ pt: "2rem", mb: "2rem", textAlign: "center" }}>
            Tax Item Codes
          </Typography> */}


          <Typography
            variant="body1"
            className="Pointsformatting"
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              pb: "2rem",
              width: { xs: "96%", md: "100%", xl: "80%" },
              margin: "0rem auto",
            }}
          >
            For administrative and accounting purposes it is important to
            include the correct tax item code when making payment. This code
            provides information on the tax item for which the payment is made
            and it must be provided regardless of the mode of payment being
            used.*
          </Typography>

          <Typography
            variant="body1"
            className="Pointsformatting"
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              pb: "2rem",
              width: { xs: "96%", md: "100%", xl: "80%" },
              margin: "0rem auto",
              fontStyle: "italic",
            }}
          >
          * The MTN Mobile Money provides an option to select the tax
            type for which payment is being made, therefore use of the
            referencing format is not necessary. The table below has the total
            list of tax item codes for use when referencing payments
          </Typography>
          <Typography
            variant="body1"
            className="Pointsformatting"
            sx={{
              fontSize: "1rem",
              textAlign: "left",
              pb: "2rem",
              width: { xs: "96%", md: "100%", xl: "80%" },
              margin: "0rem auto",
            }}
          >
           The table below has the total list of tax item codes for use when referencing payments
          </Typography>
          <Box
            sx={{
              width: { xs: "96%", md: "100%", xl: "80%" },
              margin: "0rem auto",
            }}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <Paper elevation={20} sx={{ width: "100%", margin: "0 auto" }}>
                <TableContainer 
                sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.1)' } }}
                >
                  <Table>
                    <TableHead>
                      <TableRow
                        sx={{
                          backgroundColor: "#DFDFDF",
                          "& > *": {
                            fontWeight: "bold !important",
                            fontSize: "1rem !important",
                            textAlign: "center !important",
                          },
                        }}
                      >
                        <TableCell width="30%">Tax Type</TableCell>
                        <TableCell>Tax Type Two</TableCell>
                        <TableCell>Tax Item</TableCell>
                        <TableCell>Tax Code</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data &&
                        data?.data?.map((item, i) => (
                          <TableRow
                            key={item.id}
                            sx={{
                              "& > *": {
                                textAlign: "center !important",
                              },
                              "&:hover": {
                                background: "#F2F2F2",
                              },
                            }}
                          >
                            {/* {item.text_type!==data?.data?.[i-1]?.text_type ?  <TableCell>{item.text_type}</TableCell> :  <TableCell>  </TableCell> } */}
                            <TableCell>{item.text_type}</TableCell>
                            <TableCell>{item.text_type_two}</TableCell>
                            <TableCell>{item.item_name}</TableCell>
                            <TableCell>{item.item_code}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>
        </Box>
      </PageLayout>
    </>
  );
};

export default TaxItemTable;
