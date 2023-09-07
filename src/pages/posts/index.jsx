import Link from "next/link";
import { useEffect, useState } from "react";

// URL: http://localhost:3000/posts
export default function Posts({ posts }) {
  return (
    <main>
      <h1 className="text-3xl">All Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/single-post?id=${post.id}`}>
            <h1 className="text-lg">{post.title}</h1>
          </Link>
        </div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/posts/");
  // Convert the post data to JSON
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
