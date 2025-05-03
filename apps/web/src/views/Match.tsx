import { useGameStore } from "@sol-tactics/game-state";

export default function Match() {
  const { setPhase } = useGameStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-white">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-wide text-accent">
          Playing the game
        </h2>
        {/* UI for class selection goes here */}
      </div>
    </div>
  );
}
