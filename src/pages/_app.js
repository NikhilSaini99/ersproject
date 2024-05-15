import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import "aos/dist/aos.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import AOS from "aos";
import  defaultTheme  from "../styles/muiTheme";
import { useEffect } from "react";
import ChatboxMock from "@/components/Chatbox/ChatboxMock";

export default function App({ Component, pageProps }) {

//  useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "http://102.36.181.16:5500/";
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
      <ChatboxMock/>
    </ThemeProvider>
  );
}
