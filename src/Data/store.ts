import { create } from "zustand";
import { SceneNames } from "./types/gameplay/types";
interface StoreState {
  scene: SceneNames;
  setScene: (sceneName: SceneNames) => void;
}

export const store = create<StoreState>((set: any) => ({
  scene: "intro",
  setScene: (sceneName: SceneNames) => set({ scene: sceneName }),
}));
