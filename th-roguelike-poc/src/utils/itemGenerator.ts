import type { Weapon, Armor, WeaponType, ArmorSlot, Rarity } from '../types';

const WEAPON_NAMES: Record<WeaponType, string[]> = {
  sword: ['Iron Sword', 'Steel Blade', 'Valkyrie Sword', 'Nordic Saber', 'Frost Blade'],
  staff: ['Wooden Staff', 'Mage Staff', 'Essence Rod', 'Divine Staff', 'Chaos Wand'],
  hammer: ['Stone Hammer', 'War Hammer', 'Thunder Maul', 'Odin\'s Hammer', 'Rune Breaker'],
  pistol: ['Rusty Pistol', 'Spark Pistol', 'Void Revolver', 'Light Gun', 'Plasma Blaster'],
  rifle: ['Rifle', 'Sniper Rifle', 'Photon Rifle', 'Pulse Rifle', 'Quantum Rifle'],
  cannon: ['Small Cannon', 'Cannon', 'Heavy Cannon', 'Plasma Cannon', 'Void Cannon'],
};

const ARMOR_NAMES: Record<ArmorSlot, string[]> = {
  helm: ['Iron Helm', 'Steel Helm', 'Crown', 'Battle Helm', 'Void Crown'],
  torso: ['Leather Armor', 'Iron Armor', 'Steel Armor', 'Plate Armor', 'Void Suit'],
  shoulder: ['Shoulder Guard', 'Steel Pauldron', 'Divine Pauldron', 'Shadow Guard', 'Rune Guard'],
  gauntlet: ['Gauntlet', 'Steel Gauntlet', 'War Gauntlet', 'Light Gloves', 'Void Gloves'],
  legging: ['Leggings', 'Plate Leggings', 'Divine Leggings', 'Shadow Leggings', 'Void Leggings'],
  boot: ['Boots', 'War Boots', 'Swift Boots', 'Divine Boots', 'Shadow Boots'],
};

export function getRandomRarity(): Rarity {
  const roll = Math.random() * 100;
  if (roll < 50) return 'common';
  if (roll < 80) return 'less-common';
  if (roll < 95) return 'uncommon';
  if (roll < 99) return 'rare';
  if (roll < 99.9) return 'very-rare';
  return 'epic';
}

function getRarityMultiplier(rarity: Rarity): number {
  const multipliers: Record<Rarity, number> = {
    common: 1.0,
    'less-common': 1.2,
    uncommon: 1.5,
    rare: 1.8,
    'very-rare': 2.2,
    epic: 2.8,
  };
  return multipliers[rarity];
}

function getRuneSlots(rarity: Rarity): number {
  const slots: Record<Rarity, number> = {
    common: 0,
    'less-common': 1,
    uncommon: 2,
    rare: 3,
    'very-rare': 4,
    epic: 5,
  };
  return slots[rarity];
}

export function generateWeapon(type?: WeaponType): Weapon {
  const weaponType = type || (Object.keys(WEAPON_NAMES) as WeaponType[])[
    Math.floor(Math.random() * 6)
  ];
  const rarity = getRandomRarity();
  const multiplier = getRarityMultiplier(rarity);
  const names = WEAPON_NAMES[weaponType];
  const name = names[Math.floor(Math.random() * names.length)];

  const baseDamage = weaponType === 'sword' ? 15 :
                     weaponType === 'staff' ? 12 :
                     weaponType === 'hammer' ? 20 :
                     weaponType === 'pistol' ? 10 :
                     weaponType === 'rifle' ? 18 :
                     14;

  const baseSpeed = weaponType === 'sword' ? 1.2 :
                    weaponType === 'staff' ? 0.8 :
                    weaponType === 'hammer' ? 0.6 :
                    weaponType === 'pistol' ? 1.5 :
                    weaponType === 'rifle' ? 0.9 :
                    0.7;

  return {
    id: `weapon_${Date.now()}_${Math.random()}`,
    name,
    type: weaponType,
    damage: Math.round(baseDamage * multiplier),
    attackSpeed: baseSpeed * multiplier,
    rarity,
    runeSlots: getRuneSlots(rarity),
    bonusStats: {
      critChance: Math.min(rarity === 'epic' ? 0.25 : rarity === 'very-rare' ? 0.15 : rarity === 'rare' ? 0.1 : 0, 0.3),
    },
  };
}

export function generateArmor(slot?: ArmorSlot): Armor {
  const armorSlot = slot || (Object.keys(ARMOR_NAMES) as ArmorSlot[])[
    Math.floor(Math.random() * 6)
  ];
  const rarity = getRandomRarity();
  const multiplier = getRarityMultiplier(rarity);
  const names = ARMOR_NAMES[armorSlot];
  const name = names[Math.floor(Math.random() * names.length)];

  const baseDefense = 8;

  return {
    id: `armor_${Date.now()}_${Math.random()}`,
    name,
    slot: armorSlot,
    defense: Math.round(baseDefense * multiplier),
    rarity,
    runeSlots: getRuneSlots(rarity),
    bonusStats: {
      health: rarity === 'epic' ? 20 : rarity === 'very-rare' ? 15 : rarity === 'rare' ? 10 : 0,
    },
  };
}

export function generateRandomItem(): Weapon | Armor {
  return Math.random() > 0.4 ? generateWeapon() : generateArmor();
}
