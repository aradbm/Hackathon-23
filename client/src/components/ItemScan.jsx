import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Axios from "axios";
import { useState } from "react";

export const ItemScan = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const fetchData = (props) => {
    Axios.get(`http://localhost:5001/api?id=${props}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <Box sx={{ m: 2 }}>
      <Typography>Enter 8 digit product ID:</Typography>
      <TextField
        id="outlined-basic"
        label="12345678"
        variant="outlined"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={() => {
          fetchData(input);
        }}
      >
        Scan
      </Button>
      <Typography>{data}</Typography>
      <Typography>{input}</Typography>
    </Box>
  );
};
