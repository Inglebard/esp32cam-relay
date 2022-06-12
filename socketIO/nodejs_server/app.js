const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const url = require('url');

const port = 3000;

const express_config= require('./config/express.js');

express_config.init(app);


io.on('connection', (socket) =>{
  
  const listener = (eventName, ...args) => {
    console.log(eventName, args);
  }
  
  socket.onAny(listener);

  console.log(`Connecté au client ${socket.id}`)

  socket.on('jpgstream_serverio', function(msg){
    console.log("image received")
    io.emit('jpgstream_clientio',msg.pic)
  });
})


app.get('/', (req, res) => {
  	res.render('index', {});
});


server.listen(port, () => {
	  console.log(`App listening at http://localhost:${port}`)
})

