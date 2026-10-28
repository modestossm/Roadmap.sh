"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

    let imageURL: string;

    try {
        imageURL = await uploadImage(image);
    } catch (error) {
        console.error("Image upload failed", error);
        throw new Error("Image upload failed, post was not created. Please try again later!");
    }

    await storePost({
    imageUrl: imageURL,
    title,
    content,
    userId: 1
    });

    revalidatePath('/', 'layout');
    redirect("/feed");
}

export async function togglePostLikeStatus(postId: number) {
  'use server';

  await updatePostLikeStatus(postId, 2);
  revalidatePath('/', 'layout');
}