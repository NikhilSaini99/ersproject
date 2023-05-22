import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'ui-sans-serif',
        'ui-sans-serif',
         'BlinkMacSystemFont', 
         "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ].join(','),
    },});


  
  return<ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  
}