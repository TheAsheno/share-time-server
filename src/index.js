const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!", info: "This is a message from the server." });
});

app.get("/api/musiclist", (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/dicts/MusicList.json'));
});

app.use('/music/audios', (req, res, next) => {
  if (req.path === '/') {
    res.json({ message: 'Welcome to audios!' });
  } else {
    next();
  }
});

app.use('/music', express.static('public/music'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});