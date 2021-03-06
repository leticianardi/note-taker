// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const notes = require('./db/db.json');

// server
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//APIs ROUTES
// get route > find notes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/db/db.json'));
});

// post route > write new note
app.post('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const newNotes = req.body;

  newNotes.id = uuid.v4();
  notes.push(newNotes);
  fs.writeFileSync('./db/db.json', JSON.stringify(notes));
  res.json(notes);
});

// delete route > delete note
app.delete('/api/notes/:id', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  const deleteNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);

  fs.writeFileSync('./db/db.json', JSON.stringify(deleteNote));
  res.json(deleteNote);
});

// HTML > get homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// HTML > get notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// listening
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
