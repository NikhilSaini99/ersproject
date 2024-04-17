import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../../assets/images/Taxation_of_Benefits.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgimg from '../../assets/images/pxfuel.jpg'
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";


const Taxationandbenefit = () => {
  const commonStyling = {
    " &  *": {
      fontSize: "20px !important",
      letterSpacing: "0.025em",
         lineHeight: "1.8 !important",
    },
  };
  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  const runningCostData = [
    {
      label: "Running costs per km:",
      category: "up to 1600cc",
      cost: "54c per km",
    },
    {
      label: "",
      category: "1600cc to 2000cc",
      cost: "76c per km",
    },
    {
      label: "",
      category: "Over 2000cc",
      cost: "85c per km",
    },
  ];

  const listData = [
    "The employee in terms of the written employment contract is required to have such a motor vehicle for the performance of employee's duties",
    "The size and type of the vehicle relates to duties to be performed in terms of the contract of employment",
    "The employee uses the motor vehicle for the employer's business",
    "The employee is required to keep a record of the millage in respect of business and private use",
    "Employee assisted with purchase of motor vehicle; as part of perks from employment",
  ];
  return (
    <>
     <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
      <ContentDiv>
      <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Taxation of Benefits
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
        {/* <Typography variant="h1" >
          Taxation of Benefits
        </Typography> */}
        <Box sx={{ ...commonStyling }}>
          <Typography variant="body1" >
            The following benefits are taxable to the extent shown below:
          </Typography>
          <Typography fontWeight="bold" variant="subtitle1">
            1. FREE AND SUBSIDISED ACCOMMODATION OR HOUSING
          </Typography>

          <Box component="ul" className="custom-list" sx={{pb:'1rem'}}>
            <li>
              The value of the benefit is equal to the open market rent of the
              accommodation less any payment made by the employee for the
              benefit.
            </li>
            <li>
              Where an employer provides accommodation or housing to employees
              on a sharing basis, the rental benefit value shall be apportioned
              accordingly.
            </li>
            <li>
              Where the employer owns the accommodation or housing, the rental
              benefit value is determined in accordance with Schedule A (
              <a href="http://102.36.181.13:8000/documents/Taxation_of_Benefits.pdf">
                click here to access
              </a>
              ) which is in accordance with size and location.
            </li>
          </Box>

          <Typography fontWeight="bold" variant="subtitle1">
            2. MOTOR VEHICLE BENEFITS
          </Typography>
          <Typography>The benefits are as follows:</Typography>
          <Box component='ol' style={{ listStyleType: "lower-roman" }} sx= {{"& > li ": {marginLeft:{xs:'1.3rem', xl:'0'}}, "& > p":{mb:'1rem'}}}>
            <li> 
              <Typography fontWeight="bold" variant="subtitle2">
                Private Use of Motor Vehicle (including aircraft)
              </Typography>
            </li>

            <Typography>
              Where the motor vehicle (or aircraft) is available for use both
              for work and private purposes. The formula is as follows:
            </Typography>
            <Typography align="center">
              <strong>(20% x A x B/C) - D</strong>
            </Typography>
            <Typography></Typography>
            <Box
              sx={{ "& span": { fontWeight: "bold", marginRight: "0.2rem" } }}
            >
              <Typography>
                <span>A</span>is the market value of the motor vehicle at the
                time it was first provided for the private use of the employee.
              </Typography>
              <Typography>
                <span>B</span>is the number of days in the year of assessment on
                which the motor vehicle was used or available for use for
                private purposes by the employee for all or part of the day.
              </Typography>
              <Typography>
                <span>C</span>is the number of days in the year of assessment.
              </Typography>
              <Typography>
                <span>D</span>is any payment made by the employee.
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Note the following
            </Typography>

            <ul className="custom-list">
              <li>
                Market value of the car is the cost to the employer at the time
                it was first provided to the employee
              </li>
              <li>
                Second Hand cars values are shown in the Auto Dealers Guide
              </li>
              <li>
                Where an employee is provided with more than one car, the
                taxable benefit shall be evaluated on an individual basis.
              </li>
            </ul>

            <li>
              <Typography fontWeight="bold" variant="subtitle2">
                Employee assisted with purchase of vehicle, as part of perks
                from employment
              </Typography>
            </li>

            <Typography>
              Where an employee purchases a personal vehicle with assistance
              from the employer as part of a benefit, the fixed allowance given
              towards the costs of the vehicle is a taxable benefits.
            </Typography>

            <li>
              <Typography fontWeight="bold" variant="subtitle2">
                Employee using personal motor vehicle on employer’s business
              </Typography>
            </li>

            <Typography>
              Where an employee uses a personal vehicle on employers business,
              the annual value of benefits are attributable to such an employee
              for use of the vehicle for private purposes is determined by the
              following formula:
            </Typography>

            <Typography align="center">
              <strong>
                A = B - ( C x D )
                <br />E
              </strong>
            </Typography>
            <Box
              sx={{ "& span": { fontWeight: "bold", marginRight: "0.2rem" } }}
            >
              <Typography>
                <span>A</span>is the amount to be included in taxable income.
              </Typography>
              <Typography>
                <span>B</span>is the car allowance received (car allowance
                includes all cash allowances plus market value of any free
                benefit i.e. free fuel).
              </Typography>
              <Typography>
                <span>C</span>is the actual expenditure on fixed and running
                cost (net of any recoupments) or is the deemed fixed and running
                costs where accurate records are not kept.
              </Typography>
              <Typography>
                <span>D</span>is the business mileage recorded in a log book or
                number record; or the deemed business is mileage of 6000 km
                where accurate records are not kept.
              </Typography>
              <Typography>
                <span>E</span>is the total mileage; or deemed total mileage of
                24 000 km where accurate records are not kept.
              </Typography>
            </Box>

            <Typography variant="body1">
              Cost of motor vehicle means the costs as quoted by the
              manufacturer or what the purchaser paid including VAT/Sales Tax,
              air conditioners, radio tape, alarm and excluding finance charges
              (bank loan)
            </Typography>
            <Box sx={{ ...commonStyling }}>
              <Typography variant="body1" fontWeight="bold">
                Deemed expenditure is determined on the following basis:
              </Typography>
              <Typography variant="body1">
                Fixed Costs: 25% of the original cost of the motor vehicle in
                each year
              </Typography>

              <Paper elevation={20} sx={{ width: "100%", margin: "2rem auto" }}>
                <TableContainer>
                  <Table aria-label="Running Cost Table">
                    <TableBody>
                      {runningCostData.map((data, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <p
                              style={{
                                margin: "0",
                                fontSize: "11pt",
                                fontFamily: "Calibri, sans-serif",
                              }}
                            >
                              {data.label}
                            </p>
                          </TableCell>
                          <TableCell>
                            <p
                              style={{
                                margin: "0",
                                fontSize: "11pt",
                                fontFamily: "Calibri, sans-serif",
                              }}
                            >
                              {data.category}
                            </p>
                          </TableCell>
                          <TableCell>
                            <p
                              style={{
                                margin: "0",
                                fontSize: "11pt",
                                fontFamily: "Calibri, sans-serif",
                              }}
                            >
                              {data.cost}
                            </p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>

              <Typography variant="body1" fontWeight="bold" fontStyle="italic" my='1rem'>
                (The cost of the vehicle is the cost of the vehicle as quoted by
                the manufacturer or what the purchaser paid and any additions
                and accessories such as air-conditioning, radio-tape, and
                burglar alarm etc, excluding finance charges).
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="bold">
              Example
            </Typography>
            <Typography variant="body1">Cost of vehicle = E250 000;</Typography>
            <Typography variant="body1">
              Car allowance = E7000 per month; Engine capacity = 1.6cc; where
              the employee does not keep a log book.
            </Typography>
            <Typography variant="body1">
              B = (7000 x 12 months) = 84 000
            </Typography>
            <Typography variant="body1">
              C = (25% of 250 000) + (24 000 x 76 cents) = E62 500 + E18 240 =
              E80 740
            </Typography>
            <Typography variant="body1">
              D = 6000 km (deemed business mileage)
            </Typography>
            <Typography variant="body1">
              E = 24 000 km (deemed total mileage)
            </Typography>

            <Typography variant="body1">
              A (taxable benefit) = E84 000 – <u>(E80 740 x E6 000)</u>
            </Typography>
            <Typography variant="body1">= E24 000</Typography>
            <Typography variant="body1">= E63 815</Typography>

            <Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                className="Pointsformatting"
                my="1rem"
              >
                NOTE: The rule in (iii) only applies to the following
                circumstances
              </Typography>
              {listData.map((points, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", gap: "1", alignItems: "flex-start" }}
                >
                  <span className="Pointsformatting">
                    <ArrowForwardIosIcon
                      sx={arrowStyling}
                      className="Pointsformatting"
                    />
                  </span>
                  <Typography
                    variant="body1"
                    sx={{ pb: "1rem" }}
                    className="Pointsformatting"
                  >
                    {points}
                  </Typography>
                </Box>
              ))}
            </Box>

            <li>
              <Typography fontWeight="bold" variant="subtitle2">
                Deemed Motor Vehicle Benefit
              </Typography>
            </li>
            <Typography variant="body1">
              Where the employee owns or leases a motor vehicle and rents it to
              the employer the rental paid in respect of the arrangement are
              deemed to be a taxable benefit to the employee
            </Typography>
          </Box>

          <Box>
            <Typography fontWeight="bold" variant="subtitle1">
              3. PROVISION OF DOMESTIC ASSISTANTS
            </Typography>
            <Typography variant="body1">
              The value of the benefit is the remuneration paid to the domestic
              assistant in respect of the services rendered to the employee.
            </Typography>

            <Typography variant="body1" fontWeight="bold" fontStyle="italic" my="1rem">
              ( The value of this benefit is not expected to be less than the
              minimum wages as set out in the Wages Act or Legal Notice issued
              for the regulation of wages).
            </Typography>
          </Box>
          <Box pb="1rem">
            <Typography fontWeight="bold" variant="subtitle1" >
            4. UTILITIES (ELECTRICITY, WATER, COAL, GAS)
            </Typography>
            <Typography variant="body1">
            The value of the benefit is the amount of reimbursement or discharge payable by employer for employee on utilities expenditure if separately metered. Where the utilities are not separately metered the benefit value is 10% of the housing benefit for each service.
            </Typography>

          </Box>
          <Box pb="1rem">
            <Typography fontWeight="bold" variant="subtitle1">
            5. CHILDREN S EDUCATIONAL ASSISTANCE BENEFIT
            </Typography>
            <Typography variant="body1">
            The value of the benefit is the cost to the employer for providing such educational assistance. If the educational assistance is provided through an approved bursary scheme, only 50% of the total amount paid by the employer during each year of assessment shall be taxable. 
            </Typography>
          </Box>
          <Box pb="1rem">
            <Typography fontWeight="bold" variant="subtitle1">
            6. SOFT LOANS
            </Typography>
            <Typography variant="body1">
            If a loan is granted interest free or less than the official rate to an employee, either by the employer or a lending institution, the taxable benefit is the whole amount of interest or the difference between the official rate and the subsidized rate. 
            </Typography>
          </Box>
          <Box pb="1rem">
            <Typography fontWeight="bold" variant="subtitle1">
            7. MEALS, REFRESHMENTS AND ENTERTAINMENT
            </Typography>
            <Typography variant="body1">
            The value of the benefit is the cost to the employer of providing the meal, refreshment or entertainment.
            </Typography>
          </Box>
          <Box pb="1rem"    >
            <Typography fontWeight="bold">
            8. DE MINIMUS RULE
            </Typography>
            <Typography variant="body1">
            This refers to benefits whose value is so small, as to make it unreasonable or administratively impractical to account for them for tax purposes. Click here for a Guideline on the tax treatment of these kind of benefits.
            </Typography>
          </Box>
          
        </Box>
      </ContentDiv>
      </PageLayout>
    </>
  );
};

export default Taxationandbenefit;
