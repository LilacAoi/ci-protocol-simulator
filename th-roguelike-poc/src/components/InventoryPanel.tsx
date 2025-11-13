import React, { useState } from 'react';
import type { Player } from '../types';
import { RARITY_COLORS, RARITY_NAMES } from '../types';

interface InventoryPanelProps {
  player: Player;
  onClose: () => void;
}

export const InventoryPanel: React.FC<InventoryPanelProps> = ({ player, onClose }) => {
  const [activeTab, setActiveTab] = useState<'equipment' | 'weapons' | 'armor'>('equipment');

  const getTotalStats = () => {
    let totalDefense = 0;
    let totalHealth = 0;

    if (player.equipment.helm) totalDefense += player.equipment.helm.defense;
    if (player.equipment.torso) totalDefense += player.equipment.torso.defense;
    if (player.equipment.shoulder) totalDefense += player.equipment.shoulder.defense;
    if (player.equipment.gauntlet) totalDefense += player.equipment.gauntlet.defense;
    if (player.equipment.legging) totalDefense += player.equipment.legging.defense;
    if (player.equipment.boot) totalDefense += player.equipment.boot.defense;

    if (player.equipment.helm?.bonusStats?.health) totalHealth += player.equipment.helm.bonusStats.health;
    if (player.equipment.torso?.bonusStats?.health) totalHealth += player.equipment.torso.bonusStats.health;

    return { totalDefense, totalHealth };
  };

  const stats = getTotalStats();

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Inventory</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('equipment')}
          className={`px-3 py-2 rounded transition ${
            activeTab === 'equipment'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Equipment
        </button>
        <button
          onClick={() => setActiveTab('weapons')}
          className={`px-3 py-2 rounded transition ${
            activeTab === 'weapons'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Weapons ({player.inventory.weapons.length})
        </button>
        <button
          onClick={() => setActiveTab('armor')}
          className={`px-3 py-2 rounded transition ${
            activeTab === 'armor'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Armor ({player.inventory.armor.length})
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'equipment' && (
          <div className="space-y-2">
            <div className="bg-gray-800 p-3 rounded border border-gray-700 mb-4">
              <p className="text-sm text-gray-400">Total Defense Bonus</p>
              <p className="text-2xl font-bold text-blue-400">{stats.totalDefense}</p>
            </div>

            {[
              { slot: 'helm' as const, name: 'Helmet', icon: '🎖️' },
              { slot: 'torso' as const, name: 'Chest', icon: '🛡️' },
              { slot: 'shoulder' as const, name: 'Shoulder', icon: '⚔️' },
              { slot: 'gauntlet' as const, name: 'Gauntlet', icon: '🥊' },
              { slot: 'legging' as const, name: 'Legging', icon: '🦵' },
              { slot: 'boot' as const, name: 'Boot', icon: '👢' },
            ].map(({ slot, name, icon }) => {
              const equipped = player.equipment[slot];
              return (
                <div
                  key={slot}
                  className="bg-gray-800 p-3 rounded border-l-4 border-gray-600"
                  style={
                    equipped
                      ? {
                          borderLeftColor: RARITY_COLORS[equipped.rarity],
                        }
                      : {}
                  }
                >
                  <p className="text-sm text-gray-400">{icon} {name}</p>
                  {equipped ? (
                    <div>
                      <p className="font-bold text-white">{equipped.name}</p>
                      <p className="text-xs text-gray-400">
                        Defense: <span className="text-blue-400">+{equipped.defense}</span>
                      </p>
                      <p className="text-xs" style={{ color: RARITY_COLORS[equipped.rarity] }}>
                        {RARITY_NAMES[equipped.rarity]}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">Empty</p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'weapons' && (
          <div className="space-y-2">
            {player.inventory.weapons.length === 0 ? (
              <p className="text-gray-400 italic">No weapons in inventory</p>
            ) : (
              player.inventory.weapons.map((weapon) => (
                <div
                  key={weapon.id}
                  className="bg-gray-800 p-3 rounded border-l-4"
                  style={{ borderLeftColor: RARITY_COLORS[weapon.rarity] }}
                >
                  <p className="font-bold text-white">{weapon.name}</p>
                  <p className="text-xs text-gray-400">
                    Type: <span className="capitalize">{weapon.type}</span>
                  </p>
                  <p className="text-xs text-yellow-400">
                    Damage: {weapon.damage}
                  </p>
                  <p className="text-xs" style={{ color: RARITY_COLORS[weapon.rarity] }}>
                    {RARITY_NAMES[weapon.rarity]}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'armor' && (
          <div className="space-y-2">
            {player.inventory.armor.length === 0 ? (
              <p className="text-gray-400 italic">No armor in inventory</p>
            ) : (
              player.inventory.armor.map((armor) => (
                <div
                  key={armor.id}
                  className="bg-gray-800 p-3 rounded border-l-4"
                  style={{ borderLeftColor: RARITY_COLORS[armor.rarity] }}
                >
                  <p className="font-bold text-white">{armor.name}</p>
                  <p className="text-xs text-gray-400">
                    Slot: <span className="capitalize">{armor.slot}</span>
                  </p>
                  <p className="text-xs text-blue-400">
                    Defense: +{armor.defense}
                  </p>
                  <p className="text-xs" style={{ color: RARITY_COLORS[armor.rarity] }}>
                    {RARITY_NAMES[armor.rarity]}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
