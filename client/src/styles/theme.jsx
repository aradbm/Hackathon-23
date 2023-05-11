import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // black
    },
    secondary: {
      main: "#ffffff", // white
    },
    success: {
      main: "#4caf50", // green
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: "#000000", // black
          color: "#ffffff", // white
        },
      },
      defaultProps: {
        sx: {
          my: 1,
          mx: 1.5,
          ":hover": {
            bgcolor: "#4caf50", // green
          },
          border: "2px solid #000000", // black
        },
      },
    },
  },
});

export default theme;
