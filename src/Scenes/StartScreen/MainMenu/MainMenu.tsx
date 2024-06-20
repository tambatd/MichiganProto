import React, { useState } from "react";
import { store } from "../../../Data/store";

function MainMenu() {
  const { scene, setScene } = store();

  return (
    <div>
      <p>Main Menu Scaffolding</p>
    </div>
  );
}

export default MainMenu;
