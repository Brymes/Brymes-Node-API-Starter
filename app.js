import express from "express";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";

import { connectDB } from "./config/db.js";

import { routerIndex } from "./Routes/index.js";

await connectDB();

const app = express();

app.use(express.json());

// Sanitize data
app.use(mongoSanitize());

// Enable CORS
app.use(cors());

// mount routers
app.use(routerIndex);

/** catch 404 and forward to error handler */
app.use("*", (req, res) => {
  console.log(`404 Request URL: ` + JSON.stringify(req.originalUrl));
  console.log(`404 Request Body: ` + JSON.stringify(req.body));

  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

// global error handler
// app.use(errorHandler);
// // Socket 
// const io = require("socket.io")(http)

// io.on("connection", (socket) => {
//     console.log("Connected...")
//     socket.on("message", (msg) => {
//         socket.broadcast.emit("message", msg)
//     })

// })

export { app }

