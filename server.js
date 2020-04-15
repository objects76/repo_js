var http = require('http');
var express = require('express');
var app = express();
http.createServer(app).listen(5050);

let fs = require('fs');
let cert = {
  key:fs.readFileSync('cert/key.pem'),
  cert:fs.readFileSync('cert/cert.pem')
};

let https = require('https');
https.createServer(cert, app).listen(443);

app.use(express.static('src'));