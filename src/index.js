const path = require('path');
const express = require("express");
const musicRoutes = require('./routes/music');
const movieRoutes = require('./routes/movie');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!", info: "This is a message from the server." });
});

app.use('/music', musicRoutes);

app.use('/movie', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});