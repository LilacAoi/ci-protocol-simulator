# TooHuman Roguelike PoC

A browser-based roguelike inspired by Ninja Theory's Sensuki action game mechanics. Play as Freyja, the Norse goddess of war and beauty, in this fast-paced dungeon crawler with loot-driven progression.

## Overview

**Project**: TooHuman Roguelike PoC
**Version**: 1.0.0
**Status**: Proof of Concept (Stage 1 - Single Map)

This is a Web-based Claude Code implementation of a roguelike game featuring:
- Real-time combat system
- Procedural loot drops with rarity tiers
- Equipment management and inventory system
- Boss encounters with multi-phase battles
- Tactical gameplay with special abilities

## Features

### Game Mechanics

- **Character**: Freyja, Champion class
  - Pistol Mastery: Double damage with pistols
  - Critical Strike: 2x damage attacks
  - Valiant's Might: Battle cry that sends enemies flying

- **Enemy Types**:
  - Mephit: Small elemental drones (flying, explosive death burst)
  - Missile Mephit: Artillery variants with ranged attacks
  - Frost Golem: Large, high-defense enemies with impact waves
  - Elite Mephit: Strengthened variants with better loot drops

- **Boss**: Garmr - The Hound of Hell
  - 2-phase battle system
  - Phase 1: Rapid claw attacks and charging
  - Phase 2 (50% HP): Drone deployment, charge attacks, beam attacks

- **Loot System**:
  - 6 weapon types: Swords, Staves, Hammers, Pistols, Rifles, Cannons
  - 6 armor slots: Helm, Torso, Shoulder, Gauntlet, Legging, Boot
  - 6 rarity tiers with color-coded drops:
    - Common (Gray): 50%
    - Less Common (Green): 30%
    - Uncommon (Blue): 15%
    - Rare (Purple): 4%
    - Very Rare (Orange): 0.9%
    - Epic/Elite (Red): 0.1%

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/           # React UI components
│   ├── MenuScreen.tsx
│   ├── CharacterSelect.tsx
│   ├── GameScreen.tsx    # Main game view
│   ├── HealthBar.tsx
│   ├── InventoryPanel.tsx
│   ├── DropLog.tsx
│   ├── VictoryScreen.tsx
│   └── GameOverScreen.tsx
├── hooks/
│   └── useGameLogic.ts   # Core game state management
├── utils/
│   ├── itemGenerator.ts  # Weapon/armor generation
│   ├── enemyGenerator.ts # Enemy spawn logic
│   └── playerInitializer.ts # Player setup
├── types.ts              # TypeScript type definitions
├── App.tsx               # Main component
└── index.css             # Tailwind + Base styles
```

## Technical Stack

- **Framework**: React 19 + TypeScript (strict mode)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **State Management**: React hooks (useState, useCallback)
- **Rendering**: SVG for top-down game view

## Game Flow

1. **Menu Screen** → Click "Start Adventure"
2. **Character Selection** → Confirm Freyja
3. **Combat Phase** → Defeat waves of enemies
4. **Loot Collection** → View drops in real-time
5. **Boss Battle** → Face Garmr (300 HP)
6. **Victory Screen** → Game completed

## Game Balance

### Player Stats (Initial)
- Health: 100 HP
- Attack: 15
- Defense: 10
- Speed: 1.0x
- Crit Chance: 10%

### Enemy References
- Mephit: 30 HP
- Missile Mephit: 40 HP
- Frost Golem: 80 HP
- Elite Mephit: 50 HP
- **Garmr (Boss): 300 HP** (2-phase)

## Future Enhancements

Features planned for full release:
- Stages 2-4 with progression
- Cybernetic upgrade system
- Human/Cybernetic route selection
- Rune evolution mechanics
- Advanced AI and animations
- Multiplayer support
- Mobile optimization

## Known Limitations

- Stage 1 only (single map)
- Automated combat (PoC simulation)
- Desktop-optimized (best experience on 1920x1080+)
- No sound design
- Simplified enemy AI

## Credits

- **Inspiration**: Ninja Theory's TooHuman/Sensuki
- **Framework**: React, Vite, Tailwind CSS
- **Type Safety**: TypeScript

---

**Developed with Claude Code on the Web**
Ready for playtesting and feedback.
