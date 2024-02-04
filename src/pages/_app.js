import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "material-icons/iconfont/material-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import  defaultTheme  from "../styles/muiTheme";
export default function App({ Component, pageProps }) {

//  useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "http://102.36.181.13:5500/dist/chat-bot.bundle.js";
//     script.type = "module"; // Add type module
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
