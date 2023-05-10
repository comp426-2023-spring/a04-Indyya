const express = require('express');
const bodyParser = require('body-parser');
const { RPS, RPSLS } = require('./lib/a03');
//import { rpsls } from './lib/a03';

const { createServer } = require('http');
const { get } = require('./lib/a03');

const port = process.argv[2] || 5555;

const server = createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(get());
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.argv.slice(2)[0] || 5000;

// Default API endpoint
app.use('/app/', (req, res) => {
  res.status(404).send('404 NOT FOUND');
});

// /app/ endpoint
app.use('/app', (req, res) => {
  res.status(200).send('200 OK');
});

// /app/rps/ endpoint
app.use('/app/rps/', (req, res) => {
  res.status(200).send({ player: '(rock|paper|scissors)' });
});

// /app/rpsls/ endpoint
app.use('/app/rpsls/', (req, res) => {
  res.status(200).send({ player: '(rock|paper|scissors|lizard|spock)' });
});

// /app/rps/play/ endpoint
app.post('/app/rps/play/', (req, res) => {
  const { shot } = req.body;
  const rps = new RPS();
  const result = rps.play(shot);
  res.status(200).send(result);
});

// /app/rpsls/play/ endpoint
app.post('/app/rpsls/play/', (req, res) => {
  const { shot } = req.body;
  const rpsls = new RPSLS();
  const result = rpsls.play(shot);
  res.status(200).send(result);
});

// /app/rpsls/play/:shot endpoint
app.use('/app/rpsls/play/:shot', (req, res) => {
  const { shot } = req.params;
  const rpsls = new RPSLS();
  const result = rpsls.play(shot);
  res.status(200).send(result);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

