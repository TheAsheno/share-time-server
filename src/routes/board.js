const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/message', (req, res) => {
    const data = req.body;
    fs.readFile('./public/dicts/Message.json', 'utf8', (err, fileData) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return fs.writeFile('./public/dicts/Message.json', JSON.stringify([data], null, 2), writeErr => {
                    if (writeErr) throw writeErr;
                    res.json({ message: 'Message received!' });
                });
            }
            throw err;
        }
        const messages = JSON.parse(fileData);
        messages.push(data);
        fs.writeFile('./public/dicts/Message.json', JSON.stringify(messages, null, 2), writeErr => {
            if (writeErr) throw writeErr;
            res.json({ message: 'Message received!' });
        });
    });
});

module.exports = router;