const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static('public/game'));

router.get("/gamelist", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dicts/GameList.json'));
});

module.exports = router;