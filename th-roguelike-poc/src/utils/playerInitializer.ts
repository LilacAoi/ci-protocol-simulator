import type { Player, PlayerStats, Ability } from '../types';
import { generateWeapon, generateArmor } from './itemGenerator';

export function initializePlayer(): Player {
  const stats: PlayerStats = {
    maxHealth: 100,
    currentHealth: 100,
    attack: 15,
    defense: 10,
    speed: 1.0,
    critChance: 0.1,
  };

  const abilities: Ability[] = [
    {
      id: 'freyja_pistol_mastery',
      name: 'Pistol Mastery',
      description: 'Double damage with pistols',
      cooldown: 0,
      currentCooldown: 0,
      execute: () => {
        console.log('Pistol Mastery activated');
      },
    },
    {
      id: 'freyja_critical_strike',
      name: 'Critical Strike',
      description: 'Deal 2x damage',
      cooldown: 3,
      currentCooldown: 0,
      execute: () => {
        console.log('Critical Strike activated');
      },
    },
    {
      id: 'freyja_battle_cry',
      name: "Valiant's Might",
      description: 'Battle cry that sends enemies flying',
      cooldown: 8,
      currentCooldown: 0,
      execute: () => {
        console.log("Valiant's Might activated");
      },
    },
  ];

  // 初期装備を生成
  const startingWeapon = generateWeapon('pistol');
  const startingHelm = generateArmor('helm');
  const startingTorso = generateArmor('torso');
  const startingBoot = generateArmor('boot');

  return {
    id: 'player_freyja',
    name: 'Freyja',
    class: 'champion',
    stats,
    equipment: {
      weapon: startingWeapon,
      helm: startingHelm,
      torso: startingTorso,
      shoulder: null,
      gauntlet: null,
      legging: null,
      boot: startingBoot,
    },
    inventory: {
      weapons: [],
      armor: [],
      maxSlots: 20,
    },
    position: { x: 100, y: 300 },
    abilities,
  };
}

export function calculateTotalStats(player: Player): PlayerStats {
  const baseStats = { ...player.stats };

  // 装備からのボーナス計算
  if (player.equipment.weapon) {
    baseStats.attack += player.equipment.weapon.damage;
    baseStats.critChance = Math.min(
      baseStats.critChance + (player.equipment.weapon.bonusStats?.critChance || 0),
      0.5
    );
  }

  if (player.equipment.helm) {
    baseStats.defense += player.equipment.helm.defense;
    baseStats.maxHealth += player.equipment.helm.bonusStats?.health || 0;
  }

  if (player.equipment.torso) {
    baseStats.defense += player.equipment.torso.defense;
    baseStats.maxHealth += player.equipment.torso.bonusStats?.health || 0;
  }

  if (player.equipment.boot) {
    baseStats.speed += 0.2;
  }

  // インベントリの装備からのボーナス（装備されていない場合は含めない）
  return baseStats;
}
