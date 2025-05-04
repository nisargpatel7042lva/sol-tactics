import { useGameStore } from "@sol-tactics/game-state";
import gameClasses from "@sol-tactics/game-classes";
import clsx from "clsx";

export default function Draft() {
  const { state, draftPick, previewClass } = useGameStore((store) => {
    return store;
  });

  const { draft } = state;
  const { preview, actionIndex, actionSequence, bannedClasses, pickedUnits } =
    draft;

  const currentAction = actionSequence[actionIndex];
  const player = currentAction.player;
  const classPreview = gameClasses[preview as number];

  const isBanned = (unitClassIndex: number) =>
    bannedClasses[2].includes(unitClassIndex) ||
    bannedClasses[1].includes(unitClassIndex);

  const isMaxPicked = (unitClassIndex: number) => {
    const playerUnitCount = pickedUnits[player].filter(
      (unit) => unit === unitClassIndex
    ).length;
    return playerUnitCount >= 2;
  };

  const handleSingleClick = (unitClassIndex: number) => {
    if (!isBanned(unitClassIndex) && !isMaxPicked(unitClassIndex)) {
      previewClass(unitClassIndex);
    }
  };

  const handleDoubleClick = (unitClassIndex: number) => {
    if (!isBanned(unitClassIndex) && !isMaxPicked(unitClassIndex)) {
      draftPick(unitClassIndex);
    }
  };

  const handleConfirm = () => {
    if (preview) {
      draftPick(preview);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col p-2">
          <ul className="flex flex-row space-x-2 bg-red-600 p-2 overflow-hidden overflow-x-auto">
            {actionSequence
              .filter(({ player, type }) => player === 2 && type === "pick")
              .map((_sequence, index) => (
                <li
                  key={index}
                  className="w-16 h-16 flex items-center justify-center bg-gray-800"
                >
                  {gameClasses[pickedUnits[2][index]]?.thumbnail ? (
                    <img
                      src={gameClasses[pickedUnits[2][index]]?.thumbnail}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    gameClasses[pickedUnits[2][index]]?.name || index
                  )}
                </li>
              ))}
          </ul>
          <div className="flex flex-row justify-between items-center m-2">
            <h3 className="text-2xl">Player 2</h3>
            <ul className="flex flex-row overflow-hidden overflow-x-auto">
              {actionSequence
                .filter(({ player, type }) => player === 2 && type === "ban")
                .map((_sequence, index) => (
                  <li
                    key={index}
                    className="w-16 h-16 flex items-center justify-center bg-gray-800"
                  >
                    {gameClasses[bannedClasses[2][index]]?.thumbnail ? (
                      <img
                        src={gameClasses[bannedClasses[2][index]]?.thumbnail}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      `B${index}`
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <img src="/logo.png" className="w-40" />
        </div>
      </div>
      <div className="flex-1 flex-col justify-items-center">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-row w-full overflow-x-auto">
            <div className="flex-1 grid grid-cols-4 gap-2 p-2 mb-2">
              {gameClasses.map(({ name, thumbnail }, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleSingleClick(index)}
                    onDoubleClick={() => handleDoubleClick(index)}
                    className={clsx(
                      "aspect-square flex py-2 flex-col items-center justify-center bg-gray-800 cursor-pointer",
                      isBanned(index) && "bg-red-800 opacity-50 cursor-none",
                      isMaxPicked(index) && "opacity-50 cursor-none",
                      preview === index && "ring-2 ring-cyan-400"
                    )}
                  >
                    {thumbnail && (
                      <img
                        src={thumbnail}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <h3 className="text-xl">{name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {classPreview && (
          <button
            onClick={handleConfirm}
            className="bg-cyan-400 hover:bg-cyan-500 text-black px-4 py-4 text-xl rounded-lg shadow-md transition cursor-pointer w-4xl"
          >
            Confirm Selection
          </button>
        )}
      </div>
      <div className="flex flex-row justify-between items-end">
        {classPreview && (
          <div className="flex flex-row items-end gap-2 p-2">
            <div className="flex flex-col items-end">
              <div className="aspect-square w-60 flex flex-col items-center justify-center bg-gray-800 p-4">
                <img
                  src={classPreview?.thumbnail}
                  className="w-full h-full object-cover"
                />
                <h3>{classPreview.name}</h3>
              </div>
            </div>
            <div className="flex flex-row items-center p-4 bg-gray-800">
              <div className="flex flex-col justify-start mr-8">
                <h3 className="text-lg font-bold mb-2">Stats</h3>
                <ul className="text-sm text-gray-300">
                  {Object.entries(classPreview.stats).map(([key, value]) => {
                    const statColors: Record<string, string> = {
                      HP: "bg-red-500",
                      AttackDamage: "bg-yellow-500",
                      AbilityPower: "bg-blue-500",
                      ArmorReduction: "bg-green-500",
                      MagicResist: "bg-purple-500",
                      MoveSpeed: "bg-orange-500",
                      CritChance: "bg-pink-500",
                    };
                    return (
                      <li key={key} className="flex items-center mb-1">
                        <span
                          className={`w-4 h-4 rounded-full ${statColors[key]} glow-effect mr-2`}
                        ></span>
                        {key
                          .replace(/([a-z])([A-Z])/g, "$1 $2")
                          .split(" ")
                          .map((word) => word[0].toUpperCase())
                          .join("")}
                        : {value}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-bold mb-2">Passive</h3>
                <p className="text-sm text-gray-300 mb-4">
                  <strong>{classPreview.passive.name}:</strong>{" "}
                  {classPreview.passive.effect}
                </p>
                <h3 className="text-lg font-bold my-2">Abilities</h3>
                <ul className="text-sm text-gray-300">
                  {classPreview.abilities.map((ability, index) => (
                    <li key={index} className="mb-2">
                      <strong>{ability.name}:</strong> {ability.description}{" "}
                      {ability.cost !== null ? `(Cost: ${ability.cost})` : ""}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col p-2 self-end ml-auto">
          <ul className="flex flex-row space-x-2 bg-blue-600 p-2 overflow-hidden overflow-x-auto">
            {actionSequence
              .filter(({ player, type }) => player === 1 && type === "pick")
              .map((_sequence, index) => (
                <li
                  key={index}
                  className="w-16 h-16 flex items-center justify-center bg-gray-800"
                >
                  {gameClasses[pickedUnits[1][index]]?.thumbnail ? (
                    <img
                      src={gameClasses[pickedUnits[1][index]]?.thumbnail}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    gameClasses[pickedUnits[1][index]]?.name || index
                  )}
                </li>
              ))}
          </ul>
          <div className="flex flex-row justify-between items-center mx-2 mt-2">
            <h3 className="text-2xl">Player 1</h3>
            <ul className="flex flex-row overflow-hidden overflow-x-auto">
              {actionSequence
                .filter(({ player, type }) => player === 1 && type === "ban")
                .map((_, index) => (
                  <li
                    key={index}
                    className="w-16 h-16 flex items-center justify-center bg-gray-800"
                  >
                    {gameClasses[bannedClasses[1][index]]?.thumbnail ? (
                      <img
                        src={gameClasses[bannedClasses[1][index]]?.thumbnail}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      `B${index}`
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
