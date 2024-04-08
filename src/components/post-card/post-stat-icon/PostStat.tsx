import React, { createElement } from "react";
import { PostStatModel } from "./PostStatModel";
import { Typography } from "@mui/material";
import styles from "./PostStat.module.scss";

interface PostStatProps {
  stat: PostStatModel;
}

function PostStat(props: PostStatProps) {
  const { text, icon } = props.stat;

  enum ExpandState {
    EXPANDED = "E",
    COLLAPSED = "C",
  }
  const [expandState, setExpandState] = React.useState<
    ExpandState | undefined
  >();

  function handleClick() {
    if (expandState === ExpandState.EXPANDED) {
      setExpandState(ExpandState.COLLAPSED);
    } else setExpandState(ExpandState.EXPANDED);
  }

  return (
    <div
      className={`
        ${styles.wrapper} 
        ${expandState === ExpandState.EXPANDED ? styles.expanded : ""}
        ${expandState === ExpandState.COLLAPSED ? styles.collapsed : ""}
      `}
      onClick={handleClick}
    >
      <div className={styles.iconContainer}>{createElement(icon)}</div>
      <div className={styles.expandedContent}>
        <Typography variant={"body2"}>{text}</Typography>
      </div>
    </div>
  );
}

export default PostStat;
