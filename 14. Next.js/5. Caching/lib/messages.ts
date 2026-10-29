import sql from 'better-sqlite3';

export type Message = {
  id: number;
  text: string;
};

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export function getMessages(): Message[] {
  console.log('Fetching messages from db');
  return db.prepare('SELECT * FROM messages').all() as Message[];
}

export async function getMessagesFromBackend(source: 'page' | 'layout'): Promise<Message[]> {
  'use cache';

  const response = await fetch('http://localhost:8080/messages', {
    headers: {
      'X-ID': source,
    },
  });

  return (await response.json()) as Message[];
}
