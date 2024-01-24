import { Box, Typography } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Banner from "../../assets/images/Eswatini_VAT.png";
import { ContentDiv } from '@/styles/globalStyle';
import Footer from '@/components/Footer'
import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from "next/link";
import PageLayout from '../PagesLayout/Layout';
import React from 'react';
import bgimg from "../../assets/images/bg-2.png";

const Eswatini = () => {

    const TypoStyle = {
        fontWeight: 'bold',
        my: '1rem'
    }

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem'
    }



    const section1 = [
        {
            mainHead: 'The goods in respect of the supply or import of which the rate of zero per cent shall apply under the provisions of section 24(4) of the VAT Amendment Act shall, subject to the provisions of paragraph 2 of this article, be as follows',
            subpoints: [
                {
                    text: 'Animal feeds consisting of',
                    list: [
                        'Any substance obtained by a process of crushing, gritting or grinding, or by addition to any substance or the removal therefrom of any ingredient',
                        'Any condimental food, vitamin or mineral substance or other substance which possesses or is alleged to possess nutritive properties',
                        'Any bone product',
                        'Any maize product, intended or sold for the feeding of livestock, poultry, fish or wild animals (including wild birds)',
                        'Stock lick or substance which is of a kind which can be and is in fact used as a stock lick, whether or not such stock lick or substance possesses medicinal properties',
                    ],
                },
                {

                    text:
                        'Animal remedy consisting of a substance intended or offered for use in respect of livestock, poultry, dog, fish or wild animals (including wild birds), for the diagnosis, prevention, treatment or cure of any disease, infection or other unhealthy condition, or for the maintenance or improvement of health, growth, production or working capacity',

                },
                {

                    text:
                        'Fertilizer consisting of a substance in its final form which is intended or offered for use in order to improve or maintain the growth of plants or the productivity of the soil.',

                },
                {

                    text: 'Pesticide goods consisting of any chemical substance or biological remedy, or any mixture or combination of any such substance or remedy, intended or offered for use ',
                    list: [
                        'The destruction, control, repelling, attraction, disturbance or prevention of any undesired microbe, alga, bacterium, nematode, fungus, insect, plant, vertebrate or invertebrate',
                        'As a plant growth regulator, defoliant, desiccant, adjuvant or legume inoculant, and anything else which the Minister responsible for agriculture has by notice in the gazette declared to be a pesticide',
                    ],
                },
                {

                    text: 'Plant goods consisting of living trees and other plants, bulbs, roots, cuttings and similar plant products in a form used for cultivation',

                },
                {
                    text: 'Seeds and seedlings in a form used for cultivation',

                },
            ]
        },
        {
            mainHead: 'The provisions of sub-article (I)',
            subpoints: [
                {
                    text: 'Shall be applicable only below',
                    list: [
                        'A tax invoice in respect of the relevant supply is issued containing such particulars as required by section 29(4) of this Act',
                        'The import, acquisition, disposal, sale or use of the said goods is not prohibited under any law.',
                    ],
                },
            ]
        }

    ];

    const section2 = [
        {
            mainHead:
                'The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24(4) of this Act shall, subject to the provisions of paragraph 2 of this article, consist of the following',
            list: [
                'Brown bread consisting of dough made from brown wheaten meal and water, with or without other ingredients that has fermented by yeast or otherwise leavened and has been baked in the form, size, or shape stipulated in the Weights and Measures (Sale of Bread) Regulations',
                'Maize, where it is dried kernels or grains fit for human consumption, not further prepared or processed and not packaged as seeds excluding popcorn (zea mays everta)',
                'Maize meal graded as super maize meal, special maize meal, sifted maize meal, or unsifted maize meal, not further processed other than by the addition of minerals and vitamins not exceeding one per cent by mass of the final product, solely for the purpose of increasing the nutritional value',
                'Samp, not further prepared or processed',
                'Dried beans, whole, split, crushed or in powder form but not further prepared or processed or where packaged as seed',
                'Dairy products, being milk of all kinds fermented milk, emasi, buttermilk, fresh or UHT cream or sourcream, buttermilk powder, condensed milk, baby milk formulas, butter and margarine and whey',
                'Rice, whether husked, milled, polished, glazed, parboiled or broken',
                'Vegetables, not cooked or treated in any manner except for the purpose of preserving such vegetables in their natural state, but excluding dehydrated, dried, canned or bottled vegetables or such vegetables as are described under separate paragraphs in this Part',
                'Fruit, not cooked or treated in any manner except for the purposes of preserving such fruit in its natural state, but excluding dehydrated, dried, canned or bottled fruit and nuts',
                'Vegetable oil marketed and supplied for use in the process of cooking food for human consumption, but excluding olive oil',
                'Fresh eggs, being raw eggs laid by hens of the species gallus gallus domesticus, whether supplied in their shells or in the form of egg pulp being raw pulp consisting of the yolk and white which is obtained from such eggs after the shells have been removed',
            ],
        },
        {
            mainHead: 'The provisions of paragraph I shall not apply where any goods mentioned in that paragraph are supplied in the course of carrying out any agreement for the furnishing or serving of any meal, refreshment, cooked or prepared food or any drink, as the case may be, so as to be ready for immediate consumption when so supplied',
        },

    ];


    const section3 = [
        {
            mainHead:
                'For the purposes of paragraph 3(e), goods or services are treated as exported from Eswatini where in the case of',
            list: [
                'Goods, they are delivered to, or made available at, an address outside Eswatini as evidenced by documentary proof acceptable to the Commissioner General',
                'Services, they are supplied for useor consumption outside Eswatini asevidenced by documentary proof acceptable to the Commissioner General',
                'The services are supplied directly in respect of goods temporarily admitted into Eswatini from an export country which are exempt from tax on importation under Item 470 of paragraphs 34 and 35 of First Schedule',
            ],
        },
        {
            mainHead: 'For the purposes of paragraph 3(e), international transport of goods or passengers occurs where the goods or passengers are transported by road, rail or air from a place',
            list: [
                'Outside Eswatini to another place outside Eswatini where the transport or partof the transport is across the territory of Eswatini',
                'Outside Eswatini to a place in Eswatini',
                'In Eswatini to a place outside Eswatini'
            ]
        },
        {
            mainHead: 'The goods in respect of the supply of which the rate of zero per cent shall apply under the provisions of section 24(4) of this Act shall, subject to the provisions of paragraph_2a, re as follows',
            list: [
                'Petrol, diesel and liquid petroleum gas',
                'Paraffin (kerosene) intended for cooking, illuminating and heating, provided it is not mixed or blended with any other substance for any purpose other than cooking, illuminating or heating',
                'Supply of exercise books and text books approved by the Ministry responsible for education for the furtherance ofeducation in a qualified educational institution established under public law',
                'Medicines and drugs supplied',
                'The supply of international transport services in connection with the international transport ofgoods or passengers.'
            ]
        },
    ];


    const paraArr = [
        'VAT is levied in stages and businesses only remit tax on the value addition they achieve in the supply chain. The input credit mechanism gives registered businesses back much of the VAT they pay on purchases and expenses used for making taxable supplies and, as a result it eliminates the “tax on tax” characteristic of Sales tax.',
        'VAT provides potential for a stronger home manufacturing industry and more competitive export prices as direct exports are taxed at 0%. The price of exports does not include any VAT which makes exports more competitive internationally.',
        'Strong penalties and effective enforcement policies result in a higher level of reliance being expected from taxpayers as the tax administration has a higher visibility under the VAT system brought about by the self-policing nature of VAT.',
        'A wider VAT base means that the tax burden is evenly distributed, as more goods and services are taxed under the VAT system than the Sales tax system. VAT is largely invoice based and therefore uniform and less complicated than the Sales Tax system as there are fewer exceptions. It offers a sound financial management system with less collection risks and a strong emphasis on keeping proper records.',
        'The VAT (Output VAT) that the supplier charges his customer becomes the customer’s input tax. This provides an audit trail to the tax administration to verify the amount declared because output tax by the supplier can be reconciled to the customer’s input VAT.',
    ]

    return (
        <>
            <PageLayout title={"Eswatini VAT"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>
                    <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Eswatini VAT
                            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/*------------------- Section 1-------------------------------- */}
                    <Typography variant="h5" component="h2" className='Pointsformatting text-black'>
                        Every country in the world needs money to provide health, education, social services, roads, and a wide range of other facilities for all its citizens. To provide these facilities or services, the Government of the day budgets for the expenditure of public money. In Eswatini, a major part of Government revenue is collected by way of direct and indirect taxes on income and consumption. Income Tax is a DIRECT TAX payable by individuals and businesses based on their income or profits. However, everybody who benefits from services provided by the Government is also expected to contribute through a broader, neutral tax that is fair to all. Most countries in the world, therefore, impose some form of INDIRECT TAX, usually based on the amount of goods or services consumed by the taxpayer. </Typography>
                    <Typography variant="h5" component="h2" className='Pointsformatting pt-4'>
                        VAT is an indirect tax that is levied on the consumption of goods and services in Eswatini, and is also levied on the importation of goods and services into Eswatini. It was introduced on 1 April 2012 to replace Sales Tax. Like Sales Tax, it is an indirect tax and it is levied on most goods and services at the rate of 15%. The legal basis is the <Link href={"/"}>VAT Act 2011</Link> supplemented by <Link href={"/"}>VAT Regulations</Link>
                    </Typography>

                    <Typography variant='h5' component='h2' sx={{ mt: '2rem', fontWeight: 'bold' }} className='Pointsformatting '>
                        WHO PAYS VAT?
                    </Typography>

                    <div className='flex gap-1 items-start pb-2'>
                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                        <Typography variant="body1" className='Pointsformatting '> A person who brings taxable goods or services into Eswatini(usually the importer).</Typography>
                    </div>
                    <div className='flex gap-1 items-start'>
                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                        <Typography variant="body1" className='Pointsformatting'>  A person who receives supplies of taxable goods or services in Eswatini. A person in this case includes any individual,partnership, company, trust, government and any public or local authority.</Typography>
                    </div>


                    <Typography variant='h5' component='h2' sx={{ mt: '2rem', fontWeight: 'bold' }} className='Pointsformatting'>
                        ADVANTAGES OF VAT
                    </Typography>

                    {paraArr.map((item, index) => (
                        <div key={index} className='flex gap-1 items-start pb-2'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                            <Typography variant="body1" className='Pointsformatting pb-2'>{item}</Typography>
                        </div>
                    ))}

                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Eswatini
