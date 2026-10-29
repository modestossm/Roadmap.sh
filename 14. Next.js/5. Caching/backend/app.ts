import express from 'express';
import sql from 'better-sqlite3';

type Message = { id: number; text: string };

const app = express();

const db = new sql('messages.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY,
    text TEXT
  )`);

app.get('/messages', (req, res) => {
  const requestSource = req.headers['x-id'];
  console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
  const messages = db.prepare('SELECT * FROM messages').all() as Message[];
  res.json(messages);
});

app.listen(8080);
