import * as React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  ListItem,
  List,
  Container,
  Typography,
  Stack,
  Paper,
  IconButton,
  Avatar,
  ThemeProvider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import theme from "../styles/theme";
const UserAvatar = (props) => (
  <Avatar {...props} sx={{ bgcolor: "primary.main", color: "white" }}>
    U
  </Avatar>
);

const BotAvatar = (props) => (
  <Avatar {...props} sx={{ bgcolor: "success.light", color: "white" }}>
    B
  </Avatar>
);

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef();

  const sendMessage = () => {
    if (input.trim() === "") {
      return;
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);
    axios
      .get(`https://localhost/chatbot?message=${input}/`)
      .then((response) => {
        const output = response.message;
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: output },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching excuse:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I couldn't fetch an excuse." },
        ]);
      });
    setInput("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" gutterBottom>
            Renuar's Chatbot
          </Typography>
          <Paper
            ref={chatContainerRef}
            sx={{
              borderRadius: 1,
              padding: 2,
              minHeight: "450px",
              maxHeight: "450px",
              overflowY: "auto",
              backgroundImage:
                "conic-gradient(from 145deg at 10% 0%, #009688, #3f51b5)",
            }}
          >
            <List>
              {messages.map((message, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent:
                      message.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  {message.sender === "bot" && <BotAvatar />}
                  <Box
                    sx={{
                      borderRadius: 1,
                      padding: 1,
                      px: 2,
                      backgroundColor:
                        message.sender === "user"
                          ? "primary.main"
                          : "success.light",
                      color:
                        message.sender === "user"
                          ? "primary.contrastText"
                          : "success.contrastText",
                      marginLeft: message.sender === "user" ? 1 : 0,
                      marginRight: message.sender === "bot" ? 1 : 0,
                    }}
                  >
                    {message.text}
                  </Box>
                  {message.sender === "user" && <UserAvatar />}
                </ListItem>
              ))}
            </List>
          </Paper>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              color="primary"
            />
            <IconButton
              color="primary"
              aria-label="send message"
              onClick={sendMessage}
            >
              <SendIcon />
            </IconButton>
          </Stack>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
};
