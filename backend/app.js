const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorHandler");
const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const app = express();

app.use(express.json());

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Export the Socket.io instance
app.io = io;

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/mail", require("./routes/mailRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
