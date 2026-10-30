"use server";

import { createUser } from "@/lib/user";
import { hashUserPassword } from "@/lib/hash";
import Database from "better-sqlite3";

export async function singup(prevState: { errors: Record<string, string> }, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const errors: Record<string, string> = {};

    if (typeof email !== 'string' || !email.includes("@")) {
        errors.email = "Please enter a valid email address."
    }

    if (typeof password !== 'string' || password.trim().length < 8) {
        errors.password = "Password must be at least 8 characters long."
    }

    if (Object.keys(errors).length > 0 || typeof email !== 'string' || typeof password !== 'string') {
        return {
            errors,
        }
    }

    const hashedPassword = hashUserPassword(password);

    try {
        createUser(email, hashedPassword);
    } catch (error) {
        if (error instanceof Database.SqliteError && error.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: "It seems like an account for the chosen email already exists."
                }
            }
        }

        throw error;
    }

    return { errors: {} };
}
