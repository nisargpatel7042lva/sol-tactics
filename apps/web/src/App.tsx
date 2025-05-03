// src/App.tsx
import Start from "./views/Start";
import Draft from "./views/Draft";
import Placement from "./views/Placement";
import Match from "./views/Match";

import { useGameStore, type Phase } from "@sol-tactics/game-state";
import React, { FC } from "react";

const phases: Record<Phase, FC> = {
  start: Start,
  draft: Draft,
  placement: Placement,
  match: Match,
};

function App() {
  const { state } = useGameStore();
  const phase = state.phase;

  return <>{phases[phase] && React.createElement(phases[phase])}</>;
}

export default App;
