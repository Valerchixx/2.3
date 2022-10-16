const { time, timeEnd } = require('console');
const http = require('http');
const port = 3000;
const server = http.createServer().listen(port);
time('connect')
server.on('request', function (req, res) {
    timeEnd('connect')
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {
        time('data')
        body = data;
        console.log('Responce:', data)
        timeEnd('data')
    });

    console.log('IP:',  req.connection.remoteAddress)

    req.on('end', function () {
        time('close')
        res.end(body);
        console.log('Connection closed')
        timeEnd('close')
    });
});



console.log(`Listening on port ${port}`);
