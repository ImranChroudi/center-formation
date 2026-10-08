// SQLite storage. One table, opened once, created automatically.
import * as SQLite from 'expo-sqlite';

let dbPromise = null;

function getDb() {
  if (!dbPromise) {
    dbPromise = (async () => {
      const db = await SQLite.openDatabaseAsync('contacts.db');
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          imageUri TEXT
        );
      `);
      return db;
    })();
  }
  return dbPromise;
}

// Call once at startup (every function below also calls getDb, so this is just a safe warm-up).
export async function initDatabase() {
  await getDb();
}

export async function getContacts() {
  const db = await getDb();
  // Ordered by id so people never move around on the screen.
  return db.getAllAsync('SELECT * FROM contacts ORDER BY id ASC');
}

export async function addContact(name, phone, imageUri) {
  const db = await getDb();
  await db.runAsync(
    'INSERT INTO contacts (name, phone, imageUri) VALUES (?, ?, ?)',
    [name, phone, imageUri]
  );
}

export async function updateContact(id, name, phone, imageUri) {
  const db = await getDb();
  await db.runAsync(
    'UPDATE contacts SET name = ?, phone = ?, imageUri = ? WHERE id = ?',
    [name, phone, imageUri, id]
  );
}

export async function deleteContact(id) {
  const db = await getDb();
  await db.runAsync('DELETE FROM contacts WHERE id = ?', [id]);
}
