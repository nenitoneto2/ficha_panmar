import MagicElement from './elements'
import Rank from './powerrank'
import Talents from './talents'
import Equipment from './equipment'
import Symbols from './symbols'
import Proficiencies from './proficiencies'
import CombatStyles from './combatstyles'
import Magic from './magic'
import PlayableSpecies from './species'

export interface Character {
    speicie: PlayableSpecies,
    element: MagicElement,
    rank: Rank,
    combatant: number,
    magic: number,
    sagacious: number,
    create: number,
    protector: number,
    eloquence: number,
    talents: Talents,
    origins: CharacterOrigins,
    equipments: Equipment[],
    symbols: Symbols,
    proficiencies: Proficiencies[],
    styles: CombatStyles,
    magics: Magic,
    name: String
}

enum CharacterOrigins{
    SpearCoast,
    LichKingdom,
    TurtleIslands,
}

interface LivingCharacter{
<<<<<<< HEAD:panmar-app/src/data/structures/character.ts
    characterInfo: LivingCharacter,
=======
    characterInfo: Character,
>>>>>>> 991df8794a0a3860151588dc82f9893923aa00ce:ficha-app/src/data/structures/character.ts
    lifeDices: number,
    manaDices: number,
    talentPoints: number
    maxLife: number,
    currentLife: number,
    maxMana:number,
    currentMana: number,
    knowledge: number
<<<<<<< HEAD:panmar-app/src/data/structures/character.ts
}
=======
}

export default LivingCharacter
>>>>>>> 991df8794a0a3860151588dc82f9893923aa00ce:ficha-app/src/data/structures/character.ts
