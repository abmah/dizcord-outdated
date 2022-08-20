const express = require("express");
const app = express();
require("dotenv").config();
const messages = require("./routes/messages");
const connectDB = require("./db/connect");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.use("/chat", messages);

app.get("/", (req, res) => {
  console.log("user hit the server");
  res.send('<h1>CHAT APP</h1><a href="/chat">start chatting :)</a>');
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("server is live");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
