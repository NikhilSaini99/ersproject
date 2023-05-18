import React, { useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../assets/images/customs.jpg";

const Feedback = () => {

  const [feedbackType, setFeedbackType] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      feedbackType: feedbackType,
      fullName: fullName,
      phoneNo: phoneNo,
      email: email,
      comments: comments
    })
  }

  function handleFeedbackType(e) {
    setFeedbackType(e.target.value)
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
      {/*-----------------------Banner---------------------*/}
      <Box>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </Box>


      {/* Feedback Form */}
      <Typography variant='h1' sx={{ fontSize: '1.5rem', fontWeight: 'bold', my: '2rem', textAlign: 'center' }}>Feedback Form</Typography>
      <Box sx={{ width: { xs: '96%', md: '50%', xl: '65%' }, margin: '5rem auto' }} component='form'
        onSubmit={handleSubmit}>



        <Stack sx={{ maxWidth: '600px', display: 'flex', justifyContent: 'center', margin: '0 auto', gap: '0.4rem' }}>

          <FormControl sx={{ width: { xs: 'fullWidth', md: '65%', xl: '40%', alignSelf: 'center' } }}>
            <InputLabel id="Feedback-type">Feedback Type</InputLabel>
            <Select
              labelId='Feedback-type'
              id="Feedback-type"
              value={feedbackType}
              onChange={handleFeedbackType}
              label="Feedback-type">
              <MenuItem value={'Compliment'}>Compliment</MenuItem>
              <MenuItem value={'Complaint'}>Complaint</MenuItem>
              <MenuItem value={'Suggestion'}>Suggestion</MenuItem>
            </Select>
          </FormControl>

          <InputLabel htmlFor="full-Name">Full Name</InputLabel>
          <TextField variant='outlined' size='medium' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <InputLabel htmlFor="full-Name">Phone</InputLabel>
          <TextField variant='outlined' size='medium' type='number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
          <InputLabel htmlFor="full-Name">Email Address</InputLabel>
          <TextField variant='outlined' size='medium' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputLabel htmlFor="full-Name">Comments</InputLabel>
          <TextField variant='outlined' size='medium' type='text' multiline={true} minRows={5} value={comments} onChange={(e) => setComments(e.target.value)} />
          <Button type="submit" variant='contained' color='primary' sx={{ background: '#f4c203 !important', color: 'black', alignSelf: 'start', width: '15rem' }}>Send</Button>
        </Stack>
      </Box>
      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  )
}

export default Feedback
