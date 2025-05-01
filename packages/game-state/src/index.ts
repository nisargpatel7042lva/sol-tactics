import { create } from "zustand";

export type Phase =
  | "start"
  | "map"
  | "ban"
  | "pick"
  | "placement"
  | "match"
  | "end";

export type GameAction = { type: "SET_PHASE"; phase: Phase };

export interface GameState {
  phase: Phase;
  history: GameAction[];
}

export interface GameStore {
  state: GameState;
  dispatch: (action: GameAction) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  state: {
    phase: "start",
    history: [],
  },
  dispatch: (action) => {
    set((store) => ({
      state: {
        phase: action.type === "SET_PHASE" ? action.phase : store.state.phase,
        history: [...store.state.history, action],
      },
    }));
  },
}));
