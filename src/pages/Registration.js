import { Box, Divider, Stack, Typography } from '@mui/material'

import Banner from "../assets/images/Registration.jpeg"
import { ContentDiv } from '@/styles/globalStyle'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import PageLayout from './PagesLayout/Layout'
import React from 'react'
import bgimg from "../assets/images/bg-2.png";
import rightarrow from '../assets/images/rightarrow.svg'
import { useState } from 'react'

const Registration = () => {
  const [isOpen, setisOpen] = useState(null)

  const handleOpen = (index) => {
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
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }

  const insideAccordionStyle = {

    background: '#FFFFFF',
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
    textTransform: 'capitalize',
  }


  const questionandanswer = [
    {
      question: 'Who Should Register?',
      answer: 'The VAT Act requires that any business which supplies goods or services which are not exempt from VAT in Eswatini should apply for VAT registration. VAT registration is compulsory for businesses whose annual taxable turnover exceeds E500 000. Any business with reasonable expectations to reach this amount should also apply to register. National, regional or public institutions (parastatals and municipalities) which make taxable supplies are required to register for VAT even though they do not meet the above mentioned threshold. Businesses supplying only exempt goods and services are not required to register. However, where a business supplies both exempt and taxable services, that business must register if the total turnover of the taxable supplies meets the annual turnover of E500 000.'
    },
    {
      question: 'Voluntary Registration?',
      answer: 'Other businesses whose turnover is below the threshold of E500 000 may apply for registration if they meet the registration requirements and the Commissioner General is satisfied that they are fit and proper to be registered.'
    },
    {
      question: 'What Are The Registration Requirements?',
      answer: 'A fixed place of doing business in Eswatini. \n Capacity to keep proper accounting records. \n Capability to submit regular and reliable returns.'
    },
    {
      question: 'What Attachments Should Be Included In The TIN Registration Form?',
      answer: 'Certified copy of a Certificate of Incorporation (for companies only). Certified copy of Form J (for companies only). Certified copy of Power of Attorney (where applicable). Certified copy of personal identity document (of the Public Officer). Certified copy of partnership deed (if the business is a partnership). Deed of trust (where applicable). Deed of sale (if it is a takeover). Constitution (Only for NGOs and welfare organizations). Certified copy of Trading License'
    },
    {
      question: 'What is the registration process?',
      answer: 'Taxpayers can collect the TIN registration form from the nearest ERS office or download it from here. Complete and submit the form with all attachments to any ERS office. The ERS will review the application and inform the taxpayer of the outcome within 30 days. In some cases, this may include inspection. Once registered a taxpayer shall be given a registration certificate with a Taxpayer Identification Number (TIN) to be quoted in all dealings with the ERS.'
    },
    {
      question: 'What are the obligations of a VAT registered business?',
      answer: 'Display registration certificate in a prominent place on the business premises as proof that the business is authorized to collect VAT. \nCharge VAT on their taxable supplies with effect from their registration date. \nIssue tax invoices for all their supplies. \nMaintain and keep accurate accounting records within the country. \nSubmit VAT returns with payments to the ERS periodically (i.e. no later than the due dates). \nUpdate registration information whenever there is a need to do so.'
    },
    {
      question: 'Can a business cancel registration?',
      answer: 'A business registered for VAT may apply in writing for the cancellation of registration if that business has ceased making taxable supplies or no longer meets the registration threshold. \nThe Commissioner-General may also cancel the registration of a business if that business. \nNo longer has a proper and fixed place of business \ndoes not keep proper accounting records\ndoes not submit regular and reliable tax returns\nis not, in the opinion of the Commissioner-General, a fit and proper person to be registered'
    },
  ]

  return (
    <>
    <PageLayout title={"Registration"} bannerImg={Banner} contentBackground={bgimg}>
            {/* question and arrow*/}
         <ContentDiv>
        <Box sx={FaqContainerStyling}>

          <Stack sx={accordionStyling}>
          <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Registration
                            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>
            {/* question and arrow*/}
            {questionandanswer.map((item, index) => (
              <Stack key={index} sx={insideAccordionStyle}>
                <Stack sx={questionStyling}>
                  <Typography variant='h6' sx={{ color: '#14142B', fontSize: '1.5rem', }}>{item.question}</Typography>
                  <Box sx={{ cursor: 'pointer', background: 'cover' }} onClick={() => handleOpen(index)}>
                    <Image src={rightarrow} width={0} height={0} alt="arrow" />
                  </Box>
                </Stack>
                {isOpen === index && <Divider sx={{ borderColor: 'rgba(0,0,0,0.5)' }} />}
                {/* answer */}
                <Typography variant='body1' sx={{
                  fontSize: '1.1rem',
                  lineHeight: '30px', color: 'rgba(0,0,0,0.8)', pb: '2rem',
                  display: isOpen === index ? 'block' : 'none'
                }}>{item.answer}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

      </ContentDiv>
      </PageLayout>
    </>
  )
}

export default Registration
