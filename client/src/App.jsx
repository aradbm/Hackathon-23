import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyle, Wrapper } from "./styles/globalStyles";
import { ItemScan } from "./components/ItemScan";
import { Header } from "./components/Header";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <ItemScan />
      <GlobalStyle></GlobalStyle>{" "}
    </ThemeProvider>
  );
}

export default App;
