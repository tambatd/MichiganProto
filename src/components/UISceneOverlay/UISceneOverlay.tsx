import React from "react";
import styles from "./UISceneOverlay.module.css";

const UISceneOverlay = (props: any) => {
  return <div className={styles.UIContainer}>{props.children}</div>;
};

export default UISceneOverlay;
