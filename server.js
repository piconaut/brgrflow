const app = require('express')();
const http = require('http').Server(app);


app.get('/', (req, res) => {
  res.setHeader('Content-Type','text/html');
  res.sendFile(__dirname + '/index.html');
});

app.get('/brgrflow.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/brgrflow.js');
});

app.get('/brgrflow.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/brgrflow.json');
});

http.listen(3000, () => {
  console.log('listening on *:3000\n');
});
