function start() {
  console.log('handler "start" called');
}

function upload() {
  console.log('handler "upload" called');
}

exports.start = start;
exports.upload = upload;
