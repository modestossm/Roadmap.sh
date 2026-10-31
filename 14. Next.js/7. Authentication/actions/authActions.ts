"use server";

import { createUser, getUserByEmail } from "@/lib/user";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { redirect } from "next/navigation";
import { createAuthSession } from "@/lib/auth";
import { destroySession } from "@/lib/auth";
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
        const id = createUser(email, hashedPassword);
        await createAuthSession(id);
        redirect("/training");
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

}

export async function login(prevState: { errors: Record<string, string> }, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const invalidCredentials: { errors: Record<string, string> } = {
        errors: {
            email: "Could not authenticate user, please check your credentials."
        }
    };

    if (typeof email !== "string" || typeof password !== "string") {
        return invalidCredentials;
    }

    const existingUser = getUserByEmail(email);
    if (!existingUser?.password) {
        return invalidCredentials;
    }

    const isValidPassword = verifyPassword(existingUser.password, password);

    if (!isValidPassword) {
        return invalidCredentials;
    }

    await createAuthSession(String(existingUser.id));
    redirect("/training");
}

export async function auth(
    mode: "login" | "singup",
    prevState: { errors: Record<string, string> },
    formData: FormData
) {
    if(mode === "login") {
        return login(prevState, formData);
    }

    return singup(prevState, formData);
}

export async function logout() {
    await destroySession();
    redirect("/")
}