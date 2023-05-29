import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/registration.jpg";


const ZeroRated = () => {

    const TypoStyle = {
        color: '#2f2483', fontWeight: 'bold', textAlign: 'center'
    }

    const section1 = [
        {
            mainHead: 'The goods in respect of the supply or import of which the rate of zero per cent shall apply under the provisions of section 24(4) of the VAT Amendment Act shall, subject to the provisions of paragraph 2 of this article, be as follows -',
            subpoints: [
                {
                    text: 'animal feeds consisting of-.',
                    list: [
                        'any substance obtained by a process of crushing, gritting or grinding, or by addition to any substance or the removal therefrom of any ingredient;',
                        'any condimental food, vitamin or mineral substance or other substance which possesses or is alleged to possess nutritive properties;',
                        'any bone product;',
                        'any maize product, intended or sold for the feeding of livestock, poultry, fish or wild animals (including wild birds); or',
                        'stock lick or substance which is of a kind which can be and is in fact used as a stock lick, whether or not such stock lick or substance possesses medicinal properties,',
                    ],
                },
                {

                    text:
                        'animal remedy consisting of a substance intended or offered for use in respect of livestock, poultry, dog, fish or wild animals (including wild birds), for the diagnosis, prevention, treatment or cure of any disease, infection or other unhealthy condition, or for the maintenance or improvement of health, growth, production or working capacity;',

                },
                {

                    text:
                        'fertilizer consisting of a substance in its final form which is intended or offered for use in order to improve or maintain the growth of plants or the productivity of the soil.',

                },
                {

                    text: 'pesticide goods consisting of any chemical substance or biological remedy, or any mixture or combination of any such substance or remedy, intended or offered for use -',
                    list: [
                        'the destruction, control, repelling, attraction, disturbance or prevention of any undesired microbe, alga, bacterium, nematode, fungus, insect, plant, vertebrate or invertebrate; or',
                        'as a plant growth regulator, defoliant, desiccant, adjuvant or legume inoculant, and anything else which the Minister responsible for agriculture has by notice in the gazette declared to be a pesticide;',
                    ],
                },
                {

                    text: 'plant goods consisting of living trees and other plants, bulbs, roots, cuttings and similar plant products in a form used for cultivation;',

                },
                {
                    text: 'seeds and seedlings in a form used for cultivation.',

                },
            ]
        },
        {
            mainHead: 'The provisions of sub-at1icle (I ) shall apply only where -',
            subpoints: [
                {
                    text: 'The provisions of sub-article (I) shall apply only where -',
                    list: [
                        'a tax invoice in respect of the relevant supply is issued containing such particulars as required by section 29(4) of this Act; and',
                        'the import, acquisition, disposal, sale or use of the said goods is not prohibited under any law.',
                    ],
                },
            ]
        }

    ];

    const section2 = [
        {
            mainHead:
                'The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24(4) of this Act shall, subject to the provisions of paragraph 2 of this article, consist of the following-',
            list: [
                'brown bread consisting of dough made from brown wheaten meal and water, with or without other ingredients that has fermented by yeast or otherwise leavened and has been baked in the form, size, or shape stipulated in the Weights and Measures (Sale of Bread) Regulations;',
                'maize, where it is dried kernels or grains fit for human consumption, not further prepared or processed and not packaged as seeds excluding popcorn (zea mays everta);',
                'maize meal graded as super maize meal, special maize meal, sifted maize meal, or unsifted maize meal, not further processed other than by the addition of minerals and vitamins not exceeding one per cent by mass of the final product, solely for the purpose of increasing the nutritional value;',
                'samp, not further prepared or processed;',
                'dried beans, whole, split, crushed or in powder form but not further prepared or processed or where packaged as seed;',
                'dairy products, being milk of all kinds; fermented milk, emasi, buttermilk, fresh or UHT cream or sourcream, buttermilk powder, condensed milk, baby milk formulas, butter and margarine; and whey;',
                'rice, whether husked, milled, polished, glazed, parboiled or broken;',
                'vegetables, not cooked or treated in any manner except for the purpose of preserving such vegetables in their natural state, but excluding dehydrated, dried, canned or bottled vegetables or such vegetables as are described under separate paragraphs in this Part;',
                'fruit, not cooked or treated in any manner except for the purposes of preserving such fruit in its natural state, but excluding dehydrated, dried, canned or bottled fruit and nuts;',
                'vegetable oil marketed and supplied for use in the process of cooking food for human consumption, but excluding olive oil;',
                'fresh eggs, being raw eggs laid by hens of the species gallus gallus domesticus, whether supplied in their shells or in the form of egg pulp being raw pulp consisting of the yolk and white which is obtained from such eggs after the shells have been removed.',
            ],
        },
        {
            mainHead: 'The provisions of paragraph I shall not apply where any goods mentioned in that paragraph are supplied in the course of carrying out any agreement for the furnishing or serving of any meal, refreshment, cooked or prepared food or any drink, as the case may be, so as to be ready for immediate consumption when so supplied.',
        },

    ];


    const section3 = [
        {
            mainHead:
                'For the purposes of paragraph 3(e), goods or services are treated as exported from Eswatini where in the case of -',
            list: [
                'goods, they are delivered to, or made available at, an address outside Eswatini as evidenced by documentary proof acceptable to the Commissioner General; or,',
                'services, they are supplied for useor consumption outside Eswatini asevidenced by documentary proof acceptable to the Commissioner General;',
                'the services are supplied directly in respect of goods temporarily admitted into Eswatini from an export country which are exempt from tax on importation under Item 470 of paragraphs 34 and 35 of First Schedule.',
            ],
        },
        {
            mainHead: 'For the purposes of paragraph 3 (e), international transport of goods or passengers occurs where the goods or passengers are transported by road, rail or air from a place -',
            list:[
                'outside Eswatini to another place outside Eswatini where the transport or partof the transport is across the territory of Eswatini;',
                'outside Eswatini to a place in Eswatini; or,',
                'in Eswatini to a place outside Eswatini.'
            ]
        },
        {
            mainHead: 'The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24 (4) of this Act shall, subject to the provisions of paragraph_2a, re as follows-',
            list:[
                'petrol, diesel and liquid petroleum gas',
                ' paraffin (kerosene) intended for cooking, illuminating and heating, provided it is not mixed or blended with any other substance for any purpose other than cooking, illuminating or heating;',
                'supply of exercise books and text books approved by the Ministry responsible for education for the furtherance ofeducation in a qualified educational institution established under public law;',
                ' medicines and drugs supplied -',
                'The supply of international transport services in connection with the international transport ofgoods or passengers.'
            ]
        },
    ];



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

            <Box sx={{ height: { xs: '15rem', lg: '25rem', xs: '30rem' } }}>
                <Image src={Banner} alt=""
                    width={0}
                    height={0}
                    style={{
                        width: "100%", height: "100%",
                        objectFit: 'cover'
                    }}
                />
            </Box>

            <Box sx={{
                width: { xs: '95%', md: '85%', lg: '80%' }, margin: { xs: '2rem auto', lg: '5rem auto' },
                lineHeight: '1.8'
            }}>
                <Typography variant="h4" component="h1" sx={{ color: '#2f2483', fontWeight: 'bold', my: '2.5rem' }}>
                    Zero Rated goods + Services</Typography>

                {/*------------------- Section 1-------------------------------- */}
                <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                    PART A </Typography>

                <ol style={{ listStyleType: 'decimal' }}>
                    {section1.map((item, index) => (
                        <li key={index}>{item.mainHead}
                            <ul className='custom-list'>
                                {item.subpoints.map((subitem, index) => (
                                    <li key={index}>{subitem.text}
                                        {subitem.list ?
                                            <ol style={{ listStyleType: "lower-roman", marginLeft: '1rem' }}>
                                                {subitem.list.map((check, index) => (
                                                    <li key={index}>{check}</li>
                                                ))}
                                            </ol>
                                            : null}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
                {/*------------------- Section 1 END-------------------------------- */}

                {/*------------------- Section 2-------------------------------- */}
                <Box sx={{ my: '2.5rem' }}>
                    <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                        PART B ZERO RATED</Typography>
                    <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                        SUPPLY OF GOODS CONSISTING OF CERTAIN FOODSTUFFS</Typography>

                    <ol style={{ listStyleType: 'decimal' }}>
                        {section2.map((item, index) => (
                            <li key={index}>
                                {item.mainHead}
                                {item.list ? <ul className='custom-list'>
                                    {item.list.map((listpoints, index) => (
                                        <li key={index}>{listpoints}</li>
                                    ))}
                                </ul> : null}
                            </li>
                        ))}
                    </ol>

                </Box>



                {/*------------------- Section 2 END-------------------------------- */}



                {/*------------------- Section 3-------------------------------- */}
                <Box sx={{ my: '2.5rem' }}>
                    <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                    PART C</Typography>
                    <Typography variant="h5" component="h2" sx={{ ...TypoStyle }}>
                    ZERO RATED: SUPPLY OF OTHER GOODS AND SERVICES</Typography>
                                
                    <ol style={{ listStyleType: 'decimal' }}>
                        {section3.map((item, index) => (
                            <li key={index}>
                                {item.mainHead}
                                {item.list ? <ul className='custom-list'>
                                    {item.list.map((listpoints, index) => (
                                        <li key={index}>{listpoints}</li>
                                    ))}
                                </ul> : null}
                            </li>
                        ))}
                    </ol>
                        </Box>
                {/*------------------- Section 3 END-------------------------------- */}


            </Box>
            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default ZeroRated
