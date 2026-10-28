"use client";

import { formatDate } from '@/lib/format';
import type { Post } from '@/lib/posts';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/post';
import Image from 'next/image';
import { useOptimistic } from 'react';

function PostItem({ post }: { post: Post }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null, post.id)} className={post.isLiked ? "liked" : ""}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts, action }: { posts: Post[] }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if(updatedPostIndex === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIndex] }
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;
    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;

    return newPosts;
  });

  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId) {
    updateOptimisticPosts(postId);

    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} action={updatePost}/>
        </li>
      ))}
    </ul>
  );
}