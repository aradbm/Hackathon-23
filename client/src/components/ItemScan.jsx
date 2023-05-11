import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import SyncIcon from "@mui/icons-material/Sync";
import axios from "axios";

export const ItemScan = () => {
  const [data, setData] = useState([]);
  const [log, setLog] = useState([]);

  const fetchData = (props) => {
    setLog((prevLog) => [{ sent: props, received: "..." }, ...prevLog]);
    // axios.get(`http://localhost:5001/api?id=${props}`).then((response) => {
    //   setData((prevData) => [
    //     { sent: props, received: response.data },
    //     ...prevData,
    //   ]);
    // });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomData = createRandomData();
      fetchData(randomData);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const createRandomData = () => {
    let randomData = Math.floor(Math.random() * 100000000);
    return randomData;
  };

  return (
    <Box>
      <Typography>Every second a icon is being scanned:</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box
          onClick={() => {
            const randomData = createRandomData();
            fetchData(randomData);
          }}
          sx={{
            backgroundColor: "inherit",
            "&:hover": {
              backgroundColor: "inherit",
            },
            "&:focus": {
              backgroundColor: "inherit",
            },
          }}
        >
          <SyncIcon
            sx={{
              fontSize: "10rem",
              animation: "iconPulse 1s infinite alternate",
            }}
          />
        </Box>
      </Box>
      <style>{`
        @keyframes iconPulse {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.2) rotate(360deg);
          }
        }
      `}</style>
      <Box>
        <Typography>Log:</Typography>
        <Box
          sx={{
            maxHeight: "300px",
            overflowY: "scroll",
            border: "2px solid black",
            borderRadius: "10px",
            padding: "5px",
            m: 1,
          }}
        >
          {log.map((item, index) => (
            <Typography key={index}>Sent: {item.sent}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
