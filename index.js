const commander = require('commander');
const http = require('http');
const request = require('request');

commander
  .version('1.0.0')
  .option('--port [value]', 'Port', parseInt, 3000)
  .option('--proxy [value]', 'Proxy address')
  .parse(process.argv);

console.log(`Port: ${commander.port}`);
console.log(`Proxy: ${commander.proxy}`);

http.createServer(onRequest).listen(commander.port);

function onRequest(req, resp) {
  const uri = `https://crates.io${req.url}`;
  console.log(`Serve: ${uri}`);

  const options = {
    uri: uri,
    proxy: commander.proxy,
    rejectUnauthorized: false,
  };

  request.get(options).pipe(resp);
}
