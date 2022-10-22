console.log('Server-side code running');

const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static(__dirname));

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/clicked', (req, res) => {
  res.send(generateName());
});

function generateName()
{
  const adjData = './data/adjs.json';
  const nounData = './data/nouns.json';

  const fs = require('fs');
  const adjs = JSON.parse(fs.readFileSync(adjData)).adjs;
  const nouns = JSON.parse(fs.readFileSync(nounData)).nouns;

  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return adj[0].toUpperCase() + adj.substring(1) + noun[0].toUpperCase() + noun.substring(1);
}
