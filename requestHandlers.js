function start() {
  console.log('handler "start" called');
  return 'Hello Start';
}

function upload() {
  console.log('handler "upload" called');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
