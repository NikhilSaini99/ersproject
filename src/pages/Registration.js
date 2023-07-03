import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box, Stack, Typography, List, ListItem, ListItemText, Divider } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Banner from "../assets/images/registration.jpg";
import downarrow from '../assets/images/downarrow.svg'
import rightarrow from '../assets/images/rightarrow.svg'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useState } from 'react'



const Registration = () => {
  const [isOpen, setisOpen] = useState(null)

  const handleOpen = (index) => {
    console.log(index)
    console.log(isOpen)
    if (isOpen === index) {
      setisOpen(null);
    }
    else {
      setisOpen(index); // Open the clicked FAQ
    }
  }
  const FaqContainerStyling = {
    maxWidth: '95%',
    margin: '0 auto',
    borderRadius: '20px',
  }

  const accordionStyling = {
    py: '3rem',
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }

  const insideAccordionStyle = {
   
    background: '#FFFFFF',
    /* Buttons/ Color - Default */
    boxShadow: '0px 6px 16px 0px rgba(74, 58, 255, 0.19)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    px: '2rem',
    py: '0.2rem'
  }

  const questionStyling = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '28px',
    fontWeight: '500',
    textTransform:'capitalize',
  }


  const questionandanswer = [
    {
      question: 'Who Should Register?',
      answer: 'The VAT Act requires that any business which supplies goods or services which are not exempt from VAT in Eswatini should apply for VAT registration. VAT registration is compulsory for businesses whose annual taxable turnover exceeds E500 000.Any business with reasonable expectations to reach this amount should also apply to register.National, regional or public institutions (parastatals and municipalities) which make taxable supplies are required to register for VAT even though they do not meet the above mentioned threshold.Businesses supplying only exempt goods and services are not required to register. However, where a business supplies both exempt and taxable services, that business must register if the total turnover of the taxable supplies meets the annual turnover of E500 000.'
    },
    {
      question: 'Voluntary Registration?',
      answer: 'Other businesses whose turnover is below the threshold of E500 000 may apply for registration if they meet the registration requirements and the Commissioner General is satisfied that they are fit and proper to be registered.'
    },
    {
      question: 'What are the resgistration requirements?',
      answer: 'A Fixed place of doing business in Eswatini\nCapacity to keep proper accounting records\nCapability to submit regular and reliable returns.'
    },
    {
      question: 'What attachments should be icluded in the TIN registration form?',
      answer: 'Taxpayers can collect the TIN registration form from the nearest ERS office or download it from here.\nComplete and submit the form with all attachments to any ERS office.\nThe ERS will review the application and inform the taxpayer of the outcome within 30 days. In some cases this may include inspection.\nOnce registered a taxpayer shall be given a registration certificate with a Taxpayer Identification Number (TIN) to be quoted in all dealings with the ERS.'
    },
    {
      question: 'What is the registration process?',
      answer: 'The VAT Act requires that any business which supplies goods or services which are not exempt from VAT in Eswatini should apply for VAT registration. VAT registration is compulsory for businesses whose annual taxable turnover exceeds E500 000.'
    },
    {
      question: 'What are the obligations of a VAT registered business?',
      answer: 'Display registration certificate in a prominent place on the business premises as proof that the business is authorized to collect VAT\nCharge VAT on their taxable supplies with effect from their registration date\nIssue tax invoices for all their supplies\nMaintain and keep accurate accounting records within the country\nSubmit VAT returns with payments to the ERS periodically (i.e. no later than the due dates)\nUpdate registration information whenever there is a need to do so.'
    },
    {
      question: 'Can a business cancel registration?',
      answer: 'A business registered for VAT may apply in writing for the cancellation of registration if that business has ceased making taxable supplies or no longer meets the registration threshold.\nThe Commissioner-General may also cancel the registration of a business if that business:\n\nno longer has a proper and fixed place of business\ndoes not keep proper accounting records\noes not submit regular and reliable tax returns\nis not, in the opinion of the Commissioner-General, a fit and proper person to be registered'
    },
  ]

  return (
    <>
      <Head>
        <title>Resgistration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/*-----------------------Header---------------------*/}

      <Header />
      {/*-----------------------Banner---------------------*/}
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

      <Box sx={{ width: '80%', margin: { xs: '2rem auto', lg: '5rem auto', } }}>

        <Box sx={FaqContainerStyling}>
    
          <Stack sx={accordionStyling}>
          <Typography variant="h1" sx={{mb:'2rem'}}>
          Registration
        </Typography>
            {/* question and arrow*/}
            {questionandanswer.map((item, index) => (
              <Stack key={index} sx={insideAccordionStyle}>
                <Stack sx={questionStyling}>
                  <Typography variant='h6' sx={{ color: '#14142B', fontSize: '1.5rem',}}>{item.question}</Typography>
                  <Box sx={{ cursor: 'pointer', background: 'cover' }} onClick={() => handleOpen(index)}>
                      <Image src={rightarrow} width={0} height={0} alt="arrow" />
                  </Box>
                </Stack>
                {isOpen===index&&<Divider sx={{borderColor:'rgba(0,0,0,0.5)'}}/>}
                {/* answer */}
                <Typography variant='body1' sx={{
                  fontSize: '1.1rem',
                  lineHeight: '30px', color: '#6F6C90', pb:'2rem',
                  display: isOpen === index ? 'block' : 'none'
                }}>{item.answer}</Typography>
              </Stack>
            ))}
            {/* ref={(e)=>myRef.current[index]=e} */}
          </Stack>
        </Box>

      </Box>

      {/*-----------------------Footer---------------------*/}
      <Footer />

    </>
  )
}

export default Registration
