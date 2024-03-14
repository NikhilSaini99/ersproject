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
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";
const pageData = [
  {
    title: "SADC - EU ECONOMIC PARTNERSHIP AGREEMENT",
    content:
      "In June 2016, Eswatini signed the Economic Partnership Agreement with the European Union. The SADC EPA is meant to ensure that there exists deeper regional economic integration in terms of market access, trade in services and Investment for all contracting parties. Following the signing of the Interim EPA, the Kingdom of Eswatini began the internal procedures necessary for the ratification of the agreement, which will lead to its implementation. This agreement allows Eswatini products preferential access into the European market, especially our sugar and beef. The comprehensive Economic Partnership Agreement includes trade in services and cooperation investment. Click below for the Agreement and Chapters to Annex I and II of the Agreement. Click here to download Protocol 1 which provides definition on the concept of originating products and methods of administrative cooperation.",
    links: [
      "<a href = http://172.30.200.21:8000/documents/SADC-EUEconomicPartnershipAgreement1_of_3.pdf target = _blank> SADC-EU Economic Partnership Agreement 1_of_3 </a>",
      "<a href = http://172.30.200.21:8000/documents/SADC-EUEconomicPartnershipAgreement2_of_3.pdf target = _blank> SADC-EU Economic Partnership Agreement 2_of_3 </a>",
      "<a href = http://172.30.200.21:8000/documents/SADC-EUEconomicPartnershipAgreement3_of_3.pdf target = _blank> SADC-EU Economic Partnership Agreement 3_of_3 </a>",    
    ],
    Annex1: {
      head: "Annex 1 - Customs Duties of the EU on Products Originating in the SADC EPA States",
      subAnx: [
       "<a href=http://172.30.200.21:8000/documents/AnnexI-Chapter1to20.pdf >Annex I - Chapter 1 to 20</Link>",
        "<a href=http://172.30.200.21:8000/documents/AnnexI-Chapter20to39.pdf style={{color:blue}}>Annex I - Chapter 20 to 39</Link>",
        "<a href=http://172.30.200.21:8000/documents/AnnexI-Chapter39to64.pdf target='_blank'>Annex I - Chapter 39 to 64</Link>",
        "<a href=http://172.30.200.21:8000/documents/AnnexI-Chapter64to84.pdf target='_blank' style={{color:blue}}>Annex I - Chapter 64 to 84</Link>",
        "<a href=http://172.30.200.21:8000/documents/AnnexI-Chapter84to97.pdf target='_blank' style={{color:blue}}>Annex I - Chapter 84 to 97</Link>",
      ],
    },
    Annex2: {
      head: "Annex II - Customs Duties of SACU on Products Originating in the EU",
      subAnx: [
        "<a href=http://172.30.200.21:8000/documents/AnnexII-Chapter1to37.pdf target='_blank' style={{color:blue}}>Annex II - Chapter 1 to 37</a>",
        "<a href=http://172.30.200.21:8000/documents/AnnexII-Chapter37to72.pdf target='_blank' style={{color:blue}}>Annex II - Chapter 37 to 72</a>",
        "<a href=http://172.30.200.21:8000/documents/AnnexII-Chapter72to99.pdf target='_blank' style={{color:blue}}>Annex II - Chapter 72 to 99</a>",
      ],
    },
  },
  {
    title: "SACU-MERCOSUR PREFERENTIAL TRADE AGREEMENT",
    content:
      "The Southern African Customs Union (SACU), which Eswatini is a member of with South Africa, Botswana, Namibia and Lesotho has in place a Preferential Trade Agreement with MERCOSUR, which comprises of Brazil, Argentina, Uruguay & Paraguay. In conjunction with the agreement, they issued an understanding on the conclusion of their preferential trade agreement, in which they expressed satisfaction at completing this agreement and reaffirmed their commitment to pursue further negotiations and enhance bilateral cooperation aimed at facilitating the implementation of the agreement. The MERCOSUR-SACU PTA came into force on the 01st April 2016 which gave way for the two parties (MERCOSUR and SACU) having to put in place processes and measures to enable the implementation of the Agreement. Examples of this would be amendment of Customs legislations as well as developing processes for issuance of certificates of origin.",
      content2: "The productive sectors of MERCOSUR which will benefit from tariff preferences include chemical, textile, steel, plastic, automotive, electronics and capital goods, in addition to agricultural products.",
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
      "Governed by the COMESA Treaty. Swaziland is trading under an indefinite derogation which allows the country not to reciprocate tariff preference on imports originating from other member states of COMESA as provided for by the COMESA Treaty. Swaziland receives preferential rates when exporting to the following countries: Angola, Burundi, Comoros, DR Congo, Djibouti, Egypt, Eritrea, Ethiopia, Libya, Malawi, Mauritius, Madagascar, Kenya, Rwanda, Seychelles, Sudan, Uganda, Zambia, and Zimbabwe.\nEuropean Union(EU)- Swaziland's exports to the European Union qualify for import under Generalized System of Preference (GSP) and require a certificate of origin EUR1 certified by the ERS.",
  },
  {
    title: "SACU - EFTA (EUROPEAN FREE TRADE AREA)",
    content:
      "Governed by the COMESA Treaty. Swaziland is trading under an indefinite derogation which allows the country not to reciprocate tariff preference on imports originating from other member states of COMESA as provided for by the COMESA Treaty. Swaziland receives preferential rates when exporting to the following countries: Angola, Burundi, Comoros, DR Congo, Djibouti, Egypt, Eritrea, Ethiopia, Libya, Malawi, Mauritius, Madagascar, Kenya, Rwanda, Seychelles, Sudan, Uganda, Zambia, and Zimbabwe.\nEuropean Union(EU)- Swaziland's exports to the European Union qualify for import under Generalized System of Preference (GSP) and require a certificate of origin EUR1 certified by the ERS.",
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
      <PageLayout title={"Services"} bannerImg={Banner} contentBackground={bgimg}>
        <ContentDiv>

        <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Free Trade and Preferential Agreements
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
          {/* <Typography variant="h1">
            Free Trade and Preferential Agreements
          </Typography> */}

          {pageData.map((item, index) => (
            <Box key={index} sx={{mb:'1rem'}}>
              {item.title && (
                <Typography variant="h2" >
                  {item.title}
                </Typography>
              )}
              {item.content && (
                <Typography variant="body1"  sx={{mt:"0.5rem"}}>
                  {item.content}
                </Typography>
              )}
              {item.content2 && (
                <Typography variant="body1" sx={{mt:"0.5rem"}}>
                  {item.content2}
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
                      <Typography variant="body1"
                        className="Pointsformatting text-normalBlue" 
                        dangerouslySetInnerHTML={{__html:item}} 
                      />
                    </div>
                  ))}
              </Box>

              <Box mt="0.5rem">
                {item.chapter && (
                  <Box>
                    <Typography variant="body1"  sx={{fontWeight:'bold'}}>
                      {item.chapter.chapterHead}
                    </Typography>
                    {item.chapter.chapterPoints.map((chapterPoint, index) => (
                      <Typography variant="body1"  key={index}>
                        {chapterPoint}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>

              <Box  mt="0.5rem">
                {item.Annex1 && (
                  <Box>
                    <Typography variant="body1" sx={{fontWeight:'bold'}}>
                      {item.Annex1.head}
                    </Typography>

                    {item.Annex1.subAnx &&
                      item.Annex1.subAnx.map((item, index) => (
                        <Typography dangerouslySetInnerHTML={{__html:item}}
                          key={index}
                          variant="body1"
                        />
                      ))}
                  </Box>
                )}
              </Box>
              <Box>
                {item.Annex2 && (
                  <Box>
                    <Typography variant="body1"  sx={{fontWeight:'bold'}}>
                      {item.Annex2.head}
                    </Typography>

                    {item.Annex2.subAnx &&
                      item.Annex2.subAnx.map((item, index) => (
                        <Typography
                         dangerouslySetInnerHTML={{__html:item}}
                          key={index}
                          variant="body1"
                        />
                      ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </ContentDiv>
      </PageLayout>
    </>
  );
};

export default FreeTrade;
