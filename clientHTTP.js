const { time, timeEnd } = require('console');
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    method: 'POST',
    message:'hello http server'
};
time('request')
const req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);

    res.on('data', function (chunk) {
        console.log('Responce server:', chunk.toString());
        console.log('Test text:', options.message == chunk.toString() ? 'true' : 'false')
    });

    res.on('end', function () {
        console.log('No more data in response.');
        timeEnd('request')
    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

req.write(options.message);
req.end();