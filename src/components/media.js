import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import facebbook from "../assets/images/facebookimg.png";
import Twitter from "../assets/images/twitter-page.jpg";
import Instagram from "../assets/images/insta-page.jpg";
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Box, Button, Divider, Grid, IconButton, Modal, Paper, SpeedDial, SpeedDialAction, Stack, Typography } from "@mui/material";

function Media() {

  return (
    <>
            <section data-aos="fade-up-left">
        <div className="bg-zinc-300  bg-opacity-50 md:px-12 px-28 py-16  ">
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            <div>
              <h1 className="text-3xl font-medium text-mainColor">Facebook</h1>
              <div className=" border w-24 border-yellowish mt-1"></div>
              {/* <iframe
                src="https://www.facebook.com/photo.php?fbid=652502226924329&set=a.361976332643588&type=3&ref=embed_page"
                width={"344"}
                height={"450"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem',
                  background:'white',
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="my-10"
              ></iframe> */}
              <Image
                src={facebbook}
                alt=""
                className="my-10"
                width={"344"}
                height={"450px"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem',
                  minWidth: '344px',
                  minHeight: '450px',
                  background:'white',
                }}
              />
              <Link
                href="https://www.facebook.com/EswatiniRevenueService"
                target="_blank"
              >
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                  Follow Us
                </button>
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-medium text-mainColor">Twitter</h1>
              <div className="border w-[70px] border-yellowish mt-1"></div>
             
              <Image
                src={Twitter}
                alt=""
                className="my-10"
                width={"344"}
                height={"450px"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem',
                  minWidth: '344px',
                  minHeight: '450px',
                  background:'white',
                }}
              />
              <Link href="https://twitter.com/AECOM" target="_blank">
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                Follow Us
                </button>
              </Link>
            </div>

            <div>
              <h1 className="text-3xl font-medium text-mainColor">Instagram</h1>
              <div className="border w-24 border-yellowish mt-1"></div>
           
              <Image
                src={Instagram}
                alt=""
                className="my-10"
                width={"344"}
                height={"450px"}
                style={{
                  borderWidth: "2px",
                  borderColor: "#DADAEB",
                  cursor: "pointer",
                  borderRadius: '12px',
                  padding: '0.5rem',
                  minWidth: '344px',
                  minHeight: '450px',
                  background:'white',
                }}
              />
              <Link href="https://www.instagram.com/aecom" target="_blank">
                <button className="text-white hover:bg-opacity-75 bg-black text-xs leading-3 tracking-wider font-bold border hover:border-black rounded-lg py-3 px-5 flex items-center box">
                Follow Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NewsCard({ url, img, title, date, description }) {
  const [cardHover, setCardHover] = useState(false)
  return (
    <>
           {/* NEW ONE BELOW THIS */}

      <Paper elevation={12} sx={{ margin: { xs: '0px 5rem 4rem 6rem', md: '0px 5rem 4rem 2rem', lg: '0px 5rem 4rem 6rem', xl: '0px 5rem 4rem 15rem' }, width: { xs: '85%', md: '90%', lg: '78%', xl: '70%' } }}>
        <Stack sx={{ flexDirection: 'column', overflow: 'hidden' }}>
          <Box sx={{ position: 'relative' }}>
            <Box sx={{
              transition: '0.5s',
              ...(cardHover && {
                transform: 'scale(1.1)',
                cursor: 'pointer',
                transition: '0.5s',
                filter: 'brightness(60%)'
              }),

            }} onMouseOver={() => setCardHover(true)}
              onMouseOut={() => setCardHover(false)}>
              <Image src={img} alt={title} style={{ width: '100%', height: '100%', display: 'block', }} />
            </Box>
            <Button variant="contained" style={{ background: '#f4c402', color: 'black' }} sx={{
              textTransform: 'capitalize',
              position: 'absolute', bottom: '3rem', right: '1rem', '&:hover': { background: '#f4c402' },
              opacity: '0',
              fontWeight: 'bold',
              ...(cardHover && {
                opacity: '100%',
              })
            }} onMouseOver={() => setCardHover(true)}>Read More</Button>
          </Box>
          <Stack sx={{ flexDirection: 'column', p: '3rem', gap: '0.8rem', pb: '2rem !important' }}>
            <Typography variant="h4" sx={{
              transition: '0.5s',
              "&:hover": {
                transition: '0.5s',
                textDecoration: 'underline', color: '#f4c402'
              }
            }}>
              <Link href={`${url}`}>{title}</Link>
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'grey' }}>
              {date}
            </Typography>
            <Typography variant="body1" sx={{ color: 'grey' }}>
              {description}
            </Typography>
            <Divider />

            <Stack direction={'row'} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Avatar />
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', fontSize: '14px' }}>BY ADMIN</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>

                {/* <Divider orientation="vertical" flexItem /> */}

                <SpeedDial ariaLabel="Share_Speed_dial" direction="left" sx={{
                  '&:hover': {
                    '& .MuiButtonBase-root': {
                      backgroundColor: 'white',
                    }
                  },
                  '& .MuiButtonBase-root':{
                    backgroundColor: 'white'
                  }
                }}
                  icon={<ShareIcon sx={{ color: 'grey','& .MuiButtonBase-root':{
                    backgroundColor: 'white'
                  } }} />}>
                  <SpeedDialAction
                    icon={<FacebookIcon />}
                    tooltipTitle="Facebook"
                  ></SpeedDialAction>
                  <SpeedDialAction
                    icon={<TwitterIcon />}
                    tooltipTitle="Twitter"
                  ></SpeedDialAction>
                  <SpeedDialAction
                    icon={<LinkedInIcon />}
                    tooltipTitle="Linkedin"
                  ></SpeedDialAction>
                </SpeedDial>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

function GallaryCard({ img, group, date, description, checking, item }) {
  const [imgIndex, setimgIndex] = useState(0)
  const [imageModal, setimageModal] = useState(false)
  function handleImageOpen(item) {
    setimageModal(true);
    setimgIndex(item)
  }

  function handlePreviousImg() {

    setimgIndex(imgIndex - 1)

    if (imgIndex < 1) {
      setimgIndex(checking.length - 1)
    }
  }

  function handleNextImg() {

    setimgIndex(imgIndex + 1)
    if (imgIndex >= checking.length - 1) {
      setimgIndex(0)
    }
  }

  const handleClose = () => setimageModal(false);
  return (
    <>
      <div className="flex flex-col justify-between relative group cursor-pointer ">
        <div className="overflow-hidden" onClick={() => handleImageOpen(item)}>
          <Image
            src={img}
            alt=""
            className="h-80 scale-100 group-hover:scale-110 ease-in-out duration-500 group-hover:brightness-50 object-cover"
          />

        </div>

        <div className="absolute opacity-0 group-hover:opacity-100 ease-in duration-500  bottom-0 text-center w-full">
          <h3 className="text-lg text-white font-medium mx-4">
            {date}
          </h3>
          <div className="flex flex-col gap-2 px-6 pt-10 pb-4 text-white bg-mainColor">
            <h1 className="text-[17px] leading-[22px] tracking-wide font-bold">{group}</h1>
            <h2 className="text-sm leading-5 tracking-normal font-normal text-center">{description.substring(0, 18)}</h2>
          </div>
        </div>
      </div>
      <Modal open={imageModal} onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{}}
      >
        <Box sx={{
          width: { xs: '96%', lg: '70%' }, margin: '0 auto', position: 'relative', height: '80%', display: 'flex', top: '10%',
          border: 'none'
        }}>
          <IconButton sx={{ position: 'absolute', left: '0', top: '50%' }} onClick={handlePreviousImg}>
            <ArrowBackIosIcon sx={{ fontSize: '3rem', color: '#f4c402' }} />
          </IconButton>
          <Image src={checking[imgIndex].img.src} alt="" width={`${checking[imgIndex].img.width}`} height={`${checking[imgIndex].img.height}`}
            style={{
              justifyContent: 'center', alignContent: 'center', objectFit: 'cover', width: '100%', height: 'auto', transition: 'opacity 0.5s ease-in-out',
              display: 'block', borderRadius: '12px',
            }} />
          <IconButton sx={{ position: 'absolute', right: '0', top: '50%' }} onClick={handleNextImg}>
            <ArrowForwardIosIcon sx={{ fontSize: '3rem', color: '#f4c402' }} />
          </IconButton>
        </Box>

      </Modal>
    </>
  );
}

export { Media, NewsCard, GallaryCard };
