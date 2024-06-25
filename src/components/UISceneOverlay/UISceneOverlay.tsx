import React from "react";
import styles from "./UISceneOverlay.module.css";
import { store } from "../../Data/store";

const UISceneOverlay = (props: any) => {
  const { scene, setScene } = store();

  return (
    <div className={styles.UIContainer}>
      {scene != "intro" && (
        <div className={styles.UIContainerOverlayContent}>
          <p>PLAYER_NAME: FIRST_NAME LAST_NAME</p>
          <p>LEVEL: 1</p>
          <p>HP: 100</p>
        </div>
      )}
      <div className={styles.GameplayContainerContent}>{props.children}</div>
    </div>
  );
};

export default UISceneOverlay;
