import { createMuiTheme, ThemeOptions } from "@material-ui/core";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#f8aa3a",
    },
    secondary: {
      main: "#b8574c",
    },
  },
  typography: {
    fontFamily: "Lato, Arial, sans-serif",
    h1: {
      fontSize: 48,
      marginTop: "16px",
    },
    h2: {
      fontSize: 36,
      marginTop: "8px",
    },
    h3: {
      fontSize: 28,
      marginTop: "8px",
    },
  },
  shape: {
    borderRadius: 16,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};

export const theme = createMuiTheme(themeOptions);
