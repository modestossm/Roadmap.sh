import { cookies } from "next/headers";
import { Lucia, type UserId } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
    user: "user",
    session: "sessiond"
})

const lucia = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production"
        }
    }
});

export async function createAuthSession(userId: UserId) {
    const session = await lucia.createSession(userId, {});
    const sessioCookie = lucia.createSessionCookie(session.id);
    (await cookies()).set(sessioCookie.name, sessioCookie.value, sessioCookie.attributes);
}
