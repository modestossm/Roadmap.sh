import express from 'express';
import sql from 'better-sqlite3';

type Message = { id: number; text: string };

const app = express();

function getMessages(): Message[] {
  const db = new sql('messages.db');

  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY,
        text TEXT
      )`);

    return db.prepare('SELECT * FROM messages').all() as Message[];
  } finally {
    db.close();
  }
}

app.get('/messages', (req, res) => {
  const requestSource = req.headers['x-id'];
  console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
  res.json(getMessages());
});

app.listen(8080);
