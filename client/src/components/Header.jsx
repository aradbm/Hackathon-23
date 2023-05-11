import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

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
        <Typography variant="h5" color="black" noWrap sx={{ flexGrow: 1 }}>
          Stainability with Renuar
        </Typography>
        <Button
          component={Link}
          to="/itemscan"
          sx={{ my: 1, mx: 1.5 }}
          variant="contained"
        >
          Item Scan
        </Button>
        <Button
          component={Link}
          to="/chat"
          sx={{ my: 1, mx: 1.5 }}
          variant="contained"
        >
          Chat
        </Button>
      </Toolbar>
    </AppBar>
  );
};
