const app = require('./app');
require('./config/db.js');

const http = require('http').createServer(app)

const port = process.env.PORT || '3000';

/**
 * Event listener for HTTP server "listening" event.
 */

// create a http server
const server = app.listen(port, () => {
  console.log(`server  is listening on port: ${port}`)
})
console.log(`Server Listening::::: ${server.listening}`)
// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('Connected...')
  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg)
  })

})