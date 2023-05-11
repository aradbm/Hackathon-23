import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        bgcolor: "primary.main",
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h3" color="black" noWrap sx={{ flexGrow: 1 }}>
          Stainability with Renuar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
