import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import banner from "../assets/images/About_us.jpg";
import estwaniimg from "../assets/images/aboutusbanner.jpg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/about.module.css";
import Link from "next/link";
import OurMission from "./AboutPages/OurMission/OurMission";
import Mandate from "./AboutPages/Mandate/Mandate";
import CouncilMember from "./AboutPages/CouncilMember/CouncilMember";
import StrategicTheme from "./AboutPages/Strategic/StrategicTheme";
import TaxPayer from "./AboutPages/TaxPayer/TaxPayer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function About() {
  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  const h2Styling = {
    fontWeight: "700",
    textAlign: "center",
    pt: "3rem",
    position: "relative",
    fontSize: "2rem",
    color: "#2F248F",
  };

  const heroSectionData = {
    title: "About Eswatini Revenue Service",
    description:
      "The Eswatini Revenue Service (ERS) is a semi-autonomous revenue administration agency, established through the Revenue Authority Act No. 1 of 2008. It operates within the broad framework of Government but outside of the civil service.The ERS is structured as a corporate entity and strives for operational excellence and efficiency. It is headed by a Commissioner General, Mr Dumsani E. Masilela and is organised on functional lines – this link provides more details. The ERS has a Governing Board which is appointed by the Honorable Minister of Finance in accordance with the Eswatini Public Enterprise Act, and read with the founding Act.In furtherance of our mandate, as well as in working towards adopting best practice, the ERS is a member of various international organisations, such as the World Customs Organization (WCO); the Commonwealth Association of Tax Administrators (CATA) and the African Tax Administration Forum (ATAF). Alliances with established revenue agencies such as the South African Revenue Service (SARS), the Lesotho Revenue Authority (LRA) and the Zambia Revenue Authority (ZRA) have also been pursued to this end.",
  };

  const boardMembers = {
    ministerialAppoints: "David Dlamini – Chairman",

    otherBoardMembers: [
      "Brightwell Nkambule (CG)",
      "Phil Mnisi",
      "Carol Muir",
      "Prince Lindani",
      "Vusie E. Dlamini",
      "Ms Chazile Magongo",
      "Lusekwane Dlamini",
    ],
  };

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*----------------------- About Us Banner ------------------*/}
      <Box sx={{ position: "relative", width: "100%", height: "30rem" }}>
        <Image
          src={banner}
          alt="about_us"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Box className={styles.box_animation}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "1.2rem", lg: "2.8rem" },
              color: "white",
              fontFamily: "inherit",
              fontWeight: "400",
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* -------------------------About Us Banner END HERE --------------------------*/}

      {/*------------------------- Hero Section Start-------------------------- */}

      <Stack
        direction={"row"}
        lineHeight={"1.6em"}
        spacing={5}
        width={"95%"}
        sx={{ margin: { xs: "3rem auto", lg: "3rem auto 0" } }}
      >
        <Stack width="100%" data-aos="fade-up-right">
          <Typography variant="h1" my=".5rem">
            About Eswatini Revenue Service
          </Typography>
          <Typography className="Pointsformatting" variant="body1">
            <Image
              src={estwaniimg}
              width={0}
              height={0}
              alt="about estwani vat"
              className={styles.about_img}
            />
            {heroSectionData.description}
          </Typography>

          {/* Our Mission Component */}
          <OurMission h2Styling={h2Styling} />
        </Stack>
      </Stack>

      {/*   Mandate section */}
      <Mandate h2Styling={h2Styling} />

      {/* Board and Corporate Governance section start */}

      <Typography variant="h2" sx={{ ...h2Styling, mb: "2rem" }}>
        Board and Corporate Governance
      </Typography>

      <Box
        className={`${styles.board_container}`}
        width={"95%"}
        sx={{ margin: { xs: "3rem auto", lg: "3rem auto 0" } }}
      >
        <Typography variant="body1" className={styles.board_subheading}>
          The Board has 8 members.
        </Typography>

        <ul>
          <li>
            <Typography
              variant="body1"
              gutterBottom
              className="Pointsformatting"
            >
              4 are appointed by the Minister of Finance and 4 are ex officials.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" className={styles.board_subheading}>
          Ministerial appointments
        </Typography>
        <ul>
          <div className="flex gap-1 items-start">
            <span className="Pointsformatting">
              <ArrowForwardIosIcon
                sx={arrowStyling}
                className="Pointsformatting"
              />
            </span>

            <Typography
              component="li"
              variant="body1"
              gutterBottom
              className="Pointsformatting"
            >
              {boardMembers.ministerialAppoints}
            </Typography>
          </div>
        </ul>

        <Typography variant="h6" className={styles.board_subheading}>
          Other Board Members
        </Typography>

        <ul className="flex gap-2">
          {boardMembers.otherBoardMembers.map((item, index) => (
            <div key={index} className="flex gap-1 items-start">
              <span className="Pointsformatting">
                <ArrowForwardIosIcon
                  sx={arrowStyling}
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

        <Grid container spacing={2} className={styles.board_grid}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={styles.board_subheading}>
              The Board has established three sub committees (each with their
              own charter) covering:
            </Typography>
            <ul>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>

                <Typography
                  component="li"
                  variant="body1"
                  gutterBottom
                  className="Pointsformatting"
                >
                  HR and Ethics
                </Typography>

                <Typography
                  component="li"
                  variant="body1"
                  gutterBottom
                  className="Pointsformatting"
                >
                  Audit and Risk Committee
                </Typography>
              </div>
            </ul>

            <Typography variant="body1" className="Pointsformatting">
              Each report to the Board at their quarterly meetings.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={styles.board_subheading}>
              The ERS Management have also put in place a committee structure
              with the two most senior Committees being:
            </Typography>
            <ul>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <Typography
                  component="li"
                  variant="body1"
                  gutterBottom
                  className="Pointsformatting"
                >
                  EXCOM – the Executive Committee which meets monthly to provide
                  overall senior management strategic direction
                </Typography>
              </div>
              <div className="flex gap-1 items-start">
                <span className="Pointsformatting">
                  <ArrowForwardIosIcon
                    sx={arrowStyling}
                    className="Pointsformatting"
                  />
                </span>
                <Typography
                  component="li"
                  variant="body1"
                  gutterBottom
                  className="Pointsformatting"
                >
                  OPCOM – the Operations Committee which meets weekly to deal
                  with matters concerning Tax and Customs operations.
                </Typography>
              </div>
            </ul>
            <Typography variant="body1" className={styles.board_subheading}>
              Each has a number of subcommittees that consider specific
              responsibility areas.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" className={styles.board_subheading}>
          The ERS has an Internal Audit Division who conduct risk-based systems
          audits against an agreed audit plan and ERS also has an external audit
          by
        </Typography>
        <ul>
          <div className="flex gap-1 items-start">
            <span className="Pointsformatting">
              <ArrowForwardIosIcon
                sx={arrowStyling}
                className="Pointsformatting"
              />
            </span>

            <Typography
              component="li"
              variant="body1"
              gutterBottom
              className="Pointsformatting"
            >
              The Auditor General for tax etc. revenues collected by the ERS
            </Typography>
          </div>
          <div className="flex gap-1 items-start">
            <span className="Pointsformatting">
              <ArrowForwardIosIcon
                sx={arrowStyling}
                className="Pointsformatting"
              />
            </span>

            <Typography
              component="li"
              variant="body1"
              gutterBottom
              className="Pointsformatting"
            >
              An external audit company for ERS expenditures
            </Typography>
          </div>
        </ul>
      </Box>
      {/* Board and Corporate Governance section end */}

      {/* --------------------------Hero Section End------------------------- */}

      {/*Council Memeber section start*/}

      <CouncilMember h2Styling={h2Styling} />

      {/*Council Memeber section End here*/}

      <StrategicTheme h2Styling={h2Styling} />

      <TaxPayer h2Styling={h2Styling} arrowStyling={arrowStyling} />

      <Typography variant="h2" sx={h2Styling}>
        ERS Customer Service Standards
      </Typography>

      <Box
        width={"95%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          py: "2rem",
          px: { xs: "0.5rem", lg: "2rem" },
          background: "#F9F9FA",
          margin: { xs: "3rem auto", lg: "3rem auto" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box>
          <Typography variant="body1" className="Pointsformatting">
            Customer service standards are a set of rules that are derived from
            the ERS’s Vision; they aim to give direction to the ERSs strategic
            and business activities as well as its conduct in order to realise
            the Vision.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: "#2F248F" }}>
            What Are Services Standards
          </Typography>
          <Typography variant="body1" className="Pointsformatting">
            Service standards are a set of guidelines that govern the conduct of
            all staff towards ensuring quality service delivery by the
            Authority. Effective customer service standards are defined in very
            specific terms to ensure that employees understand what they are
            required to deliver. These standards will also be the tool used to
            measure the ERSs performance in relation to customer service.
            <br />
            <Link href=""> ERS Customer Standards</Link>
          </Typography>
        </Box>
      </Box>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
