import React, { useState } from "react";
import { store } from "../../../Data/store";
import styles from "./MainMenu.module.css";
function MainMenu() {
  const { scene, setScene } = store();

  return (
    <div className={styles.MainMenu}>
      <h1>Michigan</h1>

      <h2>you are currently in: {scene} (hopefully the main menu)</h2>
      <div onClick={() => setScene("introA")}>
        <p>Load Scene: New Game Start</p>
      </div>
      <div onClick={() => setScene("intro")}>
        <p>
          Reload Game Initialization (should not send you anywhere or rerender)
        </p>
      </div>
      <div onClick={() => setScene("COMBAT_TEST")}>
        <p>Load Scene COMBAT_TEST</p>
      </div>
      <div onClick={() => setScene("UNKNOWN_ERROR")}>
        <p>Load Scene UNKNOWN_ERROR</p>
      </div>
      <div onClick={() => setScene("PatrickArtDirectionTest")}>
        <p>Load Patrick Art Direction test: PatrickArtDirectionTest</p>
      </div>
      <div onClick={() => setScene("SOUND_ENGINE_TEST")}>
        <p>Load Scene Sound Engine: SOUND_ENGINE_TEST</p>
      </div>
      <p>Main Menu Scaffolding</p>
    </div>
  );
}

export default MainMenu;
