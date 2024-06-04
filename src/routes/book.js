const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static('public/book'));

router.get("/booklist", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/dicts/BookList.json'));
});

module.exports = router;