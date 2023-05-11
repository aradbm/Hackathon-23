import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyle, Wrapper } from "./styles/globalStyles";
import { ItemScan } from "./components/ItemScan";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chat } from "./components/Chat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" element={<ItemScan />} />
            <Route path="/itemscan" element={<ItemScan />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </Wrapper>
      <ItemScan />
      <GlobalStyle></GlobalStyle>{" "}
    </ThemeProvider>
  );
}

export default App;
