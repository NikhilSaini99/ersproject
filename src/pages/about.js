import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import person1 from "../assets/images/Member1.jpg";
import person2 from "../assets/images/Member2.jpg";
import person3 from "../assets/images/Member3.jpg";
import person4 from "../assets/images/Member4.jpg";
import banner from "../assets/images/About_us.jpg";
import profilVector from "../assets/images/profilevector.svg";
import estwaniimg from "../assets/images/aboutusbanner.jpg";
import taxpayersection1 from "../assets/images/taxpayersection1.png";
import taxpayersection2 from "../assets/images/taxpayersection2.png";
import cardImg from "../assets/images/card.jpg";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/about.module.css";
import Slider from "react-slick";
import { taxpayerCharter, taxpayerCharter2 } from "../content/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

export default function about() {
  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  const memeberData = [
    {
      id: 1,
      img: profilVector,
      name: "David Dlamini",
      role: "Chairman",
    },
    {
      id: 2,
      img: profilVector,
      name: "Brightwell Nkambule (CG)",
      role: "Board Memeber",
    },
    {
      id: 3,
      img: profilVector,
      name: "Carol Muir",
      role: "Director",
    },
    {
      id: 4,
      img: profilVector,
      name: "Phil Mnisi",
      role: "CEO",
    },
    {
      id: 5,
      img: profilVector,
      name: "David Dlamini",
      role: "Chairman",
    },
    {
      id: 6,
      img: profilVector,
      name: "Brightwell Nkambule (CG)",
      role: "Board Memeber",
    },
    {
      id: 7,
      img: profilVector,
      name: "Carol Muir",
      role: "Director",
    },
    {
      id: 8,
      img: profilVector,
      name: "Phil Mnisi",
      role: "CEO",
    },
  ];

  const strategicSection = [
    {
      id: 1,
      title: "COST EFFICIENCIES",
      description:
        "To collect the required revenue effectively and efficiently, manage cost of doing business whilst building a financially sustainable organisation.",
    },
    {
      id: 2,
      title: "MODERNISATION",
      description:
        "Develop an effective institutional framework that promotes correct, uniform and consistent administration of revenue laws/legislation and ease of doing business with and within ERS.",
    },
    {
      id: 3,
      title: "HUMAN CAPITAL",
      description:
        "To attract, retain and build capacity of our staff to meet our revenue, operational and strategic objectives.",
    },
    {
      id: 4,
      title: "CUSTOMER AND STAKEHOLDER CENTRICITY",
      description: "To deliver customer and stakeholder centricity.",
    },
  ];

  const heroSectionData = {
    title: "About Eswatini Revenue Service",
    description:
      "The Eswatini Revenue Service (ERS) is a semi-autonomous revenue administration agency, established through the Revenue Authority Act No. 1 of 2008. It operates within the broad framework of Government but outside of the civil service.The ERS is structured as a corporate entity and strives for operational excellence and efficiency. It is headed by a Commissioner General, Mr Dumsani E. Masilela and is organised on functional lines – this link provides more details. The ERS has a Governing Board which is appointed by the Honorable Minister of Finance in accordance with the Eswatini Public Enterprise Act, and read with the founding Act.In furtherance of our mandate, as well as in working towards adopting best practice, the ERS is a member of various international organisations, such as the World Customs Organization (WCO); the Commonwealth Association of Tax Administrators (CATA) and the African Tax Administration Forum (ATAF). Alliances with established revenue agencies such as the South African Revenue Service (SARS), the Lesotho Revenue Authority (LRA) and the Zambia Revenue Authority (ZRA) have also been pursued to this end.",
  };

  //settings for carousel
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1280, // screens between 1280px and 960px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960, // screens between 960px and 600px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // screens below 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
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
        sx={{ margin: { xs: "3rem auto", lg: "3rem auto" } }}
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
            The Eswatini Revenue Service (ERS) is a semi-autonomous revenue
            administration agency, established through the Revenue Authority Act
            No. 1 of 2008. It operates within the broad framework of Government
            but outside of the civil service. The ERS is structured as a
            corporate entity and strives for operational excellence and
            efficiency. It is headed by a Commissioner General, Mr Dumsani E.
            Masilela and is organised on functional lines – this link provides
            more details. The ERS has a Governing Board which is appointed by
            the Honorable Minister of Finance in accordance with the Eswatini
            Public Enterprise Act, and read with the founding Act. In
            furtherance of our mandate, as well as in working towards adopting
            best practice, the ERS is a member of various international
            organisations, such as the World Customs Organization (WCO); the
            Commonwealth Association of Tax Administrators (CATA) and the
            African Tax Administration Forum (ATAF). Alliances with established
            revenue agencies such as the South African Revenue Service (SARS),
            the Lesotho Revenue Authority (LRA) and the Zambia Revenue Authority
            (ZRA) have also been pursued to this end.
          </Typography>
        </Stack>
      </Stack>

      {/* --------------------------Hero Section End------------------------- */}

      {/* ------------------------Council Memeber section start-------------------------- --*/}

      <Box width={"94%"} sx={{ margin: "0 auto", textAlign: "center" }}>
        <Stack direction={"column"} spacing={3} sx={{ mt: "5rem", mb: "5rem" }}>
          <Typography variant="h1" sx={{ fontWeight: "400" }}>
            Meet Council Member
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "grey",
              maxWidth: "500px",
              margin: "0 auto",
              placeSelf: "center",
              pb: "1rem",
            }}
          >
            Denounce with righteous indignation and dislike men who are so
            beguiled & demoralized our power of choice.
          </Typography>

          {/*-------------------carousel----------------------- */}

          <Box className="image-slider">
            <Slider className="h-fit" {...settings}>
              {memeberData.map((item) => {
                return (
                  <Box
                    key={item.id}
                    sx={{
                      position: "relative",
                      pl: { lg: "0.7rem", xl: "1rem" },
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={0}
                      height={0}
                      style={{
                        border: "none",
                        width: "100%",
                        aspectRatio: "4/4",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid rgba(0, 0, 0, 0.10)",
                        borderTop: "none !important",
                        overflow: "hidden",
                        p: "25px 20px 18px",
                        gap: "1.5rem",
                      }}
                    >
                      <Typography variant="body1" fontWeight={"bold"}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#f4c402" }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>

          {/* ---------Card section----- */}
        </Stack>
      </Box>

      {/*-------------------------- Council Memeber section End here------------------- */}

      <Box
        className={`${styles.cardeffect} ${styles.borderLine}`}
        sx={{
          width: "98%",
          margin: "4rem auto",
          position: "relative",
          textAlign: "left",
        }}
      >
        <Image
          src={cardImg}
          alt=""
          width={"100%"}
          height={0}
          layout="responsive"
          objectFit="contain"
          style={{
            border: "none",
            opacity: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
        <Grid
          container
          rowGap={2}
          data-aos="fade-up"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            p: { xs: "1.5rem", md: "2.2rem", lg: "5rem" },
          }}
        >
          {strategicSection.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={6}
              lg={6}
              sx={{ px: "3.125rem" }}
            >
              <Stack direction={"column"} sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  variant="h4"
                  fontWeight={"bold"}
                  sx={{ fontSize: "1.1rem" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={"400"}
                  sx={{ fontSize: "0.95rem" }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ position: "relative", margin: "0 auto" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "1.2rem",
              lg: "2.8rem",
              textAlign: "center",
              fontWeight: "400",
            },
          }}
        >
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
            sx={{ background: "#fbfbfb", px: "10rem", py: "5rem" }}
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
            data-aos="slide-left"
            direction={"row"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { lg: "4rem" },
              mt: "2rem",
              px: "10rem",
            }}
          >
            {taxpayerCharter.map((item, index) => (
              <Box key={index} sx={{ width: "50%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#2F248F",
                    marginY:'1rem'
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
              src={taxpayersection1}
              alt="taxpayersection1"
              className="w-6/12"
            />
          </Stack>
          {/* left side end */}

          {/* right side start */}
          <Stack
            data-aos="slide-right"
            direction={"row"}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: { lg: "4rem" },
              mt: "2rem",
              px: "10rem",
            }}
          >
            <Image
              src={taxpayersection2}
              alt="taxpayersection1"
              className="w-6/12"
            />
            {taxpayerCharter2.map((item, index) => (
              <Box key={index} sx={{ width: "50%" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#2F248F",
                    marginY:'1rem'
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            py: "4rem",
            px: "10rem",

            background: "#F9F9FA",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ color: "#2F248F" }}>
              ERS Customer Service Standards
            </Typography>
            <Typography variant="body1" className="Pointsformatting">
              Customer service standards are a set of rules that are derived
              from the ERS’s Vision; they aim to give direction to the ERSs
              strategic and business activities as well as its conduct in order
              to realise the Vision.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: "#2F248F" }}>
              What Are Services Standards
            </Typography>
            <Typography variant="body1" className="Pointsformatting">
              Service standards are a set of guidelines that govern the conduct
              of all staff towards ensuring quality service delivery by the
              Authority. Effective customer service standards are defined in
              very specific terms to ensure that employees understand what they
              are required to deliver. These standards will also be the tool
              used to measure the ERSs performance in relation to customer
              service.
              <br />
              <Link href=""> ERS Customer Standards</Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}
