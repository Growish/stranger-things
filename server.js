var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('port', 3000);

app.use('/', express.static(path.join(__dirname + '/_/')));

io.on('connection', function(socket){
    console.log('hello client!');
});

http.listen(3000, function(){
    console.log('listening on :3000');
});