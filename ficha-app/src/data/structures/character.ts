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
    characterInfo: Character,
    lifeDices: number,
    manaDices: number,
    talentPoints: number
    maxLife: number,
    currentLife: number,
    maxMana:number,
    currentMana: number,
    knowledge: number
}

export default LivingCharacter