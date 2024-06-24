import React, { useState } from "react";
import { store } from "../../../Data/store";
import styles from "./MainMenu.module.css";
function MainMenu() {
  const { scene, setScene } = store();

  return (
    <div className={styles.MainMenu}>
      <p>you are currently in: {scene} (hopefully the main menu)</p>
      <div onClick={() => setScene("introA")}>
        <p>Load Scene New Game Start</p>
      </div>
      <div onClick={() => setScene("intro")}>
        <p>Load Scene Game Start</p>
      </div>
      <div onClick={() => setScene("UNKNOWN_ERROR")}>
        <p>Load Scene UNKNOWN_ERROR</p>
      </div>
      <p>Main Menu Scaffolding</p>
    </div>
  );
}

export default MainMenu;
