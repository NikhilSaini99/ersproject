import { useState } from 'react';
import React from 'react'
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography, Paper } from '@mui/material';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import feedbackimg from '../assets/images/pinkbg.png'
const Calculator = () => {
    const [calculationType, setCalculationType] = useState('Individual');
    const [period, setPeriod] = useState('Monthly');
    const [basicSalary, setBasicSalary] = useState('');
    const [overtime, setOvertime] = useState('');
    const [bonuses, setBonuses] = useState('');
    const [benefits, setBenefits] = useState('');
    const [allowances, setAllowances] = useState('');
    const [deductions, setDeductions] = useState('');
    const [medicalAid, setMedicalAid] = useState('');
    const [medicalAidContribution, setMedicalAidContribution] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values using the state variables
        console.log({
            calculationType,
            period,
            basicSalary,
            overtime,
            bonuses,
            benefits,
            allowances,
            deductions,
            medicalAid,
            medicalAidContribution,
        });
        console.log(typeof basicSalary)
    };

    const isPositiveNumber = (value) => {
        return value > 0;
    };

    return (
        <>
            <Head>
                <title>Calculator</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.png" />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
            </Head>

            {/*-----------------------Header---------------------*/}

            <Header />

            {/*-----------------------Banner---------------------*/}
          

            <Box sx={{ position: 'relative', backgroundImage: `url(${feedbackimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', py:'5rem' }}>
          <Typography variant='h1' sx={{ fontSize: '2rem', fontWeight: 'bold', margin: { xs: '0.9rem', md: '1rem', lg: '1.5rem', textAlign: 'center', } }}>Tax Calculator</Typography>
                {/* <Image src={bgImg} width={'100%'} height={'100%'} alt="bg" style={{ position: 'absolute', top: '0', left: '0', width: '100%', objectFit: 'cover', opacity: '0.4', height: '950px' }}
                    sizes='100vw'
                /> */}
                <Box sx={{ position: 'relative', maxWidth: { xs: '550px', md: '850px', lg: '800px' }, width: { xs: '95%', md: '70%', lg: '80%', xl: '65%' }, margin: '0 auto' }}>
                <Paper elevation={20} sx={{ maxWidth: '800px', borderRadius: '5%', margin: '0 auto' }}>
                  
                    {/* <Paper elevation={10} sx={{opacity:'0.8'}}> */}
                    <form onSubmit={handleSubmit} className='calculatorFormStyling'>
                        <FormControl fullWidth sx={{
                            marginBottom: '1rem', '& .MuiInputLabel-root': {
                                top: '-8px', left: '-14px'
                            }
                        }}>
                            <InputLabel>Type of Calculation</InputLabel>
                            <Select value={calculationType} onChange={e => setCalculationType(e.target.value)}>
                                <MenuItem value="Individual">Individual</MenuItem>
                                <MenuItem value="Company">Company</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{
                            marginBottom: '1rem', '& .MuiInputLabel-root': {
                                top: '-8px', left: '-14px'
                            }
                        }}>
                            <InputLabel>Period</InputLabel>
                            <Select value={period} onChange={e => setPeriod(e.target.value)}>
                                <MenuItem value="Monthly">Monthly</MenuItem>
                                <MenuItem value="Yearly">Yearly</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth

                            label="Basic Salary"
                            type="number"
                            value={basicSalary}
                            onChange={(e) => setBasicSalary(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />

                        <TextField
                            fullWidth
                            label="Overtime"
                            type="number"
                            value={overtime}
                            onChange={(e) => setOvertime(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />

                        <TextField
                            fullWidth
                            label="Bonuses"
                            type="number"
                            value={bonuses}
                            onChange={(e) => setBonuses(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />

                        <TextField
                            fullWidth
                            label="Benefits"
                            type="number"
                            value={benefits}
                            onChange={(e) => setBenefits(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />

                        <TextField
                            fullWidth
                            label="Allowances"
                            type="number"
                            value={allowances}
                            onChange={(e) => setAllowances(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />

                        <TextField
                            fullWidth
                            label="Deductions"
                            type="number"
                            value={deductions}
                            onChange={(e) => setDeductions(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            fullWidth
                            label="MedicalAid"
                            type="number"
                            value={medicalAid}
                            onChange={(e) => setMedicalAid(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />
                        <TextField
                            fullWidth
                            label="Medical Aid % Contribution"
                            type="number"
                            value={medicalAidContribution}
                            onChange={(e) => setMedicalAidContribution(+e.target.value)}
                            sx={{ marginBottom: '1rem' }}
                        />
                        <Button type='submit' variant='contained' sx={{ background: '#2f2483 !important', p: '1rem', borderRadius: '5px', gridColumn: '1/-1', placeSelf: 'center',width: '10rem' }}>Calculate</Button>
                    </form>
                    </Paper>
                </Box>
            </Box>
            {/*-----------------------Footer---------------------*/}
            <Footer />
        </>
    )
}

export default Calculator
