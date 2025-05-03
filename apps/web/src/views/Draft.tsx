import { useGameStore } from "@sol-tactics/game-state";
import clsx from "clsx";

const CLASSES = [
  "Chemist",
  "Warrior",
  "Mage",
  "Duelist",
  "Archer",
  "Squire",
  "Clerk",
  "Knight",
];

export default function Draft() {
  const { state, draftPick } = useGameStore();
  const { draft } = state;
  console.log(draft);
  const { actionIndex, actionSequence, bannedClasses, pickedUnits } = draft;

  const currentAction = actionSequence[actionIndex];
  const player = currentAction.player;
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <div className="flex flex-row">
        <div className="flex flex-col p-2">
          <ul className="flex flex-row space-x-2 bg-red-600 p-2 overflow-hidden overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <li
                key={num}
                className="w-16 h-16 flex items-center justify-center bg-gray-800"
              >
                {pickedUnits[2][num - 1] || num}
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between items-center m-2">
            <h3 className="text-2xl">Player 2</h3>
            <ul className="flex flex-row overflow-hidden overflow-x-auto">
              {[1].map((num) => (
                <li
                  key={num}
                  className="w-16 h-16 flex items-center justify-center bg-gray-800"
                >
                  {bannedClasses[2][num - 1] || `B${num}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between items-center m-2">
        <div className="flex flex-row w-full overflow-x-auto">
          <div className="flex-1 grid grid-cols-4 gap-2">
            {CLASSES.map((unitClass) => {
              const isBanned =
                bannedClasses[2].includes(unitClass) ||
                bannedClasses[1].includes(unitClass);
              const playerUnitCount = pickedUnits[player].filter(
                (unit) => unit === unitClass
              ).length;
              const isMaxPicked = playerUnitCount >= 2;

              return (
                <div
                  key={unitClass}
                  onClick={() => !isMaxPicked && draftPick(unitClass)}
                  className={clsx(
                    "aspect-square flex items-center justify-center bg-gray-800",
                    isBanned && "bg-red-600 opacity-75 cursor-none",
                    isMaxPicked && "opacity-70 cursor-none"
                  )}
                >
                  {unitClass}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row items-end jus col-auto gap-2">
          <div className="aspect-square w-60 flex items-center justify-center bg-gray-800">
            Selected Unit
          </div>
          <div className="h-46 w-46 flex items-center justify-center bg-gray-800">
            Class Preview
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <ul className="flex flex-row space-x-2 bg-blue-600 p-2 overflow-hidden overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <li
                key={num}
                className="w-16 h-16 flex items-center justify-center bg-gray-800"
              >
                {pickedUnits[1][num - 1] || num}
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-between items-center m-2">
            <h3 className="text-2xl">Player 1</h3>
            <ul className="flex flex-row overflow-hidden overflow-x-auto">
              {[1].map((num) => (
                <li
                  key={num}
                  className="w-16 h-16 flex items-center justify-center bg-gray-800"
                >
                  {bannedClasses[1][num - 1] || `B${num}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
