import React from 'react';

interface GameOverScreenProps {
  onRestart: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({ onRestart }) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-red-900 to-black flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-600 mb-4">GAME OVER</h1>
        <p className="text-2xl text-gray-300 mb-8">
          Freyja has fallen...
        </p>

        <div className="bg-gray-800 rounded-lg p-8 border-2 border-red-600 max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-300 mb-6">
            Your adventure has come to an end. Though you fought valiantly,
            the forces of darkness proved too strong.
          </p>

          <p className="text-gray-400 mb-8">
            Will you attempt the journey again?
          </p>

          <button
            onClick={onRestart}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold rounded transition"
          >
            Try Again
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          © 2024 TooHuman Roguelike PoC
        </p>
      </div>
    </div>
  );
};
