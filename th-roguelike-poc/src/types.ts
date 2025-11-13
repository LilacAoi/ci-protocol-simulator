// Rarity types
export type Rarity = 'common' | 'less-common' | 'uncommon' | 'rare' | 'very-rare' | 'epic';

export const RARITY_COLORS: Record<Rarity, string> = {
  'common': '#808080',
  'less-common': '#008000',
  'uncommon': '#0000FF',
  'rare': '#800080',
  'very-rare': '#FFA500',
  'epic': '#FF0000',
};

export const RARITY_NAMES: Record<Rarity, string> = {
  'common': 'Common',
  'less-common': 'Less Common',
  'uncommon': 'Uncommon',
  'rare': 'Rare',
  'very-rare': 'Very Rare',
  'epic': 'Epic/Elite',
};

// Weapon types
export type WeaponType = 'sword' | 'staff' | 'hammer' | 'pistol' | 'rifle' | 'cannon';

export interface Weapon {
  id: string;
  name: string;
  type: WeaponType;
  damage: number;
  attackSpeed: number;
  rarity: Rarity;
  runeSlots: number;
  bonusStats?: {
    critChance?: number;
    fireRate?: number;
    range?: number;
  };
}

// Armor types
export type ArmorSlot = 'helm' | 'torso' | 'shoulder' | 'gauntlet' | 'legging' | 'boot';

export interface Armor {
  id: string;
  name: string;
  slot: ArmorSlot;
  defense: number;
  rarity: Rarity;
  runeSlots: number;
  bonusStats?: {
    health?: number;
    stamina?: number;
    resistance?: number;
  };
}

// Rune types
export interface Rune {
  id: string;
  name: string;
  statBoost: {
    health?: number;
    damage?: number;
    defense?: number;
    attackSpeed?: number;
  };
}

// Player equipment
export interface Equipment {
  weapon: Weapon | null;
  helm: Armor | null;
  torso: Armor | null;
  shoulder: Armor | null;
  gauntlet: Armor | null;
  legging: Armor | null;
  boot: Armor | null;
}

// Player inventory
export interface Inventory {
  weapons: Weapon[];
  armor: Armor[];
  maxSlots: number;
}

// Player stats
export interface PlayerStats {
  maxHealth: number;
  currentHealth: number;
  attack: number;
  defense: number;
  speed: number;
  critChance: number;
}

// Player type
export interface Player {
  id: string;
  name: string;
  class: 'champion'; // フレイヤはチャンピオンのみ
  stats: PlayerStats;
  equipment: Equipment;
  inventory: Inventory;
  position: { x: number; y: number };
  abilities: Ability[];
}

// Abilities
export interface Ability {
  id: string;
  name: string;
  description: string;
  cooldown: number;
  currentCooldown: number;
  execute: (target: Enemy | Boss) => void;
}

// Enemy types
export type EnemyType = 'mephit' | 'missile-mephit' | 'golem' | 'elite-mephit';

export interface Enemy {
  id: string;
  type: EnemyType;
  name: string;
  maxHealth: number;
  currentHealth: number;
  attack: number;
  defense: number;
  speed: number;
  position: { x: number; y: number };
  loot: (Weapon | Armor)[];
}

// Boss type
export interface Boss {
  id: string;
  name: string;
  maxHealth: number;
  currentHealth: number;
  attack: number;
  defense: number;
  speed: number;
  phase: number;
  position: { x: number; y: number };
  abilities: Ability[];
  loot: (Weapon | Armor)[];
}

// Game state types
export type GameState = 'menu' | 'character-select' | 'stage' | 'combat' | 'boss-fight' | 'game-over' | 'victory';

export interface GameContext {
  state: GameState;
  player: Player;
  currentStage: number;
  enemies: Enemy[];
  boss: Boss | null;
  currentCombat: {
    target: Enemy | Boss | null;
    isActive: boolean;
  };
  dropLog: DropLogEntry[];
}

export interface DropLogEntry {
  itemName: string;
  itemType: 'weapon' | 'armor';
  rarity: Rarity;
  timestamp: number;
}

// Battle log
export interface BattleLogEntry {
  attacker: string;
  action: string;
  target: string;
  damage: number;
  timestamp: number;
}
