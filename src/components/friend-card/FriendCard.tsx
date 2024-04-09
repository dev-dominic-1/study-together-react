import React, { useEffect } from "react";
import Friend from "../../models/Friend";
import { Card, Typography } from "@mui/material";
import styles from "./FriendCard.module.scss";

interface FriendCardProps {
  friend: Friend;
}

export default function FriendCard(props: FriendCardProps) {
  const { name, imageName } = props.friend;

  const [profilePicture, setProfilePicture] = React.useState<string>();

  useEffect(() => {
    const importImage = async () => {
      const temp = await import(
        `assets/Images/Desktop/Profile/2x/${imageName}`
      );
      return temp.default;
    };
    importImage().then((r) => setProfilePicture(r));
  });

  return (
    <>
      <Card className={styles.wrapper}>
        <img
          src={profilePicture}
          alt={name}
        />
        <Typography
          variant={"body1"}
          className={styles.name}
        >
          {name}
        </Typography>
      </Card>
    </>
  );
}
