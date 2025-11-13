import { useState, useCallback } from 'react';
import type { GameState, Player, Enemy, Boss, DropLogEntry } from '../types';
import { initializePlayer } from '../utils/playerInitializer';
import { generateStageEnemies, generateBoss } from '../utils/enemyGenerator';

export function useGameLogic() {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [player, setPlayer] = useState<Player | null>(null);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [boss, setBoss] = useState<Boss | null>(null);
  const [dropLog, setDropLog] = useState<DropLogEntry[]>([]);
  const [currentStage, setCurrentStage] = useState(1);

  // ゲーム開始
  const startGame = useCallback(() => {
    const newPlayer = initializePlayer();
    setPlayer(newPlayer);
    setGameState('stage');
    setCurrentStage(1);

    const stageEnemies = generateStageEnemies(1);
    setEnemies(stageEnemies);
    setBoss(null);
    setDropLog([]);
  }, []);

  // ボス戦開始
  const startBossFight = useCallback(() => {
    if (!player) return;
    setGameState('boss-fight');
    const newBoss = generateBoss();
    setBoss(newBoss);
  }, [player]);

  // 敵を倒す
  const defeatenemy = useCallback((enemyId: string) => {
    setEnemies((prevEnemies) => {
      const enemy = prevEnemies.find((e) => e.id === enemyId);
      if (!enemy) return prevEnemies;

      // ドロップログに追加
      enemy.loot.forEach((item) => {
        const isWeapon = 'type' in item;
        setDropLog((prev) => [
          ...prev,
          {
            itemName: item.name,
            itemType: isWeapon ? 'weapon' : 'armor',
            rarity: item.rarity,
            timestamp: Date.now(),
          },
        ]);
      });

      // プレイヤーのインベントリに追加
      setPlayer((prevPlayer) => {
        if (!prevPlayer) return prevPlayer;
        const updated = { ...prevPlayer };
        enemy.loot.forEach((item) => {
          if ('type' in item) {
            updated.inventory.weapons.push(item);
          } else {
            updated.inventory.armor.push(item);
          }
        });
        return updated;
      });

      // 敵を削除
      return prevEnemies.filter((e) => e.id !== enemyId);
    });
  }, []);

  // ボスを倒す
  const defeatBoss = useCallback(() => {
    if (!boss) return;

    // ドロップログに追加
    boss.loot.forEach((item) => {
      const isWeapon = 'type' in item;
      setDropLog((prev) => [
        ...prev,
        {
          itemName: item.name,
          itemType: isWeapon ? 'weapon' : 'armor',
          rarity: item.rarity,
          timestamp: Date.now(),
        },
      ]);
    });

    // プレイヤーのインベントリに追加
    setPlayer((prevPlayer) => {
      if (!prevPlayer) return prevPlayer;
      const updated = { ...prevPlayer };
      boss.loot.forEach((item) => {
        if ('type' in item) {
          updated.inventory.weapons.push(item);
        } else {
          updated.inventory.armor.push(item);
        }
      });
      return updated;
    });

    setBoss(null);
    setGameState('victory');
  }, [boss]);

  // プレイヤーが倒される
  const playerDefeated = useCallback(() => {
    setGameState('game-over');
  }, []);


  // リスタート
  const restart = useCallback(() => {
    setGameState('menu');
    setPlayer(null);
    setEnemies([]);
    setBoss(null);
    setDropLog([]);
    setCurrentStage(1);
  }, []);

  return {
    gameState,
    player,
    enemies,
    boss,
    dropLog,
    currentStage,
    startGame,
    startBossFight,
    defeatenemy,
    defeatBoss,
    playerDefeated,
    restart,
    setPlayer,
  };
}
