import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { FaRecycle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <AppBar position="static" sx={{ backgroundColor: "#0f4c81" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Ariel, Helvetica, sans-serif",
            color: "#fff",
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
  );
};
