import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'material-icons/iconfont/material-icons.css';
export default function App({ Component, pageProps }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'ui-sans-serif',
        'ui-sans-serif',
         'BlinkMacSystemFont', 
         "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      ].join(','),
      h1:{
        color:'#2F248F',
        fontSize:'2.5rem',
        fontWeight:'bold'
      }
    },});


  
  return<ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  
}