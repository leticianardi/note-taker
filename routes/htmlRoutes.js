const res = require('express/lib/response');
const path = require('path');
const router = require('express').Router();

router.get('*', (req, resp) => {
 res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, resp) => {
 res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;