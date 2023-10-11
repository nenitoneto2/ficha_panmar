import MagicElement from './elements'
import Rank from './powerrank'
import Talents from './talents'
import Equipment from './equipment'
import Symbols from './symbols'
import Proficiencies from './proficiencies'
import CombatStyles from './combatstyles'
import Magic from './magic'

interface Character {
    speicie: String,
    element: MagicElement,
    rank: Rank,
    skills: number[],
    talents: Talents,
    origins: CharacterOrigins,
    equipments: Equipment[],
    symbols: Symbols,
    proficiencies: Proficiencies,
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
    characterInfo: LivingCharacter,
    lifeDices: number,
    manaDices: number,
    talentPoints: number
    maxLife: number,
    currentLife: number,
    maxMana:number,
    currentMana: number,
    knowledge: number
}