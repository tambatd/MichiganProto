import React from "react";
import styles from "./UISceneOverlay.module.css";
import { store } from "../../Data/store";

/**
 * Ideally the entire 2D layer needs to be reacting to the changes of what's happening
 * in the 3D layer i.e player enters fighting scene -> open fighting overlay
 *
 * @param props in the future these params maybe don't need to exist? if everything's being interacted with via the data store idk if this is needed
 * @returns
 */
const UISceneOverlay = (props: any) => {
  const { scene, setScene } = store();

  return (
    <div className={styles.GameplayContainerContent}>
      {/*This div is used for all non full screen 2D UI Elements
         Full Screen 2D elements are in the props.children element*/}
      <div id="2D NON FULL SCREEN UI LAYER" className={styles.UILayer}>
        {scene == "COMBAT_TEST" && (
          <>
            <div className={styles.BossHealthBar}>
              <p>Boss Health Bar</p>
            </div>
            <div className={styles.SelectedPlayer}>
              <p>Selected Player</p>
            </div>
            <div className={styles.SelectedEnemyPlayer}>
              <p>EnemyPlayer</p>
            </div>
          </>
        )}
      </div>
      {props.children && (
        <div className={styles.GameplayContainerContent}>{props.children}</div>
      )}
    </div>
  );
};

export default UISceneOverlay;
