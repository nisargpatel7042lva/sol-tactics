import { create } from "zustand";

export type Phase = "start" | "draft" | "placement" | "match";

export type GameAction =
  | { type: "SET_PHASE"; phase: Phase }
  | { type: "BAN_CLASS"; player: number; className: string }
  | { type: "PICK_UNIT"; player: number; unit: string }
  | { type: "SET_PREVIEW"; className: string };

export interface DraftState {
  preview: string | null;
  actionSequence: { type: string; player: number }[];
  currentTurn: number;
  currentRound: number;
  bannedClasses: Record<number, string[]>;
  pickedUnits: Record<number, string[]>;
  actionIndex: number;
}

export interface GameState {
  phase: Phase;
  history: GameAction[];
  draft: DraftState;
}

export interface GameStore {
  state: GameState;
  setPhase: (phase: Phase) => void;
  draftPick: (item: string) => void;
  previewClass: (item: string) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  state: {
    phase: "start",
    history: [],
    draft: {
      preview: null,
      actionSequence: [
        { type: "ban", player: 1 },
        { type: "ban", player: 2 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
        { type: "pick", player: 2 },
        { type: "pick", player: 1 },
      ],
      currentRound: 0,
      currentTurn: 1,
      actionIndex: 0,
      bannedClasses: { 1: [], 2: [] },
      pickedUnits: { 1: [], 2: [] },
    },
  },
  previewClass: (item) => {
    set((store) => ({
      state: {
        ...store.state,
        draft: {
          ...store.state.draft,
          preview: item,
        },
        history: [
          ...store.state.history,
          { type: "SET_PREVIEW", className: item },
        ],
      },
    }));
  },
  setPhase: (phase) => {
    set((store) => ({
      state: {
        ...store.state,
        phase: phase,
        history: [...store.state.history, { type: "SET_PHASE", phase }],
      },
    }));
  },
  draftPick: (item) => {
    set((store) => {
      const { actionIndex, actionSequence, pickedUnits } = store.state.draft;

      const currentAction = actionSequence[actionIndex];
      const nextActionIndex = (actionIndex + 1) % actionSequence.length;

      if (currentAction.type === "ban") {
        return {
          state: {
            ...store.state,
            draft: {
              ...store.state.draft,
              preview: null,
              bannedClasses: {
                ...store.state.draft.bannedClasses,
                [currentAction.player]: [
                  ...store.state.draft.bannedClasses[currentAction.player],
                  item,
                ],
              },
              actionIndex: nextActionIndex,
            },
            history: [
              ...store.state.history,
              {
                type: "BAN_CLASS",
                player: currentAction.player,
                className: item,
              },
            ],
          },
        };
      } else if (currentAction.type === "pick") {
        const playerUnits = pickedUnits[currentAction.player];
        const unitCount = playerUnits.filter((unit) => unit === item).length;

        let history = [...store.state.history];

        if (unitCount < 2) {
          history.push({
            type: "PICK_UNIT",
            player: currentAction.player,
            unit: item,
          });

          const isLastPick = nextActionIndex === 0;

          return {
            state: {
              ...store.state,
              phase: isLastPick ? "placement" : store.state.phase,
              draft: {
                ...store.state.draft,
                preview: null,
                pickedUnits: {
                  ...store.state.draft.pickedUnits,
                  [currentAction.player]: [...playerUnits, item],
                },
                actionIndex: nextActionIndex,
              },
              history,
            },
          };
        }

        return store;
      }

      return store;
    });
  },
}));
