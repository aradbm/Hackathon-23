import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
} from "@mui/material";
import { FaRecycle } from "react-icons/fa";
import theme from "../styles/theme";
export const Header = () => {
  // when pressing the button, if I'm in the ItemScan page, it will redirect me to the chat page and vice versa
  const handleButtonClick = () => {
    if (window.location.pathname === "/itemscan") {
      window.location.pathname = "/chat";
    } else {
      window.location.pathname = "/itemscan";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ backgroundColor: "success.main" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.5rem",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            IFlow Analytics
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FaRecycle />}
            onClick={handleButtonClick}
          >
            {window.location.pathname === "/itemscan" ? "Chat" : "Item Scan"}
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
