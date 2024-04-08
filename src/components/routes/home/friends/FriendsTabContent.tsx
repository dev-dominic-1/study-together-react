import React from "react";
import { Post } from "../../../../models/Post";
import PostCard from "../../../post-card/PostCard";

let testPost = new Post('Albert Einstein', '16 Hours Ago', 'Sample Content')

export default function FriendsTabContent() {

  const posts = [testPost, testPost, testPost]

  return (
    <>
      {posts.map((p, i) => (
        <PostCard key={`post-card-${i}`} post={p} />
      ))}
    </>
  )
}