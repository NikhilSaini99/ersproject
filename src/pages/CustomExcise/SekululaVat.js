import React from 'react'
import Header from '@/components/Header'
import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from "../../assets/images/Guide-on-the-Appointment-of.png";
import bgimg from '../../assets/images/bg-2.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '@/components/Footer'

const SekululaVat = () => {

    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


    const section1Data = [
        {
            title: 'WHAT ARE THE BENEFITS?',
            points: [
                'The VAT paid in South Africa on purchase of goods will be claimed by the ERS on behalf of the importer of the same goods; the refund received will be used to offset the VAT liability for the goods being imported into Eswatini. This also eases cash-flow requirements for the importer.',
                'The facilitation of the process to claim the refund from South African Revenue Service (SARS) is handled by the ERS.',
                'Increased compliance levels as importers fully declare goods purchased in South Africa on which VAT was incurred. This increases the country´s VAT and SACU revenues.',
            ],
        },
        {
            title: 'WHO QUALIFIES?',
            data: [
                {
                    heading: 'A. COMMERCIAL IMPORTERS',
                    subpoints: [
                        'Business entity based in Eswatini that has been registered by SARS as a foregin exporter and purchases goods from a VAT registered vendor in South Africa. To register as a foreign exporter with SARS, an entity is required to complete a form which is to be accompanied by form DA185 used as a nomination/appointment of an agent who is approved by SARS to perfom the functions of licensed clearing agent on behalf of the foreign principal in complying with all legislative obligations required on exporters.',

                    ]
                },
                {
                    heading: 'B. NON-COMMERCIAL IMPORTERS',
                    subpoints: [
                        'Any Eswatini resident who has purchased goods from a VAT registered vendor in South Africa for own use (i.e. goods that are not intended for re-sale). Such an individual is not required to nominate/appoint an agent for purposes of making a declaration with SARS as long as that administration allows the goods to be exported without subscribing to the formal declaration process in RSA. Upon importation into Eswatini the individual will proceed to declare the goods under the simplified declaration process by completing the ERS Personal Baggage Declaration Form for VAT Refunds (Form E) that is available at the border. All goods that are not accompanied by the owner do not qualify as personal baggage and should accordingly be declared as commercial imports.',
                    ]
                },
            ],
        },
        {
            title: 'FEATURES OF A VALID SOUTH AFRICAN TAX /VAT INVOICE',
            subhead: 'The following information must appear on the invoice(s) for it to be regarded as valid for purposes of the VAT Refunds System:',
            points: [
                'The words “Tax Invoice”, or “VAT Invoice',
                'The invoice number and date.',
                'The name and address of the South African vendor.',
                'The vendor’s South African VAT registration Number.',
                'A full description of the goods purchased and the price charged.',
                'The VAT amount or VAT % rate charged on the goods',
                'The Eswatini importer’s name and address for invoices with amounts that are above R5, 000.00.'
            ],
        },
        {
            downloadData: ['for an example of a valid simplified Tax/VAT Invoice', 'for an example of a valid full Tax/VAT Invoice'
            ]
        },
        {
            title: 'HOW DOES IT WORK?',
            data: [
                {
                    heading: 'A. COMMERCIAL IMPORTERS',
                    subpoints: [
                        'All declarations submitted to SARS and ERS should reflect the Eswatini importer or nominated agent as "exporter" in the following fields of the SAD 500 customs declaration form:',
                        'Upon entry into Eswatini use ASYCUDA World to declare the goods to ERS Customs;',
                        'Submit documents required for claiming to ERS Customs;',
                        'ERS Customs officials will check the submitted declaration to ensure that it meets all procedural requirements after which the goods will be released without requiring a payment for the VAT due;',
                        'Where there is more than one invoice, include all invoice numbers in box 13 of the SARS SAD.',
                    ],
                },
                {
                    heading: 'The following documents should be submitted for claiming VAT paid in South Africa:',
                    subpoints: [
                        'An original and valid South African VAT or tax invoice(s);',
                        'A completed VAT Refund Envelope;',
                        'Export declaration denoting "H" from South Africa and an Eswatini import declaration;',
                        'A copy of the declarant’s passport;',
                        'Proof of payment for purchases above R10,000.00. However, invoices which reflect words such as "amount due; balance due; amount paid R0.00" must be accompanied by the proof of payment regardless of the invoice amount.',
                    ],
                },
                {
                    heading: 'Importers whose claims are rejected by SARS will be called upon to settle the VAT liability.',
                },
                {
                    heading: 'B. NON-COMMERCIAL IMPORTERS',
                    subpoints: [
                        'Upon entry into Eswatini, declare the goods to ERS Customs using the Personal Baggage Declaration Form (Form E) and attach the original valid South African tax / VAT invoice(s) to the form;',
                        'Submit the completed Form E and related tax invoice(s) to ERS Customs;',
                        'ERS Customs officials will check the submitted documents to ensure that procedural requirements are met; once satisfied that all is in good order, the declaration will be released and the goods removed without making any payment;',
                        'For purchases worth more than R10,000.00, proof of payment is to be submitted;',
                        'If the invoice has terms such as "amount due; balance due; paid R0.00", proof of payment is required regardless of the value.',
                    ],
                },
            ],
        },
        {
            note: 'Note that although it is not a requirement that the invoices and goods be presented to South African Customs at the time of exportation, SARS may however in some instances request that this should be done.'
        },
        {
            subnote: 'Importers whose claims are rejected by SARS will be called upon to settle the VAT liability'
        },
        {
            title: 'BORDERS IN WHICH SEKULULA IS APPLICABLE',
            subhead: 'Use of the Sekulula VAT Easy system is allowed for goods imported through the following border posts only:',
            points: [
                'Ngwenya Border Post',
                'Lavumisa Border Post',
                'Mahamba Border Post',
                'Matsamo Border Post',
                'Mananga Border Post',
                'Sandlane Border Post',
            ],
        },
        {
            title: 'USEFUL INFORMATION',
            points: [
                'Where an importer may need the VAT/tax invoice, for warranty, guarantee or book keeping purposes, request that the South African supplier issues a duplicate VAT/tax invoice or make own copy.',
                'Request the South African supplier to include the importer’s name and address for invoices with amounts in excess of R5, 000.',
                'Attach proof of payment for invoices with amounts in excess of R10, 000.00. The proof of payment may include:',
                'The goods must be brought into Eswatini no later than 90 days from the date of invoicing',
                'The claim documents must be submitted no later than 75 days from the date of invoicing',
                'In case the importers invoice has been rejected by SARS, the importer will be required to settle the VAT liability'
            ],
        },
        {
            title: 'EXCLUSIONS',
            points: [
                'Travellers who are not legally resident in Eswatini;',
                'Goods purchased from non-VAT registered suppliers in South Africa;',
                'Goods on which no VAT was paid in South Africa;',
                'Goods imported into Eswatini through postal services;',
                'Goods that are regarded as a direct export from South Africa, i.e. the importer did not collect the goods from South Africa, instead the export was facilitated by the supplier. NB: If the goods’ declaration reflect the supplier as the ‘exporter’ that transaction will also be categorised as a direct export and will not qualify under the ‘VAT Refunds / Sekulula’ system;',
                'Goods consumed (in part or in full) in South Africa;',
                'Invoices issued with respect to services rendered in South Africa;',
                'Goods imported through non-commercial border posts (all those that have NOT been listed above) and the airports;',
                'Second-hand goods, registrable items, such as motor vehicles and goods purchased on credit.',
                'An importer may be refunded the VAT paid in RSA for these goods subject to the requirements listed in 8 below.',
            ],
        },
        {
            title: 'GUIDE FOR CLAIMING VAT AFTER IMPORTATION',
            subhead: 'In order to submit a claim for the VAT paid in RSA which is remitted to the importer upon payment by SARS on the items listed in the preceding section under (viii), an importer who is in possession of a valid VAT /tax invoice will be required to:',
            points: [
                'Declare goods and pay import VAT on entry',
                'Complete the ERS remittance form',
                'Obtain bank confirmation / endorsement of the importer’s banking details as shown on the remittance',
                'Submit claim documents to ERS within 75 calendar days from date of invoice',
                'Be registered with SARS and nominate a SARS registered agent (information on the registration process available on SARS website) where the claim is in respect of registrable items and the following documents must be included',
            ],
        },
        { note: 'Attach the goods proof of payment to the supplier confirming that the goods have been paid for in full for all goods bought on credit (regardless of the value)' },
        {
            title: 'IT IS IMPORTANT TO NOTE THAT',
            points: [
                'Claims for refund of VAT paid in South Africa made in respect of second-hand motor vehicles and second-hand goods are subjected to an audit by SARS prior to issuance of the VAT refund. This makes it difficult to estimate the turnaround times for finalisation and payment of the refund to ERS for onward transmission to the importer.',
                'Claims for refund of VAT paid in South Africa are forwarded to SARS for validation and payment.',
                'Upon receipt of the refund from SARS, ERS remits the amount paid into the importer’s bank account in a case where there is no tax liability to the ERS.',
                'The VAT refundable on second hand goods MAY be below the VAT paid as reflected on the invoice. This is in accordance with the South African VAT administration under the Notional Input Tax concept.',
                'Sekulula VAT Easy is implemented under a Memorandum of Understanding (MoU) that is based on the South African VAT laws and regulations; accordingly, the legislation is also taken into consideration for approval of all refund claims. As a result, claims that are not in full compliance with provisions found in the aforementioned legislations can be rejected by SARS.',
            ],
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
            <Box sx={{ position: "relative", width: "100%", height: '30rem' }}>
                <Image
                    src={Banner}
                    alt="about_us"
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

                <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '10rem,', xl: '15rem' }, py: '2rem' }}>
                    <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
                        Sekulula VAT
                    </Typography>

                    <Typography variant="body1" className='Pointsformatting' sx={{ my: '1rem' }} >
                        The Sekulula VAT Easy system enables importers to settle the VAT liability for goods imported into Eswatini by using qualifying invoices where such goods were purchased from South African VAT registered vendors.</Typography>

                    <Box sx={{ my: '1rem' }}>
                        {section1Data.map((item, index) => (
                            <Box key={index}>
                                <Typography variant='h2' className='Pointsformatting' sx={{ fontWeight: 'bold' }}>
                                    {item.title}
                                </Typography>
                                {item.subhead && <Typography variant='body1' className='Pointsformatting'>
                                    {item.subhead}
                                </Typography>}
                                {item.points && item.points?.map((points, index) => (
                                    <div key={index} className='flex gap-1 items-start pb-2'>
                                        <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                        <ul> <li className='Pointsformatting'>{points}</li></ul>
                                    </div>
                                ))}
                                {item.data && item.data.map((item, index) => (
                                    <Box key={index}>
                                        <Typography variant='h2' className='Pointsformatting' sx={{ fontWeight: 'bold' }}>
                                            {item.heading}
                                        </Typography>
                                        {item.subpoints && item.subpoints.map((subpoint, index) => (
                                            <div className='flex gap-1 items-start pb-2' key={index}>
                                                <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                                <ul>
                                                    <li className='Pointsformatting'>{subpoint}</li>
                                                </ul>
                                            </div>
                                        ))}
                                    </Box>
                                ))}
                                {item.downloadData && item.downloadData.map((links, index) => (
                                    <div className='flex gap-1 items-start pb-2' key={index}>
                                        <Link href="" className='Pointsformatting text-normalBlue'>Click Here {links}</Link>
                                    </div>
                                ))}
                                {item.note && <Typography variant='body1' className='Pointsformatting' sx={{ fontWeight: 'bold' }}>
                                    {item.note}
                                </Typography>}
                                {item.subnote && <Typography variant='body1' className='Pointsformatting'>
                                    {item.subnote}
                                </Typography>}
                            </Box>
                        ))}
                        <Typography variant='body1' className='Pointsformatting'>
                            For more information please contact our Contact Centre on
                            info@ers.org.sz
                            or call +268 2406 4050
                        </Typography>
                    </Box>

                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default SekululaVat
