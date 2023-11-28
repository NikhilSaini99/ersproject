import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "material-icons/iconfont/material-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import  defaultTheme  from "../styles/muiTheme";
export default function App({ Component, pageProps }) {
  //initializing animation on scroll library
  // AOS.init();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
