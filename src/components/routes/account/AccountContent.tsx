import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./AccountContent.module.scss";
import bannerImage from "assets/Images/Desktop/Profile/2x/Profile-Cover-Photo-Desktop2x.jpg";
import profileImage from "assets/Images/Desktop/Profile/2x/Profile-Profile-Picture-Desktop2x.jpg";
import { Post } from "../../../models/Post";
import { PostStatModel } from "../../post-card/post-stat-icon/PostStatModel";
import PostCard from "../../post-card/PostCard";
import Friend from "../../../models/Friend";
import FriendCard from "../../friend-card/FriendCard";
import Favorite from "../../../models/Favorite";
import FavoriteCard from "../../favorite-card/FavoriteCard";

let testPost = new Post("Troy Bennett", "16 Hours Ago", "Sample Content");
testPost.stat = PostStatModel.DOUBLE_CHECK;

export default function AccountContent() {
  const posts = [
    testPost,
    { ...testPost, stat: PostStatModel.RESOURCES },
    testPost,
  ];
  const friends = [
    new Friend("Pierce Johnson", "Profile-Pierce-Profile-Desktop2x.jpg"),
    new Friend("Jeff Westing", "Profile-Jeff-Profile-Desktop2x.jpg"),
    new Friend("Shirley Overstreet", "Profile-Shirley-Profile-Desktop2x.jpg"),
    new Friend("Anton Demarco", "Profile-Anton-Profile-Desktop2x.jpg"),
    new Friend("Annie Barnes", "Profile-Annie-Profile-Desktop2x.jpg"),
    new Friend("Sam Brown", "Profile-Sam-Profile-Desktop2x.jpg"),
  ];
  const favorites = [
    new Favorite("Profile-Book-1-Desktop2x.jpg", "Book 1"),
    new Favorite("Profile-Book-2-Desktop2x.jpg", "Book 2"),
    new Favorite("Profile-Book-3-Desktop2x.jpg", "Book 3"),
    new Favorite("Profile-Book-4-Desktop2x.jpg", "Book 4"),
    new Favorite("Profile-Book-5-Desktop2x.jpg", "Book 5"),
    new Favorite("Profile-Book-6-Desktop2x.jpg", "Book 6"),
  ];

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
        <div className={styles.bioButtonsWrapper}>
          <div className={styles.nameBioWrapper}>
            <Typography variant={"h3"}>Troy Bennett</Typography>
            <Typography variant={"body1"}>
              Greendale Community College
            </Typography>
            <Typography variant={"body1"}>Air Conditioning Repair</Typography>
          </div>
          <div className={styles.buttonsWrapper}>
            <Button
              variant={"outlined"}
              className="background-fill-50 rounded-2"
            >
              Edit Profile
            </Button>
            <Button
              variant={"contained"}
              className="ml-2 rounded-2"
            >
              + New Post
            </Button>
          </div>
          <div className={styles.bio}>
            <Typography
              variant={"body1"}
              className="font-weight-500"
            >
              Let's join forces and navigate this academic adventure together!
              🚀 🤝 #StudentLife #ClassOf2026 #FutureLeadership 🌟
            </Typography>
          </div>
        </div>
      </div>
      <div id={styles.pageContent}>
        <div id={styles["account-content__left-col"]}>
          <div className={styles.contentHeader}>
            <div>
              <Typography
                variant={"h2"}
                className="font-weight-500"
              >
                Friends
              </Typography>
              <Typography
                variant={"body2"}
                className={styles.subtitle}
              >
                12 Friends
              </Typography>
            </div>
            <Button variant={"text"}>See All Friends</Button>
          </div>
          <div className={styles.friendCardsContainer}>
            {friends.map((f, i) => (
              <FriendCard
                key={`friend-card-${i}`}
                friend={f}
              />
            ))}
          </div>
          <div className="py-3"></div>
          <div className={styles.contentHeader}>
            <Typography
              variant={"h2"}
              className="font-weight-500"
            >
              Favorites
            </Typography>
            <Button variant={"text"}>See All Favorites</Button>
          </div>
          <div className={styles.friendCardsContainer}>
            {favorites.map((f, i) => (
              <FavoriteCard
                key={`favorite-card-${i}`}
                favorite={f}
              />
            ))}
          </div>
        </div>
        <div id={styles["account-content__right-col"]}>
          <div className={styles.contentHeader}>
            <Typography
              variant={"h2"}
              className="font-weight-500 pt-2"
            >
              Posts
            </Typography>
          </div>
          {posts.map((p, i) => (
            <PostCard
              key={`post-card-${i}`}
              post={p}
            />
          ))}
        </div>
      </div>
      <div className="py-8"></div>
    </div>
  );
}
