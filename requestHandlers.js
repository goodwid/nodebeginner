const exec = require('child_process').exec;

function start(res) {
  console.log('handler "start" called');

  let content = 'empty';
  exec('ls -la', (err, stdout, stderr) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write(stdout);
    res.end();
  });

  return content;

}

function upload(res) {
  console.log('handler "upload" called');
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('Hello Upload');
  res.end();

}

exports.start = start;
exports.upload = upload;
