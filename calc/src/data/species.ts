import * as I from './interface';
import {toID, extend} from '../util';

// TODO: rename these fields to be readable
export interface SpeciesData {
  readonly t1: I.TypeName; // type1
  readonly t2?: I.TypeName; // type2
  readonly bs: {
    hp: number;
    at: number;
    df: number;
    sa: number;
    sd: number;
    sp: number;
    sl?: number;
  }; // baseStats
  readonly w: number; // weight
  readonly canEvolve?: boolean;
  readonly gender?: I.GenderName;
  readonly formes?: string[];
  readonly isAlternateForme?: boolean;
  readonly ab?: string; // ability
}




});
const SS: {[name: string]: SpeciesData} = {
  Koatric: {
t1: 'Electric',

bs: {
hp: 24,
at: 147,
df: 63,
sa: 133,
sd: 86,
sp: 147
},
w: 17
},
Aquazelle: {
t1: 'Normal',
t2: 'Water',
bs: {
hp: 107,
at: 53,
df: 83,
sa: 123,
sd: 97,
sp: 137
},
w: 5
},
Salamalix: {
t1: 'Rock',
t2: 'Dark',
bs: {
hp: 119,
at: 99,
df: 122,
sa: 49,
sd: 76,
sp: 135
},
w: 75
},
Brawnkey: {
t1: 'Fighting',

bs: {
hp: 143,
at: 86,
df: 144,
sa: 76,
sd: 37,
sp: 114
},
w: 150
},
Stuneleon: {
t1: 'Electric',
t2: 'Poison',
bs: {
hp: 70,
at: 145,
df: 100,
sa: 122,
sd: 77,
sp: 86
},
w: 5
},
Chillyte: {
t1: 'Ice',

bs: {
hp: 95,
at: 110,
df: 135,
sa: 101,
sd: 75,
sp: 84
},
w: 75
},
'Chillyte-Mega': {
t1: 'Ice',

bs: {
hp: 95,
at: 101,
df: 192,
sa: 134,
sd: 79,
sp: 99
},
w: 150
},
Eartharoo: {
t1: 'Ground',
t2: 'Normal',
bs: {
hp: 102,
at: 77,
df: 37,
sa: 138,
sd: 110,
sp: 136
},
w: 300
},
Crazefly: {
t1: 'Bug',
t2: 'Psychic',
bs: {
hp: 115,
at: 115,
df: 31,
sa: 112,
sd: 137,
sp: 90
},
w: 17
},
Electritar: {
t1: 'Steel',
t2: 'Electric',
bs: {
hp: 70,
at: 49,
df: 145,
sa: 130,
sd: 33,
sp: 173
},
w: 300
},
Aquatopus: {
t1: 'Water',

bs: {
hp: 48,
at: 103,
df: 185,
sa: 54,
sd: 90,
sp: 120
},
w: 300
},
Scorpita: {
t1: 'Poison',

bs: {
hp: 118,
at: 78,
df: 98,
sa: 122,
sd: 66,
sp: 118
},
w: 17
},
Baloon: {
t1: 'Fairy',

bs: {
hp: 137,
at: 124,
df: 142,
sa: 102,
sd: 12,
sp: 83
},
w: 300
},
Kinesel: {
t1: 'Psychic',
t2: 'Fairy',
bs: {
hp: 48,
at: 146,
df: 111,
sa: 165,
sd: 78,
sp: 52
},
w: 150
},
Glacida: {
t1: 'Fighting',
t2: 'Ice',
bs: {
hp: 100,
at: 115,
df: 157,
sa: 46,
sd: 146,
sp: 36
},
w: 17
},
Pidgeotine: {
t1: 'Normal',
t2: 'Flying',
bs: {
hp: 71,
at: 124,
df: 56,
sa: 48,
sd: 194,
sp: 107
},
w: 300
},
Gorilax: {
t1: 'Psychic',
t2: 'Fighting',
bs: {
hp: 116,
at: 61,
df: 101,
sa: 83,
sd: 117,
sp: 122
},
w: 17
},
Albatrygon: {
t1: 'Flying',

bs: {
hp: 61,
at: 121,
df: 57,
sa: 100,
sd: 110,
sp: 151
},
w: 300
},
Chillvark: {
t1: 'Ice',
t2: 'Fighting',
bs: {
hp: 131,
at: 117,
df: 51,
sa: 133,
sd: 78,
sp: 90
},
w: 75
},
Komodith: {
t1: 'Steel',
t2: 'Dragon',
bs: {
hp: 70,
at: 134,
df: 101,
sa: 123,
sd: 103,
sp: 69
},
w: 150
},
Giranium: {
t1: 'Steel',
t2: 'Rock',
bs: {
hp: 66,
at: 40,
df: 146,
sa: 161,
sd: 148,
sp: 39
},
w: 17
},
Flamyle: {
t1: 'Fire',

bs: {
hp: 103,
at: 99,
df: 79,
sa: 75,
sd: 116,
sp: 128
},
w: 150
},
Voltecta: {
t1: 'Ghost',
t2: 'Electric',
bs: {
hp: 149,
at: 40,
df: 131,
sa: 100,
sd: 80,
sp: 100
},
w: 17
},
Ostria: {
t1: 'Flying',
t2: 'Grass',
bs: {
hp: 74,
at: 141,
df: 74,
sa: 101,
sd: 160,
sp: 50
},
w: 300
},
Ninjoth: {
t1: 'Ice',
t2: 'Dark',
bs: {
hp: 88,
at: 132,
df: 56,
sa: 66,
sd: 159,
sp: 99
},
w: 75
},
Herbigator: {
t1: 'Grass',
t2: 'Water',
bs: {
hp: 42,
at: 159,
df: 131,
sa: 92,
sd: 101,
sp: 75
},
w: 37
},
Anteros: {
t1: 'Steel',
t2: 'Bug',
bs: {
hp: 98,
at: 96,
df: 113,
sa: 65,
sd: 105,
sp: 123
},
w: 37
},
Gladiaster: {
t1: 'Steel',
t2: 'Ice',
bs: {
hp: 118,
at: 110,
df: 79,
sa: 119,
sd: 69,
sp: 105
},
w: 5
},
Hyperoach: {
t1: 'Bug',
t2: 'Normal',
bs: {
hp: 136,
at: 114,
df: 56,
sa: 102,
sd: 104,
sp: 88
},
w: 75
},
Barracoth: {
t1: 'Water',
t2: 'Ice',
bs: {
hp: 75,
at: 85,
df: 146,
sa: 70,
sd: 139,
sp: 85
},
w: 17
},
Toados: {
t1: 'Poison',

bs: {
hp: 151,
at: 119,
df: 11,
sa: 154,
sd: 68,
sp: 97
},
w: 5
},
Voltarak: {
t1: 'Electric',
t2: 'Ice',
bs: {
hp: 100,
at: 75,
df: 87,
sa: 130,
sd: 128,
sp: 80
},
w: 150
},
Mosqung: {
t1: 'Bug',
t2: 'Flying',
bs: {
hp: 149,
at: 37,
df: 100,
sa: 106,
sd: 148,
sp: 60
},
w: 37
},
Flamepion: {
t1: 'Fire',
t2: 'Ghost',
bs: {
hp: 81,
at: 169,
df: 134,
sa: 98,
sd: 70,
sp: 48
},
w: 150
},
Hyenix: {
t1: 'Dark',

bs: {
hp: 60,
at: 147,
df: 27,
sa: 160,
sd: 140,
sp: 66
},
w: 17
},
Rhinolite: {
t1: 'Rock',
t2: 'Ground',
bs: {
hp: 113,
at: 126,
df: 67,
sa: 82,
sd: 76,
sp: 136
},
w: 300
},
Bellena: {
t1: 'Fairy',
t2: 'Dragon',
bs: {
hp: 96,
at: 147,
df: 101,
sa: 90,
sd: 112,
sp: 54
},
w: 75
},
Falcola: {
t1: 'Water',

bs: {
hp: 116,
at: 52,
df: 92,
sa: 114,
sd: 119,
sp: 107
},
w: 75
},
Beanium: {
t1: 'Rock',
t2: 'Normal',
bs: {
hp: 116,
at: 92,
df: 90,
sa: 123,
sd: 138,
sp: 41
},
w: 17
},
Lemotic: {
t1: 'Grass',
t2: 'Ground',
bs: {
hp: 139,
at: 146,
df: 57,
sa: 115,
sd: 71,
sp: 72
},
w: 150
},
Biceon: {
t1: 'Ground',
t2: 'Fairy',
bs: {
hp: 95,
at: 122,
df: 139,
sa: 43,
sd: 120,
sp: 81
},
w: 37
},
Skeleray: {
t1: 'Dragon',
t2: 'Ghost',
bs: {
hp: 78,
at: 108,
df: 127,
sa: 103,
sd: 151,
sp: 33
},
w: 150
},
Specyte: {
t1: 'Ghost',

bs: {
hp: 119,
at: 150,
df: 45,
sa: 124,
sd: 45,
sp: 117
},
w: 37
},
Ramron: {
t1: 'Normal',

bs: {
hp: 113,
at: 44,
df: 148,
sa: 26,
sd: 142,
sp: 127
},
w: 75
},
Balar: {
t1: 'Rock',
t2: 'Flying',
bs: {
hp: 123,
at: 132,
df: 84,
sa: 74,
sd: 111,
sp: 76
},
w: 37
},
Panthee: {
t1: 'Steel',
t2: 'Fighting',
bs: {
hp: 78,
at: 83,
df: 95,
sa: 118,
sd: 121,
sp: 105
},
w: 300
},
Blastora: {
t1: 'Fire',

bs: {
hp: 63,
at: 126,
df: 102,
sa: 99,
sd: 131,
sp: 79
},
w: 5
},
Dropacle: {
t1: 'Ghost',
t2: 'Water',
bs: {
hp: 170,
at: 125,
df: 22,
sa: 57,
sd: 113,
sp: 113
},
w: 300
},

});

export const SPECIES = [{}, SS];

export class Species implements I.Species {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return SPECIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in SPECIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Specie implements I.Specie {
  readonly kind: 'Species';
  readonly id: I.ID;
  readonly name: I.SpeciesName;
  readonly t1!: I.TypeName; // type1
  readonly t2?: I.TypeName; // type2
  readonly bs!: {
    hp: number;
    at: number;
    df: number;
    sa: number;
    sd: number;
    sp: number;
    sl?: number;
  }; // baseStats
  readonly w!: number; // weight
  readonly canEvolve?: boolean;
  readonly gender?: I.GenderName;
  readonly formes?: I.SpeciesName[];
  readonly isAlternateForme?: boolean;
  readonly ab?: I.AbilityName; // ability

  constructor(name: string, data: SpeciesData) {
    this.kind = 'Species';
    this.id = toID(name);
    this.name = name as I.SpeciesName;
    extend(this, data);
  }
}
const SPECIES_BY_ID: Array<{[id: string]: Specie}> = [];

for (const species of SPECIES) {
  const map: {[id: string]: Specie} = {};
  for (const specie in species) {
    const m = new Specie(specie, species[specie]);
    map[m.id] = m;
  }
  SPECIES_BY_ID.push(map);
}
