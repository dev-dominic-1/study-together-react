import React from "react";
import {Typography} from "@mui/material";
import { Post } from "../../../../models/Post";
import PostCard from "../../../post-card/PostCard";

let testPost = new Post('Albert Einstein', '16 Hours Ago', 'Sample Content')

export default function FriendsTabContent() {

  const posts = [testPost, testPost, testPost]

  return (
    <>
      <Typography variant={"h3"}>
        FRIENDS TAB CONTENT COMPONENT
      </Typography>
      {posts.map((p, i) => (
        <PostCard key={`post-card-${i}`} post={p} />
      ))}
    </>
  )
}