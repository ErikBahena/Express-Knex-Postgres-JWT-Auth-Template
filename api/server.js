const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");

server.use(express.json());
server.use(helmet());
server.use(cors());

const authRouter = require("./auth/auth-router");
const userRouter = require("./user/user-router");

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = server;
