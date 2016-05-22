function route (handle, pathName, res) {
  console.log(`About to route a request for ${pathName}`);
  if (typeof handle[pathName] === 'function') {
    return handle[pathName](res);
  } else {
    console.log(`No handler found for ${pathName}.`);
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.write('404 not found');
    res.end();
  }
}

exports.route = route;
