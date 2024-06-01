import React from 'react';
import { Box, Typography,Link } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/Income_Tax_Returns.jpg";
import bgimg from '../../assets/images/pagebackground1.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const IncomeTaxReturn = () => {



    const ITRdata = [
        {
            title: 'WHY SUBMIT AN INCOME TAX RETURN?',
            points: ['For effective reconciliation of one\'s income tax affairs', 'To enable calculation of income tax due (or refund)',
                'If you had an assessed loss in your business, by filling an Income Tax Return, you will carry forwarded that loss.',
                'Timely submission of returns helps you avoid penalties and interest charges'
            ],
            important: false,
        },
        {
            title: 'WHO MUST SUBMIT INCOME TAX RETURNS',
            note: 'Note: some aspects of this may vary from year to year in line with the notice published by the Commissioner General',
            points: ['Every Company',
                'Every person, (other than a company or a trust) who received any gross income sourced in Swaziland and was not ordinarily resident in Swaziland during the relevant year of assessment',
                'A pensioner who was ordinarily resident in Swaziland, who has multiple sources of income',
                'The Public Officer of any company, in respect of such company which derived gross income during the stated year of assessment',
                'A recognized representative of a trust fund in respect of such trust income',
                'An employee who has two or more sources of income e.g. from Part-Time employment and/or remuneration from a different employer',
                'An employee or a director who derived business or property income, in addition to his/her employment income',
                'A director who receives fees from a company',
                'A member of a clergy (e.g. pastor, priest, priestess, minister, apostle etc.) and a church executive',
                'A Member of Parliament, board member of a statutory or similar body, a partner in a partnership, and locally recruited personnel working in embassies, consulates, missions and or international organizations',
                'A person who derives income from providing professional independent services and their agents',
                'A person who receives interest or dividends from funds invested in Commercial Banks, Building Societies, and Investment houses',
                'Any person whose income is E1.2 Million Emalangeni and above',
                'Any other person who may be required by the Commissioner General in writing to render a return of income in respect of the current year of assessment',
            ],
            important:"Businesses registered for tax but not yet operational or that have not been operating in the year of assessment  are also required to submit a return and further notify the Commissioner General in writing, giving reasons why business is not operating"
        },

        {
            title: 'PERSONS NOT REQUIRED TO FURNISH INCOME TAX RETURNS',
            points: [
                'A person, in continuous employment with a single employer, whose gross income during the year of assessment consisted ONLY of remuneration; save for persons whose income was E1.2 M and above',
                'The employee’s income tax deducted was payable in terms of the prescribed tax deductions tables and subject to the Final Deduction System (FDS); save for persons whose income was E1.2 M and above',
                'Such person did not derive any other income, or if the additional income derived, consisted of a dividend, which has been subject to a final withholding tax'
            ],
            important: false,
        },
        {
            title: 'HOW TO SUBMIT A TAX RETURN?',
            points: [
                'Download the form or collect it from your nearest ERS Service Centre or Tax Office',
                'Complete the form, sign it and submit it to the ERS, attaching financials and all supporting documents, by the due date as announced by the Eswatini Revenue Service',
                'Companies may register for e-tax and complete the return online, attaching all required documents'
            ],
            important: false,
        },
        {
            title: 'LATE SUBMISSION',
            points: [
                'Late return submission attracts a penalty of 20% of the tax payable or Twenty Emalangeni (E20) per day in the case of a loss'
            ],
            important: false,
        }
    ];


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem'
    }

    return (
        <>
            <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv>

                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Income Tax Returns
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                    {/* <Typography variant="h1">
                        Income Tax Returns</Typography> */}

                    <Typography variant='body1'  className="Pointsformatting">Income Tax returns are a form of reporting to the Tax Administrator (ERS) on a taxpayer&apos;s finances and tax affairs with respect to a tax year. The tax filing period begins after 30 June, being the end of a tax year for companies that have been authorised to use a different tax year to that which is legislated will align with that approved period.
                        {<br></br>}
                        Every year the Commissioner General publishes a notice calling for income tax returns; <Link href={"https://www.ers.org.sz:8000/documents/IncomeTaxReturns.pdf"} target='_blank' style={{color:"blue"}}>click HERE</Link>to view the current notice.
                    </Typography>


                    {ITRdata.map((item, index) => (
                        <Box key={index} sx={{ mt: '1.5rem', mb:'0.5rem' }}>
                            <Typography variant='body1' fontWeight='bold' mb='0.5rem' className="Pointsformatting">{item.title}</Typography>
                            {item.note && <Typography variant='body1' className="Pointsformatting">{item.note}</Typography>}
                            <ul className='custom-list'>
                                {item.points.map((point, index) => (
                                    <div key={index} className='flex gap-1 items-start Pointsformatting'>
                                        <span className="Pointsformatting"><ArrowForwardIosIcon sx={arrowStyling} /></span>
                                        <li >{point}</li>
                                    </div>
                                ))}
                            </ul>
                            <div className='Pointsformatting flex gap-2 flex-row my-2'>
                                {item.important && <b>Important:</b>}
                            <p>{item.important}</p>
                            </div>
                        </Box>
                    ))}
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default IncomeTaxReturn
