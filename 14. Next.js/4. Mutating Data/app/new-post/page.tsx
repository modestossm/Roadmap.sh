import PostForm from "@/components/postForm";
import { createPost } from "@/actions/post";

export default function NewPostPage() {  
  return (
    <PostForm action={createPost} />
  );
}
