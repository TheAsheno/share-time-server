const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static('public/movie'));

router.get("/movielist", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dicts/MovieList.json'));
});

module.exports = router;