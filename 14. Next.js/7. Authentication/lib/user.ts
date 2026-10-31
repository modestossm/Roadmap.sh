import db from "./db";

type UserRecord = {
    id: number;
    email: string | null;
    password: string | null;
};

export function createUser(email: string, password: string) {
    const result = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)").run(email, password);
    
    return String(result.lastInsertRowid);
}

export function getUserByEmail(email: string) {
    return db.prepare<[string], UserRecord>("SELECT * FROM users WHERE email = ?").get(email);
}
