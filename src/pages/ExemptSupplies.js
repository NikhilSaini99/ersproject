import React from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Banner from "../assets/images/bg2.jpg";
import Footer from "@/components/Footer";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





const ExemptSupplies = () => {

    const exemptServices = [
        { id: 1, service: "Supply of financial services" },
        { id: 2, service: "Supply of insurance services" },
        {
            id: 3,
            service:
                "Supply of land and buildings except for land and buildings used for commercial and industrial purposes",
        },
        {
            id: 4,
            service:
                "A supply by way of lease or letting of immovable property, other than a-",
            subServices: [
                { id: 41, service: "Lease or letting of commercial premises" },
                {
                    id: 42,
                    service: "Lease or letting of hotel or holiday accommodation",
                },
                {
                    id: 43,
                    service:
                        "Lease or letting of residential accommodation for periods not exceeding forty five (45) days",
                },
                {
                    id: 44,
                    service:
                        "Lease or letting of space parking or storing cars or other vehicles",
                },
            ],
        },
        { id: 5, service: "The supply of education services" },
        { id: 6, service: "The supply of medical, dental, and nursing services" },
        { id: 7, service: "The supply of social welfare services" },
        {
            id: 8,
            service:
                "The supply of betting, lotteries, games of chance or casino gambling services",
        },
        { id: 9, service: "The supply of burial and cremation services" },
        {
            id: 10,
            service:
                "The supply of passenger transportation services, other than services provided by registered tour operators",
        },
        { id: 11, service: "The supply of sewage services" },
        {
            id: 12,
            service:
                "The supply of services closely linked to welfare and social security work, including those supplied by old people's homes, by bodies governed by public law or by other bodies recognized as being devoted to social wellbeing",
        },
        {
            id: 13,
            service:
                "All the supply by an amateur sporting organization of sporting activities, where such activities are deemed for purposes of the Act to be non-professional",
        },
        {
            id: 14,
            service:
                "The supply of non-profit making cultural activities and services",
        },
        {
            id: 15,
            service: "The supply of activities and services in a charity arrangement",
        },
    ];



    const exemptGoods = [
        {
            id: 1,
            point: "Goods, being printed books, newspapers, journals, and periodicals, imported into Eswatini by post of a value not exceeding one hundred emalangeni (E100) per parcel"
        },
        {
            id: 2,
            point: "Goods, being the supply of precious metals and other valuables to the Central Bank of Eswatini for the Treasury of the Government of Eswatini in terms of the Central Bank of Eswatini Order, 1975"
        },
        {
            id: 3,
            point: "Goods which are forwarded unsolicited and free of charge by a non-resident to a public authority or a local authority or any association not for gain, which satisfies the Commissioner General that such goods shall be used by that association exclusively-",
            subPoints: [
                { id: 31, point: "For education, religious or welfare purposes" },
                { id: 32, point: "In the furtherance of that association’s objectives directed to the provision of educational, medical or welfare services or scientific research" },
                { id: 33, point: "For issue to, or treatment of, indigent persons" }
            ]
        },
        {
            id: 4,
            point: "For the purpose of paragraph (c) the recipient of the goods responsible for the distribution shall furnish an undertaking that:",
            subPoints: [
                { id: 41, point: "Such goods are for the exclusive use by the organization or for free distribution" },
                { id: 42, point: "Such goods shall not be sold, leased, hired or otherwise disposed of for gain" },
                { id: 43, point: "A consideration or other counter-performance may not be accepted by any person in respect of such goods" }
            ]
        },
        {
            id: 5,
            point: "Goods which are shipped or conveyed to Eswatini for trans-shipment or conveyance to any export country",
        },
        {
            id: 201, point: 'For the Purpose of paragraph',
            subPoints: [
                {
                    id: 51,
                    point: "The Commissioner General ensures that the tax is secured, in part or in full, by the lodging of a provisional payment or bond except where the Commissioner General, in exceptional circumstances, otherwise directs"
                },
                {
                    id: 52,
                    point: "Where proof has been furnished to the Commissioner General that the goods have been duly taken out of Eswatini within a period of thirty (30) days or within such further period as the Commissioner General may, in exceptional circumstances, allow, this exemption shall be withdrawn and tax, penalty and interest shall be payable"
                }
            ]
        },
        { id: 6, point: "Goods supplied as part of the transfer of business as a going concern on condition the goods are supplied by one taxable person to another taxable person" },
        { id: 7, point: 'For the purpose of this article, "transfer of business as a going concern" includes the disposal of any part of a business which is capable of separate operation' },
        { id: 8, point: "Postage stamps, revenue stamps, and banknotes" },
        { id: 9, point: "Traveller’s cheques and bills of exchange, denoted in a foreign currency" },
        { id: 10, point: "Goods supplied in relation to fairs, exhibitions, and tourism of a value not exceeding four hundred (E400) emalangeni" },
        { id: 11, point: "Supply of tap water" },
        {
            id: 12,
            point: "Medical devices supplied to a patient in a qualified medical facility, supplied to a qualified medical facility, or supplied on prescription to a patient in connection with the rendition of qualified medical services, including",
            subPoints: [
                {
                    id: 121,
                    point: "A respiratory or heart monitor, dialysis machine, or feeding utensil for use by an individual with disability"
                },
                { id: 122, point: "A medical or surgical prosthesis or orthopedic aid" },
                { id: 123, point: "Medical or surgical equipment" }
            ]
        },
        { id: 13, point: "The supply of electricity for domestic consumption only" }
    ];


    const body1Styling = {
        fontSize: '20px',
        my: '0.5rem'
    }

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem'
    }


    return (
        <>
            <Head>
                <title>Exempt Supplies of Goods & Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*-----------------------Header---------------------*/}

            <Header />
            {/*-----------------------Banner---------------------*/}
            <Box>
                <Image src={Banner} alt="..." className="h-96 w-full" />
            </Box>
            <Box sx={{ width: "75%", margin: { xs: "2rem auto", lg: "5rem auto" } }}>
                <Typography variant="h1" sx={{ my: '3.5rem' }}>
                    Exempt Supplies of Goods & Services
                </Typography>
                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", my: '1rem' }}>
                    PART A
                </Typography>
                <Typography variant="body1" sx={body1Styling}>EXEMPT SUPPLY OF SERVICES</Typography>
                <Typography variant="body1" sx={body1Styling}>
                    The following services shall, subject to the provisions of paragraph
                    2, be specified as exempt supplies for the purposes of section 19 of
                    the VAT Amendment Act -
                </Typography>
                <ul className="custom-list">
                    {exemptServices.map((item) =>
                        item.hasOwnProperty("subServices") ? (
                            <>
                                <div className='flex gap-1 items-start'>
                                    <span className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                    <li key={item.id} className="Pointsformatting" >
                                        {item.service}
                                        <ul 
                                            style={{ listStyleType: "lower-roman", marginLeft: "1rem", marginTop: '0.5rem', marginBottom: '0.5rem' }}
                                        >
                                            {item.subServices.map((subitem) => (
                                                <li key={subitem.id} className="Pointsformatting" style={{ marginLeft: '1.3rem' }}>{subitem.service}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex gap-1 items-start'>
                                    <span className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                    <li style={{ marginLeft: "0rem" }} className="Pointsformatting" key={item.id}>{item.service}
                                    </li>
                                </div>
                            </>
                        )
                    )}
                </ul>


                <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mt: '2.5rem' }}>
                    PART B
                </Typography>
                <Typography variant="body1" sx={body1Styling}>EXEMPT SUPPLY OF GOODS</Typography>
                <Typography variant="body1" sx={body1Styling}>The following goods are specified for purposes of Section 20 of this Act</Typography>

                <ul className="custom-list">

                    {exemptGoods.map((item) => (
                        item.hasOwnProperty('subPoints') ?
                            <>
                                <div className='flex gap-1 items-start'>
                                    <span className="Pointsformatting" ><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                    <li key={item.id} className="Pointsformatting">
                                        {item.point}
                                        <ul style={{ listStyleType: "lower-roman", marginLeft: "1rem", mb: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                                            {item.subPoints.map((subpoint) => (
                                                <li key={subpoint.id} style={{ marginLeft: '1.3rem' }} className="Pointsformatting">{subpoint.point}</li>
                                            ))}
                                        </ul>
                                    </li>
                                </div>
                            </>
                            : <>
                                <div className='flex gap-1 items-start'>
                                    <span className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                    <li key={item.id} className="Pointsformatting">
                                        {item.point}</li>
                                </div>
                            </>
                    ))}
                </ul>
            </Box>

            {/*-----------------------Footer---------------------*/}
            <Footer />

        </>
    );
};

export default ExemptSupplies;
