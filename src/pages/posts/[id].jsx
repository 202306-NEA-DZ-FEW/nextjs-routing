import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// URL: http://localhost:3000/posts/single-post
export default function PostsInfo({ postData }) {
  return (
    <main>
      <h1 className="text-3xl">{postData.id}</h1>
      <h1 className="text-3xl">{postData.title}</h1>
      <p className="text-sm italic text-gray-500">{postData.body}</p>
    </main>
  );
}

// SSG - Static Site Generation
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/posts/");
  // Convert the post data to JSON
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const newArr = posts.slice(0, 2);
  const paths = newArr.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch("http://localhost:3001/posts/" + params.id);
  // Convert the post data to JSON
  const postData = await res.json();
  // Set the post data to state
  return {
    props: {
      postData,
    },
    revalidate: 60,
  };
}

// First way to get the pages dynamically with ID
// SSR - Server Side Rendering

// export async function getServerSideProps({ params }) {
//   const res = await fetch("http://localhost:3001/posts/" + params.id);
//   // Convert the post data to JSON
//   const postData = await res.json();
//   // Set the post data to state
//   return {
//     props: {
//       postData,
//     },
//   };
// }
