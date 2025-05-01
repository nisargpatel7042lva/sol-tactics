import { useGameStore } from "@sol-tactics/game-state";

export default function Match() {
  const { dispatch } = useGameStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-wide text-accent">
          Playing the game
        </h2>
        {/* UI for class selection goes here */}
        <button
          onClick={() => dispatch({ type: "SET_PHASE", phase: "end" })}
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg shadow-md transition cursor-pointer"
        >
          Continue to Game over
        </button>
      </div>
    </div>
  );
}
