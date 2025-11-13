import React, { useEffect, useState } from 'react';
import type { Player, Enemy, Boss, DropLogEntry } from '../types';
import { HealthBar } from './HealthBar';
import { InventoryPanel } from './InventoryPanel';
import { DropLog } from './DropLog';

interface GameScreenProps {
  player: Player;
  enemies: Enemy[];
  boss: Boss | null;
  dropLog: DropLogEntry[];
  onEnemyDefeated: (enemyId: string) => void;
  onBossDefeated: () => void;
  onGameOver: () => void;
  onStartBoss: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  player,
  enemies,
  boss,
  dropLog,
  onEnemyDefeated,
  onBossDefeated,
  onStartBoss,
}) => {
  const [showInventory, setShowInventory] = useState(false);
  const [enemyDefeatedCount, setEnemyDefeatedCount] = useState(0);

  // 敵を自動的に倒すシミュレーション（PoC用）
  useEffect(() => {
    if (enemies.length === 0 && boss === null && enemyDefeatedCount > 0) {
      const timer = setTimeout(onStartBoss, 2000);
      return () => clearTimeout(timer);
    }
  }, [enemies, boss, enemyDefeatedCount, onStartBoss]);

  // 定期的に敵を倒す（PoC用の自動戦闘）
  useEffect(() => {
    if (!boss && enemies.length > 0 && !showInventory) {
      const timer = setInterval(() => {
        const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        if (randomEnemy) {
          onEnemyDefeated(randomEnemy.id);
          setEnemyDefeatedCount((prev) => prev + 1);
        }
      }, 1500);

      return () => clearInterval(timer);
    }
  }, [enemies, boss, onEnemyDefeated, showInventory]);

  // ボス戦闘シミュレーション
  useEffect(() => {
    if (boss && !showInventory) {
      const damageInterval = setInterval(() => {
        // ボスにダメージを与えるシミュレーション
        const damage = Math.floor(Math.random() * 30) + 10;
        const newHealth = Math.max(0, boss.currentHealth - damage);

        if (newHealth <= 0) {
          onBossDefeated();
        }
      }, 2000);

      return () => clearInterval(damageInterval);
    }
  }, [boss, onBossDefeated, showInventory]);

  return (
    <div className="w-full h-screen bg-gray-900 text-white overflow-hidden">
      <div className="flex h-full">
        {/* メイン表示エリア */}
        <div className="flex-1 flex flex-col">
          {/* ゲーム画面（見下ろし視点） */}
          <div className="flex-1 bg-gray-800 relative overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              {/* グリッド背景 */}
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#333"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="800" height="600" fill="url(#grid)" />

              {/* プレイヤー */}
              <g transform={`translate(${player.position.x}, ${player.position.y})`}>
                <circle cx="0" cy="0" r="15" fill="#FF0000" />
                <text x="0" y="30" textAnchor="middle" fontSize="12" fill="#FFF">
                  Freyja
                </text>
              </g>

              {/* 敵 */}
              {enemies.map((enemy) => (
                <g key={enemy.id} transform={`translate(${enemy.position.x}, ${enemy.position.y})`}>
                  <circle cx="0" cy="0" r="12" fill="#00FF00" opacity="0.7" />
                  <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#0F0">
                    {enemy.type}
                  </text>
                </g>
              ))}

              {/* ボス */}
              {boss && (
                <g transform={`translate(${boss.position.x}, ${boss.position.y})`}>
                  <circle cx="0" cy="0" r="30" fill="#FF6600" />
                  <text x="0" y="40" textAnchor="middle" fontSize="14" fill="#FFF" fontWeight="bold">
                    GARMR
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* ステータス表示 */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="mb-3">
              <HealthBar
                name="Freyja"
                currentHealth={player.stats.currentHealth}
                maxHealth={player.stats.maxHealth}
                isPlayer
              />
            </div>
            {boss && (
              <div className="mb-3">
                <HealthBar
                  name={boss.name}
                  currentHealth={boss.currentHealth}
                  maxHealth={boss.maxHealth}
                />
              </div>
            )}
          </div>
        </div>

        {/* サイドパネル */}
        <div className="w-80 bg-gray-900 border-l border-gray-700 overflow-y-auto">
          {showInventory ? (
            <InventoryPanel
              player={player}
              onClose={() => setShowInventory(false)}
            />
          ) : (
            <div className="p-4">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 text-red-400">Enemies</h2>
                <p className="text-gray-300 mb-2">
                  Remaining: <span className="text-yellow-400">{enemies.length}</span>
                </p>
                <p className="text-gray-300 mb-4">
                  Defeated: <span className="text-green-400">{enemyDefeatedCount}</span>
                </p>
                {enemies.length === 0 && boss === null && (
                  <div className="bg-green-800 border border-green-500 p-3 rounded text-green-100">
                    Enemies cleared! Boss approaching...
                  </div>
                )}
              </div>

              <DropLog log={dropLog} />

              <button
                onClick={() => setShowInventory(true)}
                className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              >
                Open Inventory
              </button>

              <div className="mt-6 text-xs text-gray-500">
                <p>Stage: 1</p>
                <p>Defeated: {enemyDefeatedCount} enemies</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
