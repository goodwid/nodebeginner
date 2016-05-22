var http = require ('http');

function start() {
  function onRequest(req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World');
    res.end();
  }
  http.createServer(onRequest).listen(9000);
  console.log('server started');
}

exports.start = start;
