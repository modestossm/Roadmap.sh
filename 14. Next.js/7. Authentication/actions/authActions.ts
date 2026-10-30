"use server";

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

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }
}