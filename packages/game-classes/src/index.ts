interface Stats {
  HP: number;
  AttackDamage: number;
  AbilityPower: number;
  ArmorReduction: number;
  MagicResist: number;
  MoveSpeed: number;
  CritChance: number;
}

interface Passive {
  name: string;
  effect: string;
}

interface Ability {
  name: string;
  description: string;
  cost: number | null;
}

interface GameClass {
  name: string;
  role: string;
  thumbnail: string;
  resource: string;
  stats: Stats;
  passive: Passive;
  abilities: Ability[];
}

const gameClasses: GameClass[] = [
  {
    name: "Squire",
    role: "Tank / Bruiser",
    resource: "None",
    thumbnail: "/squire.png",
    stats: {
      HP: 850,
      AttackDamage: 80,
      AbilityPower: 0,
      ArmorReduction: 45,
      MagicResist: 25,
      MoveSpeed: 3,
      CritChance: 0.1,
    },
    passive: {
      name: "Stalwart",
      effect: "Reduces incoming crit damage by 25%",
    },
    abilities: [
      {
        name: "Shield Bash",
        description: "100% AD + 25% chance to stun (1 tile)",
        cost: null,
      },
      {
        name: "Guard Stance",
        description: "+25 Armor for 1 turn",
        cost: null,
      },
      {
        name: "Taunt",
        description: "Forces target within 2 tiles to attack Squire next turn",
        cost: null,
      },
    ],
  },
  {
    name: "Chemist",
    role: "Healer / Support",
    resource: "Mana",
    thumbnail: "/chemist.png",
    stats: {
      HP: 620,
      AttackDamage: 0,
      AbilityPower: 70,
      ArmorReduction: 20,
      MagicResist: 40,
      MoveSpeed: 3,
      CritChance: 0.05,
    },
    passive: {
      name: "Tonic Mastery",
      effect: "Healing abilities restore 10% more HP",
    },
    abilities: [
      {
        name: "Healing Salve",
        description: "Restore 150 HP to ally within 3 tiles",
        cost: 20,
      },
      {
        name: "Brew Potion",
        description: "Channel 1 turn, then select one of 2 potions",
        cost: 0,
      },
      {
        name: "Acid Flask",
        description: "80 AP + -10 Armor for 2 turns",
        cost: 25,
      },
    ],
  },
  {
    name: "Archer",
    role: "Long-Range DPS",
    resource: "None",
    thumbnail: "/archer.png",
    stats: {
      HP: 550,
      AttackDamage: 95,
      AbilityPower: 0,
      ArmorReduction: 25,
      MagicResist: 20,
      MoveSpeed: 4,
      CritChance: 0.15,
    },
    passive: {
      name: "High Ground",
      effect: "+15% damage from elevated tiles",
    },
    abilities: [
      {
        name: "Power Shot",
        description: "125% AD, line pierce",
        cost: null,
      },
      {
        name: "Grappling Hook",
        description: "Move 3 tiles, ignore terrain",
        cost: null,
      },
      {
        name: "Pinning Arrow",
        description: "80% AD, slows target by 1 tile for 2 turns",
        cost: null,
      },
    ],
  },
  {
    name: "Assassin",
    role: "Flanker / Crit Burst",
    resource: "Energy",
    thumbnail: "/assassin.png",
    stats: {
      HP: 500,
      AttackDamage: 105,
      AbilityPower: 0,
      ArmorReduction: 20,
      MagicResist: 15,
      MoveSpeed: 5,
      CritChance: 0.25,
    },
    passive: {
      name: "Backstab",
      effect: "Attacks from behind always crit",
    },
    abilities: [
      {
        name: "Lunge",
        description: "Dash 2 tiles, deal 120% AD",
        cost: 2,
      },
      {
        name: "Smoke Bomb",
        description: "Become untargetable for 1 turn",
        cost: 2,
      },
      {
        name: "Marked Blade",
        description: "Apply bleed for 3 turns (20 AD/turn)",
        cost: 1,
      },
    ],
  },
  {
    name: "Mage",
    role: "AoE Magic / Control",
    resource: "Mana",
    thumbnail: "/mage.png",
    stats: {
      HP: 480,
      AttackDamage: 0,
      AbilityPower: 110,
      ArmorReduction: 10,
      MagicResist: 30,
      MoveSpeed: 3,
      CritChance: 0.0,
    },
    passive: {
      name: "Arcane Flow",
      effect: "Successful spell hit reduces cooldowns by 1 turn",
    },
    abilities: [
      {
        name: "Fireball",
        description: "2-tile AoE, 90 AP",
        cost: 25,
      },
      {
        name: "Meteor",
        description: "Channel 2 turns, 200 AP in 3x3 zone",
        cost: 60,
      },
      {
        name: "Mana Shield",
        description: "Gain 50 shield for 2 turns",
        cost: 20,
      },
    ],
  },
  {
    name: "Duelist",
    role: "1v1 Melee Specialist",
    resource: "Energy",
    thumbnail: "/duelist.png",
    stats: {
      HP: 720,
      AttackDamage: 90,
      AbilityPower: 0,
      ArmorReduction: 35,
      MagicResist: 25,
      MoveSpeed: 4,
      CritChance: 0.2,
    },
    passive: {
      name: "Counterstrike",
      effect: "50% chance to strike back in melee",
    },
    abilities: [
      {
        name: "Double Slash",
        description: "Hit twice for 60% AD each",
        cost: 1,
      },
      {
        name: "Precision Stance",
        description: "Next hit deals +50% crit damage",
        cost: 1,
      },
      {
        name: "Break Guard",
        description: "75% AD, removes shields",
        cost: 2,
      },
    ],
  },
  {
    name: "Engineer",
    role: "Utility / Area Control",
    resource: "Energy",
    thumbnail: "/engineer.png",
    stats: {
      HP: 620,
      AttackDamage: 65,
      AbilityPower: 0,
      ArmorReduction: 25,
      MagicResist: 20,
      MoveSpeed: 3,
      CritChance: 0.1,
    },
    passive: {
      name: "Overclock",
      effect: "Every 3rd ability refunds 1 Energy",
    },
    abilities: [
      {
        name: "Micro Turret",
        description:
          "Deploys turret that deals 40 physical damage to nearby enemy",
        cost: 1,
      },
      {
        name: "Kinetic Pulse",
        description: "60% AD knockback; stuns if collision",
        cost: 2,
      },
      {
        name: "Scrap Trap",
        description: "Trap deals 50 damage and slows",
        cost: 2,
      },
    ],
  },
  {
    name: "Infiltrator",
    role: "Debuffer / Anti-Caster",
    resource: "Mana",
    thumbnail: "/infiltrator.png",
    stats: {
      HP: 500,
      AttackDamage: 0,
      AbilityPower: 90,
      ArmorReduction: 15,
      MagicResist: 35,
      MoveSpeed: 4,
      CritChance: 0.05,
    },
    passive: {
      name: "Data Leak",
      effect: "Enemies hit by abilities pay +10 Mana on next cast",
    },
    abilities: [
      {
        name: "Virus Dart",
        description: "80 AP + -15% damage taken debuff",
        cost: 20,
      },
      {
        name: "Null Field",
        description: "2x2 AoE, -1 Move Speed, disables Mana regen",
        cost: 30,
      },
      {
        name: "Override",
        description: "Interrupt and silence 1 turn",
        cost: 25,
      },
    ],
  },
];

export default gameClasses;
