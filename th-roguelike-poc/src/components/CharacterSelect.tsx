import React from 'react';
import type { Player } from '../types';

interface CharacterSelectProps {
  player: Player;
  onStart: () => void;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({ player, onStart }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-purple-900 to-black flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-8">
        <h1 className="text-5xl font-bold text-center text-white mb-12">
          Select Your Champion
        </h1>

        <div className="bg-gray-800 rounded-lg p-8 border-2 border-red-500">
          <div className="flex items-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-900 rounded flex items-center justify-center">
              <span className="text-6xl">⚔️</span>
            </div>
            <div className="ml-8">
              <h2 className="text-4xl font-bold text-white mb-2">{player.name}</h2>
              <p className="text-xl text-red-400 mb-4 capitalize">{player.class}</p>
              <p className="text-gray-300">
                Goddess of War and Beauty. Skilled in combat and tactical warfare.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Health</p>
              <p className="text-2xl font-bold text-red-400">
                {player.stats.currentHealth}/{player.stats.maxHealth}
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Attack</p>
              <p className="text-2xl font-bold text-yellow-400">{player.stats.attack}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Defense</p>
              <p className="text-2xl font-bold text-blue-400">{player.stats.defense}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <p className="text-gray-400 text-sm">Speed</p>
              <p className="text-2xl font-bold text-green-400">
                {player.stats.speed.toFixed(1)}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Abilities</h3>
            <div className="space-y-2">
              {player.abilities.map((ability) => (
                <div key={ability.id} className="bg-gray-700 p-3 rounded">
                  <p className="font-bold text-white">{ability.name}</p>
                  <p className="text-sm text-gray-300">{ability.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onStart}
            className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded transition"
          >
            Begin Adventure
          </button>
        </div>
      </div>
    </div>
  );
};
