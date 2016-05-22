const exec = require('child_process').exec;

function start() {
  console.log('handler "start" called');

  let content = 'empty';
  exec('ls -la', (err, stdout, stderr) => {
    content = stdout;
  });

  return content;

}

function upload() {
  console.log('handler "upload" called');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
