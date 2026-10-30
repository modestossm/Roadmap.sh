"use client";

import { useOptimistic } from 'react';
import Image from 'next/image';
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';

interface Post {
  id: number;
  image: string;
  title: string;
  content: string;
  createdAt: string;
  userFirstName: string;
  userLastName: string;
  likes: number;
  isLiked: number;
}

interface ImageLoaderConfig {
  src: string;
  width?: number;
  quality?: number;
}

function imageLoader({ src, width, quality }: ImageLoaderConfig) {
  const actualWidth = width ?? 200; // fallback if undefined
  const actualQuality = quality ?? 75; // fallback if undefined
  const urlStart = src.split("upload/")[0];
  const urlEnd = src.split("upload/")[1];
  const transformation = `w_${actualWidth},h_2700,q_${actualQuality}`;

  return `${urlStart}upload/${transformation}/${urlEnd}`;
}

function Post({ post, action }: { post: Post; action: (postId: number) => Promise<void> }) {
  return (
    <article className="post">
      <div className="post-image">
        <Image loader={imageLoader} src={post.image} alt={post.title} fill quality={50} />
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
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: { posts: Post[] }) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex(post => post.id === updatedPostId);

    if (updatedPostIndex === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIndex] };
    if (updatedPost.isLiked === 1) {
      updatedPost.likes -= 1;
      updatedPost.isLiked = 0;
    } else {
      updatedPost.likes += 1;
      updatedPost.isLiked = 1;
    }
    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;
    return newPosts;
  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId: number) {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
