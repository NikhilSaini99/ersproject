import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import "aos/dist/aos.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AOS from "aos";
import  defaultTheme  from "../styles/muiTheme";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

 useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://172.30.200.21:5500/dist/chat-bot.bundle.js";
    script.type = "module"; // Add type module
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
