const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static('public/music'));

router.get("/musiclist", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dicts/MusicList.json'));
});

module.exports = router;