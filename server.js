const http = require ('http');
const url = require ('url');

function start(route, handle) {
  function onRequest(req, res) {
    const pathName = url.parse(req.url).pathname;
    console.log(`request for ${pathName} received.`);


    res.writeHead(200, {'Content-Type':'text/plain'});
    route(handle, pathName, res);
    
  }
  http.createServer(onRequest).listen(9000);
  console.log('server started');
}

exports.start = start;
