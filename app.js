import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.listen(3500);
app.use(express.static('public'));

console.log(__dirname)

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/components', (req, res) => {
  res.sendFile(__dirname + '/views/components.html');
});
