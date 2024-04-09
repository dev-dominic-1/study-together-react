import React from "react";
import { Typography } from "@mui/material";
import styles from "./AccountContent.module.scss";
import bannerImage from "assets/Images/Desktop/Profile/2x/Profile-Cover-Photo-Desktop2x.jpg";
import profileImage from "assets/Images/Desktop/Profile/2x/Profile-Profile-Picture-Desktop2x.jpg";

export default function AccountContent() {
  return (
    <div className={`${styles.wrapper} app__background-config-2`}>
      <div className={styles.bannerContainer}>
        <img
          src={bannerImage}
          alt="banner"
        />
      </div>
      <div className={styles.bioContentContainer}>
        <div className={styles.profileImageWrapper}>
          <img
            src={profileImage}
            alt="profile"
          />
        </div>
      </div>
      <Typography variant={"h3"}>ACCOUNT COMPONENT</Typography>
    </div>
  );
}
