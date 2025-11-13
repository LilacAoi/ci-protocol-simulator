import React, { useMemo } from 'react';
import type { DropLogEntry } from '../types';
import { RARITY_COLORS, RARITY_NAMES } from '../types';

interface DropLogProps {
  log: DropLogEntry[];
}

export const DropLog: React.FC<DropLogProps> = ({ log }) => {
  // 最新5件を表示
  const recentDrops = useMemo(() => {
    return log.slice(-5).reverse();
  }, [log]);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-3 text-green-400">Recent Drops</h2>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {recentDrops.length === 0 ? (
          <p className="text-gray-500 text-sm italic">No items dropped yet</p>
        ) : (
          recentDrops.map((drop, index) => (
            <div
              key={`${drop.timestamp}_${index}`}
              className="bg-gray-800 p-2 rounded border-l-4 text-sm"
              style={{ borderLeftColor: RARITY_COLORS[drop.rarity] }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-white">{drop.itemName}</p>
                  <p className="text-xs text-gray-400">
                    {drop.itemType === 'weapon' ? '⚔️ Weapon' : '🛡️ Armor'}
                  </p>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    backgroundColor: RARITY_COLORS[drop.rarity] + '40',
                    color: RARITY_COLORS[drop.rarity],
                  }}
                >
                  {RARITY_NAMES[drop.rarity]}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      <p className="text-xs text-gray-600 mt-2">
        Total drops: {log.length}
      </p>
    </div>
  );
};
