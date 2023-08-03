import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../../assets/images/PAYE-QuickGuide.jpg";
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bgimg from "../../assets/images/bg-2.png";

const Paye = () => {
    const taxRates = [
        {
            taxableIncomeExceeds: 'E0',
            doesNotExceed: 'E100,000',
            rates: '0 + 20% of the excess of E0',
        },
        {
            taxableIncomeExceeds: 'E100,000',
            doesNotExceed: 'E150,000',
            rates: 'E20,000 + 25% of the excess of E100,000',
        },
        {
            taxableIncomeExceeds: 'E150,000',
            doesNotExceed: 'E200,000',
            rates: 'E32,500 + 30% of the excess of E150,000',
        },
        {
            taxableIncomeExceeds: 'E200,000',
            doesNotExceed: '',
            rates: 'E47,500 + 33% of the excess of E200,000',
        },
    ];


    const taxRebateData = [
        {
            mainHead: 'Tax Rebate',
            points: ['The tax payable by an individual must be reduced by way of a rebate of an amount not exceeding the sum of eight thousand two hundred emalangeni (E8 200) in any year of assessment, that is, E683.33 on a monthly basis.',
                'When the tax rebate of E8 200 is combined with the lowest marginal tax rate of 20%, one has an effective tax free threshold of E41 000. But if the period assessed is less than a full year, the tax rebate shall be the same ratio such period bears to twelve months.',
                'The new rates of tax will be applicable on the amount exceeding E41 000 in any year of assessment.',
                'The tax rebate does not apply if the tax payable is subject to the concessionary rates of tax prescribed in Part III of the Third Schedule to the Income Tax Order.',
            ]
        },


        {
            mainHead: 'Apportionment of the Tax Rebate',
            description: 'Since in terms of the law, the tax rebate must be apportioned according to the number of months that the employee has worked, the apportionment must be calculated as follows:',
            points: ['The annual equivalent of the monthly remuneration is first established.',
                'The tax on the annual amount is then calculated.',
                'The amount of tax is divided by 12 months, and then multiplied by the number of months worked to arrive at the correct tax for that period',
                'The rebate is also apportioned accordingly.'
            ]
        },


        {
            mainHead: 'Monthly Return',
            description: 'A registered employer is required to submit a PAYE Monthly Deduction Return to the ERS no later than the 7th calendar day of the following month as well as attach the proof of payment of the employees’ tax paid. Payments of employees’ tax must be reflected correctly and separately on the bank slip in order to avoid the incorrect allocation of these payments and the unnecessary issue of final demands.'
        },
        {
            mainHead: 'Estimated assessments',
            description: 'The Commissioner General may estimate the amount of employees’ tax',
            points: ['Where the employer fails to submit the PAYE Monthly Deduction Returns on due dates',
                'Where the employer fails to deduct or withhold the correct amount of employees’ tax;',
                'Where the employer fails to pay over the employees’ tax deducted on due dates.',],
            note: 'NB. Any estimate of the amount of employees’ tax is subject to objection and appeal.'
        },

        {
            mainHead: 'Tax period',
            description: 'The legislated tax period begins on the 1st July and ends on the 30th June of the subsequent year'
        },
        {
            mainHead: 'Making payments',
            description: 'Payments to the ERS may be made using any of the following means',
            points: ['Over the counter payments',
                'Direct deposits',
                'Electronic funds transfer (EFT)',
                'Same bank Account-to-Account transfers',]
        },

        {
            mainHead: 'Allocation of Payments',
            description: 'Where any payment is made by an employer in respect of employees’ tax, such payment will be allocated in the following manner',
            points: ['In respect of penalty, (where the return or payment was received late)',
                'In respect of interest, to the extent to which the payment exceeds the amount of penalty',
                'In respect of employees’ tax, to the extent to which the payment exceeds the amount of interest.'],
            note: 'Where there is a shortfall after the allocation of penalties and interest and the outstanding tax has not been covered in full, interest will continue to accrue on the outstanding tax.'

        },

        {
            mainHead: 'The Employer',
            description: 'The Employees Tax Deduction Tables have been prepared reflecting DAILY, WEEKLY and MONTHLY remuneration. If difficulties are encountered in determining deductions in exceptional cases, the Eswatini Revenue Service should be contacted.',
            points: ['The rates of deduction are in accordance with the tables prescribed in the Employees’ Tax Deduction Tables',
                'An employer will not be allowed to make a lesser tax deduction than specified by the tax table.',
                'The employees’ tax deduction takes precedence over any other claims against an employee’s remuneration, such as repayments of debts due by the employee.',
                'An employer should only consider income accrued to employees as part of remuneration paid by him/her and none other.'],
            note: 'NOTE. Employers may also use the Tax Calculator to determine tax payable.'
        },


        {
            mainHead: 'Liability',
            points: ['All employees’ tax deducted by the employer must be paid to the ERS in full before the seventh day of the following month together with the PAYE Monthly Declaration Return (Form PAYE 04).',
                'Employers are personally held liable for employees’ taxes due from persons in their employ. Claims in respect of employees’ tax take precedence against the employer’s estate in the event of death or insolvency. These provisions also apply to a representative employer.',
                'A representative employer is not relieved from any liability, responsibility or duty of an employer and is therefore subject to the same duties, responsibilities and liabilities',
                'An employer and employee may under no circumstance conclude an agreement whereby the employer undertakes not to deduct or withhold employees’ tax.',
                'An employee is not entitled to recover from an employer any amount deducted or withheld by the employer from such employee’s remuneration.']
        },
        {
            mainHead: 'Interest and Penalty',
            points: ['An employer will be liable to a penalty of 20% on any amount that has not been paid to the ERS by the due date (7th of the following month), whether deducted or not from employees. This will be in addition to the interest charges of 18%.',
                'The penalty must be paid to the ERS when payment is made of the amount of employees’ tax to which it refers or within such further period as may be approved by the ERS.',
                'Where an employer has the right of recovery of tax against an employee, such employee is not entitled to receive from the employer an employees’ tax certificate until such time as the employee pays to his employer the full amount due.']
        }


    ];


    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }


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
            <Box sx={{ width: "75%", margin: { xs: "0rem auto", lg: "0rem  auto" }, pr: { md: '5rem', lg: '8rem,', xl: '10rem' }, py: '2rem' }}>
                <Typography variant="h1" sx={{ pt: '2rem', mb: '2rem' }}>
                    PAYE - Quick Guide</Typography>

                <Box className="Pointsformatting">
                    <div >
                        <Typography variant="body1" className="Pointsformatting">
                            The Employers PAYE Guide may be downloaded by{' '}
                            <Link href="http://www.sra.org.sz/documents/1496926135.pdf">clicking here</Link>.
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="body1" className="Pointsformatting">
                            <strong>Calculating PAYE</strong>
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="body1" className="Pointsformatting pt-4">
                            <strong>NOTE: The steps described below are based on the general principles of calculating PAYE; it is always advisable to verify with the ERS when not sure.</strong>
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="body1" className="Pointsformatting pt-4 ">
                            <strong>Step 1</strong> - Determine the employees taxable income
                        </Typography>
                    </div>


                    <ul className='custom-list pb-2' >

                        <li className="Pointsformatting">Lump all amounts that make up the employees remuneration for that month, i.e. gross salary, benefits in kind, commission, etc.</li>
                        <li className="Pointsformatting">Deduct allowable deductions, e.g. statutory deductions (SNPF), contributions to pension fund.</li>

                    </ul>


                    <div>
                        <Typography variant="body1" className="Pointsformatting pb-2">
                            <strong>Step 2</strong> - Annualize the taxable income, i.e. multiply by 12
                        </Typography>

                        <Typography variant="body1" className="Pointsformatting pb-2">
                            <strong>Step 3</strong> - Determine which bracket it falls under of the 4 brackets provided by law and calculate accordingly. E.g. a total annual taxable income of 80,000 is classified under the 0 - 100,000 tax bracket, and therefore the applicable rate would be 20% of the amount = 16,000. An annual taxable income of 180,000 would be under the 150,000 - 200,000 bracket, and therefore the applicable tax rate would be 32,500 on the first 150,000 PLUS 30% on the balance of 30,000 = 9,000; total tax would, therefore, be 32,500 + 9,000 = 41,500.
                        </Typography>

                        <Typography variant="body1" className="Pointsformatting pb-2">
                            <strong>Step 4</strong> - Apply the rebate amount; every ordinary individual is entitled to a rebate (means of reducing tax liability) amount of E8,200 per annum. E.g., if your tax liability is E41,500, the rebate will reduce it to E33,300.
                        </Typography>

                        <Typography variant="body1" className="Pointsformatting pb-2">
                            <strong>Step 5</strong> - Convert annual tax liability to a monthly amount by dividing by 12. E.g., the monthly amount on E33,300 is E2,775, which is the tax that will be deducted in that particular month.
                        </Typography>
                    </div>





                </Box>

                <Typography variant="body1" className="Pointsformatting mb-4">
                    The following are the rates of tax to be levied, in the case of employees, for the year of assessment ending 30th June 2014
                </Typography>
                <p className="Pointsformatting font-bold mt-6"> RATES OF NORMAL TAX FOR INDIVIDUALS FOR 2013/2014</p>

                <Paper elevation={20} sx={{ margin: '1rem auto' }}>
                    <TableContainer >
                        <Table sx={{ border: '0.5px solid grey', '& th, & td': { border: '0.5px solid grey' } }}>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important', textAlign: 'center !important' } }}>
                                    <TableCell>Taxable Income Exceeds </TableCell>
                                    <TableCell>But does not exceed </TableCell>
                                    <TableCell>Rates</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {taxRates.map((row, index) => (
                                    <TableRow key={index} sx={{ '& > *': { textAlign: 'center !important' }, '&:hover': { background: '#F2F2F2' } }}>
                                        <TableCell>
                                            <p>{row.taxableIncomeExceeds}</p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{row.doesNotExceed}</p>
                                        </TableCell>
                                        <TableCell>
                                            <p>{row.rates}</p>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>


                {taxRebateData.map((item, index) => (
                    <Box key={index}>
                        <Typography variant='body1' sx={{ fontWeight: 'bold', pb: '0.3rem' }} className='Pointsformatting'>{item.mainHead}</Typography>
                        {item.description ? <Typography variant='body1' className='Pointsformatting pb-4'>{item.description}</Typography> : null}
                        {item.points ? <ul className='custom-list pb-0 Pointsformatting'>
                            {item.points.map((subpoint, index) => (
                                <div key={index} className='flex gap-1 items-start pb-2'>
                                    <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} className='Pointsformatting' /></span>
                                    <li Pointsformatting className='Pointsformatting'>{subpoint}</li>
                                </div>
                            ))}
                        </ul> : null}
                        {item.note ? <Typography variant='body1' className='Pointsformatting pb-4'>{item.note}</Typography> : null}
                    </Box>
                ))}


            </Box>

            </Box>
            {/*-----------------------Footer---------------------*/}

            <Footer />
        </>
    )
}

export default Paye
