import React from "react";
import { store } from "../Data/store";

// All Game Scenes:
import Intro from "./StartScreen/Intro";

const getScene = (sceneName: string) => {
  switch (sceneName) {
    case "intro":
      return Intro;
    default:
      return Intro;
  }
};

const MasterSceneManager = () => {
  const { scene } = store();

  const SceneComponent = getScene(scene);

  return (
    <div>
      <SceneComponent />
    </div>
  );
};

export default MasterSceneManager;
