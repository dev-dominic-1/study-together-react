import React from "react";
import { Post } from "../../../../models/Post";
import PostCard from "../../../post-card/PostCard";
import styles from  "./FriendsTabContent.module.scss"

let testPost = new Post('Albert Einstein', '16 Hours Ago', 'Sample Content')

export default function FriendsTabContent() {

  const posts: Post[] = [testPost, testPost, testPost]

  return (
    <div className={styles.wrapper}>
      {posts.map((p, i) => (
        <PostCard key={`post-card-${i}`} post={p} />
      ))}
    </div>
  )
}