import type { Enemy, EnemyType, Boss, Weapon, Armor } from '../types';
import { generateRandomItem, generateWeapon, generateArmor } from './itemGenerator';

export function generateEnemy(type: EnemyType, position: { x: number; y: number }): Enemy {
  const baseStats = {
    mephit: {
      name: 'Mephit',
      maxHealth: 30,
      attack: 8,
      defense: 3,
      speed: 1.4,
      lootCount: 1,
    },
    'missile-mephit': {
      name: 'Missile Mephit',
      maxHealth: 40,
      attack: 12,
      defense: 2,
      speed: 0.9,
      lootCount: 2,
    },
    golem: {
      name: 'Frost Golem',
      maxHealth: 80,
      attack: 10,
      defense: 12,
      speed: 0.6,
      lootCount: 2,
    },
    'elite-mephit': {
      name: 'Elite Mephit',
      maxHealth: 50,
      attack: 15,
      defense: 5,
      speed: 1.5,
      lootCount: 3,
    },
  };

  const stats = baseStats[type];
  const loot: (Weapon | Armor)[] = [];

  for (let i = 0; i < stats.lootCount; i++) {
    loot.push(generateRandomItem());
  }

  return {
    id: `enemy_${Date.now()}_${Math.random()}`,
    type,
    name: stats.name,
    maxHealth: stats.maxHealth,
    currentHealth: stats.maxHealth,
    attack: stats.attack,
    defense: stats.defense,
    speed: stats.speed,
    position,
    loot,
  };
}

export function generateBoss(): Boss {
  // ガルム（地獄の番犬）- 2フェーズボス
  return {
    id: `boss_garm_${Date.now()}`,
    name: 'Garmr - The Hound of Hell',
    maxHealth: 300,
    currentHealth: 300,
    attack: 20,
    defense: 10,
    speed: 1.2,
    phase: 1,
    position: { x: 400, y: 300 },
    abilities: [
      {
        id: 'garm_claw',
        name: 'Claw Slash',
        description: 'Rapid claw attacks',
        cooldown: 2,
        currentCooldown: 0,
        execute: () => {},
      },
      {
        id: 'garm_charge',
        name: 'Charge Attack',
        description: 'Charge at the player',
        cooldown: 5,
        currentCooldown: 0,
        execute: () => {},
      },
    ],
    loot: [
      generateWeapon('rifle'),
      generateWeapon('cannon'),
      generateArmor('torso'),
      generateArmor('helm'),
      generateArmor('boot'),
    ],
  };
}

export function generateStageEnemies(stageNumber: number): Enemy[] {
  const enemyCount = 8 + stageNumber * 2;
  const enemies: Enemy[] = [];
  const types: EnemyType[] = ['mephit', 'missile-mephit', 'golem', 'elite-mephit'];

  for (let i = 0; i < enemyCount; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const x = Math.random() * 700 + 50;
    const y = Math.random() * 500 + 50;
    enemies.push(generateEnemy(type, { x, y }));
  }

  return enemies;
}
