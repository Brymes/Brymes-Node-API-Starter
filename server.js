import { app } from "./app.js";

import Http from "http";
Http.createServer(app);

const port = process.env.PORT || 4444;

// create a http server
const server = app.listen(port, () => {
  console.log(`Server  is listening on port: ${port}`);
});
console.log(`Server Listening ::::: ${server.listening}`);
