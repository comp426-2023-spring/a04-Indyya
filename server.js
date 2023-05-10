import { rps } from "./lib/rpsls.js";
import { rpsls } from "./lib/rpsls.js";
import minimist from "minimist";
import express from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Default endpoint
app.get('/app/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// RPS endpoint
app.get('/app/rps/', (req, res) => {
  res.status(200).send({ player: '(rock|paper|scissors)' });
});

// RPSLS endpoint
app.get('/app/rpsls/', (req, res) => {
  res.status(200).send({ player: '(rock|paper|scissors|lizard|spock)' });
});

// Play RPS endpoint
app.post('/app/rps/play/', (req, res) => {
  const playerShot = req.body.shot;
  const opponentShot = rps.getComputerShot();
  const result = rps.getWinner(playerShot, opponentShot);
  res.status(200).send({
    player: playerShot,
    opponent: opponentShot,
    result: result,
  });
});

// Play RPSLS endpoint
app.post('/app/rpsls/play/', (req, res) => {
  const playerShot = req.body.shot;
  const opponentShot = rpsls.getComputerShot();
  const result = rpsls.getWinner(playerShot, opponentShot);
  res.status(200).send({
    player: playerShot,
    opponent: opponentShot,
    result: result,
  });
});

// Play RPSLS with opponent shot endpoint
app.get('/app/rpsls/play/:shot/', (req, res) => {
  const playerShot = req.params.shot;
  const opponentShot = rpsls.getComputerShot();
  const result = rpsls.getWinner(playerShot, opponentShot);
  res.status(200).send({
    player: playerShot,
    opponent: opponentShot,
    result: result,
  });
});

// 404 endpoint
app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

const port = process.argv.slice(2)[0] || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

