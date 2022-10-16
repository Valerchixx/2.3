const { time, timeEnd } = require('console');
const dgram = require('dgram');
const PORT = 4444;
const HOST = '127.0.0.1';

const message = Buffer.from('Hello udp server');
time('request')
const client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err) {
    if (err) throw err;
    console.log('UDP client message sent to ' + HOST +':'+ PORT);
});

client.on('message', function (mess) {
    console.log('Responce server' + ' '+ mess);
    console.log('Test text:', mess.toString() == message.toString() ? 'true' : 'false')
    timeEnd('request')
    client.close();
});

