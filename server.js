const app = require('express')();
const http = require('http').Server(app);


app.get('/', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/index.html');
});

app.get('/pres1', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres1.html');
});

app.get('/pres', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres0.html');
});

app.get('/pres0', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres0.html');
});


app.get('/pres2', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres2.html');
});

app.get('/pres3', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres3.html');
});

app.get('/pres4', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/brgrflow_pres4.html');
});

app.get('/dist/reveal.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/node_modules/reveal.js/dist/reveal.css');
});

app.get('/dist/theme/white.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/node_modules/reveal.js/dist/theme/white.css');
});

app.get('/dist/reveal.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/node_modules/reveal.js/dist/reveal.js');
});

app.get('/brgrflow.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/brgrflow.js');
});

app.get('/brgrflow_pres1.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/brgrflow_pres1.js');
});

app.get('/brgrflow_pres2.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/brgrflow_pres2.js');
});

app.get('/brgrflow_pres3.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/brgrflow_pres3.js');
});

app.get('/brgrflow.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/brgrflow.json');
});

app.get('/brgrflow_pres2.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/brgrflow_pres2.json');
});

app.get('/brgrflow_pres3.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/brgrflow_pres3.json');
});

http.listen(3000, () => {
  console.log('listening on *:3000\n');
});
