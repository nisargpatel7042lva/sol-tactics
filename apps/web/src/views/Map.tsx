import { useGameStore } from "@sol-tactics/game-state";

export default function Map() {
  const { dispatch } = useGameStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-wide text-accent">
          Preview map
        </h2>
        {/* UI for class selection goes here */}
        <button
          onClick={() => dispatch({ type: "SET_PHASE", phase: "ban" })}
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8 py-4 rounded-lg shadow-md transition cursor-pointer"
        >
          Continue to Ban
        </button>
      </div>
    </div>
  );
}
