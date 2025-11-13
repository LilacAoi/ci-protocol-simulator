import React from 'react';
import type { Player } from '../types';

interface VictoryScreenProps {
  player: Player;
  onRestart: () => void;
}

export const VictoryScreen: React.FC<VictoryScreenProps> = ({ player, onRestart }) => {
  const totalWeapons = player.inventory.weapons.length;
  const totalArmor = player.inventory.armor.length;

  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-900 to-black flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-green-400 mb-4">VICTORY!</h1>
        <h2 className="text-4xl text-white mb-8">Garmr Defeated</h2>

        <div className="bg-gray-800 rounded-lg p-8 border-2 border-green-500 max-w-2xl mx-auto mb-8">
          <div className="mb-8">
            <p className="text-2xl text-white mb-4">You have triumphed as {player.name}!</p>
            <p className="text-gray-300">
              The Hound of Hell has fallen. Your journey through the mechanical wastelands is complete.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Weapons Collected</p>
              <p className="text-3xl font-bold text-yellow-400">{totalWeapons}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Armor Collected</p>
              <p className="text-3xl font-bold text-blue-400">{totalArmor}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Final Health</p>
              <p className="text-3xl font-bold text-red-400">
                {Math.max(0, player.stats.currentHealth)} HP
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Items Equipped</p>
              <p className="text-3xl font-bold text-green-400">6</p>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded transition"
          >
            Return to Menu
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          © 2024 TooHuman Roguelike PoC
        </p>
      </div>
    </div>
  );
};
