import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from "../../assets/images/bg-2.png";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const pageData = [
  {
    title: "SADC - EU ECONOMIC PARTNERSHIP AGREEMENT",
    content:
      "In June 2016, Eswatini signed the Economic Partnership Agreement with the European Union. The SADC EPA is meant to ensure that there exists deeper regional economic integration in terms of market access, trade in services and Investment for all contracting parties. Following the signing of the Interim EPA, the Kingdom of Eswatini began the internal procedures necessary for the ratification of the agreement, which will lead to its implementation. This agreement allows Eswatini products preferential access into the European market, especially our sugar and beef. The comprehensive Economic Partnership Agreement includes trade in services and cooperation investment. Click below for the Agreement and Chapters to Annex I and II of the Agreement. Click here to download Protocol 1 which provides definition on the concept of originating products and methods of administrative cooperation.",
    links: [
      "SADC-EU Economic Partnership Agreement 1_of_3",
      "SADC-EU Economic Partnership Agreement 2_of_3",
      "SADC-EU Economic Partnership Agreement 3_of_3",
    ],
    Annex1: {
      head: "Annex 1 - Customs Duties of the EU on Products Originating in the SADC EPA States",
      subAnx: [
        "Annex I - Chapter 1 to 20",
        "Annex I - Chapter 20 to 39",
        "Annex I - Chapter 39 to 64",
        "Annex I - Chapter 64 to 84",
        "Annex I - Chapter 84 to 97",
      ],
    },
    Annex2: {
      head: "Annex II - Customs Duties of SACU on Products Originating in the EU",
      subAnx: [
        "Annex II - Chapter 1 to 37",
        "Annex II - Chapter 37 to 72",
        "Annex II - Chapter 72 to 99",
      ],
    },
  },
  {
    title: "SACU-MERCOSUR PREFERENTIAL TRADE AGREEMENT",
    content:
      "The Southern African Customs Union (SACU), which Eswatini is a member of with South Africa, Botswana, Namibia and Lesotho has in place a Preferential Trade Agreement with MERCOSUR, which comprises of Brazil, Argentina, Uruguay & Paraguay. In conjunction with the agreement, they issued an understanding on the conclusion of their preferential trade agreement, in which they expressed satisfaction at completing this agreement and reaffirmed their commitment to pursue further negotiations and enhance bilateral cooperation aimed at facilitating the implementation of the agreement. The MERCOSUR-SACU PTA came into force on the 01st April 2016 which gave way for the two parties (MERCOSUR and SACU) having to put in place processes and measures to enable the implementation of the Agreement. Examples of this would be amendment of Customs legislations as well as developing processes for issuance of certificates of origin.",
    chapter: {
      chapterHead:
        "Click here to download the MERCOSUR-SACU Agreement; it is structured as follows:",
      chapterPoints: [
        "Chapter i – Purpose of the Agreement",
        "Chapter ii – Trade Liberalization",
        "Chapter iii – Rules of Origin",
        "Chapter iv – National Treatment",
        "Chapter v – Customs Valuation",
        "Chapter vi – Exceptions",
        "Chapter vii – Safeguard Measures",
        "Chapter viii – Antidumping and Countervailing Measures",
        "Chapter ix – Technical Barriers to Trade",
        "Chapter x – Sanitary and Phytosanitary Measures",
        "Chapter xi – Administration of the Agreement",
        "Chapter xii – Further Market Access",
        "Chapter xiii – Settlement of Disputes",
        "Chapter xiv – Amendments and Modifications",
        "Chapter xv – Incorporation of New Members",
        "Chapter xvi – Entry into Force, Notification and Termination",
        "Chapter xvii – Withdrawal",
        "Chapter xviii – Depository",
      ],
    },
    Annex1: {
      head: "Annexes to the Agreement",
      subAnx: [
        "Annex I and II (Chapter II Trade Liberalization, Art. 3 & 4) – Agreed Offers",
        "Annex III (Chapter III RoO, Art. 10)",
        "Annex IV(Chapter VIIi Safeguard Measures, Art. 14)",
        "Annex V(Chapter XIII Settlement of Disputes, Art. 31)",
        "Annex VI (Chapter X Sanitary and Phytosanitary Measures, Art. 24)",
        "Annex VII(Chapter II Trade Liberalization, Art. 9) – Mutual Administrative Assistance.",
      ],
    },
  },
  {
    title: "SOUTHERN AFRICAN DEVELOPMENT COMMUNITY (SADC)",
    content:
      "Operates under a Free Trade Area (FTA) which was launched in August 2008 under the guidance of the SADC Protocol on Trade. Member states are currently in the process of fulfilling their obligations to phase-down tariffs in order to achieve the goal of having such phased out by 2012.SACU Member states have completed all tariff obligations under the SADC FTA. Swaziland being a member of SACU is in line with fulfilling the tariff phase down whereby there is zero duty on goods imported from SADC member states outside SACU. The tariff phase down ensures that all goods originating within SADC are duty free which promotes intra SADC trade thus strengthening regional economic integration. Swaziland receives preferential rates when exporting to the following countries: Angola, Botswana, DR Congo, Lesotho, Madagasar, Malawi, Mauritius, Mozambique, Namibia, Seychelles, South Africa, Tanzania, Zambia, Zimbabwe.",
  },
  {
    title: "SOUTHERN AFRICAN CUSTOMS UNION (SACU)",
    content:
      "This is governed by the SACU Agreement as revised in 2002. There is free circulation of goods among member states (Botswana, Lesotho, Namibia South Africa and Swaziland) except for the local Value Added Tax (VAT) charged in each member state on imports.",
  },
  {
    title: "COMMON MARKET FOR EASTERN AND SOUTHERN AFRICA (COMESA)",
    content:
      "Governed by the COMESA Treaty. Swaziland is trading under an indefinite derogation which allows the country not to reciprocate tariff preference on imports originating from other member states of COMESA as provided for by the COMESA Treaty. Swaziland receives preferential rates when exporting to the following countries: Angola, Burundi, Comoros, DR Congo, Djibouti, Egypt, Eritrea, Ethiopia, Libya, Malawi, Mauritius, Madagascar, Kenya, Rwanda, Seychelles, Sudan, Uganda, Zambia, and Zimbabwe.\nEuropean Union(EU)- Swaziland's exports to the European Union qualify for import under Generalized System of Preference (GSP) and require a certificate of origin EUR1 certified by the SRA.",
  },
  {
    title: "SACU - EFTA (EUROPEAN FREE TRADE AREA)",
    content:
      "Governed by the COMESA Treaty. Swaziland is trading under an indefinite derogation which allows the country not to reciprocate tariff preference on imports originating from other member states of COMESA as provided for by the COMESA Treaty. Swaziland receives preferential rates when exporting to the following countries: Angola, Burundi, Comoros, DR Congo, Djibouti, Egypt, Eritrea, Ethiopia, Libya, Malawi, Mauritius, Madagascar, Kenya, Rwanda, Seychelles, Sudan, Uganda, Zambia, and Zimbabwe.\nEuropean Union(EU)- Swaziland's exports to the European Union qualify for import under Generalized System of Preference (GSP) and require a certificate of origin EUR1 certified by the SRA.",
  },
];

const FreeTrade = () => {
  const h2Styling = {
    fontWeight: "700",
    pt: "1.5rem",
    pb: "0.5rem",
    position: "relative",
    fontSize: "1.5rem",
    color: "#2F248F",
  };
  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  return (
    <>
      <Head>
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*-----------------------Header---------------------*/}

      <Header />
      <Box sx={{ position: "relative", width: "100%", height: "30rem" }}>
        <Image
          src={Banner}
          alt="about_us"
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bgimg.src})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            width: "75%",
            margin: { xs: "0rem auto", lg: "0rem  auto" },
            pr: { md: "5rem", lg: "10rem,", xl: "15rem" },
            py: "2rem",
          }}
        >
          <Typography variant="h1" sx={{ pt: "2rem", mb: "2rem" }}>
            Free Trade and Preferential Agreements
          </Typography>

          {pageData.map((item, index) => (
            <Box key={index}>
              {item.title && (
                <Typography variant="h3" sx={{ ...h2Styling }}>
                  {item.title}
                </Typography>
              )}
              {item.content && (
                <Typography variant="body1" className="Pointsformatting">
                  {item.content}
                </Typography>
              )}
              <Box mt="0.5rem">
                {item.links &&
                  item.links.map((item, index) => (
                    <div key={index} className="flex gap-1 items-start pb-2">
                      <span className="Pointsformatting">
                        <ArrowForwardIosIcon
                          sx={{ ...arrowStyling, color: "#2f2483" }}
                          className="Pointsformatting"
                        />
                      </span>
                      <Link href="/">
                        <Typography
                          variant="body1"
                          className="Pointsformatting"
                        >
                          {item}
                        </Typography>
                      </Link>
                    </div>
                  ))}
              </Box>

              <Box mt="0.5rem">
                {item.chapter && (
                  <Box>
                    <Typography variant="body1" className="Pointsformatting" sx={{fontWeight:'bold'}}>
                      {item.chapter.chapterHead}
                    </Typography>
                    {item.chapter.chapterPoints.map((chapterPoint, index) => (
                      <Typography variant="body1" className="Pointsformatting"  key={index}>
                        {chapterPoint}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>

              <Box  mt="0.5rem">
                {item.Annex1 && (
                  <Box>
                    <Typography variant="body1" className="Pointsformatting" sx={{fontWeight:'bold'}}>
                      {item.Annex1.head}
                    </Typography>

                    {item.Annex1.subAnx &&
                      item.Annex1.subAnx.map((item, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          className="Pointsformatting"
                        >
                          {item}
                        </Typography>
                      ))}
                  </Box>
                )}
              </Box>
              <Box>
                {item.Annex2 && (
                  <Box>
                    <Typography variant="body1" className="Pointsformatting" sx={{fontWeight:'bold'}}>
                      {item.Annex2.head}
                    </Typography>

                    {item.Annex2.subAnx &&
                      item.Annex2.subAnx.map((item, index) => (
                        <Typography
                          key={index}
                          variant="body1"
                          className="Pointsformatting"
                        >
                          {item}
                        </Typography>
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default FreeTrade;
