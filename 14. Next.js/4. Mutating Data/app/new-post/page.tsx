import FormSubmit from "@/components/formSubmit";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export default function NewPostPage() {
  async function createPost(formData: FormData) {
    'use server';

    const title = formData.get("title")?.toString() ?? "";
    const image = formData.get("image");
    const content = formData.get("content")?.toString() ?? "";

    const errors = [];

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
  return (
    <>
      <h1>Create a new post</h1>
      <form action={createPost}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"/>
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
