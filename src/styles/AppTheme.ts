import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    allVariants: {
      fontFamily: "Montserrat",
      color: "#1c1c1c",
    },
    h1: {
      fontSize: "32px",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    button: {
      fontSize: "16px",
      fontWeight: "500",
    },
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "16px",
      fontFamily: "Hind",
    },
    subtitle1: {
      fontSize: "14px",
      fontFamily: "Hind",
    },
    subtitle2: {
      fontSize: "14px",
      fontFamily: "Hind",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#143810",
      light: "#143810",
      dark: "#B5C7B5",
    },
    secondary: {
      main: "#F7C644",
      light: "#F7C64440",
      dark: "#66521D",
    },
  },
});
