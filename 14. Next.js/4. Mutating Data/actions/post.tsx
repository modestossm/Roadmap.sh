"use server";

import { revalidatePath } from "next/cache";
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState: { errors: string[] }, formData: FormData) {

    const title = formData.get("title")?.toString() ?? "";
    const image = formData.get("image");
    const content = formData.get("content")?.toString() ?? "";

    const imageFile = image instanceof File && image.size > 0 ? image : null;

    const errors: string[] = [];

    if (!title.trim()) {
        errors.push("Title is required.");
    }

    if (!content.trim()) {
        errors.push("Content is required.");
    }

    if (!imageFile) {
        errors.push("Image is required.");
        return { errors };
    }

    if (errors.length > 0) {
        return { errors };
    }

    let imageUrl: string;
    try {
        imageUrl = await uploadImage(imageFile);
    } catch (error) {
        console.error("Image upload failed", error);
        throw new Error("Image upload failed, post was not created. Please try again later!");
    }

    await storePost({
        imageUrl,
        title,
        content,
        userId: 1
    });

    redirect("/feed");
}

export async function togglePostLikeStatus(postId: number) {
    await updatePostLikeStatus(postId, 2);
    revalidatePath("/feed");
}
