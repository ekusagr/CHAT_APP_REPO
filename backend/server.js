const express = require("express");
const chats = require("./data/chatData");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running.....");
});

app.get("/app/chats/:id", (req, res) => {
  const chat = chats.find((n) => req.params.id === n._id);
  if (chat) {
    res.json(chat);
  } else {
    res.send("No data found");
  }
});

app.get("/app/chats", (req, res) => {
  res.json(chats);
});

app.listen(PORT, console.log("Server running"));
