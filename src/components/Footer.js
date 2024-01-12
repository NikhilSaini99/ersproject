import React from "react";
import { RiMailFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { SiHuawei, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { BsTelephoneFill, BsApple } from "react-icons/bs";
import { Box, Divider, Stack, Typography } from "@mui/material";
import  defaultTheme  from "@/styles/muiTheme";



export default function Footer() {

  const footerArrowStyling = {
    width: {md:'60%',lg:'50%'},
    height: '117px',
    background: '#2f2483',
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      display: {xs:"none", md:"block" , lg:"block", right: '-60px'}, 
      bottom: '0',
      width: '0',
      height: '0',
      borderLeft: '62px solid #2f2483',
      borderTop: '59px solid transparent',
      borderBottom: '59px solid transparent',
    }
  }

  return (
    <>
      <Box className="main"  sx={{
        display: 'flex', gap: '0',
        flexDirection: 'column',
        color: defaultTheme.palette.white.main
      }}>
        <Box sx={{ position: 'relative', bgcolor: defaultTheme.palette.secondary.main }}>
          <Box sx={{ ...footerArrowStyling   }}></Box>
          <Stack sx={{
            position: 'absolute', top: '0', left: '0',
            width: '100%',
            display: 'flex', flexDirection: { xs: 'column', md: 'row', lg: 'row' }, justifyContent: 'space-between', px: { xs: '1.5rem', lg: '3rem' }, pt: '2rem'
            , gap: { xs: '2rem' }
          }}>
            <Box className="leftSide" sx={{
              display: 'flex', flexDirection: 'column', gap: '0.2rem',
              width: { xs: '100%', lg: '60%' }
            }}>
              <Typography variant="h4" sx={{
                fontSize: { xs: '1.5rem', md: '1rem', lg: '1.5rem' }, fontWeight: 'bold'
              }}>
                Connect With Us</Typography>
              <Typography variant="body1" sx={{
                fontSize: { xs: '1rem', md: '0.8rem', lg: '1rem' },
              }}>
                Stay updated with ERS news, data, publications, projects, events and
                opportunities.</Typography>
            </Box>
            <Box className="RightSide" sx={{ display: 'flex', gap: { xs: '0.8rem', lg: '1.5rem' }, pt: '1rem' }}>
              <RiMailFill className="SocialsStyling" />
              <SiTwitter className="SocialsStyling" />
              <IoLogoYoutube className="SocialsStyling" />
              <FaFacebookF className="SocialsStyling" />
              <FiInstagram className="SocialsStyling" />
              <GrLinkedinOption className="SocialsStyling" />
            </Box>
          </Stack>
        </Box>

        {/* About ERS */}
        <Box color='white' bgcolor='#16163C'>
          <Stack direction={'row'} bgcolor='#16163C' sx={{
            position: 'relative',
            top: { xs: '-3.5px', lg: '-2.5px' },
            px: { xs: '1.5rem', lg: '3rem' }, pt: { xs: '0.8rem', lg: '1rem' },
            display: 'flex', flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: '0.8rem', lg: '4rem' }
          }}>
            <Stack direction={'column'} spacing={2} sx={{ width: { xs: '100%', lg: '45.333%' }, }}>
              <Divider sx={{ borderBottomWidth: 2.5, bgcolor: '#f4c203', my: { xs: '0.3rem', lg: '0.8rem' } }} />
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                About ERS</Typography>
              <Typography variant="body1" >
                The Eswatini Revenue Service (ERS) is a semi-autonomous revenue administration agency, established through the Revenue Authority Act No. 1 of 2008. It operates within the broad framework of Government but outside of the civil service.
              </Typography>
              <Divider sx={{ borderBottomWidth: 2.5, bgcolor: '#f4c203', my: { xs: '0.3rem', lg: '0.8rem' } }} />

              {/* appstore section */}

              <div className="flex  gap-5 xs:flex-col md:flex-row ">
                <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
                  <BsApple className="text-4xl" />
                  <div>
                    <div className="text-[10px] text-start">Download on the</div>
                    <div className="xs:text-sm text-lg font-semibold leading-4">
                      App Store
                    </div>
                  </div>
                </button>

                <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
                  <div>
                    <svg viewBox="30 336.7 120.9 129.2" width="28">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      />
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      />
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      />
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-start">GET IT ON</div>
                    <div className="xs:text-sm text-base font-semibold leading-4">
                      Google Play
                    </div>
                  </div>
                </button>

                <button className="flex w-[140px] h-11 rounded-md items-center justify-evenly bg-[black] font-bold">
                  <SiHuawei className="text-4xl text-[#F7394D]" />
                  <div>
                    <div className="text-[10px] text-start">EXPLORE IT ON</div>
                    <div className="xs:text-sm text-lg font-semibold leading-4">
                      AppGallery
                    </div>
                  </div>
                </button>
              </div>

            </Stack>

            <Stack sx={{
              direction: 'flex',
              flexDirection: 'column', gap: '0.5rem', width: { xs: '100%', lg: '35.333%' },
            }}>
              <Divider sx={{ borderBottomWidth: 2.5, bgcolor: '#f4c203', my: { xs: '0.3rem', lg: '0.8rem' } }} />
              <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Address</Typography>
              <Stack direction={'row'} spacing={2}>
                <ImHome3 style={{ fontSize: '1.5rem' }} />
                <Typography variant="body1">
                  Portion 419 of Farm 50, Along MR103
                </Typography>
              </Stack>

              <Stack direction={'row'} spacing={2}>
                <RiMailFill style={{ fontSize: '1.5rem' }} />
                <Typography variant="body1">
                  info@ers.org.sz
                </Typography>
              </Stack>

              <Stack direction={'row'} spacing={2}>
                <BsTelephoneFill style={{ fontSize: '1.5rem' }} />
                <Typography variant="body1">
                  (+268) 2406 4050
                </Typography>
              </Stack>

              <Stack direction={'row'} spacing={2}>
                <BsTelephoneFill style={{ fontSize: '1.5rem' }} />
                <Typography variant="body1">
                  [+268] 2406 4000
                </Typography>
              </Stack>
            </Stack>

            <Stack direction={'column'} spacing={2} sx={{ width: { xs: '100%', lg: '30.333%' }, }}>
              <Divider sx={{ borderBottomWidth: 2.5, bgcolor: '#f4c203', my: { xs: '0.3rem', lg: '0.8rem' } }} />
              <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                Opening Hours</Typography>
              <Stack direction={'row'} spacing={2}>
                <Typography variant="body1" >
                  Mon - Fri
                </Typography>
                <Typography variant="body1" >
                  8am - 5pm
                </Typography>
              </Stack>
              <Stack direction={'row'} spacing={2}>
                <Typography variant="body1">
                  Sat - Sun
                </Typography>
                <Typography variant="body1">
                  Closed
                </Typography>
              </Stack>
            </Stack>


          </Stack>
          {/* last part */}

          <Divider sx={{ borderBottomWidth: 2.5, bgcolor: '#f4c203', my: { xs: '0.8rem', lg: '1.5rem' }, mx: { xs: '1.5rem', lg: '3rem' } }} />

          <Box sx={{
            display: 'flex', flexDirection: 'column', gap: '0.8rem',
            mb: '1rem', px: { xs: '1.5rem', lg: '3rem' }
          }}>

            <Stack sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: '0.5rem', lg: '2.5rem' }, mt: { xs: '0.5rem', lg: '1rem' } }}>
              <Typography variant="body1" alignSelf='center'>
                2023 © Powered by Computronics Systems
              </Typography>
              <Typography variant="body1" alignSelf='center'>
                ERS Contacts
              </Typography>
              <Typography variant="body1" alignSelf='center'>
                Privacy Policy
              </Typography>
              <Typography variant="body1" alignSelf='center'>
                Sitemap
              </Typography>
              <Typography variant="body1" alignSelf='center'>
                Terms of Conditions
              </Typography>
            </Stack>


            <Typography variant="body1" alignSelf='center'>
              2023 © Powered by Computronics Systems
            </Typography>
          </Box>

        </Box>


      </Box>

    </>
  );
}
