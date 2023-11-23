import { styled, Button } from "@mui/material";
export const ContentDiv = styled("div")(({ theme }) => ({
  width: "75%",
  margin: "0 auto",
  padding: "1rem 0",
  [theme.breakpoints.between("xs", "sm")]: {
    width: "95%",
  },
  [theme.breakpoints.up("md")]: {
    paddingRight: "5rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingRight: "10rem",
  },
  [theme.breakpoints.up("xl")]: {
    paddingRight: "15rem",
  },
}));

export const BlackButton = styled(Button)(({theme})=>({
    backgroundColor:`${theme.palette.black.main} !important`,
    color:theme.palette.white.main,
    borderRadius:"0.5rem",
    padding:"0.4rem 1rem",
    fontWeight:600,
    fontSize:"0.875rem",
    textTransform:"none",
    letterSpacing:"0.09em",
    "&:hover":{
        backgroundColor:`${theme.palette.primary.main} !important`
    }
}))