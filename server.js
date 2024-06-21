const http = require('http');
const httpProxy = require('http-proxy');

const args = process.argv.slice(2);
const port = args.length === 0 ? 8000 : args[0];
const proxy = httpProxy.createProxyServer({});

http.createServer((req, res) => {
  proxy.web(req, res, { target: req.headers["referer"] });
}).listen(port);

console.log(`Proxy server running at http://localhost:${port}/`);