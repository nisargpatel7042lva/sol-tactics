import { useGameStore, dispatch } from "@sol-tactics/game-state";

export default function Start() {
  const { dispatch } = useGameStore();
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-wide text-accent">
          Sol Tactics
        </h1>
        <p className="text-gray-300 text max-w-md mx-auto">
          A tactical PvP strategy game of positioning, class synergy, and map
          control.
        </p>
        <button
          onClick={() => dispatch({ type: "SET_PHASE", phase: "map" })}
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg shadow-md transition cursor-pointer"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
