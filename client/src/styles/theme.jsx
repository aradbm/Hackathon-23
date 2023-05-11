import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#80cbc4",
      main: "#4db6ac",
      dark: "#00897b",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: "lightblue",
        },
      },
      defaultProps: {
        sx: {
          my: 1,
          mx: 1.5,
          ":hover": {
            bgcolor: "secondary.light",
          },
          border: "2px black solid",
        },
      },
    },
  },
});

export default theme;
