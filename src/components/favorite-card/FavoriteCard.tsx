import React, { useEffect, useState } from "react";
import Favorite from "../../models/Favorite";
import styles from "./FavoriteCard.module.scss";

interface FavoriteCardProps {
  favorite: Favorite;
}

export default function FavoriteCard(props: FavoriteCardProps) {
  const { imageName, altText } = props.favorite;

  const [imageSrc, setImageSrc] = useState<string | undefined>();
  useEffect(() => {
    const importImage = async () => {
      const temp = await import(
        `assets/Images/Desktop/Profile/2x/${imageName}`
      );
      return temp.default;
    };
    importImage().then((r) => setImageSrc(r));
  });

  return (
    <>
      <img
        className={styles.wrapper}
        src={imageSrc}
        alt={altText}
      />
    </>
  );
}
