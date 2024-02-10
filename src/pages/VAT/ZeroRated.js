import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import Banner from "../../assets/images/Zero_Rated_Goods_&_Services.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgimg from "../../assets/images/bg-2.png";
import { ContentDiv } from "@/styles/globalStyle";
import PageLayout from "../PagesLayout/Layout";

const ZeroRated = () => {
  const TypoStyle = {
    fontWeight: "bold",
    my: "1rem",
  };

  const arrowStyling = {
    color: "#2f2483",
    fontSize: "1rem",
    marginRight: "0.5rem",
  };

  const section1 = [
    {
      mainHead:
        "The goods in respect of the supply or import of which the rate of zero per cent shall apply under the provisions of section 24(4) of the VAT Amendment Act shall, subject to the provisions of paragraph 2 of this article, be as follows",
      subpoints: [
        {
          text: "Animal feeds consisting of",
          list: [
            "Any substance obtained by a process of crushing, gritting or grinding, or by addition to any substance or the removal therefrom of any ingredient",
            "Any condimental food, vitamin or mineral substance or other substance which possesses or is alleged to possess nutritive properties",
            "Any bone product",
            "Any maize product, intended or sold for the feeding of livestock, poultry, fish or wild animals (including wild birds)",
            "Stock lick or substance which is of a kind which can be and is in fact used as a stock lick, whether or not such stock lick or substance possesses medicinal properties",
          ],
        },
        {
          text: "Animal remedy consisting of a substance intended or offered for use in respect of livestock, poultry, dog, fish or wild animals (including wild birds), for the diagnosis, prevention, treatment or cure of any disease, infection or other unhealthy condition, or for the maintenance or improvement of health, growth, production or working capacity",
        },
        {
          text: "Fertilizer consisting of a substance in its final form which is intended or offered for use in order to improve or maintain the growth of plants or the productivity of the soil.",
        },
        {
          text: "Pesticide goods consisting of any chemical substance or biological remedy, or any mixture or combination of any such substance or remedy, intended or offered for use ",
          list: [
            "The destruction, control, repelling, attraction, disturbance or prevention of any undesired microbe, alga, bacterium, nematode, fungus, insect, plant, vertebrate or invertebrate",
            "As a plant growth regulator, defoliant, desiccant, adjuvant or legume inoculant, and anything else which the Minister responsible for agriculture has by notice in the gazette declared to be a pesticide",
          ],
        },
        {
          text: "Plant goods consisting of living trees and other plants, bulbs, roots, cuttings and similar plant products in a form used for cultivation",
        },
        {
          text: "Seeds and seedlings in a form used for cultivation",
        },
      ],
    },
    {
      mainHead: "The provisions of sub-article (I) ",
      subpoints: [
        {
          text: "Shall be applicable only below",
          list: [
            "A tax invoice in respect of the relevant supply is issued containing such particulars as required by section 29(4) of this Act",
            "The import, acquisition, disposal, sale or use of the said goods is not prohibited under any law.",
          ],
        },
      ],
    },
  ];

  const section2 = [
    {
      mainHead:
        "The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24(4) of this Act shall, subject to the provisions of paragraph 2 of this article, consist of the following",
      list: [
        "Brown bread consisting of dough made from brown wheaten meal and water, with or without other ingredients that has fermented by yeast or otherwise leavened and has been baked in the form, size, or shape stipulated in the Weights and Measures (Sale of Bread) Regulations",
        "Maize, where it is dried kernels or grains fit for human consumption, not further prepared or processed and not packaged as seeds excluding popcorn (zea mays everta)",
        "Maize meal graded as super maize meal, special maize meal, sifted maize meal, or unsifted maize meal, not further processed other than by the addition of minerals and vitamins not exceeding one per cent by mass of the final product, solely for the purpose of increasing the nutritional value",
        "Samp, not further prepared or processed",
        "Dried beans, whole, split, crushed or in powder form but not further prepared or processed or where packaged as seed",
        "Dairy products, being milk of all kinds fermented milk, emasi, buttermilk, fresh or UHT cream or sour cream, buttermilk powder, condensed milk, baby milk formulas, butter and margarine and whey",
        "Rice, whether husked, milled, polished, glazed, parboiled or broken",
        "Vegetables, not cooked or treated in any manner except for the purpose of preserving such vegetables in their natural state, but excluding dehydrated, dried, canned or bottled vegetables or such vegetables as are described under separate paragraphs in this Part",
        "Fruit, not cooked or treated in any manner except for the purposes of preserving such fruit in its natural state, but excluding dehydrated, dried, canned or bottled fruit and nuts",
        "Vegetable oil marketed and supplied for use in the process of cooking food for human consumption, but excluding olive oil",
        "Fresh eggs, being raw eggs laid by hens of the species gallus gallus domesticus, whether supplied in their shells or in the form of egg pulp being raw pulp consisting of the yolk and white which is obtained from such eggs after the shells have been removed",
      ],
    },
    {
      mainHead:
        "The provisions of paragraph I shall not apply where any goods mentioned in that paragraph are supplied in the course of carrying out any agreement for the furnishing or serving of any meal, refreshment, cooked or prepared food or any drink, as the case may be, so as to be ready for immediate consumption when so supplied",
    },
  ];

  const section3 = [
    {
      mainHead:
        "For the purposes of paragraph 3(e), goods or services are treated as exported from Eswatini where in the case of",
      list: [
        "Goods, they are delivered to, or made available at, an address outside Eswatini as evidenced by documentary proof acceptable to the Commissioner General",
        "Services, they are supplied for use or consumption outside Eswatini as evidenced by documentary proof acceptable to the Commissioner General",
        "The services are supplied directly in respect of goods temporarily admitted into Eswatini from an export country which are exempt from tax on importation under Item 470 of paragraphs 34 and 35 of First Schedule",
      ],
    },
    {
      mainHead:
        "For the purposes of paragraph 3(e), international transport of goods or passengers occurs where the goods or passengers are transported by road, rail or air from a place",
      list: [
        "Outside Eswatini to another place outside Eswatini where the transport or part of the transport is across the territory of Eswatini",
        "Outside Eswatini to a place in Eswatini",
        "In Eswatini to a place outside Eswatini",
      ],
    },
    {
      mainHead:
        "The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24(4) of this Act shall, subject to the provisions of paragraph_2a, re as follows",
      list: [
        "Petrol, diesel and liquid petroleum gas",
        "Paraffin (kerosene) intended for cooking, illuminating and heating, provided it is not mixed or blended with any other substance for any purpose other than cooking, illuminating or heating",
        "Supply of exercise books and text books approved by the Ministry responsible for education for the furtherance of education in a qualified educational institution established under public law",
        "The supply of international transport services in connection with the international transport of goods or passengers",
      ],
      medicine: {
        Medicines: "Medicines and drugs supplied",
        medPoints: [
          "For use in a qualified medical facility",
          "To the Government Central Medical Stores",
          "To an individual, subject to submission by that individual, of a qualified medical practitioner's prescription issued within thirty (30) days prior to the supply and in such quantities as prescribed by the qualified medical practitioner",
        ],
      },
    },
  ];

  const bgstyling = {
    backgoundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
    <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
          <ContentDiv>
          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Zero Rated Goods & Services
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
            {/* <Typography variant="h1" >
              
            </Typography> */}

            {/*------------------- Section 1-------------------------------- */}
            <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
              1. PART A{" "}
            </Typography>

            <ol style={{ listStyleType: "decimal" }}>
              {section1.map((item, index) => (
                <li
                  key={index}
                  className="Pointsformatting mb-4 sm:ml-6 2xl:ml-0"
                >
                  {item.mainHead}
                  <ul className="custom-list">
                    {item.subpoints.map((subitem, index) => (
                      <>
                        <div className="flex gap-1 items-start">
                          <span className="Pointsformatting">
                            <ArrowForwardIosIcon sx={arrowStyling} />
                          </span>
                          <li key={index} className="Pointsformatting mb-4">
                            {subitem.text}
                            {subitem.list ? (
                              <ol
                                style={{
                                  listStyleType: "lower-roman",
                                  marginLeft: "1rem",
                                }}
                              >
                                {subitem.list.map((check, index) => (
                                  <li key={index} className="Pointsformatting">
                                    {check}
                                  </li>
                                ))}
                              </ol>
                            ) : null}
                          </li>
                        </div>
                      </>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            {/*------------------- Section 1 END-------------------------------- */}

            {/*------------------- Section 2-------------------------------- */}
            <Box sx={{ my: "2.5rem" }}>
              <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                2. PART B ZERO RATED: Supply of Good Consisting of Certain
                Foodstuffs
              </Typography>

              <ol style={{ listStyleType: "decimal" }}>
                {section2.map((item, index) => (
                  <li
                    key={index}
                    className="Pointsformatting mb-4 sm:ml-6 2xl:ml-0"
                  >
                    {item.mainHead}
                    {item.list ? (
                      <ul className="custom-list">
                        {item.list.map((listpoints, index) => (
                          <div key={index} className="flex gap-1 items-start">
                            <span className="Pointsformatting ">
                              <ArrowForwardIosIcon sx={arrowStyling} />
                            </span>
                            <li className="Pointsformatting mb-4">
                              {listpoints}
                            </li>
                          </div>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Box>

            {/*------------------- Section 2 END-------------------------------- */}

            {/*------------------- Section 3-------------------------------- */}
            <Box sx={{ my: "2.5rem" }}>
              <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                3. PART C ZERO RATED: Supply of Other Goods and Services
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{ ...TypoStyle }}
              ></Typography>

              <ol style={{ listStyleType: "decimal" }}>
                {section3.map((item, index) => (
                  <li
                    key={index}
                    className="Pointsformatting mb-4 sm:ml-6 lg:ml-6 2xl:ml-0"
                  >
                    {item.mainHead}
                    {item.list ? (
                      <ul className="custom-list">
                        {item.list.map((listpoints, index) => (
                          <div key={index} className="flex gap-1 items-start">
                            <span className="Pointsformatting">
                              <ArrowForwardIosIcon sx={arrowStyling} />
                            </span>
                            <li key={index} className="Pointsformatting mb-4">
                              {listpoints}
                            </li>
                          </div>
                        ))}
                      </ul>
                    ) : null}
                    {item.medicine ? (
                      <Box>
                        <ul>
                          <li>
                            <div key={index} className="flex gap-1 items-start">
                              <span className="Pointsformatting">
                                <ArrowForwardIosIcon sx={arrowStyling} />
                              </span>
                              <li key={index} className="Pointsformatting mb-4">
                                {item.medicine.Medicines}
                              </li>
                            </div>

                            <ol
                              style={{
                                listStyleType: "lower-roman",
                                marginLeft: "1rem",
                              }}
                            >
                              {item.medicine.medPoints.map(
                                (medPoints, index) => (
                                    <li
                                      key={index}
                                      className="Pointsformatting mb-4"
                                    >
                                      {medPoints}
                                    </li>
                                )
                              )}
                            </ol>
                          </li>
                        </ul>
                      </Box>
                    ) : null}
                  </li>
                ))}
              </ol>
            </Box>
            {/*------------------- Section 3 END-------------------------------- */}
          </ContentDiv>
          </PageLayout> 
    </>
  );
};

export default ZeroRated;
