"use server";

import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState: { errors: string[] }, formData: FormData) {

    const title = formData.get("title")?.toString() ?? "";
    const image = formData.get("image");
    const content = formData.get("content")?.toString() ?? "";

    const errors: string[] = [];

    if(!title || title.trim().length === 0) {
    errors.push("Title is required.");
    }

    if(!title || title.trim().length === 0) {
    errors.push("Content is required.");
    }

    if(!title || title.trim().length === 0) {
    errors.push("Image is required.");
    }

    if(errors.length > 0) {
    return {errors};
    }


    await storePost({
    imageUrl: typeof image === "string" ? image : "",
    title,
    content,
    userId: 1
    });

    redirect("/feed");
}