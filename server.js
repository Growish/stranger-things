var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const Joi = require('joi');

const schema = { message: Joi.string().regex(/^[a-zA-Z]/).max(1) };

app.use('/', express.static(path.join(__dirname + '/_/')));

io.on('connection', function(socket){
    socket.on('message', function(msg){
        Joi.validate({ message: msg }, schema, function (err, value) {
            if (err === null) {
                socket.broadcast.emit('message', value.message);
            } else {
                console.log(err.message);
            }
        });
    });
});

http.listen(3000, function(){
    console.log('listening on :3000');
});