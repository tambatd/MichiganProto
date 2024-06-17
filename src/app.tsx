import * as React from "react";
import { createRoot } from "react-dom/client";
//import Intro from "./Scenes/StartScreen";
import MasterSceneManager from "./Scenes/MasterSceneManager";
const root = createRoot(document.body);
root.render(<MasterSceneManager />);
