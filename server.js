const app = require('express')();
const http = require('node:http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css', (req, res) => {
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/js/main.js');
});

server.listen(port, () => {
  console.log(`server runnig in http://localhost:${port}`);
});