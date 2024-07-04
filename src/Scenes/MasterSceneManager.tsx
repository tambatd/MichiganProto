import React, { useEffect } from "react";
import { store } from "../Data/store";

// All Game Scenes:
import Intro from "./StartScreen/Intro";
import IntroA from "./IntroA";
import PatrickArtDirectionTest from "./PatrickArtDirectionTest";
import COMBAT_TEST from "./COMBAT_TEST/COMBAT_TEST";

// Other imports
import { SceneNames } from "../Data/types/gameplay/types";
import UISceneOverlay from "../components/UISceneOverlay";

const getScene = (sceneName: SceneNames) => {
  console.log("Sending You To =>", sceneName);
  switch (sceneName) {
    case "intro":
      return Intro;
    case "introA":
      return IntroA;
    case "PatrickArtDirectionTest":
      return PatrickArtDirectionTest;
    case "COMBAT_TEST":
      return COMBAT_TEST;
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
    <UISceneOverlay>
      <SceneComponent />
    </UISceneOverlay>
  );
};

export default MasterSceneManager;
