import React, { createElement, useEffect } from "react";
import { Card, IconButton, LinearProgress } from "@mui/material";
import styles from "./UniversalDescriptor.module.scss";
import CloseIcon from "@mui/icons-material/Close";

interface UniversalDescriptorProps {
  onClickClose?: Function;
}

export default function UniversalDescriptor(props: UniversalDescriptorProps) {
  const contentId = "universalDescriptor";
  const [iframeLoading, setIframeLoading] = React.useState(false);

  useEffect(() => {
    setIframeLoading(true);
    const el = document.getElementById("iframe-container");
    const check = el?.querySelector("iframe");
    if (check != null) return;
    const iframe = document.createElement("iframe");
    iframe.onload = () => setIframeLoading(false);
    iframe.id = contentId;
    iframe.src =
      "https://master--study-together-universal-descriptor.netlify.app/";
    iframe.style.border = "none";
    iframe.style.width = "calc(100% - 2px)";
    iframe.style.height = "100%";
    el?.appendChild(iframe);
  }, []);

  return (
    <>
      <Card className={`${styles.wrapper} pa-0 background-fill`}>
        <div className={styles.title}>
          <IconButton onClick={() => props.onClickClose?.()}>
            {createElement(CloseIcon)}
          </IconButton>
        </div>
        <div
          id="iframe-container"
          className={styles.iframeContainer}
        >
          <div id={styles.iframeLoader}>
            {iframeLoading ? <LinearProgress /> : null}
          </div>
        </div>
      </Card>
    </>
  );
}
