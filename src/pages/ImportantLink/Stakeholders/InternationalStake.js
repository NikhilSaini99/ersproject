import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import { Box, Typography, Stack } from '@mui/material'
import Image from 'next/image'
import Banner from "../../../assets/images/images/registration.jpg";
import bgimg from '../../../assets/images/pxfuel.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link'
import { ContentDiv } from '@/styles/globalStyle'

const InternationalStake = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }



    const firstSection = [
        {
            head: "What is the Purpose?",
            description: 'It is aimed at detecting, deterring and discouraging offshore tax evasion. It creates greater transparency by strengthening exchange of financial information for tax purposes.'
        },
        {
            head: 'Who is Impacted?',
            description: 'Financial Institutions (including financial service providers) such as insurance companies that issue or are obligated to make payments in respect of cash value insurance contracts   or annuity contracts or entities that provide investment instruments such as private equity funds, mutual funds, hedge funds etc.'

        },
        {
            head: 'Key considerations for Financial Institutions',
            description: [
                {
                    desc1: 'Eswatini intends entering into an Inter-Governmental Agreement (IGA) with the USA and therefore Financial Institutions should be aware of the following fundamental points in respect of FATCA:',
                    explain: 'Change in onboarding processes and procedures for the proper identification of USA persons, both individuals and entities with controlling US persons i.e. customer application forms, KYC checklist, account opening checklists and supporting documentation validation checks.'
                },
                {
                    desc1: 'Pre - existing accounts require back scanning to search for indicators of US persons (both individuals and entities)Obtain information to report which involves the following:',
                    explain: [
                        {
                            mainpoints: [
                                'A specified US person: Name, address and US taxpayer identification number(TIN)',
                                'A US owned entity: name address and US TIN of each substantial US owner.',
                                'Account Numbers.',
                                'Account Balances or value as of the end of the relevant calendar year'
                            ]
                        },
                        {
                            subpoints: [
                                'Depository-gross amount of interest paid or credited.',
                                'Custodial-gross amount of interest ,dividends and other income generated with respect to the assets held in the account and total proceeds of the sale or redemption of property and',
                                'All other accounts: gross amount paid or credited to the account holder.'
                            ]
                        }
                    ]
                }
            ],

        },
    ]
    const organizations = [
        {
            name: "Common Market for East and Southern Africa",
            link: 'https://www.comesa.int/',
            description:
                "With its 19 member states, population of 430 million (2008) and an annual import bill of around US$ 152 billion (2008) and an export bill of over US$ 157 billion (2008), the Common Market for East and Southern Africa (COMESA) is a major market place for both internal and external trading.",
        },
        {
            name: "Southern African Customs Union (SACU)",
            link: 'https://www.sacu.int/',
            description:
                "The Southern African Customs Union (SACU) is the world’s oldest customs union and its current members are Eswatini, South Africa, Botswana, Namibia, and Lesotho. Its primary objectives are:",
            objectives: [
                "To facilitate the cross-border movement of goods between the territories of the Member States.",
                "To create effective, transparent and democratic institutions which will ensure equitable trade benefits to Member States.",
                "To promote conditions of fair competition in the Common Customs Area.",
                "To substantially increase investment opportunities in the Common Customs Area.",
                "To enhance the economic development, diversification, industrialization, and competitiveness of Member States.",
                "To promote the integration of Member States into the global economy through enhanced trade and investment.",
                "To facilitate the equitable sharing of revenue arising from customs, excise, and additional duties levied by Member States.",
                "To facilitate the development of common policies and strategies.",
            ],
        },
        {
            name: "Southern African Development Community (SADC)",
            link: 'https://www.sadc.int/',
            description:
                "The Southern African Development Community (SADC) was formed in 1992 taking over from the previous Southern African Development Coordination Conference (SADCC) whose primary purpose was to ensure political stability in the region. The new formation’s agenda is socio-economic reform and development in the region. Swaziland is a member of SADC and participates in all programmes and resolutions undertaken by the 15 member state cooperation.",
        },
        {
            name: "World Customs Organisation",
            link: 'https://www.wcoomd.org/',
            description:
                "Eswatini is a member of the World Customs Organisation. On this website, you can find information on worldwide Customs procedures, requirements, and developments.",
        },
        {
            name: "Customs Administration of Sweden (Tullverkert)",
            link: 'https://www.tullverket.se/',
            description:
                "The Eswatini Revenue Service, World Customs Organisation, and Customs Administration of Sweden (Tullverket) signed an MoU through which Tullverket will run capacity building programs for the benefit of Swaziland. Tullverket is a highly experienced and well-established Customs Administration which has been in existence since 1636. The Administration has over the centuries been instrumental in raising revenue for the state, protecting Swedish industry, and countering the smuggling of goods and narcotics into Sweden. Tullverket, as it is known, joined the European Union (EU) in 1995 thus aligning its regulations with those of the EU and extending its borders to Norway in the West, Russia in the East, and Africa in the South.",
        },
        {
            name: " ",
            link: '#',
            description:
                "The World Customs Organisation's role is to provide guidance, strategic advice, monitoring, attendance in steering committees, and further technical or political support upon request from either the ERS or the Customs Administration of Sweden. The WCO is the global centre of Customs expertise and is responsible for the development, promotion, and implementation of Customs standards which are used the world over. Its involvement is thus instrumental in ensuring that all initiatives under the agreement are aligned with current global developments.",
        },
    ];

    const nationalStakeholders = [
        {
            name: "Central Bank of Eswatini",
            link: 'http://www.centralbank.org.sz/',
            description: "The Central Bank of Eswatini is the custodian of monetary policies in the country.",
        },
        {
            name: "Swaziland Government - Ministry of Finance",
            link: 'http://www.gov.sz/index.php?option=com_content&view=article&id=277&Itemid=405',
            description:
                "The Swaziland Government - Ministry of Finance is the parent Ministry under which the Eswatini Revenue Authority reports.",
        },
        {
            name: "Swaziland Investment Promotion Authority (SIPA)",
            link: 'http://www.sipa.org.sz/',
            description:
                "The Swaziland Investment Promotion Authority (SIPA) was created through an Act of Parliament, the Eswatini Investment Promotion Act 1998 and its mission is to promote and facilitate foreign direct and local investment in Eswatini, with the objective of creating the wealth necessary to enhance the Social and Economic Development of the Kingdom.",
        },
        {
            name: "Federation of Swaziland Employers and Chamber of Commerce (FSE + CC)",
            link: 'http://www.business-swaziland.com/',
            description:
                "The Federation of Swaziland Employers and Chamber of Commerce (FSE + CC) is an organisation that represents various business interests in Eswatini. It plays an advocacy role for its members and promotes industrial harmony and productivity.",
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

            <Box sx={{ height: { xs: '15rem', lg: '30rem', xs: '30rem' } }}>
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
                backgroundImage: `url(${bgimg.src})`,
                backgroundSize: 'cover', backgroundAttachment: 'fixed'
            }} >

                <ContentDiv>
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}> Links for International Organisations
                            <span className="absolute bottom-0 left-0 w-1/2 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Links
                    </Typography> */}
                    <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 'bold', my: '1.2rem' }}>
                        INTERNATIONAL ORGANISATIONS AND AGREEMENTS
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 'bold', my: '1.2rem' }}>
                        <Link href={'https://www.irs.gov/Businesses/Corporations/Foreign-Account-Tax-Compliance-Act-FATCA'}
                            style={{ textDecoration: 'underline', color: '#2f2483', fontWeight: 'bold' }}>
                            Foreign Account Tax Compliance Act (FATCA)
                        </Link></Typography>

                    <Typography variant="body1" className='Pointsformatting'>
                        Foreign Account Tax Compliance Act was enacted in 2010 subsequent to the 2007 economic recession in the United States of America (USA).
                        It compels financial institutions to disclose annually to the Internal Revenue Service(IRS) financial information in respect of USA Citizens’ offshore income.
                    </Typography>

                    {firstSection.map((item, index) => (
                        <Box key={index}>
                            <Typography variant='h2' sx={{ fontSize: '1.25rem', fontWeight: 'bold', my: '0.3rem' }}>{item.head}</Typography>

                            {Array.isArray(item.description) ? item.description.map((itemdesc, index) => (
                                <Box key={index}>
                                        <Typography variant='body1' className='Pointsformatting'>{itemdesc.desc1}</Typography>
                                    {Array.isArray(itemdesc.explain) ?
                                        itemdesc.explain.map((itemexp, index) => {
                                            <Box key={index}>
                                                {/* <div>{itemexp.mainpoints?itemexp.mainpoints.map((itemmain,index)=>(
                                       <li key={index}>{itemmain}</li>
                                    )):itemexp.subpoints?itemexp.subpoints.map((itemsub,index)=>(
                                        <li key={index}>{itemsub}</li>
                                    )):null}</div> */}
                                            </Box>
                                        })
                                        : <Typography variant='body1' className='Pointsformatting'>{itemdesc.explain}</Typography>}
                                </Box>
                            ))
                                :

                                <Typography variant='body1' className='Pointsformatting'>{item.description}</Typography>

                            }
                            <Typography variant='body1' className='Pointsformatting'>Obtain information to report which involves the following:</Typography>
                        </Box>
                    ))}
                    <ol style={{ listStyleType: 'decimal', marginLeft: '1rem' }} className='Pointsformatting'>
                        <li>A specified US person: Name, address and US taxpayer identification number(TIN).</li>
                        <li>A US owned entity: name address and US TIN of each substantial US owner.</li>
                        <li>Account Numbers.</li>
                        <li>Account Balances or value as of the end of the relevant calendar year</li>
                        <ul className='custom-list'>
                            <li>Depository-gross amount of interest paid or credited.</li>
                            <li>Custodial-gross amount of interest ,dividends and other income generated with respect to the assets held in the account and total proceeds of the sale or redemption of property and</li>
                            <li>All other accounts: gross amount paid or credited to the account holder.</li>

                        </ul>
                    </ol>


                    {organizations.map((item, index) => (
                        <Box key={index}>
                            <Typography variant='h6' sx={{
                                fontWeight: 'bold', my: '0.3rem'
                            }} className='Pointsformatting'>
                             <Link href={`${item.link}`}>{item.name}</Link>
                            </Typography>
                            <div className='flex gap-1 items-start pb-2'>
                                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                <Typography variant='body1' component='div' className='Pointsformatting' >{item.description}
                                    {item.objectives &&

                                        <ul>
                                            {item.objectives.map((itemobj, index) => (
                                                <div key={index} className='flex gap-1 items-start pb-2'>
                                                    <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                                    <li >{itemobj}</li>
                                                </div>
                                            ))}
                                        </ul>
                                    }

                                </Typography>
                            </div>


                        </Box>

                    ))}

                    <Typography variant='h6' sx={{ fontWeight: 'bold', my: '0.3rem' }}>NATIONAL STAKEHOLDERS </Typography>

                    {nationalStakeholders.map((item, index) => (
                        <Box key={index}>
                            <Typography variant='h6' sx={{
                                fontWeight: 'bold', my: '0.3rem'
                            }}>
                                <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 'bold', my: '1rem' }}>
                                    <Link href={`${item.link}`}>{item.name}</Link>
                                </Typography>
                            </Typography>
                            <Typography variant='body1' component='div' className='Pointsformatting'>{item.description}</Typography>
                        </Box>
                    ))}
                </ContentDiv>
            </Box>

            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default InternationalStake
