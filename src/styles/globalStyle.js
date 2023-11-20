import { Box, styled, useTheme } from "@mui/material";
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
