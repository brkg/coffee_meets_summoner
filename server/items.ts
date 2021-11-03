import IObj from './IObj';

const obj: IObj = {}

obj.items = {
        
    
        1001: {
        name: "Boots",
        description: "<mainText><stats><attention>25</attention> Move Speed</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Movement Speed",
        into: [
        "3158",
        "3006",
        "3009",
        "3020",
        "3047",
        "3111",
        "3117"
        ],
        image: {
        full: "1001.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
        },
        tags: [
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 25
        }
        },
        1004: {
        name: "Faerie Charm",
        description: "<mainText><stats><attention>50%</attention> Base Mana Regen</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Mana Regen",
        into: [
        "3114",
        "4642"
        ],
        image: {
        full: "1004.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 250,
        purchasable: true,
        total: 250,
        sell: 175
        },
        tags: [
        "ManaRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        1006: {
        name: "Rejuvenation Bead",
        description: "<mainText><stats><attention>50%</attention> Base Health Regen</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Health Regen",
        into: [
        "3109",
        "3801"
        ],
        image: {
        full: "1006.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 105
        },
        tags: [
        "HealthRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        1011: {
        name: "Giant's Belt",
        description: "<mainText><stats><attention>350</attention> Health</stats></mainText><br>",
        colloq: ";",
        plaintext: "Greatly increases Health",
        from: [
        "1028"
        ],
        into: [
        "3075",
        "3083",
        "3001",
        "3116",
        "3748",
        "4637",
        "8001"
        ],
        image: {
        full: "1011.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "Health"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350
        },
        depth: 2
        },
        1018: {
        name: "Cloak of Agility",
        description: "<mainText><stats><attention>15%</attention> Critical Strike Chance</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases critical strike chance",
        into: [
        "3124",
        "6676",
        "3086",
        "3031",
        "3036",
        "3072",
        "3095",
        "3139",
        "3508",
        "6671",
        "6672",
        "6673",
        "6675"
        ],
        image: {
        full: "1018.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 600,
        sell: 420
        },
        tags: [
        "CriticalStrike"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatCritChanceMod: 0.15
        }
        },
        1026: {
        name: "Blasting Wand",
        description: "<mainText><stats><attention>40</attention> Ability Power</stats></mainText><br>",
        colloq: ";",
        plaintext: "Moderately increases Ability Power",
        into: [
        "3100",
        "3115",
        "3116",
        "6655",
        "3135",
        "3152",
        "3165",
        "4633",
        "4636",
        "4637",
        "6656"
        ],
        image: {
        full: "1026.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 850,
        sell: 595
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 40
        }
        },
        1027: {
        name: "Sapphire Crystal",
        description: "<mainText><stats><attention>250</attention> Mana</stats></mainText><br>",
        colloq: ";blue",
        plaintext: "Increases Mana",
        into: [
        "3024",
        "3802"
        ],
        image: {
        full: "1027.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
        },
        tags: [
        "Mana"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 250
        }
        },
        1028: {
        name: "Ruby Crystal",
        description: "<mainText><stats><attention>150</attention> Health</stats></mainText><br>",
        colloq: ";red",
        plaintext: "Increases Health",
        into: [
        "6035",
        "6609",
        "1011",
        "3066",
        "3067",
        "3044",
        "3053",
        "3211",
        "3814",
        "3152",
        "3165",
        "3742",
        "3748",
        "3801",
        "4401",
        "4635",
        "4636",
        "6660"
        ],
        image: {
        full: "1028.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 280
        },
        tags: [
        "Health"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150
        }
        },
        1029: {
        name: "Cloth Armor",
        description: "<mainText><stats><attention>15</attention> Armor</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Armor",
        into: [
        "1031",
        "3193",
        "3082",
        "3076",
        "3191",
        "3024",
        "3047",
        "3105",
        "6664",
        "3143",
        "6662"
        ],
        image: {
        full: "1029.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
        },
        tags: [
        "Armor"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatArmorMod: 15
        }
        },
        1031: {
        name: "Chain Vest",
        description: "<mainText><stats><attention>40</attention> Armor</stats></mainText><br>",
        colloq: ";",
        plaintext: "Greatly increases Armor",
        from: [
        "1029"
        ],
        into: [
        "3026",
        "3742",
        "6333"
        ],
        image: {
        full: "1031.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "Armor"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatArmorMod: 40
        },
        depth: 2
        },
        1033: {
        name: "Null-Magic Mantle",
        description: "<mainText><stats><attention>25</attention> Magic Resist</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Magic Resist",
        into: [
        "3193",
        "1057",
        "3105",
        "3211",
        "3111",
        "3140",
        "6664",
        "3155",
        "4632",
        "6662"
        ],
        image: {
        full: "1033.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 315
        },
        tags: [
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 25
        }
        },
        1035: {
        name: "Emberknife",
        description: "<mainText><stats></stats>8% Omnivamp vs. Monsters<br><li><passive>Sear:</passive> Damaging Monsters burns them for <magicDamage>(60 + 30% Ability Power + 5% bonus Attack Damage + 2% bonus Health) magic damage</magicDamage> over 5 seconds.<li><passive>Challenging Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Challenging Smite</attention> and increases its damage to monsters. Challenging Smite marks champions for 4 seconds. During this time, you deal <truedamage>48 - 125 (based on level)</truedamage> bonus true damage to them over 2.5 seconds on hit and take 20% reduced damage from them.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen up to 8 - 18 (based on level) mana per second when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><rules>Only attacks and abilities apply Challenging Smite's burn</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        image: {
        full: "1035.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 140
        },
        tags: [
        "LifeSteal",
        "SpellVamp",
        "Jungle"
        ],
        maps: {
        11: true,
        12: false,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "60",
        Effect2Amount: "25",
        Effect3Amount: "5",
        Effect4Amount: "8"
        }
        },
        1036: {
        name: "Long Sword",
        description: "<mainText><stats><attention>10</attention> Attack Damage</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Attack Damage",
        into: [
        "3179",
        "3071",
        "3091",
        "1053",
        "3004",
        "3035",
        "3044",
        "3046",
        "3051",
        "3814",
        "3123",
        "3133",
        "3134",
        "3155",
        "6670",
        "6692"
        ],
        image: {
        full: "1036.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 245
        },
        tags: [
        "Damage",
        "Lane"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 10
        }
        },
        1037: {
        name: "Pickaxe",
        description: "<mainText><stats><attention>25</attention> Attack Damage</stats></mainText><br>",
        colloq: ";",
        plaintext: "Moderately increases Attack Damage",
        into: [
        "6035",
        "3077",
        "6676",
        "3031",
        "3053",
        "3139",
        "3153",
        "6029",
        "3181",
        "6333",
        "6671",
        "6672",
        "6675",
        "6695"
        ],
        image: {
        full: "1037.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 875,
        purchasable: true,
        total: 875,
        sell: 613
        },
        tags: [
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 25
        }
        },
        1038: {
        name: "B. F. Sword",
        description: "<mainText><stats><attention>40</attention> Attack Damage</stats></mainText><br>",
        colloq: ";bf",
        plaintext: "Greatly increases Attack Damage",
        into: [
        "3026",
        "3031",
        "3072",
        "3095",
        "4403"
        ],
        image: {
        full: "1038.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 1300,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40
        }
        },
        1039: {
        name: "Hailblade",
        description: "<mainText><stats></stats>8% Omnivamp vs. Monsters<br><li><passive>Sear:</passive> Damaging Monsters burns them for <magicDamage>(60 + 30% Ability Power + 5% bonus Attack Damage + 2% bonus Health) magic damage</magicDamage> over 5 seconds.<li><passive>Chilling Path:</passive> Smiting 5 times consumes this item upgrade your Smite to <attention>Chilling Smite</attention> and increases its damage to monsters. When smiting champions Chilling Smite deals <truedamage>20 - 156 (based on level)</truedamage> true damage and steals 20% of their Move Speed for 2 seconds.<li><passive>Huntsman:</passive> Killing Large Monsters grants bonus experience.<li><passive>Recoup:</passive> Regen up to 8 - 18 (based on level) mana per second when in the Jungle or River. <br><br><rules><status>Consuming</status> this item grants all item effects permanently and increases Smite damage to monsters. If you have gained more gold from minions than jungle monsters, gold and experience from minions is heavily reduced. Healing is not reduced on AoE attacks. If two levels behind the average champion level of the game, monster kills grant bonus experience. </rules><br><br></mainText><br>",
        colloq: ";jungle;Jungle",
        plaintext: "Provides damage against Monsters and Mana Regen in the Jungle",
        image: {
        full: "1039.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 140
        },
        tags: [
        "LifeSteal",
        "SpellVamp",
        "Jungle"
        ],
        maps: {
        11: true,
        12: false,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "60",
        Effect2Amount: "25",
        Effect3Amount: "5",
        Effect4Amount: "8"
        }
        },
        1042: {
        name: "Dagger",
        description: "<mainText><stats><attention>12%</attention> Attack Speed</stats></mainText><br>",
        colloq: ";",
        plaintext: "Slightly increases Attack Speed",
        into: [
        "1043",
        "3124",
        "6677",
        "3085",
        "2015",
        "3086",
        "3006",
        "3051",
        "6670"
        ],
        image: {
        full: "1042.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 300,
        sell: 210
        },
        tags: [
        "AttackSpeed"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentAttackSpeedMod: 0.12
        }
        },
        1043: {
        name: "Recurve Bow",
        description: "<mainText><stats><attention>25%</attention> Attack Speed</stats><br><li><passive>Steeltipped:</passive> Attacks apply <physicalDamage>15 physical damage</physicalDamage> <OnHit>On-Hit</OnHit>.</mainText><br>",
        colloq: ";",
        plaintext: "Greatly increases Attack Speed",
        from: [
        "1042",
        "1042"
        ],
        into: [
        "3115",
        "3153"
        ],
        image: {
        full: "1043.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
        },
        tags: [
        "AttackSpeed",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentAttackSpeedMod: 0.25
        },
        depth: 2
        },
        1052: {
        name: "Amplifying Tome",
        description: "<mainText><stats><attention>20</attention> Ability Power</stats></mainText><br>",
        colloq: ";amptome",
        plaintext: "Slightly increases Ability Power",
        into: [
        "6616",
        "3191",
        "3003",
        "3108",
        "3113",
        "3115",
        "3116",
        "3145",
        "3504",
        "3802",
        "4632",
        "3916",
        "4629",
        "4630",
        "4635",
        "4637",
        "4642"
        ],
        image: {
        full: "1052.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 435,
        purchasable: true,
        total: 435,
        sell: 305
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 20
        }
        },
        1053: {
        name: "Vampiric Scepter",
        description: "<mainText><stats><attention>15</attention> Attack Damage<br><attention>10%</attention> Life Steal</stats></mainText><br>",
        colloq: ";",
        plaintext: "Basic attacks restore Health",
        from: [
        "1036"
        ],
        into: [
        "3072",
        "3074",
        "3153",
        "4403",
        "6673",
        "6692"
        ],
        image: {
        full: "1053.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 550,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "Damage",
        "LifeSteal"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 15,
        PercentLifeStealMod: 0.1
        },
        depth: 2
        },
        1054: {
        name: "Doran's Shield",
        description: "<mainText><stats><attention>80</attention> Health</stats><br><li><passive>Focus:</passive> Attacks deal an additional <physicalDamage>5 physical damage</physicalDamage> to minions.<li><passive>Recovery:</passive> Restores <healing>6 Health</healing> every 5 seconds.<li><passive>Endure:</passive> Restores up to <healing>40 Health</healing> over 8 seconds after taking damage from a champion, large jungle monster, or epic jungle monster. Restoration increases when you are low Health.<br><br><rules><passive>Endure</passive> 66% effective when owned by Ranged champions or when taking damage from area of effect or periodic damage sources.</rules></mainText><br>",
        colloq: ";dshield",
        plaintext: "Good defensive starting item",
        image: {
        full: "1054.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
        },
        tags: [
        "Health",
        "HealthRegen",
        "Lane"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 80,
        FlatHPRegenMod: 1.2
        },
        effect: {
        Effect1Amount: "8",
        Effect2Amount: "5",
        Effect3Amount: "40",
        Effect4Amount: "0.66"
        }
        },
        1055: {
        name: "Doran's Blade",
        description: "<mainText><stats><attention>8</attention> Attack Damage<br><attention>80</attention> Health</stats><br><li><passive>Warmonger:</passive> Gain <lifeSteal>2.5% Omnivamp</lifeSteal>.<br><br><rules>Omnivamp is only 33% effective when dealing area of effect damage or damage through pets.</rules></mainText><br>",
        colloq: ";dblade",
        plaintext: "Good starting item for attackers",
        image: {
        full: "1055.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
        },
        tags: [
        "Health",
        "Damage",
        "SpellVamp",
        "Lane"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 8,
        FlatHPPoolMod: 80
        }
        },
        1056: {
        name: "Doran's Ring",
        description: "<mainText><stats><attention>15</attention> Ability Power<br><attention>70</attention> Health</stats><br><li><passive>Focus:</passive> Attacks deal an additional <magicDamage>5 physical damage</magicDamage> to minions. <li><passive>Siphon:</passive> Killing a minion restores <scaleMana>6 Mana</scaleMana>. If you can't gain Mana, restore <healing>3 Health</healing> instead.</mainText><br>",
        colloq: ";dring",
        plaintext: "Good starting item for casters",
        image: {
        full: "1056.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "Lane",
        "ManaRegen",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 70,
        FlatMagicDamageMod: 15
        }
        },
        1057: {
        name: "Negatron Cloak",
        description: "<mainText><stats><attention>50</attention> Magic Resist</stats></mainText><br>",
        colloq: ";",
        plaintext: "Moderately increases Magic Resist",
        from: [
        "1033"
        ],
        into: [
        "3091",
        "3001",
        "3222",
        "4401"
        ],
        image: {
        full: "1057.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 50
        },
        depth: 2
        },
        1058: {
        name: "Needlessly Large Rod",
        description: "<mainText><stats><attention>60</attention> Ability Power</stats></mainText><br>",
        colloq: ";nlr",
        plaintext: "Greatly increases Ability Power",
        into: [
        "3003",
        "3089",
        "4403",
        "4628"
        ],
        image: {
        full: "1058.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 1250,
        purchasable: true,
        total: 1250,
        sell: 875
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 60
        }
        },
        1082: {
        name: "Dark Seal",
        description: "<mainText><stats><attention>15</attention> Ability Power<br><attention>40</attention> Health</stats><br><li><passive>Glory:</passive> Gain 2 stacks for a champion kill or 1 stack for an assist (up to 10 stacks total). Lose 5 stacks on death.<li><passive>Dread:</passive> Grants <scaleAP>4 Ability Power</scaleAP> per stack of <passive>Glory</passive>.<br><br><rules>Obtained <passive>Glory</passive> stacks are preserved between this item and <rarityLegendary>Mejai's Soulstealer</rarityLegendary>.</rules></mainText><br>",
        colloq: ";Noxian",
        plaintext: "Provides Ability Power and Mana. Increases in power as you kill enemies.",
        into: [
        "3041"
        ],
        image: {
        full: "1082.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 350,
        sell: 140
        },
        tags: [
        "Health",
        "SpellDamage",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 40,
        FlatMagicDamageMod: 15
        }
        },
        1083: {
        name: "Cull",
        description: "<mainText><stats><attention>7</attention> Attack Damage</stats><br><li>Attacks restore <healing>3 Health</healing> per hit.<li><passive>Reap:</passive> Killing a lane minion grants <goldGain>1</goldGain> additional gold. Killing 100 lane minions grants an additional <goldGain>350</goldGain> bonus gold immediately and disables <passive>Reap</passive>.<br></mainText><br>",
        colloq: ";dblade",
        plaintext: "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
        image: {
        full: "1083.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 450,
        sell: 180
        },
        tags: [
        "Damage",
        "LifeSteal",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 7
        }
        },
        2003: {
        name: "Health Potion",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Drink the potion to restore <healing>150 Health</healing> over 15 seconds.<br><br><rules>You may carry up to 5 Health Potions.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Consume to restore Health over time",
        stacks: 5,
        consumed: true,
        image: {
        full: "2003.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 50,
        purchasable: true,
        total: 50,
        sell: 20
        },
        tags: [
        "HealthRegen",
        "Consumable",
        "Lane",
        "Jungle"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        2010: {
        name: "Total Biscuit of Everlasting Will",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Eat the biscuit to restore <healing>10% missing Health</healing> and <scaleMana>Mana</scaleMana> over 5 seconds. Consuming or selling a biscuit permanently grants <scaleMana>50 maximum Mana</scaleMana>. </mainText><br>",
        colloq: ";",
        plaintext: "",
        stacks: 10,
        consumed: true,
        inStore: false,
        hideFromAll: true,
        image: {
        full: "2010.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 50,
        purchasable: false,
        total: 50,
        sell: 5
        },
        tags: [ ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "10"
        }
        },
        2015: {
        name: "Kircheis Shard",
        description: "<mainText><stats><attention>15%</attention> Attack Speed</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Jolt:</passive> Energized Attacks gain an additional <magicDamage>80 magic damage</magicDamage>.</mainText><br>",
        colloq: ";",
        plaintext: "Attack speed and a chargable magic hit",
        from: [
        "1042"
        ],
        into: [
        "3094",
        "3095"
        ],
        image: {
        full: "2015.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 700,
        sell: 490
        },
        tags: [
        "AttackSpeed"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentAttackSpeedMod: 0.15
        },
        depth: 2
        },
        2031: {
        name: "Refillable Potion",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Consumes a charge to restore <healing>125 Health</healing> over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.</mainText><br>",
        colloq: ";",
        plaintext: "Restores Health over time. Refills at shop.",
        into: [
        "2033"
        ],
        image: {
        full: "2031.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 150,
        purchasable: true,
        total: 150,
        sell: 60
        },
        tags: [
        "HealthRegen",
        "Consumable",
        "Active",
        "Lane",
        "Jungle"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        2033: {
        name: "Corrupting Potion",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Consumes a charge to restore <healing>125 Health</healing> and <scaleMana>75 Mana</scaleMana> over 12 seconds. During this time, damaging Abilities and Attacks burn enemy champions for <magicDamage>15 (20 if you cannot gain Mana) magic damage</magicDamage> over 3 seconds. Holds up to 3 charges and refills upon visiting the shop.<br><br><rules>Corrupting damage is reduced to 50% when triggered by area of effect or periodic damage.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Restores Health and Mana over time and boosts combat power - Refills at Shop",
        from: [
        "2031"
        ],
        image: {
        full: "2033.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 500,
        sell: 200
        },
        tags: [
        "Active",
        "Consumable",
        "HealthRegen",
        "Lane",
        "ManaRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        depth: 2
        },
        2051: {
        name: "Guardian's Horn",
        description: "<mainText><stats><attention>150</attention> Health</stats><br><li><passive>Recovery:</passive> Restores <healing>20 Health</healing> every 5 seconds.<li><passive>Undaunted:</passive> Blocks 15 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
        colloq: "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
        plaintext: "Good starting item for tanks",
        image: {
        full: "2051.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "Health",
        "HealthRegen",
        "Lane"
        ],
        maps: {
        11: false,
        12: true,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150,
        FlatHPRegenMod: 4
        },
        effect: {
        Effect1Amount: "15",
        Effect2Amount: "0.25"
        }
        },
        2052: {
        name: "Poro-Snax",
        description: "",
        colloq: ";",
        plaintext: "",
        stacks: 2,
        consumed: true,
        inStore: false,
        image: {
        full: "2052.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
        },
        tags: [ ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        2055: {
        name: "Control Ward",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Places a powerful Control Ward that grants vision of the surrounding area. This device will also reveal <keywordStealth>Invisible</keywordStealth> traps, reveal <keywordStealth>Camouflaged</keywordStealth> enemies, and reveal (and disable) enemy Stealth Wards. <br><br><rules>You may carry up to 2 Control Wards. Control Wards do not disable other Control Wards.</rules></mainText><br>",
        colloq: "orange;",
        plaintext: "Used to disable wards and invisible traps in an area.",
        stacks: 2,
        consumed: true,
        consumeOnFull: true,
        image: {
        full: "2055.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 75,
        purchasable: true,
        total: 75,
        sell: 30
        },
        tags: [
        "Consumable",
        "Lane",
        "Stealth",
        "Vision"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "1",
        Effect2Amount: "2"
        }
        },
        2065: {
        name: "Shurelya's Battlesong",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><br><active>Active -</active> <active>Inspire:</active> Grants nearby allies <speed>30% Move Speed</speed> for 4 seconds (75s cooldown).<br><li><passive>Motivate:</passive> Empowering or Protecting another ally Champion grants both allies <speed>25% Move Speed</speed> for 1.5 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste.<br><br><rules>An ally can only be affected by <keywordMajor>Motivate</keywordMajor> once every 4 seconds.</rules></mainText><br>",
        colloq: ";shurelya;reverie;",
        plaintext: "Activate to speed up nearby allies.",
        from: [
        "3067",
        "4642"
        ],
        image: {
        full: "2065.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "SpellDamage",
        "ManaRegen",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 40
        },
        depth: 3
        },
        2138: {
        name: "Elixir of Iron",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleHealth>300 Health</scaleHealth>, 25% Tenacity, and increased champion size for 3 minutes. While active, moving leaves a path behind that boosts allied champions' <speed>Move Speed by 15%</speed>.<br><br><rules>Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
        colloq: ";white",
        plaintext: "Temporarily increases defenses. Leaves a trail for allies to follow.",
        consumed: true,
        consumeOnFull: true,
        image: {
        full: "2138.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
        },
        tags: [
        "Health",
        "Consumable",
        "NonbootsMovement",
        "Tenacity"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "300",
        Effect2Amount: "0.25",
        Effect3Amount: "3",
        Effect4Amount: "0.15",
        Effect5Amount: "0.15",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "9"
        }
        },
        2139: {
        name: "Elixir of Sorcery",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleAP>50 Ability Power</scaleAP> and <scaleMana>15% Mana Regen</scaleMana> for 3 minutes. While active, damaging a champion or turret deals <trueDamage>25 bonus true damage</trueDamage> (5s cooldown).<br><br><rules>Champion level <attention>9</attention> or greater required to purchase. Elixir of Sorcery's true damage effect has no cooldown when attacking turrets. Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
        colloq: ";blue",
        plaintext: "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
        consumed: true,
        consumeOnFull: true,
        image: {
        full: "2139.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
        },
        tags: [
        "Consumable",
        "ManaRegen",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "50",
        Effect2Amount: "50",
        Effect3Amount: "25",
        Effect4Amount: "3",
        Effect5Amount: "5",
        Effect6Amount: "3",
        Effect7Amount: "0",
        Effect8Amount: "9"
        }
        },
        2140: {
        name: "Elixir of Wrath",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Drink to gain <scaleAD>30 Attack Damage</scaleAD> and <lifeSteal>15% Physical Vamp</lifeSteal> (against champions) for 3 minutes.<br><br><rules>Drinking a different Elixir will replace the existing one's effects.</rules></mainText><br>",
        colloq: ";red",
        plaintext: "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
        consumed: true,
        consumeOnFull: true,
        image: {
        full: "2140.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 500,
        sell: 200
        },
        tags: [
        "Consumable",
        "Damage",
        "LifeSteal",
        "SpellVamp"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "30",
        Effect2Amount: "30",
        Effect3Amount: "0.15",
        Effect4Amount: "3",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "9"
        }
        },
        2403: {
        name: "Minion Dematerializer",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Kill target lane minion (10s ).</mainText><br>",
        colloq: ";",
        plaintext: "",
        stacks: 10,
        consumed: true,
        inStore: false,
        hideFromAll: true,
        image: {
        full: "2403.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
        },
        tags: [ ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        2419: {
        name: "Commencing Stopwatch",
        description: "<mainText><stats></stats><li>Transforms into a <rarityGeneric>Stopwatch</rarityGeneric> after 14 minutes. Takedowns reduce this timer by 2 minutes. That <rarityGeneric>Stopwatch</rarityGeneric> contributes 250 gold to the items it builds into.<br><br><rules>Stopwatch normally contributes 650 gold</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        inStore: false,
        into: [
        "2420"
        ],
        image: {
        full: "2419.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
        },
        tags: [
        "Active"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        2420: {
        name: "Stopwatch",
        description: "<mainText><stats></stats><active>Active -</active> <active>Stasis:</active> Use one time only to become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time (transforms into a <rarityGeneric>Broken Stopwatch</rarityGeneric>).</mainText><br>",
        colloq: ";zhg;zonyas",
        plaintext: "Activate to become invincible but unable to take actions",
        into: [
        "3026",
        "3157"
        ],
        image: {
        full: "2420.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
        },
        tags: [
        "Active"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5"
        }
        },
        2421: {
        name: "Broken Stopwatch",
        description: "<mainText><stats></stats><br><li><passive>Shattered Time:</passive> Stopwatch is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you <rarityGeneric>Broken Stopwatches.</rarityGeneric></rules></mainText><br>",
        colloq: ";",
        plaintext: "Upgrades to stopwatch",
        hideFromAll: true,
        into: [
        "3157",
        "3026"
        ],
        image: {
        full: "2421.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 650,
        sell: 260
        },
        tags: [ ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "300"
        }
        },
        2422: {
        name: "Slightly Magical Footwear",
        description: "<mainText><stats><attention>25</attention> Move Speed</stats><br><li>Grants an additional <speed>10 Move Speed</speed>. Boots that build from Slightly Magical Footwear retain this bonus Move Speed.</mainText><br>",
        colloq: "",
        plaintext: "",
        inStore: false,
        into: [
        "3006",
        "3047",
        "3020",
        "3158",
        "3111",
        "3117",
        "3009"
        ],
        image: {
        full: "2422.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: false,
        total: 300,
        sell: 210
        },
        tags: [
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 25
        }
        },
        2423: {
        name: "Perfectly Timed Stopwatch",
        description: "<mainText><stats></stats><active>Active -</active> <active>Stasis:</active> Use one time only to become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time (transforms into a <rarityGeneric>Broken Stopwatch</rarityGeneric>).</mainText><br>",
        colloq: ";zhg;zonyas",
        plaintext: "Activate to become invincible but unable to take actions",
        inStore: false,
        into: [
        "3157",
        "3026"
        ],
        image: {
        full: "2423.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
        },
        tags: [
        "Active"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5"
        }
        },
        2424: {
        name: "Broken Stopwatch",
        description: "<mainText><stats></stats><br><li><passive>Shattered Time:</passive> Stopwatch is broken, but can still be upgraded.<br><br><rules>After breaking one Stopwatch, the shopkeeper will only sell you <rarityGeneric>Broken Stopwatches.</rarityGeneric></rules></mainText><br>",
        colloq: "",
        plaintext: "",
        inStore: false,
        hideFromAll: true,
        into: [
        "3157",
        "3026"
        ],
        image: {
        full: "2424.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: false,
        total: 650,
        sell: 260
        },
        tags: [ ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "300"
        }
        },
        3001: {
        name: "Abyssal Mask",
        description: "<mainText><stats><attention>400</attention> Health<br><attention>60</attention> Magic Resist</stats><br><li><passive>Unmake:</passive> <status>Immobilizing</status> a champion causes them to take 15% increased damage for 5 seconds. </mainText><br>",
        colloq: ";",
        plaintext: "Nearby enemies take more magic damage",
        from: [
        "1011",
        "1057"
        ],
        image: {
        full: "3001.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 900,
        purchasable: true,
        total: 2700,
        sell: 1890
        },
        tags: [
        "Health",
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 400,
        FlatSpellBlockMod: 60
        },
        depth: 3
        },
        3003: {
        name: "Archangel's Staff",
        description: "<mainText><stats><attention>65</attention> Ability Power<br><attention>500</attention> Mana</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAP>Ability Power equal to 3% of bonus Mana</scaleAP>.<li><passive>Mana Charge:</passive> Strike a target with an Ability to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Seraph's Embrace</rarityLegendary>.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
        colloq: "",
        plaintext: "Increases Ability Power based on maximum Mana",
        from: [
        "3070",
        "1058",
        "1052"
        ],
        image: {
        full: "3003.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 915,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "SpellDamage",
        "Mana",
        "Active"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 500,
        FlatMagicDamageMod: 65
        },
        depth: 2
        },
        3004: {
        name: "Manamune",
        description: "<mainText><stats><attention>35</attention> Attack Damage<br><attention>500</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAD>Attack Damage equal to 2.5% max Mana</scaleAD>. <li><passive>Mana Charge:</passive> Strike a target with an Ability or Attack to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana at which point this item transforms into <rarityLegendary>Muramana</rarityLegendary>.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
        colloq: "",
        plaintext: "Increases Attack Damage based on maximum Mana",
        from: [
        "3070",
        "3133",
        "1036"
        ],
        image: {
        full: "3004.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 1050,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Damage",
        "Mana",
        "CooldownReduction",
        "OnHit",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 500
        },
        depth: 3
        },
        3006: {
        name: "Berserker's Greaves",
        description: "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>45</attention> Move Speed</stats></mainText><br>",
        colloq: ";",
        plaintext: "Enhances Movement Speed and Attack Speed",
        from: [
        "1001",
        "1042"
        ],
        image: {
        full: "3006.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "AttackSpeed",
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 45,
        PercentAttackSpeedMod: 0.35
        },
        depth: 2
        },
        3009: {
        name: "Boots of Swiftness",
        description: "<mainText><stats><attention>60</attention> Move Speed</stats><br><li>The strength of movement slowing effects is reduced by 25%.</mainText><br>",
        colloq: ";",
        plaintext: "Enhances Movement Speed and reduces the effect of slows",
        from: [
        "1001"
        ],
        image: {
        full: "3009.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 60
        },
        effect: {
        Effect1Amount: "0.25"
        },
        depth: 2
        },
        3011: {
        name: "Chemtech Putrifier",
        description: "<mainText><stats><attention>55</attention> Ability Power<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Puffcap Toxin:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds. Healing or shielding another ally will enhance both of you, causing the next damage to enemy champions to apply <status>60% Grievous Wounds</status>.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3916",
        "4642"
        ],
        image: {
        full: "3011.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 550,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "SpellDamage",
        "ManaRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 55
        },
        depth: 3
        },
        3020: {
        name: "Sorcerer's Shoes",
        description: "<mainText><stats><attention>18</attention> Magic Penetration<br><attention>45</attention> Move Speed</stats></mainText><br>",
        colloq: ";",
        plaintext: "Enhances Movement Speed and magic damage",
        from: [
        "1001"
        ],
        image: {
        full: "3020.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 800,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Boots",
        "MagicPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 45
        },
        effect: {
        Effect1Amount: "18"
        },
        depth: 2
        },
        3024: {
        name: "Glacial Buckler",
        description: "<mainText><stats><attention>20</attention> Armor<br><attention>250</attention> Mana<br><attention>10</attention> Ability Haste</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases Armor and Cooldown Reduction",
        from: [
        "1027",
        "1029"
        ],
        into: [
        "3050",
        "3110"
        ],
        image: {
        full: "3024.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 250,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "Armor",
        "Mana",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 250,
        FlatArmorMod: 20
        },
        depth: 2
        },
        3026: {
        name: "Guardian Angel",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>40</attention> Armor</stats><br><li><passive>Saving Grace:</passive> Upon taking lethal damage, restores <healing>50% base Health</healing> and <scaleMana>30% max Mana</scaleMana> after 4 seconds of stasis (300s cooldown).</mainText><br>",
        colloq: ";ga",
        plaintext: "Periodically revives champion upon death",
        from: [
        "1038",
        "1031",
        "2420"
        ],
        image: {
        full: "3026.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 50,
        purchasable: true,
        total: 2800,
        sell: 1120
        },
        tags: [
        "Armor",
        "Damage"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatArmorMod: 40
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "4",
        Effect3Amount: "300",
        Effect4Amount: "0.3"
        },
        depth: 3
        },
        3031: {
        name: "Infinity Edge",
        description: "<mainText><stats><attention>70</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Perfection:</passive> If you have at least 60% Critical Strike Chance, gain35% Critical Strike Damage.</mainText><br>",
        colloq: ";ie",
        plaintext: "Massively enhances critical strikes",
        from: [
        "1038",
        "1037",
        "1018"
        ],
        image: {
        full: "3031.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 625,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "CriticalStrike",
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 70,
        FlatCritChanceMod: 0.2
        },
        depth: 2
        },
        3033: {
        name: "Mortal Reminder",
        description: "<mainText><stats><attention>25</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Sepsis:</passive> Dealing physical damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds. Dealing 3 consecutive Attacks to an enemy champion enhances this effect to <status>60% Grievous Wounds</status> against them until the effect is allowed to elapse.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: ";grievous",
        plaintext: "Overcomes enemies with high Health recovery and Armor",
        from: [
        "3123",
        "3086"
        ],
        image: {
        full: "3033.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 25,
        FlatCritChanceMod: 0.2,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.25
        },
        depth: 3
        },
        3035: {
        name: "Last Whisper",
        description: "<mainText><stats><attention>20</attention> Attack Damage<br><attention>20%</attention> Armor Penetration</stats></mainText><br>",
        colloq: ";lw",
        plaintext: "Overcomes enemies with high Armor",
        from: [
        "1036",
        "1036"
        ],
        into: [
        "3036",
        "6694"
        ],
        image: {
        full: "3035.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 1450,
        sell: 1015
        },
        tags: [
        "ArmorPenetration",
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 20
        },
        depth: 2
        },
        3036: {
        name: "Lord Dominik's Regards",
        description: "<mainText><stats><attention>30</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>35%</attention> Armor Penetration</stats><br><li><passive>Giant Slayer:</passive> Deal up to <physicalDamage>15% bonus physical damage</physicalDamage> against champions with greater max Health than you.<br><br><rules>Max damage increase reached when Health difference is greater than 2000.</rules></mainText><br>",
        colloq: ";lw",
        plaintext: "Overcomes enemies with high health and armor",
        from: [
        "3035",
        "1018"
        ],
        image: {
        full: "3036.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30,
        FlatCritChanceMod: 0.2
        },
        effect: {
        Effect1Amount: "0.2"
        },
        depth: 3
        },
        3040: {
        name: "Seraph's Embrace",
        description: "<mainText><stats><attention>65</attention> Ability Power<br><attention>860</attention> Mana</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAP>Ability Power equal to 5% bonus Mana</scaleAP>.<li><passive>Empyrean:</passive> Increase your maximum mana by 5% + 2.5% per 100 AP.</mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3003,
        inStore: false,
        image: {
        full: "3040.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 3000,
        purchasable: false,
        total: 3000,
        sell: 2100
        },
        tags: [
        "SpellDamage",
        "Mana"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 860,
        FlatMagicDamageMod: 65
        }
        },
        3041: {
        name: "Mejai's Soulstealer",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>100</attention> Health</stats><br><li><passive>Glory:</passive> Gain 4 stacks for a champion kill or 2 stacks for an assist (up to 25 stacks total). Lose 10 stacks on death.<li><passive>Dread:</passive> Grants <scaleAP>5 Ability Power</scaleAP> per stack of <passive>Glory</passive>. Gain <speed>10% Move Speed</speed> if you have at least 10 stacks.<br><br><rules>Obtained <passive>Glory</passive> stacks are preserved between this item and <rarityGeneric>Dark Seal</rarityGeneric>.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Grants Ability Power for kills and assists",
        from: [
        "1082"
        ],
        image: {
        full: "3041.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 1250,
        purchasable: true,
        total: 1600,
        sell: 1120
        },
        tags: [
        "Health",
        "SpellDamage",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 20
        },
        depth: 2
        },
        3042: {
        name: "Muramana",
        description: "<mainText><stats><attention>35</attention> Attack Damage<br><attention>860</attention> Mana<br><attention>15</attention> Ability Haste</stats><br><li><passive>Awe:</passive> Gain bonus <scaleAD>Attack Damage equal to 2.5% max Mana</scaleAD>. <li><passive>Shock:</passive> Attacks against champions deal an additional <physicalDamage>1.5% Max Mana physical damage</physicalDamage> (<OnHit>On-Hit</OnHit>). Damaging Abilities against champions deal an additional <physicalDamage>(3.5% for Melee users | 2.7% for Ranged users) Max Mana + 6% Total AD physical damage</physicalDamage>.</mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3004,
        inStore: false,
        image: {
        full: "3042.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 3000,
        purchasable: false,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Damage",
        "Mana",
        "CooldownReduction",
        "OnHit",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 35,
        FlatMPPoolMod: 860
        }
        },
        3044: {
        name: "Phage",
        description: "<mainText><stats><attention>15</attention> Attack Damage<br><attention>200</attention> Health</stats><br><li><passive>Sturdy:</passive> After you deal physical damage to a champion, restore <healing>2% max Health</healing> over 6 seconds.<br><br><rules>Restoration reduced to 50% for Ranged users.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Attacks and kills give a small burst of speed",
        from: [
        "1028",
        "1036"
        ],
        into: [
        "6630",
        "3053",
        "3181",
        "6632"
        ],
        image: {
        full: "3044.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Health",
        "HealthRegen",
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 200
        },
        effect: {
        Effect1Amount: "20",
        Effect2Amount: "2",
        Effect3Amount: "60",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "8"
        },
        depth: 2
        },
        3046: {
        name: "Phantom Dancer",
        description: "<mainText><stats><attention>20</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Spectral Waltz:</passive> Attacks grant <status>Ghosting</status> and <speed>7% Move Speed</speed> for 3 seconds. In addition, Attacking 4 times causes Spectral Waltz to also grant <attackSpeed>30% Attack Speed</attackSpeed> for the same duration.<br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
        colloq: ";pd",
        plaintext: "Move faster while attacking enemies and gain a shield when on low health.",
        from: [
        "1036",
        "3086",
        "1036"
        ],
        image: {
        full: "3046.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 20,
        FlatCritChanceMod: 0.2,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.25
        },
        effect: {
        Effect1Amount: "0.24",
        Effect2Amount: "10",
        Effect3Amount: "550",
        Effect4Amount: "0.1",
        Effect5Amount: "0.3",
        Effect6Amount: "2.5",
        Effect7Amount: "90",
        Effect8Amount: "240",
        Effect9Amount: "600",
        Effect10Amount: "40",
        Effect11Amount: "5",
        Effect12Amount: "0.3",
        Effect13Amount: "0.7",
        Effect14Amount: "3",
        Effect15Amount: "300",
        Effect16Amount: "1",
        Effect17Amount: "0.4",
        Effect18Amount: "9"
        },
        depth: 3
        },
        3047: {
        name: "Plated Steelcaps",
        description: "<mainText><stats><attention>20</attention> Armor<br><attention>45</attention> Move Speed</stats><br><li>Reduces incoming damage from Attacks by 12%.</mainText><br>",
        colloq: ";",
        plaintext: "Enhances Movement Speed and reduces incoming basic attack damage",
        from: [
        "1001",
        "1029"
        ],
        image: {
        full: "3047.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Armor",
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 45,
        FlatArmorMod: 20
        },
        effect: {
        Effect1Amount: "0.12"
        },
        depth: 2
        },
        3050: {
        name: "Zeke's Convergence",
        description: "<mainText><stats><attention>250</attention> Health<br><attention>25</attention> Armor<br><attention>250</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Conduit:</active> Designate an <attention>Accomplice</attention> (60s cooldown).<br><li><passive>Convergence:</passive> For 8 seconds after you <status>Immobilize</status> an enemy, your <attention>Accomplice's</attention> Attacks and Ability hits apply an additional <magicDamage>(30 - 70 (based on level) + 1.5% Health + 7.5% Ability Power) magic damage</magicDamage> to that enemy.<br><br><rules>Champions can only be linked by one Zeke's Convergence at a time.</rules></mainText><br>",
        colloq: ";haroldandkumar",
        plaintext: "Grants you and your ally bonuses when you cast your ultimate.",
        from: [
        "3067",
        "3024"
        ],
        image: {
        full: "3050.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 2400,
        sell: 1680
        },
        tags: [
        "Health",
        "Armor",
        "Mana",
        "Active",
        "CooldownReduction",
        "OnHit",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMPPoolMod: 250,
        FlatArmorMod: 25
        },
        depth: 3
        },
        3051: {
        name: "Hearthbound Axe",
        description: "<mainText><stats><attention>15</attention> Attack Damage<br><attention>15%</attention> Attack Speed</stats><br><li><passive>Nimble:</passive> Attacking a unit grants <speed>(20 | 10 for Ranged champions) Move Speed</speed> for 2 seconds.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1042",
        "1036"
        ],
        into: [
        "3078",
        "6631",
        "3091"
        ],
        image: {
        full: "3051.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Damage",
        "AttackSpeed",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 15,
        PercentAttackSpeedMod: 0.15
        },
        effect: {
        Effect1Amount: "20",
        Effect2Amount: "2",
        Effect3Amount: "60"
        },
        depth: 2
        },
        3053: {
        name: "Sterak's Gage",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>400</attention> Health</stats><br><li><passive>Bloodlust:</passive> Dealing damage to or taking damage from a champion grants a stack, restoring <healing>(2% max Health | 1.2% max Health for Ranged champions)</healing> over 6 seconds. Stacks beyond the first heal for 50% less.<li><passive>Lifeline:</passive> Upon taking damage that would reduce your Health below 30%, gain a <shield>100 Shield (increased by (8% max Health | 4.8% max Health for Ranged champions) per stack of <passive>Bloodlust</passive>)</shield> for 4 seconds (60s cooldown).<br><br><rules><attention>Bloodlust</attention> stacks up to 5 times; 1 per champion. Healing and bonus shielding reduced to 60% for Ranged users.</rules></mainText><br>",
        colloq: ";juggernaut;primal",
        plaintext: "Shields against large bursts of damage",
        from: [
        "1037",
        "3044",
        "1028"
        ],
        image: {
        full: "3053.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 725,
        purchasable: true,
        total: 3100,
        sell: 2170
        },
        tags: [
        "Health",
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50,
        FlatHPPoolMod: 400
        },
        depth: 3
        },
        3057: {
        name: "Sheen",
        description: "<mainText><stats></stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with an additional <physicalDamage>(100% base Attack Damage) physical damage</physicalDamage> <OnHit>On-Hit</OnHit> (1.5s cooldown). </mainText><br>",
        colloq: ";",
        plaintext: "Grants a bonus to next attack after spell cast",
        into: [
        "3078",
        "3100",
        "3508",
        "6632"
        ],
        image: {
        full: "3057.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 700,
        sell: 490
        },
        tags: [
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        3065: {
        name: "Spirit Visage",
        description: "<mainText><stats><attention>450</attention> Health<br><attention>40</attention> Magic Resist<br><attention>10</attention> Ability Haste<br><attention>100%</attention> Base Health Regen</stats><br><li><passive>Boundless Vitality:</passive> Increases all Healing and Shielding effectiveness on you by 25%.</mainText><br>",
        colloq: ";sv",
        plaintext: "Increases Health and healing effects",
        from: [
        "3211",
        "3067"
        ],
        image: {
        full: "3065.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Health",
        "SpellBlock",
        "HealthRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 450,
        FlatSpellBlockMod: 40
        },
        depth: 3
        },
        3066: {
        name: "Winged Moonplate",
        description: "<mainText><stats><attention>150</attention> Health</stats><br><li><passive>Flight:</passive> Grants <speed>5% Move Speed</speed>.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1028"
        ],
        into: [
        "3742",
        "4401"
        ],
        image: {
        full: "3066.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "Health",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150
        },
        depth: 2
        },
        3067: {
        name: "Kindlegem",
        description: "<mainText><stats><attention>200</attention> Health<br><attention>10</attention> Ability Haste</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases Health and Cooldown Reduction",
        from: [
        "1028"
        ],
        into: [
        "3065",
        "2065",
        "6617",
        "3071",
        "3083",
        "6630",
        "3190",
        "3050",
        "3078",
        "3107",
        "3109",
        "3143",
        "4005",
        "4403",
        "4629",
        "6631",
        "6632",
        "6656",
        "8001"
        ],
        image: {
        full: "3067.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "Health",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200
        },
        depth: 2
        },
        3068: {
        name: "Sunfire Aegis",
        description: "<mainText><stats><attention>350</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><li><passive>Immolate:</passive> Taking or dealing damage causes you to begin dealing <magicDamage>(12 - 30 (based on level) + 1% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions and 150% against monsters) for 3 seconds. Damaging Champions or Epic Monsters with this effect adds a stack, increasing subsequent <passive>Immolate</passive> damage by 12% for 5 seconds (max stacks 6).<li><passive>Flametouch:</passive> At maximum <passive>Immolate</passive> stacks, your Attacks burn nearby enemies for your <passive>Immolate</passive> damage per second for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Tenacity and Slow Resist.</mainText><br>",
        colloq: ";",
        plaintext: "High armor. Constantly deals damage to nearby enemies. Immobilize enemies to release a wave of damaging flame",
        from: [
        "6660",
        "3105"
        ],
        image: {
        full: "3068.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Health",
        "SpellBlock",
        "Armor",
        "Aura",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
        },
        depth: 3
        },
        3070: {
        name: "Tear of the Goddess",
        description: "<mainText><stats><attention>240</attention> Mana</stats><br><li><passive>Focus:</passive> Attacks deal an additional <physicalDamage>5 physical damage</physicalDamage> to Minions.<li><passive>Mana Charge:</passive> Strike a target with an Ability to consume a charge and gain <scaleMana>3 bonus Mana</scaleMana>, doubled if the target is a champion. Grants a maximum of 360 Mana.<br><br><rules>Gain a new <passive>Mana Charge</passive> every 8 seconds (max 4).</rules></mainText><br>",
        colloq: "",
        plaintext: "Increases maximum Mana as Mana is spent",
        into: [
        "3003",
        "3004"
        ],
        image: {
        full: "3070.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 280
        },
        tags: [
        "Mana",
        "ManaRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 240
        }
        },
        3071: {
        name: "Black Cleaver",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>450</attention> Health<br><attention>25</attention> Ability Haste</stats><br><li><passive>Carve:</passive> Dealing physical damage to a champion applies a stack of <scaleArmor>5% Armor reduction</scaleArmor> for 6 seconds (max <scaleArmor>30% Armor reduction</scaleArmor>).<li><passive>Rage:</passive> Dealing physical damage to a champion grants 3 Move Speed per stack of <unique>Carve</unique> on them for 2 seconds.</mainText><br>",
        colloq: ";bc",
        plaintext: "Dealing physical damage to enemy champions reduces their Armor",
        from: [
        "3133",
        "3067",
        "1036"
        ],
        image: {
        full: "3071.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 3100,
        sell: 2170
        },
        tags: [
        "Health",
        "Damage",
        "CooldownReduction",
        "OnHit",
        "NonbootsMovement",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 450
        },
        effect: {
        Effect1Amount: "-0.2",
        Effect2Amount: "0.05",
        Effect3Amount: "6",
        Effect4Amount: "6",
        Effect5Amount: "0.3",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "0",
        Effect9Amount: "0",
        Effect10Amount: "0.01"
        },
        depth: 3
        },
        3072: {
        name: "Bloodthirster",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>20%</attention> Life Steal</stats><br><li><passive>Ichorshield:</passive> Life Steal from Attacks can now overheal you. Excess Health is stored as a <shield>50 - 350 (based on level) Shield</shield> that decays slowly if you haven't dealt or taken damage in the last 25 seconds.</mainText><br>",
        colloq: ";bt",
        plaintext: "Grants Attack Damage, Life Steal and Life Steal now overheals",
        from: [
        "1038",
        "1018",
        "1053"
        ],
        image: {
        full: "3072.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "LifeSteal"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55,
        FlatCritChanceMod: 0.2,
        PercentLifeStealMod: 0.2
        },
        depth: 3
        },
        3074: {
        name: "Ravenous Hydra",
        description: "<mainText><stats><attention>65</attention> Attack Damage<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Omnivamp</stats><br><li><passive>Cleave:</passive> Attacks and Abilities deal up to <physicalDamage>(60% Attack Damage) physical damage</physicalDamage> to other enemies near target hit.<br><br><rules>Deals a minimum of (12% Attack Damage) damage to units at the end of its range, can only hit each target once per Attack or Ability, and doesn't trigger off of periodic damage.<br>Cleave does not trigger on structures. </rules><br></mainText><br>",
        colloq: ";",
        plaintext: "Melee attacks hit nearby enemies, dealing damage and restoring Health",
        from: [
        "3077",
        "1053",
        "3133"
        ],
        image: {
        full: "3074.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 100,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "Damage",
        "LifeSteal",
        "CooldownReduction",
        "SpellVamp",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 65
        },
        depth: 3
        },
        3075: {
        name: "Thornmail",
        description: "<mainText><stats><attention>350</attention> Health<br><attention>60</attention> Armor</stats><br><li><passive>Thorns:</passive> When struck by an Attack, deal <magicDamage>(10 + 10% bonus Armor) magic damage</magicDamage> to the attacker and apply 40% <status>Grievous Wounds</status> for 3 seconds if they are a champion. Immobilizing enemy champions also applies 60% <status>Grievous Wounds</status> for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3076",
        "1011"
        ],
        image: {
        full: "3075.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 1000,
        purchasable: true,
        total: 2700,
        sell: 1890
        },
        tags: [
        "Health",
        "Armor"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatArmorMod: 60
        },
        depth: 3
        },
        3076: {
        name: "Bramble Vest",
        description: "<mainText><stats><attention>30</attention> Armor</stats><br><li><passive>Thorns:</passive> When struck by an Attack, deal <magicDamage>3 magic damage</magicDamage> to the attacker and apply <status>40% Grievous Wounds</status> for 3 seconds if they are a champion.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1029",
        "1029"
        ],
        into: [
        "3075"
        ],
        image: {
        full: "3076.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 200,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "Armor"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatArmorMod: 30
        },
        depth: 2
        },
        3077: {
        name: "Tiamat",
        description: "<mainText><stats><attention>25</attention> Attack Damage</stats><br><li><passive>Cleave:</passive> Attacks deal up to <physicalDamage>(60% Attack Damage) physical damage</physicalDamage> to other nearby enemies. <br><br><rules>Minimum of (12% Attack Damage) damage to enemies furthest away.<br>Cleave does not trigger on structures. </rules></mainText><br>",
        colloq: ";",
        plaintext: "Melee attacks hit nearby enemies",
        from: [
        "1037"
        ],
        into: [
        "3074",
        "3748"
        ],
        image: {
        full: "3077.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 325,
        purchasable: true,
        total: 1200,
        sell: 840
        },
        tags: [
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 25
        },
        effect: {
        Effect1Amount: "0.2",
        Effect2Amount: "0.6"
        },
        depth: 2
        },
        3078: {
        name: "Trinity Force",
        description: "<mainText><stats><attention>35</attention> Attack Damage<br><attention>30%</attention> Attack Speed<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Threefold Strike:</passive> Attacks grant <speed>20 Move Speed</speed> for 3 seconds. If the target is a champion, increase your <scaleAD>base Attack Damage by 6%</scaleAD> for 3 seconds, stacking up to 5 times (Max increase <scaleAD>30% AD</scaleAD>).<li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with an additional <physicalDamage>(200% base Attack Damage) physical damage</physicalDamage> <OnHit>On-Hit</OnHit> (1.5s cooldown). <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>3</attention> Attack Damage, <attention>3</attention> Ability Haste, and <attention> 3</attention> Move Speed</mainText><br>",
        colloq: ";triforce;tons of damage",
        plaintext: "Tons of Damage",
        from: [
        "3057",
        "3051",
        "3067"
        ],
        image: {
        full: "3078.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 733,
        purchasable: true,
        total: 3333,
        sell: 2333
        },
        tags: [
        "Health",
        "Damage",
        "AttackSpeed",
        "CooldownReduction",
        "OnHit",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 35,
        FlatHPPoolMod: 200,
        PercentAttackSpeedMod: 0.3
        },
        effect: {
        Effect1Amount: "25",
        Effect2Amount: "60",
        Effect3Amount: "2",
        Effect4Amount: "1.5",
        Effect5Amount: "1.5"
        },
        depth: 3
        },
        3082: {
        name: "Warden's Mail",
        description: "<mainText><stats><attention>40</attention> Armor</stats><br><li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks by up to 5 + (0.35% max Health), capped at 40% of the attack's damage.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1029",
        "1029"
        ],
        into: [
        "3110",
        "3143"
        ],
        image: {
        full: "3082.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 1000,
        sell: 700
        },
        tags: [
        "Armor"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatArmorMod: 40
        },
        depth: 2
        },
        3083: {
        name: "Warmog's Armor",
        description: "<mainText><stats><attention>800</attention> Health<br><attention>10</attention> Ability Haste<br><attention>200%</attention> Base Health Regen</stats><br><li><passive>Warmog's Heart:</passive> If you have at least 1100 bonus Health, restore <healing>5% max Health</healing> per second if damage hasn't been taken within 6 seconds (3 seconds for non-Champions).</mainText><br>",
        colloq: ";",
        plaintext: "Grants massive Health and Health Regen",
        from: [
        "1011",
        "3067",
        "3801"
        ],
        image: {
        full: "3083.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Health",
        "HealthRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 800
        },
        depth: 3
        },
        3085: {
        name: "Runaan's Hurricane",
        description: "<mainText><stats><attention>45%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Wind's Fury:</passive> When Attacking, bolts are fired at up to 2 enemies near the target, each dealing <physicalDamage>(40% Attack Damage) physical damage</physicalDamage>. Bolts apply On-Hit effects and can Critically Strike.<br><br><rules>Item is for Ranged champions only.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Ranged attacks fire two bolts at nearby enemies",
        from: [
        "1042",
        "3086",
        "1042"
        ],
        image: {
        full: "3085.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "CriticalStrike",
        "AttackSpeed",
        "OnHit",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatCritChanceMod: 0.2,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.45
        },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "40",
        Effect3Amount: "2",
        Effect4Amount: "0",
        Effect5Amount: "40",
        Effect6Amount: "1"
        },
        depth: 3
        },
        3086: {
        name: "Zeal",
        description: "<mainText><stats><attention>18%</attention> Attack Speed<br><attention>15%</attention> Critical Strike Chance</stats><br><li><passive>Zealous:</passive> Gain <speed>7% Move Speed</speed>.</mainText><br>",
        colloq: ";",
        plaintext: "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
        from: [
        "1018",
        "1042"
        ],
        into: [
        "3085",
        "3033",
        "3046",
        "3094",
        "4403"
        ],
        image: {
        full: "3086.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 150,
        purchasable: true,
        total: 1050,
        sell: 735
        },
        tags: [
        "AttackSpeed",
        "CriticalStrike",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatCritChanceMod: 0.15,
        PercentAttackSpeedMod: 0.18
        },
        effect: {
        Effect1Amount: "0.07"
        },
        depth: 2
        },
        3089: {
        name: "Rabadon's Deathcap",
        description: "<mainText><stats><attention>120</attention> Ability Power</stats><br><li><passive>Magical Opus:</passive> Increases your total <scaleAP>Ability Power by 35%</scaleAP>.</mainText><br>",
        colloq: ";dc;banksys;hat",
        plaintext: "Massively increases Ability Power",
        from: [
        "1058",
        "1058"
        ],
        image: {
        full: "3089.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 1100,
        purchasable: true,
        total: 3600,
        sell: 2520
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 120
        },
        depth: 2
        },
        3091: {
        name: "Wit's End",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>40%</attention> Attack Speed<br><attention>50</attention> Magic Resist</stats><br><li><passive>Fray:</passive> Attacks apply <magicDamage>15 - 80 (based on level) magic damage</magicDamage> <OnHit>On-Hit</OnHit> and grant <speed>20 Move Speed</speed> for 2 seconds.</mainText><br>",
        colloq: ";",
        plaintext: "Resist magic damage and claw your way back to life.",
        from: [
        "3051",
        "1057",
        "1036"
        ],
        image: {
        full: "3091.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 3100,
        sell: 2170
        },
        tags: [
        "SpellBlock",
        "Damage",
        "AttackSpeed",
        "OnHit",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatSpellBlockMod: 50,
        PercentAttackSpeedMod: 0.4
        },
        depth: 3
        },
        3094: {
        name: "Rapid Firecannon",
        description: "<mainText><stats><attention>35%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>7%</attention> Move Speed</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Sharpshooter:</passive> Your Energized Attack applies <magicDamage>120 bonus magic damage</magicDamage>. In addition, Energized attacks gain up to 35% bonus Attack Range.<br><br><rules>Attack Range cannot increase more than 150 units.</rules></mainText><br>",
        colloq: ";canon;rapidfire;rfc",
        plaintext: "Movement builds charges that release a sieging fire attack on release",
        from: [
        "3086",
        "2015"
        ],
        image: {
        full: "3094.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "CriticalStrike",
        "AttackSpeed",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatCritChanceMod: 0.2,
        PercentMovementSpeedMod: 0.07,
        PercentAttackSpeedMod: 0.35
        },
        depth: 3
        },
        3095: {
        name: "Stormrazor",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>15%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Energized:</passive> Moving and Attacking will generate an Energized Attack.<li><passive>Paralyze:</passive> Your Energized Attack gains <magicDamage>120 bonus magic damage</magicDamage>. In addition, Energized Attacks slow enemies by 75% for 0.5 seconds.<br></mainText><br>",
        colloq: ";Windblade",
        plaintext: "Tremendously empower other Energized effects.",
        from: [
        "1038",
        "1018",
        "2015"
        ],
        image: {
        full: "3095.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 100,
        purchasable: true,
        total: 2700,
        sell: 1890
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "Slow"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatCritChanceMod: 0.2,
        PercentAttackSpeedMod: 0.15
        },
        effect: {
        Effect1Amount: "120",
        Effect2Amount: "120",
        Effect3Amount: "5",
        Effect4Amount: "0.35",
        Effect5Amount: "0.75",
        Effect6Amount: "0.5"
        },
        depth: 3
        },
        3100: {
        name: "Lich Bane",
        description: "<mainText><stats><attention>75</attention> Ability Power<br><attention>8%</attention> Move Speed</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with an additional <magicDamage>(150% base Attack Damage + 40% Ability Power) magic damage</magicDamage> <OnHit>On-Hit</OnHit> (2.5s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Grants a bonus to next attack after spell cast",
        from: [
        "3057",
        "3113",
        "1026"
        ],
        image: {
        full: "3100.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "SpellDamage",
        "OnHit",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentMovementSpeedMod: 0.08,
        FlatMagicDamageMod: 75
        },
        depth: 3
        },
        3102: {
        name: "Banshee's Veil",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>45</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats><br><li><passive>Annul:</passive> Grants a Spell Shield that blocks the next enemy Ability (40s cooldown).<br><br><rules>Item cooldown is restarted if you take damage from champions before it is completed.</rules></mainText><br>",
        colloq: ";bv",
        plaintext: "Periodically blocks enemy abilities",
        from: [
        "3108",
        "4632"
        ],
        image: {
        full: "3102.png",
        sprite: "item0.png",
        group: "item",
        x: 0,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "SpellBlock",
        "SpellDamage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 45,
        FlatMagicDamageMod: 80
        },
        effect: {
        Effect1Amount: "40",
        Effect2Amount: "45",
        Effect3Amount: "10",
        Effect4Amount: "-0.1",
        Effect5Amount: "8",
        Effect6Amount: "2"
        },
        depth: 3
        },
        3105: {
        name: "Aegis of the Legion",
        description: "<mainText><stats><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>10</attention> Ability Haste</stats></mainText><br>",
        colloq: ";",
        plaintext: "Grants Armor and Magic Resistance",
        from: [
        "1033",
        "1029"
        ],
        into: [
        "3190",
        "3193",
        "3068",
        "4403"
        ],
        image: {
        full: "3105.png",
        sprite: "item0.png",
        group: "item",
        x: 48,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 1500,
        sell: 1050
        },
        tags: [
        "SpellBlock",
        "Armor",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
        },
        depth: 2
        },
        3107: {
        name: "Redemption",
        description: "<mainText><stats><attention>20%</attention> Heal and Shield Power<br><attention>200</attention> Health<br><attention>15</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><br><active>Active -</active> <active>Intervention:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to Restore <healing>200 - 400 (scales with ally level) Health</healing> to allies and burn enemy champions for <trueDamage>10% max Health true damage</trueDamage> (90s cooldown).<br><br><rules>Item can be activated whilst dead. Damage and healing reduced by 50% if the target has recently been affected by another <active>Intervention</active>. Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Activate to heal allies and damage enemies in an area",
        from: [
        "3067",
        "3114"
        ],
        image: {
        full: "3107.png",
        sprite: "item0.png",
        group: "item",
        x: 96,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "Health",
        "ManaRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200
        },
        depth: 3
        },
        3108: {
        name: "Fiendish Codex",
        description: "<mainText><stats><attention>35</attention> Ability Power<br><attention>10</attention> Ability Haste</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases Ability Power and Cooldown Reduction",
        from: [
        "1052"
        ],
        into: [
        "3102",
        "6653",
        "3157",
        "4629"
        ],
        image: {
        full: "3108.png",
        sprite: "item0.png",
        group: "item",
        x: 144,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 465,
        purchasable: true,
        total: 900,
        sell: 630
        },
        tags: [
        "SpellDamage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 35
        },
        effect: {
        Effect1Amount: "-0.1"
        },
        depth: 2
        },
        3109: {
        name: "Knight's Vow",
        description: "<mainText><stats><attention>400</attention> Health<br><attention>10</attention> Ability Haste<br><attention>300%</attention> Base Health Regen</stats><br><br><active>Active -</active> <active>Pledge:</active> Designate an ally who is <attention>Worthy</attention> (60s cooldown).<br><li><passive>Sacrifice:</passive> While your <attention>Worthy</attention> ally is nearby, redirect 15% of damage they take to you and if they have less than 50% Health gain <speed>35% Move Speed</speed> when running towards them.<br><br><rules>Champions can only be linked by one Knight's Vow at a time. Damage redirection stops if you have less than 30% Health</rules></mainText><br>",
        colloq: ";",
        plaintext: "Partner with an ally to protect each other",
        from: [
        "3801",
        "1006",
        "3067"
        ],
        image: {
        full: "3109.png",
        sprite: "item0.png",
        group: "item",
        x: 192,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "Health",
        "HealthRegen",
        "Aura",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 400
        },
        depth: 3
        },
        3110: {
        name: "Frozen Heart",
        description: "<mainText><stats><attention>80</attention> Armor<br><attention>400</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Winter's Caress:</passive> Reduces the <attackSpeed>Attack Speed</attackSpeed> of nearby enemies by 20%.<li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks by up to 7 + (3.5 per 1000 max Health), capped at 40% of the Attack's damage.</mainText><br>",
        colloq: ";fh",
        plaintext: "Massively increases Armor and slows enemy basic attacks",
        from: [
        "3082",
        "3024"
        ],
        image: {
        full: "3110.png",
        sprite: "item0.png",
        group: "item",
        x: 240,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Armor",
        "Mana",
        "Aura",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 400,
        FlatArmorMod: 80
        },
        depth: 3
        },
        3111: {
        name: "Mercury's Treads",
        description: "<mainText><stats><attention>25</attention> Magic Resist<br><attention>45</attention> Move Speed<br><attention>30%</attention> Tenacity</stats><br><br><rules>Tenacity reduces the duration of <status>Stun</status>, <status>Slow</status>, <status>Taunt</status>, <status>Fear</status>, <status>Silence</status>, <status>Blind</status>, <status>Polymorph</status> and <status>Immobilizing</status> effects. It has no effect on <status>Airborne</status> or <status>Suppression</status>.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Increases Movement Speed and reduces duration of disabling effects",
        from: [
        "1001",
        "1033"
        ],
        image: {
        full: "3111.png",
        sprite: "item0.png",
        group: "item",
        x: 288,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 350,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Boots",
        "SpellBlock",
        "Tenacity"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 45,
        FlatSpellBlockMod: 25
        },
        depth: 2
        },
        3112: {
        name: "Guardian's Orb",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>150</attention> Health</stats><br><li><passive>Recovery:</passive> Restores <scaleMana>10 Mana</scaleMana> every 5 seconds. If you can't gain mana, restores <healing>15 Health</healing> instead.<li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
        colloq: ";",
        plaintext: "Good starting item for mages",
        image: {
        full: "3112.png",
        sprite: "item0.png",
        group: "item",
        x: 336,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "Health",
        "SpellDamage",
        "ManaRegen",
        "Lane"
        ],
        maps: {
        11: false,
        12: true,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150,
        FlatMagicDamageMod: 40
        },
        effect: {
        Effect1Amount: "3"
        }
        },
        3113: {
        name: "Aether Wisp",
        description: "<mainText><stats><attention>30</attention> Ability Power</stats><br><li><passive>Glide:</passive> Gain <speed>5% Move Speed</speed>.</mainText><br>",
        colloq: ";",
        plaintext: "Increases Ability Power and Movement Speed",
        from: [
        "1052"
        ],
        into: [
        "3100"
        ],
        image: {
        full: "3113.png",
        sprite: "item0.png",
        group: "item",
        x: 384,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 415,
        purchasable: true,
        total: 850,
        sell: 595
        },
        tags: [
        "NonbootsMovement",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 30
        },
        depth: 2
        },
        3114: {
        name: "Forbidden Idol",
        description: "<mainText><stats><attention>50%</attention> Base Mana Regen<br><attention>10%</attention> Heal and Shield Power</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases Heal and Shield Power, Mana Regeneration, and Cooldown Reduction",
        from: [
        "1004"
        ],
        into: [
        "6616",
        "3107",
        "3222",
        "3504"
        ],
        image: {
        full: "3114.png",
        sprite: "item0.png",
        group: "item",
        x: 432,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 550,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "ManaRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        depth: 2
        },
        3115: {
        name: "Nashor's Tooth",
        description: "<mainText><stats><attention>100</attention> Ability Power<br><attention>50%</attention> Attack Speed</stats><br><li><passive>Icathian Bite:</passive> Attacks apply <magicDamage>(15 + 20% Ability Power) magic damage</magicDamage> <OnHit>On-Hit</OnHit>.</mainText><br>",
        colloq: ";",
        plaintext: "Increases Attack Speed, Ability Power, and Cooldown Reduction",
        from: [
        "1043",
        "1026",
        "1052"
        ],
        image: {
        full: "3115.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 715,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "AttackSpeed",
        "SpellDamage",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 100,
        PercentAttackSpeedMod: 0.5
        },
        depth: 3
        },
        3116: {
        name: "Rylai's Crystal Scepter",
        description: "<mainText><stats><attention>90</attention> Ability Power<br><attention>350</attention> Health</stats><br><li><passive>Rimefrost:</passive> Damaging Abilities <status>Slow</status> enemies by 30% for 1 second.</mainText><br>",
        colloq: ";",
        plaintext: "Abilities slow enemies",
        from: [
        "1026",
        "1011",
        "1052"
        ],
        image: {
        full: "3116.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 815,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Health",
        "SpellDamage",
        "Slow"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatMagicDamageMod: 90
        },
        effect: {
        Effect1Amount: "-0.3",
        Effect2Amount: "-0.3",
        Effect3Amount: "-0.3",
        Effect4Amount: "1",
        Effect5Amount: "1",
        Effect6Amount: "1"
        },
        depth: 3
        },
        3117: {
        name: "Mobility Boots",
        description: "<mainText><stats></stats><attention>25</attention> Move Speed <li>When out of combat for at least 5 seconds, increase this item's effect to <attention>115</attention>.</mainText><br>",
        colloq: ";",
        plaintext: "Greatly enhances Movement Speed when out of combat",
        from: [
        "1001"
        ],
        image: {
        full: "3117.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 1000,
        sell: 700
        },
        tags: [
        "Boots"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 115
        },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "25"
        },
        depth: 2
        },
        3123: {
        name: "Executioner's Calling",
        description: "<mainText><stats><attention>15</attention> Attack Damage</stats><br><li><passive>Rend:</passive> Dealing physical damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds. <br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: ";grievous",
        plaintext: "Overcomes enemies with high health gain",
        from: [
        "1036"
        ],
        into: [
        "6609",
        "3033"
        ],
        image: {
        full: "3123.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 15
        },
        effect: {
        Effect1Amount: "3"
        },
        depth: 2
        },
        3124: {
        name: "Guinsoo's Rageblade",
        description: "<mainText><stats><attention>45%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Wrath:</passive> Your Critical Strike Chance is converted into <OnHit>On-Hit</OnHit> damage. Gain <physicalDamage>40</physicalDamage> <OnHit>On-Hit</OnHit> for each 20% Critical Strike Chance converted.<li><passive>Seething Strike:</passive> Every third Attack applies your On-Hit effects twice.<br><br><rules><passive>Wrath</passive> cannot benefit from more than 100% Critical Strike Chance. <passive>Wrath's</passive> On-Hit damage conversion is affected by Critical Strike damage modifiers. </rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6677",
        "1018",
        "1042"
        ],
        image: {
        full: "3124.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 900,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "CriticalStrike",
        "AttackSpeed",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatCritChanceMod: 0.2,
        PercentAttackSpeedMod: 0.45
        },
        effect: {
        Effect1Amount: "0.08",
        Effect2Amount: "2.5",
        Effect3Amount: "2.5",
        Effect4Amount: "5",
        Effect5Amount: "6",
        Effect6Amount: "0.1",
        Effect7Amount: "0.1",
        Effect8Amount: "15",
        Effect9Amount: "1",
        Effect10Amount: "3",
        Effect11Amount: "0",
        Effect12Amount: "0",
        Effect13Amount: "3"
        },
        depth: 3
        },
        3133: {
        name: "Caulfield's Warhammer",
        description: "<mainText><stats><attention>25</attention> Attack Damage<br><attention>10</attention> Ability Haste</stats></mainText><br>",
        colloq: ";",
        plaintext: "Attack Damage and Cooldown Reduction",
        stacks: 0,
        from: [
        "1036",
        "1036"
        ],
        into: [
        "6609",
        "3071",
        "3004",
        "3074",
        "3142",
        "3156",
        "3508",
        "6333",
        "6675",
        "6691",
        "6693",
        "6694"
        ],
        image: {
        full: "3133.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Damage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 25
        },
        depth: 2
        },
        3134: {
        name: "Serrated Dirk",
        description: "<mainText><stats><attention>30</attention> Attack Damage</stats><br><li><passive>Gouge:</passive> Gain <scaleLethality>10 Lethality</scaleLethality>.</mainText><br>",
        colloq: ";lethality",
        plaintext: "Increases Attack Damage and Lethality",
        stacks: 0,
        from: [
        "1036",
        "1036"
        ],
        into: [
        "3142",
        "3179",
        "6676",
        "3814",
        "6691",
        "6692",
        "6693",
        "6695"
        ],
        image: {
        full: "3134.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Damage",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30
        },
        effect: {
        Effect1Amount: "10"
        },
        depth: 2
        },
        3135: {
        name: "Void Staff",
        description: "<mainText><stats><attention>70</attention> Ability Power<br><attention>40%</attention> Magic Penetration</stats></mainText><br>",
        colloq: ";",
        plaintext: "Increases magic damage",
        from: [
        "4630",
        "1026"
        ],
        image: {
        full: "3135.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 2700,
        sell: 1890
        },
        tags: [
        "MagicPenetration",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 70
        },
        depth: 3
        },
        3139: {
        name: "Mercurial Scimitar",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>30</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs (excluding <status>Airborne</status>) and also gain <speed>50% Move Speed</speed> for 1 second (90s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Activate to remove all crowd control debuffs and grant massive Movement Speed",
        from: [
        "3140",
        "1018",
        "1037"
        ],
        image: {
        full: "3139.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 225,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "SpellBlock",
        "Damage",
        "CriticalStrike",
        "Active",
        "NonbootsMovement",
        "Tenacity"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatCritChanceMod: 0.2,
        FlatSpellBlockMod: 30
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "1",
        Effect3Amount: "90"
        },
        depth: 3
        },
        3140: {
        name: "Quicksilver Sash",
        description: "<mainText><stats><attention>30</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Removes all crowd control debuffs (excluding <status>Airborne</status>) (90s cooldown).<br></mainText><br>",
        colloq: ";qss",
        plaintext: "Activate to remove all crowd control debuffs",
        from: [
        "1033"
        ],
        into: [
        "6035",
        "3139"
        ],
        image: {
        full: "3140.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 0,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "Active",
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 30
        },
        depth: 2
        },
        3142: {
        name: "Youmuu's Ghostblade",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Wraith Step:</active> Gain <speed>20% Move Speed</speed> and <status>Ghosting</status> for 6 seconds (45s cooldown).<br><li><passive>Haunt:</passive> Gain <speed>40 Move Speed</speed> out of combat.<br><br><rules><status>Ghosted</status> units ignore collision with other units.</rules></mainText><br>",
        colloq: ";lethality",
        plaintext: "Activate to greatly increase Movement Speed",
        from: [
        "3134",
        "3133"
        ],
        image: {
        full: "3142.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Damage",
        "Active",
        "NonbootsMovement",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55
        },
        effect: {
        Effect1Amount: "45",
        Effect2Amount: "18",
        Effect3Amount: "0.2",
        Effect4Amount: "0",
        Effect5Amount: "6",
        Effect6Amount: "40"
        },
        depth: 3
        },
        3143: {
        name: "Randuin's Omen",
        description: "<mainText><stats><attention>250</attention> Health<br><attention>80</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Humility:</active> Briefly <status>Slow</status> nearby enemies and reduce their <scaleAD>Attack Damage</scaleAD> by 10% and Critical Strike Damage by 20% for 4 seconds (60s cooldown).<br><li><passive>Rock Solid:</passive> Reduce incoming damage from Attacks by up to 5 + (0.35% max Health), capped at 40% of the attack's damage.</mainText><br>",
        colloq: ";",
        plaintext: "Greatly increases defenses, activate to slow nearby enemies",
        from: [
        "3082",
        "1029",
        "3067"
        ],
        image: {
        full: "3143.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 2700,
        sell: 1890
        },
        tags: [
        "Health",
        "Armor",
        "Active",
        "CooldownReduction",
        "Slow",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatArmorMod: 80
        },
        depth: 3
        },
        3145: {
        name: "Hextech Alternator",
        description: "<mainText><stats><attention>40</attention> Ability Power</stats><br><li><passive>Revved:</passive> Damaging a champion deals an additional <magicDamage>50 - 125 (based on level) magic damage</magicDamage> (40s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Increases Ability Power. Deal bonus magic damage on attack periodically.",
        from: [
        "1052",
        "1052"
        ],
        into: [
        "3152",
        "4628",
        "4636"
        ],
        image: {
        full: "3145.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 180,
        purchasable: true,
        total: 1050,
        sell: 735
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 40
        },
        depth: 2
        },
        3152: {
        name: "Hextech Rocketbelt",
        description: "<mainText><stats><attention>90</attention> Ability Power<br><attention>6</attention> Magic Penetration<br><attention>250</attention> Health<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Hex Bolt:</active> Dash in target direction, unleashing an arc of magic missiles that deal <magicDamage>(125 +15% Ability Power) magic damage</magicDamage>. Then, gain <speed>30% Move Speed</speed> towards enemy champions for 1.5 seconds (40s cooldown).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Magic Penetration.<br><br><rules>Supersonic's dash cannot pass through terrain.</rules></mainText><br>",
        colloq: "rocket belt;",
        plaintext: "Activate to dash forward and unleash a fiery explosion",
        from: [
        "3145",
        "1028",
        "1026"
        ],
        image: {
        full: "3152.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 900,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Health",
        "SpellDamage",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "MagicPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMagicDamageMod: 90
        },
        depth: 3
        },
        3153: {
        name: "Blade of The Ruined King",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>10%</attention> Life Steal</stats><br><li><passive>Mist's Edge:</passive> Attacks apply <physicalDamage>physical damage</physicalDamage> <OnHit>On-Hit</OnHit> equal to (10% for Melee users | 6% for Ranged users) of the target's current Health. <li><passive>Siphon:</passive> Attacking a champion 3 times deals <magicDamage>40 - 150 (based on level) magic damage</magicDamage> and steals 25% Move Speed for 2 seconds (20s cooldown).<br><br><rules>Maximum <passive>Mist's Edge</passive> damage dealt to monsters and minions is 60.<br>Item performance differs for melee and ranged users.</rules></mainText><br>",
        colloq: ";brk;bork;bork;bork;botrk",
        plaintext: "Deals damage based on target's Health, can steal Movement Speed",
        from: [
        "1053",
        "1043",
        "1037"
        ],
        image: {
        full: "3153.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 425,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Damage",
        "AttackSpeed",
        "LifeSteal",
        "Slow",
        "OnHit",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        PercentAttackSpeedMod: 0.25,
        PercentLifeStealMod: 0.1
        },
        depth: 3
        },
        3155: {
        name: "Hexdrinker",
        description: "<mainText><stats><attention>20</attention> Attack Damage<br><attention>35</attention> Magic Resist</stats><br><li><passive>Lifeline:</passive> Upon taking magic damage that would reduce Health below 30%, gain <shield>110 - 280 (based on level) magic damage Shield</shield> for 3 seconds (90s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Increases Attack Damage and Magic Resist",
        stacks: 0,
        from: [
        "1036",
        "1033"
        ],
        into: [
        "3156"
        ],
        image: {
        full: "3155.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 500,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "Damage",
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 20,
        FlatSpellBlockMod: 35
        },
        depth: 2
        },
        3156: {
        name: "Maw of Malmortius",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>50</attention> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><li><passive>Lifeline:</passive> Upon taking magic damage that would reduce Health below 30%, gain <shield>(200 + 20% max Health) magic damage Shield</shield> for 5 seconds (60s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Grants bonus Attack Damage when Health is low",
        stacks: 0,
        from: [
        "3155",
        "3133"
        ],
        image: {
        full: "3156.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 2800,
        sell: 1960
        },
        tags: [
        "SpellBlock",
        "Damage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50,
        FlatSpellBlockMod: 50
        },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "0",
        Effect9Amount: "0",
        Effect10Amount: "7"
        },
        depth: 3
        },
        3157: {
        name: "Zhonya's Hourglass",
        description: "<mainText><stats><attention>65</attention> Ability Power<br><attention>45</attention> Armor<br><attention>10</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Stasis:</active> You become <status>Invulnerable</status> and <status>Untargetable</status> for 2.5 seconds, but are prevented from taking any other actions during this time (120s cooldown).</mainText><br>",
        colloq: ";zhg;zonyas",
        plaintext: "Activate to become invincible but unable to take actions",
        from: [
        "3191",
        "2420",
        "3108"
        ],
        image: {
        full: "3157.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 50,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "Armor",
        "SpellDamage",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 65,
        FlatArmorMod: 45
        },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "2.5",
        Effect3Amount: "120"
        },
        depth: 3
        },
        3158: {
        name: "Ionian Boots of Lucidity",
        description: "<mainText><stats><attention>20</attention> Ability Haste<br><attention>45</attention> Move Speed</stats><br><li>Gain 12 Summoner Spell Haste.<br><br><flavorText>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.'</flavorText></mainText><br>",
        colloq: "",
        plaintext: "Increases Movement Speed and Cooldown Reduction",
        from: [
        "1001"
        ],
        image: {
        full: "3158.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "Boots",
        "CooldownReduction"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMovementSpeedMod: 45
        },
        depth: 2
        },
        3165: {
        name: "Morellonomicon",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health</stats><br><li><passive>Affliction:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to enemy champions for 3 seconds. If the target is below 50% Health, this effect is increased to <status>60% Grievous Wounds</status>.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: ";nmst;grievous",
        plaintext: "Increases magic damage",
        from: [
        "1026",
        "3916",
        "1028"
        ],
        image: {
        full: "3165.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 48,
        w: 48,
        h: 48
        },
        gold: {
        base: 450,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        3177: {
        name: "Guardian's Blade",
        description: "<mainText><stats><attention>30</attention> Attack Damage<br><attention>150</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
        colloq: ";dblade",
        plaintext: "Good starting item for attackers",
        image: {
        full: "3177.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "Health",
        "Damage",
        "Lane",
        "AbilityHaste"
        ],
        maps: {
        11: false,
        12: true,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30,
        FlatHPPoolMod: 150
        },
        effect: {
        Effect1Amount: "10"
        }
        },
        3179: {
        name: "Umbral Glaive",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>10</attention> Lethality<br><attention>15</attention> Ability Haste</stats><br><li><passive>Blackout:</passive> When spotted by an enemy Ward, reveal traps and disable Wards around you for 8 seconds (45s cooldown). Your Attacks instantly kill revealed traps and do triple damage to Wards.</mainText><br>",
        colloq: ";lethality",
        plaintext: "Provides trap and ward detection periodically",
        from: [
        "1036",
        "3134",
        "1036"
        ],
        image: {
        full: "3179.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 2400,
        sell: 1680
        },
        tags: [
        "Damage",
        "Vision",
        "CooldownReduction",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50
        },
        effect: {
        Effect1Amount: "10",
        Effect2Amount: "8",
        Effect3Amount: "45"
        },
        depth: 3
        },
        3181: {
        name: "Hullbreaker",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>400</attention> Health<br><attention>150%</attention> Base Health Regen</stats><br><li><passive>Boarding Party:</passive> While no allied champions are nearby you gain 20-45 <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> and 20% increased damage to towers. Nearby large minions gain 60-135 <scaleArmor>Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> and 200% increased damage to towers. <br><br><rules>Boarding Party's resistances decay over 3 seconds when an ally gets too close.</rules><br></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1037",
        "3044"
        ],
        image: {
        full: "3181.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 825,
        purchasable: true,
        total: 2800,
        sell: 1960
        },
        tags: [
        "Health",
        "SpellBlock",
        "Armor",
        "Damage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50,
        FlatHPPoolMod: 400
        },
        depth: 3
        },
        3184: {
        name: "Guardian's Hammer",
        description: "<mainText><stats><attention>25</attention> Attack Damage<br><attention>150</attention> Health<br><attention>10%</attention> Life Steal</stats><br><li><passive>Legendary:</passive> This item counts as a <rarityLegendary>Legendary</rarityLegendary> item.</mainText><br>",
        colloq: ";dblade",
        plaintext: "Good starting item for attackers",
        image: {
        full: "3184.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "Health",
        "Damage",
        "LifeSteal",
        "Lane"
        ],
        maps: {
        11: false,
        12: true,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 25,
        FlatHPPoolMod: 150,
        PercentLifeStealMod: 0.1
        }
        },
        3190: {
        name: "Locket of the Iron Solari",
        description: "<mainText><stats><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Devotion:</active> Grant nearby allies a <shield>230 - 385 (based on ally level) Shield</shield>, decaying over 2.5 seconds (90s cooldown). <br><li><passive>Consecrate:</passive> Grant nearby allied champions <scaleArmor>5 Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR>. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>2</attention> Armor/Magic Resist increase to <passive>Consecrate</passive>.<br><br><rules>Strength of level-scaling effects are based on the ally's level.<br>Subsequent <active>Devotion</active> shields within 20 seconds only have 25% effect.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Activate to shield nearby allies from damage",
        from: [
        "3067",
        "3105"
        ],
        image: {
        full: "3190.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 200,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "SpellBlock",
        "Armor",
        "Aura",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200,
        FlatSpellBlockMod: 30,
        FlatArmorMod: 30
        },
        depth: 3
        },
        3191: {
        name: "Seeker's Armguard",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>15</attention> Armor</stats><br><li><passive>Witch's Path:</passive> Killing a unit grants <scaleArmor>0.5 Armor</scaleArmor> (max <scaleArmor>15</scaleArmor>).</mainText><br>",
        colloq: ";",
        plaintext: "Increases Armor and Ability Power",
        from: [
        "1052",
        "1029"
        ],
        into: [
        "3157"
        ],
        image: {
        full: "3191.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 265,
        purchasable: true,
        total: 1000,
        sell: 700
        },
        tags: [
        "Armor",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 20,
        FlatArmorMod: 15
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "15"
        },
        depth: 2
        },
        3193: {
        name: "Gargoyle Stoneplate",
        description: "<mainText><stats><attention>60</attention> Armor<br><attention>60</attention> Magic Resist<br><attention>15</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Unbreakable:</active> Gain a <shield>(100 + 100% bonus Health) Shield</shield> that decays and grow 25% in size for 2.5 seconds. (90s cooldown).<br><li><passive>Fortify:</passive> Taking damage from a champion grants a stack of <scaleArmor>5% bonus Armor</scaleArmor> and <scaleMR>5% bonus Magic Resist</scaleMR> for 6 seconds.<br><br><rules>Max 5 stacks; 1 per champion.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Greatly increases defense near multiple enemies.",
        from: [
        "1029",
        "3105",
        "1033"
        ],
        image: {
        full: "3193.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 1050,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "SpellBlock",
        "Armor",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 60,
        FlatArmorMod: 60
        },
        depth: 3
        },
        3211: {
        name: "Spectre's Cowl",
        description: "<mainText><stats><attention>250</attention> Health<br><attention>25</attention> Magic Resist</stats><br><li><passive>Incorporeal:</passive> After taking damage from a champion, gain <scaleHealth>150% base Health Regen</scaleHealth> for up to 10 seconds (duration increases with damage taken).</mainText><br>",
        colloq: ";hat",
        plaintext: "Improves defense and grants regeneration upon being damaged",
        from: [
        "1028",
        "1033"
        ],
        into: [
        "3065"
        ],
        image: {
        full: "3211.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 1250,
        sell: 875
        },
        tags: [
        "Health",
        "HealthRegen",
        "SpellBlock"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatSpellBlockMod: 25
        },
        depth: 2
        },
        3222: {
        name: "Mikael's Blessing",
        description: "<mainText><stats><attention>20%</attention> Heal and Shield Power<br><attention>50</attention> Magic Resist<br><attention>15</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><br><active>Active -</active> <active>Purify:</active> Remove all crowd control debuffs (except <status>Knockups</status> and <status>Suppression</status>) from an ally champion and restore <healing>100 - 200 (based on ally level) Health</healing> (120s cooldown).</mainText><br>",
        colloq: ";",
        plaintext: "Activate to remove all disabling effects from an allied champion",
        from: [
        "3114",
        "1057"
        ],
        image: {
        full: "3222.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "SpellBlock",
        "ManaRegen",
        "Active",
        "CooldownReduction",
        "Tenacity",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 50
        },
        depth: 3
        },
        3330: {
        name: "Scarecrow Effigy",
        description: "<mainText><stats></stats>Cannot be sold<br><br><active>Active - Trinket:</active> Places an effigy that lasts for 130 - 300 (based on level) seconds and appears exactly as Fiddlesticks does to enemies. Stores one charge every 115 - 30 (based on level) seconds, up to maximum 2 charges.<br><br>Enemy champions approaching an effigy will activate it, causing the effigy to fake a random action, after which the effigy will fall apart.</mainText><br>",
        colloq: "yellow; totem; trinket",
        plaintext: "Periodically place a Stealth Ward",
        requiredChampion: "FiddleSticks",
        image: {
        full: "3330.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 96,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Active",
        "Jungle",
        "Lane",
        "Trinket",
        "Vision"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "90",
        Effect2Amount: "240",
        Effect3Amount: "120",
        Effect4Amount: "120",
        Effect5Amount: "2",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120"
        }
        },
        3340: {
        name: "Stealth Ward",
        description: "<mainText><stats></stats><active>Active - Trinket:</active> Place a Stealth Ward on the ground that lasts between <scaleLevel>90 - 120</scaleLevel> seconds, is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 2 Stealth Wards, generating a new Ward every <scaleLevel>240 - 120</scaleLevel> seconds. </mainText><br>",
        colloq: "yellow; totem; trinket",
        plaintext: "Periodically place a Stealth Ward",
        image: {
        full: "3340.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Active",
        "Jungle",
        "Lane",
        "Trinket",
        "Vision"
        ],
        maps: {
        11: true,
        12: false,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "90",
        Effect2Amount: "240",
        Effect3Amount: "120",
        Effect4Amount: "120",
        Effect5Amount: "2",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120"
        }
        },
        3363: {
        name: "Farsight Alteration",
        description: "<mainText><stats></stats><active>Active - Trinket:</active> Reveals an area and places a visible, fragile Ward up to 4000 units away. Allies cannot target this Ward with Summoner Spells or Abilities <scaleLevel>(198 - 99s cooldown)</scaleLevel>.</mainText><br>",
        colloq: "blue; totem; trinket",
        plaintext: "Grants increased range and reveals the targetted area",
        image: {
        full: "3363.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Active",
        "Trinket",
        "Vision"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "4000",
        Effect2Amount: "2",
        Effect3Amount: "5",
        Effect4Amount: "198",
        Effect5Amount: "60",
        Effect6Amount: "9",
        Effect7Amount: "30",
        Effect8Amount: "120",
        Effect9Amount: "6.5",
        Effect10Amount: "198",
        Effect11Amount: "99",
        Effect12Amount: "60",
        Effect13Amount: "180",
        Effect14Amount: "10",
        Effect15Amount: "45"
        }
        },
        3364: {
        name: "Oracle Lens",
        description: "<mainText><stats></stats><active>Active - Trinket:</active> Scans around you, warning against hidden enemy units, revealing invisible traps and revealing (and temporarily disabling) enemy Stealth Wards for 10 seconds <scaleLevel>(90 - 60s cooldown)</scaleLevel>.</mainText><br>",
        colloq: "red; lens; trinket",
        plaintext: "Disables nearby invisible wards and traps for a duration",
        image: {
        full: "3364.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Active",
        "Trinket",
        "Vision"
        ],
        maps: {
        11: true,
        12: false,
        21: true,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "6",
        Effect2Amount: "10",
        Effect3Amount: "90",
        Effect4Amount: "60",
        Effect5Amount: "0",
        Effect6Amount: "1",
        Effect7Amount: "30",
        Effect8Amount: "120",
        Effect9Amount: "60"
        }
        },
        3400: {
        name: "Your Cut",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Gain 0 gold.<br><br><rules>Bonus gold given to an ally when Pyke executes an enemy champion using his Ultimate Ability. If no ally was involved in the kill, Pyke gets to keep the Cut!</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        consumed: true,
        inStore: false,
        hideFromAll: true,
        image: {
        full: "3400.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
        },
        tags: [
        "Consumable",
        "GoldPer"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        3504: {
        name: "Ardent Censer",
        description: "<mainText><stats><attention>60</attention> Ability Power<br><attention>10%</attention> Heal and Shield Power<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Sanctify:</passive> Healing or Shielding another ally enhances you both for 6 seconds, granting your Attacks <attackSpeed>10% - 30% (based on ally level)</attackSpeed> Attack Speed and <magicDamage>5 - 20 (based on ally level) magic damage</magicDamage> <OnHit>On-Hit</OnHit>. <br><br><rules>Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
        colloq: "",
        plaintext: "Shield and heal effects on other units grant both of you Attack Speed and their attacks deal additional on-hit magic damage.",
        from: [
        "1052",
        "3114",
        "1052"
        ],
        image: {
        full: "3504.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 630,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "AttackSpeed",
        "SpellDamage",
        "ManaRegen",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 60
        },
        depth: 3
        },
        3508: {
        name: "Essence Reaver",
        description: "<mainText><stats><attention>45</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>20</attention> Ability Haste</stats><br><li><passive>Spellblade:</passive> After using an Ability, your next Attack deals an additional <physicalDamage>100% Base Attack Damage + 40% Bonus Attack Damage physical damage</physicalDamage> <OnHit>On-Hit</OnHit> and restores 40% of that damage as mana (1.5s cooldown).</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3057",
        "3133",
        "1018"
        ],
        image: {
        full: "3508.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 2800,
        sell: 1960
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "ManaRegen",
        "CooldownReduction",
        "OnHit",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 45,
        FlatCritChanceMod: 0.2
        },
        depth: 3
        },
        3513: {
        name: "Eye of the Herald",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Crush the Eye of the Herald after 1 second, summoning the <status>Rift Herald</status> to siege enemy turrets.<br><br><li><passive>Glimpse of the Void:</passive> The holder of the Eye of the Herald has <attention>Empowered Recall</attention>.<br><br><rules>The Eye of the Herald will be lost to the Void if not used within 240 seconds.</rules></mainText><br>",
        colloq: ";Herald's Eye",
        plaintext: "Eye of the Herald - a Gift of the Void.",
        consumed: true,
        inStore: false,
        image: {
        full: "3513.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 0,
        sell: 0
        },
        tags: [
        "Trinket",
        "Active"
        ],
        maps: {
        11: false,
        12: false,
        21: false,
        22: false
        },
        stats: { },
        effect: {
        Effect1Amount: "240",
        Effect2Amount: "1",
        Effect3Amount: "20",
        Effect4Amount: "180"
        }
        },
        3599: {
        name: "Kalista's Black Spear",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.</mainText><br>",
        colloq: ";spear",
        plaintext: "Kalista's spear that binds an Oathsworn Ally.",
        requiredChampion: "Kalista",
        image: {
        full: "3599.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Consumable"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        3600: {
        name: "Kalista's Black Spear",
        description: "<mainText><stats></stats><active>Active - Consume:</active> Bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.<br><br><rules>Required to use <attention>Kalista's</attention> Ultimate Ability.</rules></mainText><br>",
        colloq: ";spear",
        plaintext: "Kalista's spear that binds an Oathsworn Ally.",
        requiredChampion: "Sylas",
        image: {
        full: "3600.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: true,
        total: 0,
        sell: 0
        },
        tags: [
        "Consumable"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: { }
        },
        3742: {
        name: "Dead Man's Plate",
        description: "<mainText><stats><attention>300</attention> Health<br><attention>45</attention> Armor<br><attention>5%</attention> Move Speed</stats><li><passive>Shipwrecker:</passive> While moving, build up to <speed>40 bonus Move Speed</speed>. Your next Attack discharges built up Move Speed to deal up to <physicalDamage>40 (+100% base Attack Damage) physical damage</physicalDamage>. If dealt by a Melee champion at top speed, the Attack also <status>Slows</status> the target by 50% for 1 second.<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText></mainText><br>",
        colloq: ";juggernaut;dreadnought",
        plaintext: "Build momentum as you move around then smash into enemies.",
        from: [
        "3066",
        "1028",
        "1031"
        ],
        image: {
        full: "3742.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 144,
        w: 48,
        h: 48
        },
        gold: {
        base: 900,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Health",
        "Armor",
        "Slow",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentMovementSpeedMod: 0.05,
        FlatHPPoolMod: 300,
        FlatArmorMod: 45
        },
        depth: 3
        },
        3748: {
        name: "Titanic Hydra",
        description: "<mainText><stats><attention>30</attention> Attack Damage<br><attention>500</attention> Health</stats><br><li><passive>Colossus:</passive> Gain bonus <scaleAD>Attack Damage equal to 2% bonus Health</scaleAD>.<li><passive>Cleave:</passive> Attacks apply an additional <physicalDamage>(5 + 1.5% max Health) physical damage</physicalDamage> <OnHit>On-Hit</OnHit>, creating a shockwave that deals <physicalDamage>(40 + 3% max Health) physical damage</physicalDamage> to enemies behind the target.<br><br><rules>Deals 75% for Ranged users. <OnHit>On-Hit</OnHit> damage is also applied to Structures.<br>Cleave's shockwave does not trigger on structures.</rules></mainText><br>",
        colloq: ";juggernaut",
        plaintext: "Deals area of effect damage based on owner's health",
        from: [
        "3077",
        "1028",
        "1011"
        ],
        image: {
        full: "3748.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 800,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "Health",
        "HealthRegen",
        "Damage",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30,
        FlatHPPoolMod: 500
        },
        effect: {
        Effect1Amount: "0",
        Effect2Amount: "40",
        Effect3Amount: "0",
        Effect4Amount: "0",
        Effect5Amount: "0.1",
        Effect6Amount: "0",
        Effect7Amount: "0",
        Effect8Amount: "0",
        Effect9Amount: "0",
        Effect10Amount: "5"
        },
        depth: 3
        },
        3801: {
        name: "Crystalline Bracer",
        description: "<mainText><stats><attention>200</attention> Health<br><attention>50%</attention> Base Health Regen</stats></mainText><br>",
        colloq: ";",
        plaintext: "Grants Health and Health Regen",
        from: [
        "1028",
        "1006"
        ],
        into: [
        "3083",
        "3109"
        ],
        image: {
        full: "3801.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 100,
        purchasable: true,
        total: 650,
        sell: 455
        },
        tags: [
        "Health",
        "HealthRegen"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200
        },
        depth: 2
        },
        3802: {
        name: "Lost Chapter",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>300</attention> Mana<br><attention>10</attention> Ability Haste</stats><br><li><passive>Enlighten:</passive> Upon levelling up, restores <scaleMana>20% max Mana</scaleMana> over 3 seconds.</mainText><br>",
        colloq: ";",
        plaintext: "Restores Mana upon levelling up.",
        from: [
        "1052",
        "1027",
        "1052"
        ],
        into: [
        "6655",
        "6653",
        "6656"
        ],
        image: {
        full: "3802.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 80,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "SpellDamage",
        "Mana",
        "ManaRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 300,
        FlatMagicDamageMod: 40
        },
        depth: 2
        },
        3814: {
        name: "Edge of Night",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>10</attention> Lethality<br><attention>325</attention> Health</stats><br><li><passive>Annul:</passive> Gain a Spell Shield that blocks the next enemy Ability (40s cooldown).<br><br><rules>Item's cooldown is restarted if you take damage before it is completed.</rules></mainText><br>",
        colloq: ";lethality",
        plaintext: "Periodically blocks enemy abilities",
        stacks: 0,
        from: [
        "1036",
        "3134",
        "1028"
        ],
        image: {
        full: "3814.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 1050,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Health",
        "Damage",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50,
        FlatHPPoolMod: 325
        },
        effect: {
        Effect1Amount: "10",
        Effect2Amount: "0",
        Effect3Amount: "0",
        Effect4Amount: "40"
        },
        depth: 3
        },
        3850: {
        name: "Spellthief's Edge",
        description: "<mainText><stats><attention>8</attention> Ability Power<br><attention>10</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Frostfang</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
        colloq: "",
        plaintext: "Gain gold and upgrade by damaging enemy champions",
        image: {
        full: "3850.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "SpellDamage",
        "ManaRegen",
        "Vision",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 10,
        FlatMagicDamageMod: 8
        },
        effect: {
        Effect1Amount: "2",
        Effect2Amount: "20",
        Effect3Amount: "20",
        Effect4Amount: "500",
        Effect5Amount: "10",
        Effect6Amount: "3",
        Effect7Amount: "2000"
        }
        },
        3851: {
        name: "Frostfang",
        description: "<mainText><stats><attention>15</attention> Ability Power<br><attention>70</attention> Health<br><attention>75%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><br><br><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Shard of True Ice</rarityLegendary>.</mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3850,
        inStore: false,
        image: {
        full: "3851.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "GoldPer",
        "Lane",
        "ManaRegen",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 70,
        FlatMagicDamageMod: 15
        },
        effect: {
        Effect1Amount: "3",
        Effect2Amount: "20",
        Effect3Amount: "20",
        Effect4Amount: "1000",
        Effect5Amount: "10",
        Effect6Amount: "3",
        Effect7Amount: "2000"
        }
        },
        3853: {
        name: "Shard of True Ice",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3851,
        inStore: false,
        image: {
        full: "3853.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "GoldPer",
        "Lane",
        "ManaRegen",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 75,
        FlatMagicDamageMod: 40
        },
        effect: {
        Effect1Amount: "3"
        }
        },
        3854: {
        name: "Steel Shoulderguards",
        description: "<mainText><stats><attention>3</attention> Attack Damage<br><attention>30</attention> Health<br><attention>25%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Runesteel Spaulders</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
        colloq: "",
        plaintext: "Gain gold and upgrade by executing minions alongside allies",
        image: {
        full: "3854.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "Damage",
        "Vision",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 3,
        FlatHPPoolMod: 30
        },
        effect: {
        Effect1Amount: "2",
        Effect2Amount: "0.5",
        Effect3Amount: "0.3",
        Effect4Amount: "500",
        Effect5Amount: "35",
        Effect6Amount: "3"
        }
        },
        3855: {
        name: "Runesteel Spaulders",
        description: "<mainText><stats><attention>6</attention> Attack Damage<br><attention>100</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3854,
        inStore: false,
        image: {
        full: "3855.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 6,
        FlatHPPoolMod: 100
        },
        effect: {
        Effect1Amount: "3",
        Effect2Amount: "0.5",
        Effect3Amount: "0.5",
        Effect4Amount: "1000",
        Effect5Amount: "35",
        Effect6Amount: "3"
        }
        },
        3857: {
        name: "Pauldrons of Whiterock",
        description: "<mainText><stats><attention>15</attention> Attack Damage<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3855,
        inStore: false,
        image: {
        full: "3857.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 192,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 15,
        FlatHPPoolMod: 250
        },
        effect: {
        Effect1Amount: "3"
        }
        },
        3858: {
        name: "Relic Shield",
        description: "<mainText><stats><attention>5</attention> Ability Power<br><attention>30</attention> Health<br><attention>25%</attention> Base Health Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below (50% for Melee Users | 30% for Ranged Users) of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Targon's Buckler</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
        colloq: "",
        plaintext: "Gain gold and upgrade by executing minions alongside allies",
        image: {
        full: "3858.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "SpellDamage",
        "Vision",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 30,
        FlatMagicDamageMod: 5
        },
        effect: {
        Effect1Amount: "2",
        Effect2Amount: "0.5",
        Effect3Amount: "0.3",
        Effect4Amount: "500",
        Effect5Amount: "35",
        Effect6Amount: "3"
        }
        },
        3859: {
        name: "Targon's Buckler",
        description: "<mainText><stats><attention>10</attention> Ability Power<br><attention>100</attention> Health<br><attention>50%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 3 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Spoils of War:</passive> While nearby an allied champion, Attacks execute minions below 50% of their max Health. Killing a minion grants the same kill gold to the nearest allied champion. These effects recharge every 35 seconds (Max 3 charges).<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Bulwark of the Mountain</rarityLegendary>. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3858,
        inStore: false,
        image: {
        full: "3859.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 100,
        FlatMagicDamageMod: 10
        },
        effect: {
        Effect1Amount: "3",
        Effect2Amount: "0.5",
        Effect3Amount: "0.5",
        Effect4Amount: "1000",
        Effect5Amount: "35",
        Effect6Amount: "3"
        }
        },
        3860: {
        name: "Bulwark of the Mountain",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>100%</attention> Base Health Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3859,
        inStore: false,
        image: {
        full: "3860.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "HealthRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMagicDamageMod: 20
        },
        effect: {
        Effect1Amount: "3"
        }
        },
        3862: {
        name: "Spectral Sickle",
        description: "<mainText><stats><attention>5</attention> Attack Damage<br><attention>10</attention> Health<br><attention>25%</attention> Base Mana Regen<br><attention>2</attention> Gold Per 10 Seconds</stats><br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 500 gold from this item to transform it into <rarityGeneric>Harrowing Crescent</rarityGeneric>, gaining <active>Active -</active> <active>Warding</active>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
        colloq: "",
        plaintext: "Gain gold and upgrade by damaging enemy champions",
        image: {
        full: "3862.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: true,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "Damage",
        "ManaRegen",
        "Vision",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 5,
        FlatHPPoolMod: 10
        },
        effect: {
        Effect1Amount: "2",
        Effect2Amount: "20",
        Effect3Amount: "20",
        Effect4Amount: "500",
        Effect5Amount: "10",
        Effect6Amount: "3",
        Effect7Amount: "2000"
        }
        },
        3863: {
        name: "Harrowing Crescent",
        description: "<mainText><stats><attention>10</attention> Attack Damage<br><attention>60</attention> Health<br><attention>50%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><li><passive>Tribute:</passive> While nearby an ally champion, damaging Abilities and Attacks against champions or buildings grant 20 gold. This can occur up to 3 times every 30 seconds.<li><passive>Quest:</passive> Earn 1000 gold from this item to transform it into <rarityLegendary>Black Mist Scythe</rarityLegendary>.<br><br><rules>This item grants reduced gold from minions if you kill excessive numbers of them.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3862,
        inStore: false,
        image: {
        full: "3863.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "ManaRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 10,
        FlatHPPoolMod: 60
        },
        effect: {
        Effect1Amount: "3",
        Effect2Amount: "20",
        Effect3Amount: "20",
        Effect4Amount: "1000",
        Effect5Amount: "10",
        Effect6Amount: "3",
        Effect7Amount: "2000"
        }
        },
        3864: {
        name: "Black Mist Scythe",
        description: "<mainText><stats><attention>20</attention> Attack Damage<br><attention>75</attention> Health<br><attention>100%</attention> Base Mana Regen<br><attention>3</attention> Gold Per 10 Seconds</stats><br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 0 Stealth Wards, which refill upon visiting the shop. <br><br><active>Active -</active> <active>Ward:</active> Place a Stealth Ward on the ground that is <keywordStealth>Invisible</keywordStealth> to enemies but grants your team vision of the surrounding area. Stores up to 4 Stealth Wards, which refill upon visiting the shop. </mainText><br>",
        colloq: "",
        plaintext: "",
        specialRecipe: 3863,
        inStore: false,
        image: {
        full: "3864.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 400,
        purchasable: false,
        total: 400,
        sell: 160
        },
        tags: [
        "Health",
        "ManaRegen",
        "GoldPer",
        "Lane"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 20,
        FlatHPPoolMod: 75
        },
        effect: {
        Effect1Amount: "3"
        }
        },
        3916: {
        name: "Oblivion Orb",
        description: "<mainText><stats><attention>30</attention> Ability Power</stats><br><li><passive>Cursed:</passive> Dealing magic damage applies <status>40% Grievous Wounds</status> to champions for 3 seconds.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: "",
        plaintext: "Increases magic damage",
        stacks: 0,
        from: [
        "1052"
        ],
        into: [
        "3011",
        "3165"
        ],
        image: {
        full: "3916.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 365,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 30
        },
        depth: 2
        },
        4005: {
        name: "Imperial Mandate",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Coordinated Fire:</passive> Abilities that <status>Slow</status> or <status>Immobilize</status> a champion deal <magicDamage>45 - 75 (based on level) bonus magic damage</magicDamage> and marks them for 4 seconds (6s cooldown per champion). Ally champion damage detonates the mark, dealing an additional <magicDamage>90 - 150 (based on ally level) magic damage</magicDamage> and granting you both <speed>20% Move Speed</speed> for 2 seconds. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>15</attention> Ability Power. <br><br><rules>Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
        colloq: ";",
        plaintext: "Defer damage until later.",
        from: [
        "3067",
        "4642"
        ],
        image: {
        full: "4005.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "SpellDamage",
        "ManaRegen",
        "CooldownReduction",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 40
        },
        depth: 3
        },
        4401: {
        name: "Force of Nature",
        description: "<mainText><stats><attention>350</attention> Health<br><attention>60</attention> Magic Resist<br><attention>5%</attention> Move Speed</stats><br><li><passive>Absorb:</passive> Taking damage from Abilities grants you <speed>8 Move Speed</speed> and <scaleMR>4 Magic Resist</scaleMR> for 5 seconds (stacks up to 5 times; each unique Ability instance can give one stack).</mainText><br>",
        colloq: ";fon",
        plaintext: "Movement Speed, Magic Resist, and max Health Regeneration",
        from: [
        "1057",
        "1028",
        "3066"
        ],
        image: {
        full: "4401.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 800,
        purchasable: true,
        total: 2900,
        sell: 2030
        },
        tags: [
        "Health",
        "SpellBlock",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentMovementSpeedMod: 0.05,
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 60
        },
        depth: 3
        },
        4403: {
        name: "The Golden Spatula",
        description: "<mainText><stats><attention>70</attention> Attack Damage<br><attention>120</attention> Ability Power<br><attention>50%</attention> Attack Speed<br><attention>30%</attention> Critical Strike Chance<br><attention>250</attention> Health<br><attention>30</attention> Armor<br><attention>30</attention> Magic Resist<br><attention>250</attention> Mana<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Move Speed<br><attention>10%</attention> Life Steal<br><attention>100%</attention> Base Health Regen<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Doing Something:</passive> You are permanently On Fire!</mainText><br>",
        colloq: ";",
        plaintext: "It does EVERYTHING!",
        from: [
        "1038",
        "1053",
        "3086",
        "1058",
        "3067",
        "3105"
        ],
        image: {
        full: "4403.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 240,
        w: 48,
        h: 48
        },
        gold: {
        base: 687,
        purchasable: true,
        total: 7487,
        sell: 5241
        },
        tags: [
        "Health",
        "SpellBlock",
        "HealthRegen",
        "Armor",
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "LifeSteal",
        "SpellDamage",
        "Mana",
        "ManaRegen",
        "CooldownReduction",
        "NonbootsMovement"
        ],
        maps: {
        11: false,
        12: false,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 70,
        FlatCritChanceMod: 0.3,
        PercentMovementSpeedMod: 0.1,
        FlatHPPoolMod: 250,
        FlatSpellBlockMod: 30,
        FlatMPPoolMod: 250,
        FlatMagicDamageMod: 120,
        FlatArmorMod: 30,
        PercentAttackSpeedMod: 0.5,
        PercentLifeStealMod: 0.1
        },
        depth: 3
        },
        4628: {
        name: "Horizon Focus",
        description: "<mainText><stats><attention>115</attention> Ability Power</stats><br><li><passive>Hypershot:</passive> Damaging a champion with a non-targeted Ability at over 700 range or <status>Immobilizing</status> them <keywordStealth>Reveals</keywordStealth> them and increases their damage taken from you by 10% for 6 seconds. <br><br><rules>The Ability that triggers <passive>Hypershot</passive> also benefits from the damage increase. Pets and non-immobilizing traps do not trigger this effect. Only the initial placement of zone Abilities will trigger this effect. Distance is measured from the Ability cast position. </rules></mainText><br>",
        colloq: "",
        plaintext: "Immobilizing a champion causes lightning to strike them",
        from: [
        "1058",
        "3145"
        ],
        image: {
        full: "4628.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 115
        },
        depth: 3
        },
        4629: {
        name: "Cosmic Drive",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste</stats><br><li><passive>Spelldance:</passive> If you have at least <magicDamage>160 Ability Power</magicDamage>, gain <speed>20 Ability Haste</speed> and <speed>20 Move Speed</speed>.</mainText><br>",
        colloq: "",
        plaintext: "Massive amounts of Cooldown Reduction",
        from: [
        "3108",
        "3067",
        "1052"
        ],
        image: {
        full: "4629.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 865,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Health",
        "SpellDamage",
        "CooldownReduction",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        4630: {
        name: "Blighting Jewel",
        description: "<mainText><stats><attention>25</attention> Ability Power<br><attention>15%</attention> Magic Penetration</stats></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1052"
        ],
        into: [
        "3135"
        ],
        image: {
        full: "4630.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 815,
        purchasable: true,
        total: 1250,
        sell: 875
        },
        tags: [
        "MagicPenetration",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 25
        },
        depth: 2
        },
        4632: {
        name: "Verdant Barrier",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>25</attention> Magic Resist</stats><br><li><passive>Adaptive:</passive> Killing a unit grants <scaleMR>0.3 Magic Resist</scaleMR> (max <scaleMR>9</scaleMR>). <br><br></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1033",
        "1052"
        ],
        into: [
        "3102"
        ],
        image: {
        full: "4632.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 115,
        purchasable: true,
        total: 1000,
        sell: 700
        },
        tags: [
        "SpellBlock",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatSpellBlockMod: 25,
        FlatMagicDamageMod: 20
        },
        depth: 2
        },
        4633: {
        name: "Riftmaker",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste<br><attention>8%</attention> Omnivamp</stats><br><li><passive>Void Corruption:</passive> For each second damaging enemy champions, deal 3% bonus damage (max 9%). At maximum strength, the bonus damage is dealt as <trueDamage>true damage</trueDamage> instead. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>2%</attention> Omnivamp and 8 Ability Power.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "4635",
        "1026"
        ],
        image: {
        full: "4633.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Health",
        "SpellDamage",
        "CooldownReduction",
        "SpellVamp",
        "MagicPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        4635: {
        name: "Leeching Leer",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>250</attention> Health<br><attention>5%</attention> Omnivamp</stats></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1028",
        "1052"
        ],
        into: [
        "4633"
        ],
        image: {
        full: "4635.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 465,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "Health",
        "SpellDamage",
        "SpellVamp"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMagicDamageMod: 20
        },
        depth: 2
        },
        4636: {
        name: "Night Harvester",
        description: "<mainText><stats><attention>90</attention> Ability Power<br><attention>300</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Soulrend:</passive> Damaging a champion deals an additional <magicDamage>(125 +15% Ability Power magic damage)</magicDamage> and grants you <speed>25% Move Speed</speed> for 1.5 seconds (40s cooldown per champion).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste.<br><br><rules>Damaging a new champion will extend the duration of the Move Speed bonus.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3145",
        "1028",
        "1026"
        ],
        image: {
        full: "4636.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 900,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Health",
        "SpellDamage",
        "CooldownReduction",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 300,
        FlatMagicDamageMod: 90
        },
        depth: 3
        },
        4637: {
        name: "Demonic Embrace",
        description: "<mainText><stats><attention>70</attention> Ability Power<br><attention>350</attention> Health</stats><br><li><passive>Azakana Gaze:</passive> Dealing Ability damage burns enemies for <magicDamage>1.2% max Health magic damage</magicDamage> every second for 4 seconds. You gain <scaleArmor>10 Armor</scaleArmor> and <scaleMR>Magic Resist </scaleMR> if a champion is affected (+<scaleArmor>2.5</scaleArmor> Armor and <scaleMR>Magic Resist</scaleMR> for each additional champion affected). </mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1026",
        "1011",
        "1052"
        ],
        image: {
        full: "4637.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 815,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Health",
        "SpellDamage"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatMagicDamageMod: 70
        },
        depth: 3
        },
        4638: {
        name: "Watchful Wardstone",
        description: "<mainText><stats><attention>150</attention> Health<br><attention>10</attention> Ability Haste</stats><br><li><passive>Arcane Cache:</passive> This item can store up to 3 purchased Control Wards.<br><br>After completing the <keywordMajor>Support Quest</keywordMajor> and reaching Level 13, transforms into <rarityLegendary>Vigilant Wardstone</rarityLegendary>.<br></mainText><br>",
        colloq: "",
        plaintext: "",
        consumed: true,
        consumeOnFull: true,
        into: [
        "4643"
        ],
        image: {
        full: "4638.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 1100,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Health",
        "Vision",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150
        }
        },
        4642: {
        name: "Bandleglass Mirror",
        description: "<mainText><stats><attention>20</attention> Ability Power<br><attention>10</attention> Ability Haste<br><attention>50%</attention> Base Mana Regen</stats></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1004",
        "1052"
        ],
        into: [
        "2065",
        "6617",
        "3011",
        "4005"
        ],
        image: {
        full: "4642.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 288,
        w: 48,
        h: 48
        },
        gold: {
        base: 265,
        purchasable: true,
        total: 950,
        sell: 665
        },
        tags: [
        "SpellDamage",
        "ManaRegen",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 20
        },
        depth: 2
        },
        4643: {
        name: "Vigilant Wardstone",
        description: "<mainText><stats><attention>150</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Arcane Cache:</passive> This item can store up to 3 purchased Control Wards.<li><passive>Behold:</passive> Increase your Stealth Ward and Control Ward placement caps by 1.<li><passive>Blessing of Ixtal:</passive> Grants a 12% increase to bonus Health, bonus Attack Damage, Ability Haste, and Ability Power.<br><br><rules>Upgrades from <rarityLegendary>Watchful Sightstone</rarityLegendary>.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "4638"
        ],
        inStore: false,
        image: {
        full: "4643.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 0,
        purchasable: false,
        total: 1100,
        sell: 770
        },
        tags: [
        "Health",
        "Vision",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: false,
        21: false,
        22: false
        },
        stats: {
        FlatHPPoolMod: 150
        },
        depth: 2
        },
        6029: {
        name: "Ironspike Whip",
        description: "<mainText><stats><attention>30</attention> Attack Damage</stats><br><br><active>Active -</active> <active>Crescent:</active> Deal <physicalDamage>(100% Base Attack Damage) physical damage</physicalDamage> to nearby enemies. (20s cooldown, reduced by Ability Haste).</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1037"
        ],
        into: [
        "6630",
        "6631"
        ],
        image: {
        full: "6029.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 225,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Damage",
        "Active"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30
        },
        depth: 2
        },
        6035: {
        name: "Silvermere Dawn",
        description: "<mainText><stats><attention>40</attention> Attack Damage<br><attention>300</attention> Health<br><attention>35</attention> Magic Resist</stats><br><br><active>Active -</active> <active>Quicksilver:</active> Remove all crowd control debuffs (excluding <status>Airborne</status>) and gain 40% Tenacity and 40% Slow Resistance for 3 seconds (90s cooldown).</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3140",
        "1037",
        "1028"
        ],
        image: {
        full: "6035.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 425,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Health",
        "SpellBlock",
        "Damage",
        "Active",
        "Tenacity"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 40,
        FlatHPPoolMod: 300,
        FlatSpellBlockMod: 35
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "1",
        Effect3Amount: "90"
        },
        depth: 3
        },
        6333: {
        name: "Death's Dance",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>45</attention> Armor<br><attention>15</attention> Ability Haste</stats><br><li><passive>Ignore Pain:</passive> 35% (15% for Ranged users) of physical damage taken is dealt to you over 3 seconds instead.<li><passive>Defy:</passive> Champion takedowns cleanse <passive>Ignore Pain's</passive> remaining damage pool and restore <healing>15% of max Health</healing> over 2 seconds.<br></mainText><br>",
        colloq: "",
        plaintext: "",
        stacks: 0,
        from: [
        "1031",
        "3133",
        "1037"
        ],
        image: {
        full: "6333.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 325,
        purchasable: true,
        total: 3100,
        sell: 2170
        },
        tags: [
        "Armor",
        "Damage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55,
        FlatArmorMod: 45
        },
        depth: 3
        },
        6609: {
        name: "Chempunk Chainsword",
        description: "<mainText><stats><attention>45</attention> Attack Damage<br><attention>250</attention> Health<br><attention>15</attention> Ability Haste</stats><br><li><passive>Hackshorn:</passive> Dealing physical damage applies 40% <status>Grievous Wounds</status> to enemy champions for 3 seconds. If the target is below 50% Health, this effect is increased to 60% <status>Grievous Wounds</status>.<br><br><rules><status>Grievous Wounds</status> reduces the effectiveness of Healing and Regeneration effects.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3123",
        "1028",
        "3133"
        ],
        image: {
        full: "6609.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "Health",
        "Damage",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 45,
        FlatHPPoolMod: 250
        },
        depth: 3
        },
        6616: {
        name: "Staff of Flowing Water",
        description: "<mainText><stats><attention>50</attention> Ability Power<br><attention>10%</attention> Heal and Shield Power<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Rapids:</passive> Healing or Shielding another ally grants you both <magicDamage>25 - 45 Ability Power</magicDamage> and <magicDamage>20 Ability Haste</magicDamage> for 4 seconds.<br><br><rules>Strength of level-scaling effects are based on the ally's level.</rules></mainText><br>",
        colloq: "",
        plaintext: "Your heals and shields reduce crowd control and grant movement speed",
        from: [
        "1052",
        "3114",
        "1052"
        ],
        image: {
        full: "6616.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 630,
        purchasable: true,
        total: 2300,
        sell: 1610
        },
        tags: [
        "SpellDamage",
        "ManaRegen",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMagicDamageMod: 50
        },
        depth: 3
        },
        6617: {
        name: "Moonstone Renewer",
        description: "<mainText><stats><attention>40</attention> Ability Power<br><attention>200</attention> Health<br><attention>20</attention> Ability Haste<br><attention>100%</attention> Base Mana Regen</stats><br><li><passive>Starlit Grace:</passive> When affecting champions with Attacks or Abilities in combat, restore <healing>70 Health</healing> to the most wounded nearby ally (2s cooldown). Each second spent in combat with champions increases your Heal and Shield Power by 7% (stacking up to 5 times).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>10</attention> increased health on <passive>Starlit Grace's</passive> heal.<br><br></mainText><br>",
        colloq: "",
        plaintext: "Your heals and shields cool down faster and have greater effect on low health allies",
        from: [
        "3067",
        "4642"
        ],
        image: {
        full: "6617.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 750,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "SpellDamage",
        "CooldownReduction"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 200,
        FlatMagicDamageMod: 40
        },
        depth: 3
        },
        6630: {
        name: "Goredrinker",
        description: "<mainText><stats><attention>45</attention> Attack Damage<br><attention>450</attention> Health<br><attention>20</attention> Ability Haste<br><attention>10%</attention> Omnivamp</stats><br><br><active>Active -</active> <active>Thirsting Slash:</active> Deal <physicalDamage>(175% Base Attack Damage) physical damage</physicalDamage> to nearby enemies. Restore <healing>(25% Base Attack Damage + 10% missing Health)</healing> for each champion hit (15s cooldown, reduced by Ability Haste).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6029",
        "3044",
        "3067"
        ],
        image: {
        full: "6630.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "Health",
        "Damage",
        "LifeSteal",
        "Active",
        "CooldownReduction",
        "SpellVamp",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 45,
        FlatHPPoolMod: 450
        },
        depth: 3
        },
        6631: {
        name: "Stridebreaker",
        description: "<mainText><stats><attention>50</attention> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>300</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Halting Slash:</active> Deal <physicalDamage>(175% Attack Damage) physical damage</physicalDamage> to nearby enemies, <status>Slowing</status> them by 40% for 3 seconds (15s cooldown, reduced by Ability Haste). Can be cast while moving.<br><li><passive>Heroic Gait:</passive> Dealing physical damage grants <speed>20 Move Speed</speed> for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>2%</attention> Move Speed.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6029",
        "3051",
        "3067"
        ],
        image: {
        full: "6631.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "Health",
        "Damage",
        "AttackSpeed",
        "Active",
        "CooldownReduction",
        "Slow",
        "NonbootsMovement",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 50,
        FlatHPPoolMod: 300,
        PercentAttackSpeedMod: 0.2
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "0",
        Effect3Amount: "90",
        Effect4Amount: "0",
        Effect5Amount: "10"
        },
        depth: 3
        },
        6632: {
        name: "Divine Sunderer",
        description: "<mainText><stats><attention>35</attention> Attack Damage<br><attention>400</attention> Health<br><attention>20</attention> Ability Haste</stats><li><passive>Spellblade:</passive> After using an Ability, your next Attack is enhanced with an additional <physicalDamage>12% (9% for Ranged owners) target max Health physical damage</physicalDamage> <OnHit>On-Hit</OnHit> (1.5s cooldown). If the target is a champion, restore 65% of the enhanced damage (40% for Ranged owners).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5%</attention> Armor Penetration and <attention>5%</attention> Magic Penetration.<br><br><rules><passive>Spellblade</passive> will deal a minimum of (150% base Attack Damage) damage to units, but no more than (250% base Attack Damage) damage to Monsters.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3044",
        "3057",
        "3067"
        ],
        image: {
        full: "6632.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 336,
        w: 48,
        h: 48
        },
        gold: {
        base: 700,
        purchasable: true,
        total: 3300,
        sell: 2310
        },
        tags: [
        "Health",
        "Damage",
        "LifeSteal",
        "CooldownReduction",
        "OnHit",
        "MagicPenetration",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 35,
        FlatHPPoolMod: 400
        },
        depth: 3
        },
        6653: {
        name: "Liandry's Anguish",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Agony:</passive> Deal up to <magicDamage>12% bonus magic damage</magicDamage> to Champions based on the target's bonus Health (maxed at 1250 bonus Health).<li><passive>Torment:</passive> Dealing damage with Abilities causes enemies to burn for <magicDamage>(15 + 1.5% Ability Power) + 1% max Health magic damage</magicDamage> per second for 4 seconds. <br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste.</mainText><br>",
        colloq: "",
        plaintext: "Charge up in combat to deal high damage over time, especially against durable enemies",
        from: [
        "3802",
        "3108"
        ],
        image: {
        full: "6653.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 1000,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "SpellDamage",
        "Mana",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        6655: {
        name: "Luden's Tempest",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>6</attention> Magic Penetration<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><li><passive>Echo:</passive> Damaging Abilities deal an additional <magicDamage>(100 + 10% Ability Power) magic damage</magicDamage> to the target and 3 nearby enemies and grants you <speed>15% Move Speed</speed> for 2 seconds (10s cooldown). Dealing ability damage to Champions reduces this item's cooldown by 0.5 second, up to 3 seconds per spell cast.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Magic Penetration. </mainText><br>",
        colloq: "",
        plaintext: "High burst damage, good against fragile foes",
        from: [
        "3802",
        "1026"
        ],
        image: {
        full: "6655.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 1050,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "SpellDamage",
        "Mana",
        "CooldownReduction",
        "NonbootsMovement",
        "MagicPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        6656: {
        name: "Everfrost",
        description: "<mainText><stats><attention>80</attention> Ability Power<br><attention>250</attention> Health<br><attention>600</attention> Mana<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Glaciate:</active> Deal <magicDamage>(100+30% Ability Power) magic damage</magicDamage> in a cone, <status>Slowing</status> enemies by 65% for 1.5 seconds. Enemies at the center of the cone are <status>Rooted</status> instead (30s cooldown).<br><hr><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>15</attention> Ability Power. <br></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3802",
        "3067",
        "1026"
        ],
        image: {
        full: "6656.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 250,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Health",
        "SpellDamage",
        "Mana",
        "Active",
        "CooldownReduction",
        "Slow",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 250,
        FlatMPPoolMod: 600,
        FlatMagicDamageMod: 80
        },
        depth: 3
        },
        6660: {
        name: "Bami's Cinder",
        description: "<mainText><stats><attention>300</attention> Health</stats><br><li><passive>Immolate :</passive> Taking or dealing damage causes you to begin dealing <magicDamage>(15 + 1% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions and 25% against monsters) for 3 seconds.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1028",
        "1028"
        ],
        into: [
        "3068",
        "6664",
        "6662"
        ],
        image: {
        full: "6660.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 1100,
        sell: 770
        },
        tags: [
        "Health"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 300
        },
        depth: 2
        },
        6662: {
        name: "Frostfire Gauntlet",
        description: "<mainText><stats><attention>350</attention> Health<br><attention>25</attention> Armor<br><attention>25</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><li><passive>Immolate :</passive> Taking or dealing damage causes you to begin dealing <magicDamage>(12 - 30 (based on level) + 1% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions and 150% against monsters) for 3 seconds.<li><passive>Snowbind:</passive> Attacks create a frost field for 1.5 seconds (4s cooldown, 6s cooldown for ranged champions). Enemies that move across the field are <status>Slowed</status> by 25% for melee champions and 12.5% for ranged champions (increased by your <scaleHealth>max Health</scaleHealth>).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>100</attention> Health and <attention>6%</attention> Size.</mainText><br>",
        colloq: "",
        plaintext: "High Magic Resist.Passively slow nearby enemies. When spells are cast near you, release a wave of energy that damages and slows.",
        from: [
        "6660",
        "1033",
        "1029"
        ],
        image: {
        full: "6662.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 2800,
        sell: 1960
        },
        tags: [
        "Health",
        "SpellBlock",
        "Armor",
        "Aura",
        "CooldownReduction",
        "Slow",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 25,
        FlatArmorMod: 25
        },
        depth: 3
        },
        6664: {
        name: "Turbo Chemtank",
        description: "<mainText><stats><attention>350</attention> Health<br><attention>25</attention> Armor<br><attention>25</attention> Magic Resist<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Supercharged:</active> Grants <speed>40% Move Speed</speed> towards enemies or enemy turrets for 4 seconds. Once near an enemy (or after 4 seconds) a shockwave is emitted that <status>Slows</status> nearby champions by 50% for 1.5 seconds (90s cooldown).<br><li><passive>Immolate:</passive> Taking or dealing damage causes you to begin dealing <magicDamage>(12 - 30 (based on level) + 1% bonus Health) magic damage</magicDamage> per second to nearby enemies (increased by 25% against minions and 150% against monsters) for 3 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste</mainText><br>",
        colloq: "",
        plaintext: "Immobilize enemies to gain a shield. Activate to run faster at opponents.",
        from: [
        "6660",
        "1033",
        "1029"
        ],
        image: {
        full: "6664.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 950,
        purchasable: true,
        total: 2800,
        sell: 1960
        },
        tags: [
        "Health",
        "SpellBlock",
        "Armor",
        "Aura",
        "Active",
        "CooldownReduction",
        "Slow",
        "NonbootsMovement",
        "Tenacity",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 350,
        FlatSpellBlockMod: 25,
        FlatArmorMod: 25
        },
        depth: 3
        },
        6670: {
        name: "Noonquiver",
        description: "<mainText><stats><attention>30</attention> Attack Damage<br><attention>15%</attention> Attack Speed</stats><br><li><passive>Precision:</passive> Attacks deal an additional <physicalDamage>20 physical damage</physicalDamage> to Minions and Monsters.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1036",
        "1042",
        "1036"
        ],
        into: [
        "6671",
        "6672",
        "6673"
        ],
        image: {
        full: "6670.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 300,
        purchasable: true,
        total: 1300,
        sell: 910
        },
        tags: [
        "Damage",
        "AttackSpeed"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 30,
        PercentAttackSpeedMod: 0.15
        },
        depth: 2
        },
        6671: {
        name: "Galeforce",
        description: "<mainText><stats><attention>60</attention> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><br><active>Active -</active> <active>Cloudburst:</active> Dash in target direction, firing three missiles at the lowest Health enemy near your destination (prioritizing champions). Deals a total of <magicDamage>(180 - 220 (based on level) + 45% bonus Attack Damage) magic damage</magicDamage>, increased against low Health targets by up to 50% (90s cooldown).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>2%</attention> Move Speed.<br><br><rules>Maximum missile damage dealt when enemy Health is below 30%.<br>Cloudburst's dash cannot pass through terrain.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6670",
        "1018",
        "1037"
        ],
        image: {
        full: "6671.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 625,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "Active",
        "NonbootsMovement"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 60,
        FlatCritChanceMod: 0.2,
        PercentAttackSpeedMod: 0.2
        },
        depth: 3
        },
        6672: {
        name: "Kraken Slayer",
        description: "<mainText><stats><attention>65</attention> Attack Damage<br><attention>25%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance</stats><br><li><passive>Bring It Down:</passive> Every third Attack deals an additional <trueDamage>(60 + 45% bonus Attack Damage) true damage</trueDamage>.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>10%</attention> Attack Speed.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6670",
        "1018",
        "1037"
        ],
        image: {
        full: "6672.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 625,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 65,
        FlatCritChanceMod: 0.2,
        PercentAttackSpeedMod: 0.25
        },
        depth: 3
        },
        6673: {
        name: "Immortal Shieldbow",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Attack Speed<br><attention>20%</attention> Critical Strike Chance<br><attention>10%</attention> Life Steal</stats><br><li><passive>Lifeline:</passive> When taking damage that would reduce you below 30% Health, gain a <shield>250 - 700 Shield</shield> for 3s. In addition, gain <attackDamage>15-35 Attack Damage</attackDamage> for 8s (90s ).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Attack Damage and <attention>50</attention> Health.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "6670",
        "1018",
        "1053"
        ],
        image: {
        full: "6673.png",
        sprite: "item1.png",
        group: "item",
        x: 432,
        y: 384,
        w: 48,
        h: 48
        },
        gold: {
        base: 600,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "Health",
        "Damage",
        "CriticalStrike",
        "AttackSpeed",
        "LifeSteal"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55,
        FlatCritChanceMod: 0.2,
        PercentAttackSpeedMod: 0.2,
        PercentLifeStealMod: 0.1
        },
        depth: 3
        },
        6675: {
        name: "Navori Quickblades",
        description: "<mainText><stats><attention>60</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>30</attention> Ability Haste</stats><br><li><passive>Deft Strikes:</passive> Your critical strikes with Attacks reduce your non-Ultimate Ability cooldowns by 20% of their remaining cooldown.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3133",
        "1037",
        "1018"
        ],
        image: {
        full: "6675.png",
        sprite: "item1.png",
        group: "item",
        x: 0,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 825,
        purchasable: true,
        total: 3400,
        sell: 2380
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 60,
        FlatCritChanceMod: 0.2
        },
        effect: {
        Effect1Amount: "0.5",
        Effect2Amount: "1",
        Effect3Amount: "90"
        },
        depth: 3
        },
        6676: {
        name: "The Collector",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>20%</attention> Critical Strike Chance<br><attention>12</attention> Lethality</stats><br><li><passive>Death and Taxes:</passive> Dealing damage that would leave an enemy champion below 5% Health executes them. Champion kills grant an additional 25 gold.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3134",
        "1037",
        "1018"
        ],
        image: {
        full: "6676.png",
        sprite: "item1.png",
        group: "item",
        x: 48,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 425,
        purchasable: true,
        total: 3000,
        sell: 2100
        },
        tags: [
        "Damage",
        "CriticalStrike",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55,
        FlatCritChanceMod: 0.2
        },
        depth: 3
        },
        6677: {
        name: "Rageknife",
        description: "<mainText><stats><attention>25%</attention> Attack Speed</stats><br><li><passive>Wrath:</passive> Your Critical Strike Chance is converted into <OnHit>On-Hit</OnHit> damage. Gain <physicalDamage>35</physicalDamage> <OnHit>On-Hit</OnHit> for each 20% Critical Strike Chance converted.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "1042",
        "1042"
        ],
        into: [
        "3124"
        ],
        image: {
        full: "6677.png",
        sprite: "item1.png",
        group: "item",
        x: 96,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 200,
        purchasable: true,
        total: 800,
        sell: 560
        },
        tags: [
        "AttackSpeed",
        "OnHit"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        PercentAttackSpeedMod: 0.25
        },
        depth: 2
        },
        6691: {
        name: "Duskblade of Draktharr",
        description: "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><li><passive>Nightstalker:</passive> Attacking a champion deals an additional <physicalDamage>(65 + 25% bonus Attack Damage) physical damage</physicalDamage> (15s cooldown). If dealt by a Melee champion, this Attack also <status>Slows</status> the target by 99% for 0.25 seconds. When a champion that you have damaged within the last 3 seconds dies, this cooldown is refreshed and you become <keywordStealth>Invisible</keywordStealth> for 1.5 seconds.<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Ability Haste.<br></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3134",
        "3133"
        ],
        image: {
        full: "6691.png",
        sprite: "item1.png",
        group: "item",
        x: 144,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 1000,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Damage",
        "Stealth",
        "CooldownReduction",
        "Slow",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 60
        },
        depth: 3
        },
        6692: {
        name: "Eclipse",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>8%</attention> Omnivamp</stats><br><br><li><passive>Ever Rising Moon:</passive> Hitting a champion with 2 separate Attacks or Abilities within 1.5 seconds deals an additional <physicalDamage>6% max Health physical damage</physicalDamage>, grants you <speed>15% Move Speed</speed> and a <shield>(180 + 40% bonus Attack Damage) Shield (50% shield for ranged champions)</shield> for 2 seconds (8s cooldown, 16s cooldown for ranged champions).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>4%</attention> Armor Penetration</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3134",
        "1036",
        "1053"
        ],
        image: {
        full: "6692.png",
        sprite: "item1.png",
        group: "item",
        x: 192,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 850,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Damage",
        "LifeSteal",
        "SpellVamp",
        "NonbootsMovement",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55
        },
        depth: 3
        },
        6693: {
        name: "Prowler's Claw",
        description: "<mainText><stats><attention>60</attention> Attack Damage<br><attention>18</attention> Lethality<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Sandswipe:</active> Dash through target enemy champion, dealing <physicalDamage>(65 + 25% bonus Attack Damage) physical damage</physicalDamage>. For the next 3 seconds, you deal 15% increased damage to the target. (90s cooldown).<br><br><rarityMythic>Mythic Passive:</rarityMythic> Grants all other <rarityLegendary>Legendary</rarityLegendary> items <attention>5</attention> Lethality</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3134",
        "3133"
        ],
        image: {
        full: "6693.png",
        sprite: "item1.png",
        group: "item",
        x: 240,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 1000,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Damage",
        "Active",
        "CooldownReduction",
        "NonbootsMovement",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 60
        },
        depth: 3
        },
        6694: {
        name: "Serylda's Grudge",
        description: "<mainText><stats><attention>45</attention> Attack Damage<br><attention>30%</attention> Armor Penetration<br><attention>20</attention> Ability Haste</stats><br><li><passive>Bitter Cold:</passive> Damaging Abilities <status>Slow</status> enemies by 30% for 1 second.</mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3133",
        "3035"
        ],
        image: {
        full: "6694.png",
        sprite: "item1.png",
        group: "item",
        x: 288,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 650,
        purchasable: true,
        total: 3200,
        sell: 2240
        },
        tags: [
        "Damage",
        "CooldownReduction",
        "ArmorPenetration",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 45
        },
        depth: 3
        },
        6695: {
        name: "Serpent's Fang",
        description: "<mainText><stats><attention>55</attention> Attack Damage<br><attention>12</attention> Lethality</stats><br><li><passive>Shield Reaver:</passive> Dealing damage to an enemy champion reduces any shields they gain by (50% | 35% for Ranged Champions) for 3 seconds. When you damage an enemy who is unaffected by Shield Reaver, reduce all shields on them by (50% | 35% for Ranged Champions).<br><br><rules>Additional damage not applied to targets with shields that only block magic damage.<br>Item performance differs for melee and ranged users.</rules></mainText><br>",
        colloq: "",
        plaintext: "",
        from: [
        "3134",
        "1037"
        ],
        image: {
        full: "6695.png",
        sprite: "item1.png",
        group: "item",
        x: 336,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 625,
        purchasable: true,
        total: 2600,
        sell: 1820
        },
        tags: [
        "Damage",
        "ArmorPenetration"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatPhysicalDamageMod: 55
        },
        depth: 3
        },
        8001: {
        name: "Anathema's Chains",
        description: `<mainText><stats><attention>650</attention> Health<br><attention>20</attention> Ability Haste</stats><br><br><active>Active -</active> <active>Vow:</active> Choose a Nemesis to start building a Vendetta (90s).<br><li><passive>Vendetta:</passive> Take up to 30% reduced damage from your Nemesis, 1% per Vendetta stack. You gain stacks over time, and reach the maximum number of stacks after 60 seconds.<li><passive>Vengeance:</passive> At maximum stacks, your Nemesis has 20% reduced Tenacity while near you.<br><br><rules>Active can be cast while dead and at global range. Stacks reset upon choosing a new target. Cannot be cast for 15 seconds while in-combat with champions.</rules><br><br><flavorText>"She swore to dedicate her life to his destruction. The gauntlets heard."</flavorText></mainText><br>`,
        colloq: "",
        plaintext: "",
        from: [
        "3067",
        "1011"
        ],
        image: {
        full: "8001.png",
        sprite: "item1.png",
        group: "item",
        x: 384,
        y: 432,
        w: 48,
        h: 48
        },
        gold: {
        base: 800,
        purchasable: true,
        total: 2500,
        sell: 1750
        },
        tags: [
        "Health",
        "Active",
        "CooldownReduction",
        "AbilityHaste"
        ],
        maps: {
        11: true,
        12: true,
        21: true,
        22: false
        },
        stats: {
        FlatHPPoolMod: 650
        },
        depth: 3
        }
        
}

obj.summonerSpells ={
  21: {
      id: "SummonerBarrier",
      name: "Barrier",
      description : "Shields your champion from 115-455 damage (depending on champion level) for 2 seconds.",    
  },
  1: {
      id: "SummonerBoost",
      name: "Cleanse",
      description : "Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and lowers the duration of incoming disables by 65% for 3 seconds",    
  },
  14: {
      id: "SummonerDot",
      name: "Ignite",
      description : "Ignites target enemy champion, dealing 70-410 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration.",    
  },
  3: {
      id: "SummonerExhaust",
      name: "Exhaust",
      description : "Exhausts target enemy champion, reducing their Move Speed by 30%, and their damage dealt by 40% for 3 seconds.",    
  },
  4: {
      id: "SummonerFlash",
      name: "Flash",
      description : "Teleports your champion a short distance toward your cursor's location.",    
  },
  6: {
      id: "SummonerHaste",
      name: "Ghost",
      description : "For 10 seconds, your champion can move through units and gains 24 - 48% Movement Speed (depending on champion level). Ghost extends its duration on takedown.",    
  },
  7: {
      id: "SummonerHeal",
      name: "Heal",
      description : "Restores 90-345 Health (depending on champion level) and grants 30% Movement Speed for 1 second to you and target allied champion. This healing is halved for units recently affected by Summoner Heal.",
  },
  13: {
      id: "SummonerMana",
      name: "Clarity",
      description : "Restores 50% of your champion's maximum Mana. Also restores allies for 25% of their maximum Mana.",    
  },
  11: {
      id: "SummonerSmite",
      name: "Smite",
      description : "Deals @SmiteBaseDamage@ true damage to target epic, large, or medium monster or minion.",    
  },
  12: {
      id: "SummonerTeleport",
      name: "Teleport",
      description : "After channeling for 4 seconds, teleports your champion to target allied structure, minion, or ward and grants a Move Speed boost. The cooldown of Teleport scales from 420-210 seconds depending on champion level.",    
  },

}
        

export default obj;