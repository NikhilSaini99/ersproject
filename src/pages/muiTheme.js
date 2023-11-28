import {createTheme } from "@mui/material";


const paletteColors = {
    primary: {
      main:"#2F2483",
      light:"#4634cf"  
    },
    secondary:{
        main:"#f4c402",
        light:""
    },
    WarmGray:{
        main:"#F7F7FA",
        light:"#F3F4F6",
        dark:"#E5E7EB"
    },
    white:{
        main:"#FFFFFF"
    },
    black:{
        main:"#000000"
    },
}

export const defaultTheme = createTheme({
    typography: {
        fontFamily: [
          "Arial Regular",
          "Arial Black",
          "Arial Bold",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ].join(","),
      },
      palette: {
        ...paletteColors
    }
});

defaultTheme.typography.h1 = {
    fontSize: "2.5rem",
    color: defaultTheme.palette.primary.main,
    fontFamily: "Arial Regular",
    letterSpacing:"0.025em",
    fontWeight: "bold",
    padding: "2rem 0rem",
}

defaultTheme.typography.h2 = {
    fontSize: "24px",
    fontFamily:"Arial Regular",
    letterSpacing:"0",
    fontWeight: "700",
    paddingBottom: "0.5rem"
}

defaultTheme.typography.body1 = {
    fontSize: "20px",
    lineHeight: 1.8,
    fontFamily: "Arial Regular"
}

defaultTheme.typography.body2 = {
    fontSize: "16px",
    fontFamily:"Arial Regular"
}

export default defaultTheme;