const { time, timeEnd } = require('console');
const net = require('net');
const port = 8888;

const server = net.createServer(onClientConnection);


server.listen(port,function(){
   console.log(`Server started on port ${port}`);
});


time('connect')
function onClientConnection(sock){

    console.log(`${sock.remotePort} Connected`);
    timeEnd('connect')
    console.log(`IP: ${sock.remoteAddress}`)


    sock.on('data',function(data){
        time('data')

        console.log(`>> data received : ${data} `);
        timeEnd('data')
		let serverResp = data
		sock.write(serverResp);

		sock.end()
	});

    time('close')

    sock.on('close',function(){
        console.log(`${sock.remotePort} Connection closed`);
    });
    timeEnd('close')

    sock.on('error',function(error){
        console.error(` Connection Error ${error}`);
    });
};


