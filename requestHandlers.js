const qs = require('querystring');
const fs = require('fs');
const formidable = require('formidable');


function start(res) {
  console.log('handler "start" called');

  const body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(body);
  res.end();
}

function upload(res, req) {
  console.log('handler "upload" called');

  const form = new formidable.IncomingForm();
  console.log('bout to parse');
  form.parse(req, (err, fields, files) => {
    console.log('parsing done');
    fs.rename(files.upload.path, '/tmp/test.png', err => {
      if (err) {
        fs.unlink('/tmp/test.png');
        fs.rename(files.upload.path, '/tmp/test.png');
      }

    });
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`received image: <br>`);
    res.write(`<img src="/show">`);
    res.end();
  });

}

function show(res) {
  console.log('handler "show" called');
  res.writeHead(200, {'Content-Type':'image/png'});
  fs.createReadStream('/tmp/test.png').pipe(res);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
