const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
<<<<<<< HEAD
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

app.use(cors());
app.use(express.json());

=======
const userRoutes = require("./routes/userRoutes");
const msgRoute = require("./routes/msgRoutes");

// Initialize App with express
const app = express();
// integrate socket.io
const socket = require("socket.io");
require("dotenv").config();

// use required Routes
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", msgRoute);

// Mongodb connection
>>>>>>> 4dcd32c (Added new files and folders)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
<<<<<<< HEAD
    console.log("DB Connection Successful");
=======
    console.log("Db Connection Successfull");
>>>>>>> 4dcd32c (Added new files and folders)
  })
  .catch((err) => {
    console.log(err.message);
  });

<<<<<<< HEAD
app.get("/ping", (_req, res) => {
  return res.json({ msg: "Ping Successful" });
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
=======
// Set and render server port
const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

// socket io initialize
const io = socket(server, {
  cors: {
    origin: process.env.CLIENT_URL,
>>>>>>> 4dcd32c (Added new files and folders)
    credentials: true,
  },
});

<<<<<<< HEAD
global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
=======
// new users map
global.onlineUsers = new Map();

// Socket IO Logic
io.on("connection", (socket) => {
  global.chatSocket = socket;
  // Add user
>>>>>>> 4dcd32c (Added new files and folders)
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

<<<<<<< HEAD
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.msg);
=======
  // Send message
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);

    // check message recieved
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
>>>>>>> 4dcd32c (Added new files and folders)
    }
  });
});
