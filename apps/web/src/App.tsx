// src/App.tsx
import Start from "./views/Start";
import Map from "./views/Map";
import Ban from "./views/Ban";
import Pick from "./views/Pick";
import Placement from "./views/Placement";
import Match from "./views/Match";

import { useGameStore } from "@sol-tactics/game-state";

function App() {
  const { state } = useGameStore();

  return (
    <>
      {state.phase === "start" && <Start />}
      {state.phase === "map" && <Map />}
      {state.phase === "ban" && <Ban />}
      {state.phase === "pick" && <Pick />}
      {state.phase === "placement" && <Placement />}
      {state.phase === "match" && <Match />}
    </>
  );
}

export default App;
