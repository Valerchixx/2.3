const { time, timeEnd } = require('console');
const dgram = require('dgram');
const PORT = 4444;
const HOST = '127.0.0.1';

const server = dgram.createSocket('udp4');
time('connect')
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
    timeEnd('connect')

});

server.on('message', function (message, remote) {
    console.log('Responce from client'+ ' ' + message);
       const msgResponse= message;

       time('message')
       server.send(msgResponse, 0, msgResponse.length, remote.port, remote.address, function(err) {
         if (err) throw err;
        console.log('IP:' + remote.address);
        timeEnd('message')
        time('close')
        server.close()
        timeEnd('close')
});
});
server.on('close',function(){
  console.log('Socket is closed !');
});

server.bind(PORT, HOST);