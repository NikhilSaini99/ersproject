import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'material-icons/iconfont/material-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {

  //initializing animation on scroll library
  // AOS.init();

    useEffect(()=>{
      AOS.init({duration:1000});
    },[])

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Arial Regular',
        'BlinkMacSystemFont',
        "Segoe UI", 'Roboto', "Helvetica Neue",  "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ].join(','),
      h1: {
        color: '#2F248F',
        fontSize: '2.5rem',
        fontWeight: 'bold',
      }
    },
  });



  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>

}