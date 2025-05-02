import { useGameStore } from "@sol-tactics/game-state";

export default function Pick() {
  const { dispatch } = useGameStore();

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <div className="flex flex-row">
        <div className="flex flex-col p-2">
          <ul className="flex flex-row space-x-2 bg-red-600 p-2 overflow-hidden overflow-x-auto">
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              1
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              2
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              3
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              4
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              5
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              6
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              7
            </li>
          </ul>
          <div className="flex flex-row justify-between items-center m-2">
            <h3 className="text-2xl">Opponent</h3>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              B1
            </li>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between items-center m-2">
        <div className="flex flex-row w-full overflow-x-auto">
          <div className="flex-1 grid grid-cols-4 gap-2">
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Chemist
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Warrior
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Mage
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Duelist
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Archer
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Squire
            </div>
            <div className="aspect-square flex items-center justify-center bg-gray-800">
              Clerk
            </div>
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
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              1
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              2
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              3
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              4
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              5
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              6
            </li>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              7
            </li>
          </ul>
          <div className="flex flex-row justify-between items-center m-2">
            <h3 className="text-2xl">You</h3>
            <li className="w-16 h-16 flex items-center justify-center bg-gray-800">
              B1
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
