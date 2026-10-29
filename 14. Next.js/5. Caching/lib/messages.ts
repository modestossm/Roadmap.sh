import { cacheTag } from 'next/cache';
import sql from 'better-sqlite3';

export type Message = {
  id: number;
  text: string;
};

const DB_PATH = 'messages.db';

function openDb() {
  const db = new sql(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      text TEXT
    )`);

  return db;
}

export function addMessage(message: string) {
  const db = openDb();

  try {
    db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
  } finally {
    db.close();
  }
}

export function getMessages(): Message[] {
  console.log('Fetching messages from db');

  const db = openDb();

  try {
    return db.prepare('SELECT * FROM messages').all() as Message[];
  } finally {
    db.close();
  }
}

export async function getMessagesFromBackend(source: 'page' | 'layout'): Promise<Message[]> {
  'use cache';
  cacheTag('messages');

  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': source,
    },
  });

  return (await response.json()) as Message[];
}
