const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
require('dotenv').config();

// Define routes starts
const { index } = require('./Routes/index');
const { JsonWebTokenError } = require('jsonwebtoken');
// Define routes ends


// Connect to database
// connectDatabase();

const app = express();
// const http = require('http').createServer(app)
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie parser
app.use(cookieParser());
// logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Sanitize data
app.use(mongoSanitize());
// Enable CORS
app.use(cors());
app.use(express.static(__dirname + '/public'))

// mount routers
app.use('/', index);
app.get('/', (req, res) => {
  console.log(`404 Request URL: ` + JSON.stringify(req.originalUrl));
  console.log(`404 Request Body: ` + JSON.stringify(req.body));
  
    res.sendFile(__dirname + '/index.html')
});
/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  console.log(`404 Request URL: ` + JSON.stringify(req.originalUrl));
  console.log(`404 Request Body: ` + JSON.stringify(req.body));

  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});
// global error handler
// app.use(errorHandler);
// // Socket 
// const io = require('socket.io')(http)

// io.on('connection', (socket) => {
//     console.log('Connected...')
//     socket.on('message', (msg) => {
//         socket.broadcast.emit('message', msg)
//     })

// })
module.exports = app;
