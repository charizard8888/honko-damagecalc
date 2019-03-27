var SETDEX_SM = { // hp at df sa sd sp
	/*"Abomasnow": {
		"PU Mixed Wallbreaker": {"level": 100, "evs": {"at": 4, "sp": 252, "sa": 252}, "nature": "Hasty", "ability": "Snow Warning", "item": "Life Orb", "moves": ["Blizzard", "Giga Drain", "Earthquake", "Ice Shard"]},
		"PU Choice Scarf": {"level": 100, "evs": {"at": 4, "sp": 252, "sa": 252}, "nature": "Naive", "ability": "Snow Warning", "item": "Choice Scarf", "moves": ["Blizzard", "Giga Drain", "Focus Blast", "Earthquake"]},
		"PU Swords Dance": {"level": 100, "evs": {"at": 252, "sp": 252, "sa": 4}, "nature": "Jolly", "ability": "Snow Warning", "item": "Grassium Z", "moves": ["Swords Dance", "Wood Hammer", "Ice Shard", "Earthquake"]},
		"RU Mixed Attacker": {"level": 100, "evs": {"at": 92, "sp": 164, "sa": 252}, "nature": "Rash", "ability": "Soundproof", "item": "Abomasite", "moves": ["Blizzard", "Wood Hammer", "Ice Shard", "Focus Blast"]},
		"RU Swords Dance": {"level": 100, "evs": {"df": 4, "at": 252, "sp": 252}, "nature": "Adamant", "ability": "Soundproof", "item": "Abomasite", "moves": ["Swords Dance", "Wood Hammer", "Ice Shard", "Earthquake"]},
		"Doubles Trick Room Attacker": {"level": 100, "evs": {"at": 4, "hp": 252, "sa": 252}, "ivs": {"sp": 0}, "nature": "Quiet", "ability": "Snow Warning", "item": "Abomasite", "moves": ["Blizzard", "Giga Drain", "Ice Shard", "Protect"]},
	},*/
	"Nihilego": {
		"CS Special Wall": {"level": 100, "evs": {"hp": 248, "df": 8, "sd": 252}, "nature": "Calm", "ability": "Levitate", "item": "Black Sludge", "moves": ["Rapid Spin", "Recover", "Sludge Bomb", "Stealth Rock"]},
	   "CS Unaware Wall": {"level": 100, "evs": {"hp": 248, "df": 252, "sd": 8}, "nature": "Calm", "ability": "Unaware", "item": "Black Sludge", "moves": ["Rapid Spin", "Recover", "Sludge Bomb", "Stealth Rock"]},
		"CS Offensive Spinner": {"level": 100, "evs": {"hp": 0, "at": 0, "df": 0, "sa": 252, "sd": 4, "sp": 252}, "nature": "Timid", "ability": "Unaware", "item": "Black Sludge", "moves": ["Rapid Spin", "Recover", "Sludge Wave", "Grass Knot"]},
	},
	"Metagross": {
 "CS Choice Band": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Adamant", "ability": "Iron Fist", "item": "Choice Band", "moves": ["Iron Head", "Hammer Arm", "Bullet Punch", "Zen Headbutt"]},
},
	"Kricketune": {
 "CS delelelelelele whooop": {"level": 100, "evs": {"hp": 0, "at": 0, "df": 0, "sa": 252, "sd": 4, "sp": 252}, "nature": "Timid", "ability": "Swarm", "item": "Focus Sash", "moves": ["Sticky Web", "Boomburst", "Tail Glow", "Taunt"]},
},
	"Celesteela": {
 "CS Autotomize": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Adamant", "ability": "Beast Boost", "item": "Rockium Z", "moves": ["Iron Head", "Earthquake", "Stone Edge", "Autotomize"]},
"CS Gravity": {"level": 100, "evs": {"hp": 248, "at": 0, "df": 8, "sa": 0, "sd": 252, "sp": 0}, "nature": "Careful", "ability": "Beast Boost", "item": "Leftovers", "moves": ["Iron Head", "Earthquake", "Leech Seed", "Explosion"]},
	},
	"Trapinch": {
 "CS Trapper": {"level": 100, "evs": {"hp": 92, "at": 252, "df": 0, "sa": 0, "sd": 0, "sp": 164}, "nature": "Adamant", "ability": "Arena Trap", "item": "Eviolite", "moves": ["Earthquake", "Fire Fang", "Sucker Punch", "Knock Off"]},
},
	"Milotic": {
 "CS Offensive Defog": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Jolly", "ability": "Trace", "item": "Leftovers", "moves": ["Liquidation", "Play Rough", "Defog", "Recover"]},
},
	"Lanturn": {
 "CS Specially Defensive Pivot": {"level": 100, "evs": {"hp": 252, "at": 0, "df": 4, "sa": 0, "sd": 252, "sp": 0}, "nature": "Calm", "ability": "Volt Absorb", "item": "Leftovers", "moves": ["Scald", "Volt Switch", "Recover", "Heal Bell"]},
},
	"Toucannon": {
 "CS Swords Dance": {"level": 100, "evs": {"hp": 252, "at": 0, "df": 252, "sa": 0, "sd": 4, "sp": 0}, "nature": "Impish", "ability": "Poison Heal", "item": "Toxic Orb", "moves": ["Swords Dance", "Roost", "Beak Blast", "Knock Off"]},
},
	"Sharpedo-Mega": {
 "CS Sharknado": {"level": 100, "evs": {"hp": 0, "at": 4, "df": 0, "sa": 252, "sd": 0, "sp": 252}, "nature": "Hasty", "ability": "Water Veil", "item": "Sharpedonite", "moves": ["Hydro Pump", "Fire Blast", "Thunder", "Earthquake"]},
"CS Sharknado 3: Oh Hell No!": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Adamant", "ability": "Moxie", "item": "Steelium Z", "moves": ["Shift Gear", "Waterfall", "Smart Strike", "Earthquake"]},	
	},
	"Swampert": {
 "CS Bulk Up Stallbreaker": {"level": 100, "evs": {"hp": 252, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 0}, "nature": "Adamant", "ability": "Poison Heal", "item": "Toxic Orb", "moves": ["Bulk Up", "Liquidation", "Earthquake", "Protect"]},
},
	"Swampert-Mega": {
 "CS Mega Wallbreaker": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Adamant", "ability": "Poison Heal", "item": "Swampertite", "moves": ["Liquidation", "Earthquake", "Stone Edge", "Power-Up Punch"]},
},
	"Trevenant": {
 "CS Bulk Up Stallbreaker": {"level": 100, "evs": {"hp": 144, "at": 252, "df": 0, "sa": 0, "sd": 0, "sp": 108}, "nature": "Adamant", "ability": "Harvest", "item": "Sitrus Berry", "moves": ["Bulk Up", "Substitute", "Drain Punch", "Phantom Force"]},
},
	"Ditto": {
 "CS Quick Powder": {"level": 100, "evs": {"hp": 0, "at": 0, "df": 0, "sa": 252, "sd": 4, "sp": 252}, "nature": "Modest / Timid", "ability": "Protean", "item": "Quick Powder", "moves": ["Spikes", "Shadow Ball", "Flash Cannon", "Dazzling Gleam"]},
},
	"Forretress": {
 "CS Regenvest": {"level": 100, "evs": {"hp": 252, "at": 4, "df": 0, "sa": 0, "sd": 252, "sp": 0}, "nature": "Sassy", "ability": "Regenerator", "item": "Assault Vest", "moves": ["Iron Head", "Iron Head", "Earthquake", "Rapid Spin"]},
},
	"Druddigon": {
 "CS Offensive Rocker": {"level": 100, "evs": {"hp": 212, "at": 252, "df": 0, "sa": 0, "sd": 0, "sp": 44}, "nature": "Adamant", "ability": "Defiant", "item": "Leftovers", "moves": ["Shadow Claw", "Dragon Claw", "Outrage", "Shadow Sneak"]},
},
	"Xurkitree": {
 "CS Offensive Pivot": {"level": 100, "evs": {"hp": 0, "at": 0, "df": 0, "sa": 252, "sd": 4, "sp": 252}, "nature": "Modest", "ability": "Electric Terrain", "item": "Zap Plate", "moves": ["Volt Switch", "Recover", "Energy Ball", "Thunderbolt"]},
"CS Calm Mind": {"level": 100, "evs": {"hp": 252, "at": 0, "df": 252, "sa": 4, "sd": 0, "sp": 0}, "nature": "Bold", "ability": "Electric Terrain", "item": "Leftovers", "moves": ["Calm Mind", "Recover", "Thunderbolt", "Energy Ball"]},
	},
	"Kommo-o": {
 "CS Soulblaze": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 4, "sd": 0, "sp": 252}, "nature": "Naive", "ability": "Sand Stream", "item": "Kommonium Z", "moves": ["Clanging Scales", "Earthquake", "Outrage", "Iron Head"]},
"CS Offensive Pivot": {"level": 100, "evs": {"hp": 0, "at": 252, "df": 0, "sa": 0, "sd": 4, "sp": 252}, "nature": "Jolly", "ability": "Sand Stream", "item": "Iapapa Berry", "moves": ["U-turn", "Earthquake", "Stealth Rock", "Toxic"]},
	},
	
};
