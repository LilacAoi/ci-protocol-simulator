import React from 'react';

interface MenuScreenProps {
  onStart: () => void;
}

export const MenuScreen: React.FC<MenuScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">TooHuman Roguelike</h1>
        <h2 className="text-4xl text-red-500 mb-8">Freyja's Journey</h2>

        <div className="mb-12 text-xl text-gray-300 max-w-2xl">
          <p className="mb-4">
            As Freyja, the goddess of war and beauty, embark on a perilous journey through
            mechanical wastelands filled with AI drones and ancient machinery.
          </p>
          <p>
            Face the legendary Garmr, the Hound of Hell, in an epic battle for survival.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onStart}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded transition"
          >
            Start Adventure
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>© 2024 TooHuman Roguelike PoC</p>
          <p>Inspired by Ninja Theory's Sensuki Action</p>
        </div>
      </div>
    </div>
  );
};
