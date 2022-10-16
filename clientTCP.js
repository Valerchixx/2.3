const { time, timeEnd } = require('console');
const net = require('net');
const options = {
    message: 'Heloooo',
    port: 8888
}

const client1 = new net.Socket();
time('request')
client1.connect(options,function(){
   console.log(`Cleint 1 :Connected to server on port ${options.port}`);

   client1.write(options.message);

   client1.on('data',function(data){
    console.log(`Client 1 received from server : ${data}`);
    console.log('Test data:', options.message == data ? 'true' : 'false')
    timeEnd('request')
    });
    client1.on('close',function(){
    console.log('Cleint 1 :Connection Closed');
    });


     client1.on('error',function(error){
    console.error(`Connection Error ${error}`);
     });

});

