import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f44336",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter",
    // fontFamily: 'Poppins',
  },
});
