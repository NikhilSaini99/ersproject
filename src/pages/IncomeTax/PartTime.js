import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Banner from "../../assets/images/Part_Time_Employees.webp";
import bgimg from "../../assets/images/bg-2.png";
import { ContentDiv } from '@/styles/globalStyle';
import PageLayout from '../PagesLayout/Layout';

const PartTime = () => {
    return (
        <>
           <PageLayout title={"Eswatini Income Tax"} bannerImg={Banner} contentBackground={bgimg}>
            <ContentDiv>
            <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Part Time Employees
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
                {/* <Typography variant="h1">
                    Part Time Employees</Typography> */}


                <div className="art-article" style={{ textAlign: 'justify', color: '#000000' }}>
                    <Typography variant='h2' >DEFINITION OF PART TIME EMPLOYEES</Typography>

                    <Typography variant='body1' className='Pointsformatting'>
                        The expression part-time employee, for the purposes of employee&apos;s tax, is defined to mean a person who is not in an employer&apos;s full-time employ and who is not remunerated as a full-time employee for any services rendered. The expression part-time employee excludes unskilled labourers whose remuneration does not exceed E3 416.67 on a monthly basis.<br /><br />
                        Part-time remuneration includes the following:<br />
                        (a) Casual payments for irregular services rendered,<br />
                        (b) Fees paid to part-time lecturers,<br />
                        (c) Honoraria paid to office-bearers of bodies, clubs, societies, etc.,<br />
                        (d) Remuneration paid for occasional services rendered, and<br />
                        (e) Any payment that cannot be regarded as full-time remuneration.<br /><br />
                        <Typography variant='h2' >APPLICABLE RATES FOR PART TIME EMPLOYEES</Typography>
                    </Typography>

                    <Typography variant='body1' className='Pointsformatting'>
                        The rates of withholding tax prescribed hereunder shall apply in the determination of employee’s tax to be deducted on any amount payable by way of remuneration to a part-time employee in any year of assessment
                    </Typography>
                </div>
                <Paper elevation={20} sx={{ width: '100%', margin: '2rem auto' }}>
                    <TableContainer>
                        <Table sx={{ border: '0.5px solid grey', '& th, & td': { border: '0.5px solid grey' } }}>
                            <TableHead>
                                <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important', fontSize: '1rem !important' } }}>
                                    <TableCell colSpan={2} align="center"><strong>REMUNERATION</strong></TableCell>
                                    <TableCell rowSpan={2} align="center"><strong>TAX RATE</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableHead>
                                <TableRow sx={{'&:hover': {
                      background: '#F2F2F2'
                    }}}>
                                    <TableCell align="center"><strong>Exceeds</strong></TableCell>
                                    <TableCell align="center"><strong>Does not exceed</strong></TableCell>

                                </TableRow>
                            </TableHead> 
                            <TableBody>
                                <TableRow sx={{'&:hover': {
                      background: '#F2F2F2'
                    }}}>
                                    <TableCell align="center">&nbsp;&nbsp;&nbsp;0</TableCell>
                                    <TableCell align="center">&nbsp;&nbsp;&nbsp;8,333</TableCell>
                                    <TableCell align="center">20%</TableCell>
                                </TableRow>
                                <TableRow  sx={{'&:hover': {
                      background: '#F2F2F2'
                    }}}>
                                    <TableCell align="center">8,333</TableCell>
                                    <TableCell align="center">&nbsp;&nbsp;12,500</TableCell>
                                    <TableCell align="center">25%</TableCell>
                                </TableRow>
                                <TableRow  sx={{'&:hover': {
                      background: '#F2F2F2'
                    }}}>
                                    <TableCell align="center">12,500</TableCell>
                                    <TableCell align="center">&nbsp;&nbsp;16,666</TableCell>
                                    <TableCell align="center">30%</TableCell>
                                </TableRow>
                                <TableRow  sx={{'&:hover': {
                      background: '#F2F2F2'
                    }}}>
                                    <TableCell align="center">16,666</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="center">33%</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Typography variant='body1' sx={{ fontWeight: 'bold', my: '1rem' }} className='Pointsformatting'>
                    NOTE
                </Typography>
                <Typography variant='body1' sx={{pb:'2rem'}} className='Pointsformatting'>
                    When applying these rates, the rebates should not be taken into account. Part-time employees are still required to file returns of income at the end of a year of assessment, the Final Deduction System notwithstanding. Tax rebates will be granted on assessment for these cases. Employees’ tax certificates (PAYE 5) must be issued to such employees within the stipulated period in accordance with the requirements of paragraph 13 of the Second Schedule.
                </Typography>


            </ContentDiv>
            </PageLayout>
        </>
    )
}

export default PartTime
