// const app = require('express');
// const path = require('path');
// const fs = require('fs');
// const uuid = require('uuid');
// const notes = require('../db/db.json');

// // get route
// app.get('/api/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '/db/db.json'));
// });

// // post route
// app.post('/api/notes', (req, res) => {
//   const notes = JSON.parse(fs.readFileSync('./db/db.json'));
//   const newNotes = req.body;
//   newNotes.id = uuid.v4();
//   notes.push(newNotes);
//   fs.writeFileSync('./db/db.json', JSON.stringify(notes));
//   res.json(notes);
// });

// // DELETE route

// module.exports = app;
