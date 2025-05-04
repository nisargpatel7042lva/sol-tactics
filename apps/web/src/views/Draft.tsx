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
  const { state, draftPick, previewClass } = useGameStore();

  const { draft } = state;
  const { preview, actionIndex, actionSequence, bannedClasses, pickedUnits } =
    draft;

  const currentAction = actionSequence[actionIndex];
  const player = currentAction.player;

  const isBanned = (unitClass: string) =>
    bannedClasses[2].includes(unitClass) ||
    bannedClasses[1].includes(unitClass);

  const isMaxPicked = (unitClass: string) => {
    const playerUnitCount = pickedUnits[player].filter(
      (unit) => unit === unitClass
    ).length;
    return playerUnitCount >= 2;
  };

  const handleSingleClick = (unit: string) => {
    if (!isBanned(unit) && !isMaxPicked(unit)) {
      previewClass(unit);
    }
  };

  const handleDoubleClick = (unit: string) => {
    if (!isBanned(unit) && !isMaxPicked(unit)) {
      draftPick(unit);
    }
  };

  const handleConfirm = () => {
    if (preview) {
      draftPick(preview);
    }
  };

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
      <div className="flex-1 flex-col justify-items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row w-full overflow-x-auto">
            <div className="flex-1 grid grid-cols-4 gap-2 p-2 mb-2">
              {CLASSES.map((unitClass) => {
                return (
                  <div
                    key={unitClass}
                    onClick={() => handleSingleClick(unitClass)}
                    onDoubleClick={() => handleDoubleClick(unitClass)}
                    className={clsx(
                      "aspect-square flex items-center justify-center bg-gray-800 cursor-pointer",
                      isBanned(unitClass) &&
                        "bg-red-600 opacity-75 cursor-none",
                      isMaxPicked(unitClass) && "opacity-70 cursor-none",
                      preview === unitClass && "ring-2 ring-cyan-400"
                    )}
                  >
                    {unitClass}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {preview && !(isBanned(preview) || isMaxPicked(preview)) && (
          <button
            onClick={handleConfirm}
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition cursor-pointer w-2xl"
          >
            Confirm Selection
          </button>
        )}
      </div>
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-col items-end gap-2">
          <div className="aspect-square w-60 flex flex-col items-center justify-center bg-gray-800 p-4">
            {preview ? (
              <>
                <h3 className="text-xl font-bold mb-2">{preview}</h3>
                <p className="text-sm text-gray-300 text-center">
                  Class details and abilities will be shown here
                </p>
              </>
            ) : (
              <p className="text-gray-400">Select a class to preview</p>
            )}
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
