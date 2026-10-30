import db from "./db";

export function createUser(email: string, password: string) {
    const result = db.prepare("INSERT INTO users (email, password) VALEUS (?, ?").run(email, password);
    
    return result.lastInsertRowid;
}
