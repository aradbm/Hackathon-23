import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Axios from "axios";
import { useState } from "react";

export const ItemScan = () => {
  const [data, setData] = useState("");
  const fetchData = (props) => {
    Axios.get(`http://localhost:5001/api/${props}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <Box sx={{ m: 2 }}>
      <Typography>Enter 8 digit product ID:</Typography>
      <TextField id="outlined-basic" label="12345678" variant="outlined" />

      <Button
        variant="contained"
        onClick={() => {
          fetchData();
        }}
      >
        Scan
      </Button>
      <Typography>{data}</Typography>
    </Box>
  );
};
