import React, { useEffect } from "react";
import { store } from "../Data/store";

// All Game Scenes:
import Intro from "./StartScreen/Intro";
import IntroA from "./IntroA";
import { SceneNames } from "src/Data/types/gameplay/types";

const getScene = (sceneName: SceneNames) => {
  console.log("Sending You To =>", sceneName);
  switch (sceneName) {
    case "intro":
      return Intro;
    case "introA":
      return IntroA;
    default:
      return Intro;
  }
};

type SceneType = React.FC;

const MasterSceneManager = () => {
  const { scene } = store();
  console.log(scene);
  const SceneComponent: SceneType = getScene(scene);

  return (
    <div>
      <SceneComponent />
    </div>
  );
};

export default MasterSceneManager;
