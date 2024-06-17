import { create } from "zustand";

interface StoreState {
  scene: string;
  setScene: (sceneName: string) => void;
}

export const store = create<StoreState>((set: any) => ({
  scene: "intro",
  setScene: (sceneName: string) => set({ scene: sceneName }),
}));
