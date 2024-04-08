import React from "react";
import { Post } from "../../../../models/Post";
import PostCard from "../../../post-card/PostCard";
import styles from "./FriendsTabContent.module.scss";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

let testPost: Post = new Post(
  "Albert Einstein",
  "16 Hours Ago",
  "Sample Content",
);

export default function FriendsTabContent() {
  const posts: Post[] = [testPost, testPost, testPost];

  interface ContentTypeOption {
    value: string;
    text: string;
    disabled?: boolean;
  }
  const contentTypeOptions: ContentTypeOption[] = [
    { value: "RELEVANT", text: "Most Relevant", disabled: true },
    { value: "RECENT", text: "Most Recent" },
  ];

  const [contentOption, setContentOption] = React.useState(
    contentTypeOptions[1].value,
  );

  const handleContentOptionChange = (e: SelectChangeEvent) => {
    setContentOption(e.target.value as string);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.contentOptionSelector} pt-4`}>
        <Select
          sx={{ ".MuiOutlinedInput-notchedOutline": { border: "none" } }}
          value={contentOption}
          variant={"outlined"}
          onChange={handleContentOptionChange}
        >
          {contentTypeOptions.map((option, i) => (
            <MenuItem
              key={`menu-option-${i}`}
              value={option.value}
              disabled={!!option.disabled}
            >
              {option.text}
            </MenuItem>
          ))}
        </Select>
      </div>
      {posts.map((p, i) => (
        <PostCard
          key={`post-card-${i}`}
          post={p}
        />
      ))}
    </div>
  );
}
