const http = require('http'),
  fs = require('fs'),
  ejs = require('ejs');
qs = require('querystring');

const settings = require('./settings');
const server = http.createServer();
//blocking
const template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');
const posts = [];
function renderForm(posts, res) {
  const data = ejs.render(template, {
    post: posts
  });
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
}
server.on('request', function(req, res) {
  //check if the content was post
  if (req.method === 'POST') {
    req.data = '';
    req.on('readable', function() {
      req.data += read.read();
    });
    req.on('end', function() {});
  } else {
    renderForm(posts, res);
  }
});
server.listen(settings.port, settings.host);
console.log('server listening...');
