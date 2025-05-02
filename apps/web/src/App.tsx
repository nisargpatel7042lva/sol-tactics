// src/App.tsx
import Start from "./views/Start";
import Draft from "./views/Draft";
import Placement from "./views/Placement";
import Match from "./views/Match";

import { useGameStore } from "@sol-tactics/game-state";

function App() {
  const { state } = useGameStore();

  return (
    <>
      {state.phase === "start" && <Start />}
      {state.phase === "draft" && <Draft />}
      {state.phase === "placement" && <Placement />}
      {state.phase === "match" && <Match />}
    </>
  );
}

export default App;
