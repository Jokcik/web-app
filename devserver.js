var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic(path.join(__dirname, 'dist_main')));
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(serveStatic(path.join(__dirname, 'node_modules/@angular/material/prebuilt-themes')));

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: 'dist_main'});
});

app.listen(3000);

