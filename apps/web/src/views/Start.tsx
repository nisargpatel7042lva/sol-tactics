import { useGameStore } from "@sol-tactics/game-state";

export default function Start() {
  const { setPhase } = useGameStore();
  return (
    <div className="flex items-end justify-center min-h-screen bg-background text-white pb-20">
      <img
        src="/hero.png"
        className="fixed top-0 left-0 h-full w-full object-cover z-0"
      />
      <div className="flex flex-col text-center space-y-6 z-10">
        <p className="text-gray-300 text max-w-md mx-auto text-2xl">
          A tactical PvP strategy game of positioning, class synergy, and map
          control.
        </p>
        <button
          onClick={() => setPhase("draft")}
          className="bg-cyan-400 hover:bg-cyan-500 text-black z-10 block font-semibold px-8 py-4 rounded-lg shadow-md transition cursor-pointer font-xl text-4xl"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
