import React, {createElement} from "react";
import {Avatar, Button, Card, CardActions, CardContent, Paper, Typography} from "@mui/material";
import {Post} from "../../models/Post";
import styles from "./PostCard.module.scss";
import {
  Favorite as FavoriteIcon,
  IosShare as IosShareIcon,
} from "@mui/icons-material";

interface PostCardProps {
  post: Post
}

function PostCard(props: PostCardProps) {

  const {username, timestamp, content} = props.post

  return (
    <>
      <Card className={`${styles.wrapper} background-fill mt-6 mx-4`} elevation={0}>
        <div className={styles.header}>
          <div>
            <Avatar>{username[0] ?? '?'}</Avatar>
            <div className={styles.usernameTimestamp}>
              <Typography variant={"body2"} className="font-weight-600">
                {username}
              </Typography>
              <Typography variant={"body2"} className={styles.timestamp}>
                {timestamp}
              </Typography>
            </div>
          </div>
          <div>
            POST STAT
          </div>
        </div>
        <CardContent className={styles.postCardContent}>
          <Typography variant={"body1"} className="mb-4">
            {content}
          </Typography>
          <div>
            <Paper className={styles.contentPaper}>
              CONTENT
            </Paper>
            <Paper className={styles.contentPaper}>
              CONTENT
            </Paper>
          </div>
        </CardContent>
        <CardActions className={`${styles.postCardActions} background-fill`}>
          {createElement(FavoriteIcon)}
          <Button variant={"text"}>Comment</Button>
          {createElement(IosShareIcon)}
        </CardActions>
      </Card>
    </>
  )
}

export default PostCard;