const http = require ('http');
const url = require ('url');

function start(route, handle) {
  function onRequest(req, res) {
    let body = '';
    const pathName = url.parse(req.url).pathname;
    console.log(`request for ${pathName} received.`);

    req.setEncoding('utf-8');
    req.on('data', chunk => {
      body += chunk;
      console.log(`received POST data: \n${body}\n`);
    });
    req.on('end', () => {
      route(handle, pathName, res);
    });
  }

  http.createServer(onRequest).listen(9000);
  console.log('server started');
}

exports.start = start;
