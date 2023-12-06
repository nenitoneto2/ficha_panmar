import MagicElement from './elements'
import Rank from './powerrank'
import Talents from './talents'
import Equipment from './equipment'
import Symbols from './symbols'
import { Proficiencies } from './proficiencies'
import CombatStyles from './combatstyles'
import Magic from './magic'
import PlayableSpecies from './species'
import Stat, { StatType } from './stats'
import { KnowledgeCollection } from './knoledge'

export class Character {
    specie: PlayableSpecies
    element: MagicElement[]
    rank: Rank
    stats: CharacterStats
    talents: Talents[]
    origins: CharacterOrigins
    equipments: Equipment[]
    symbols: Symbols
    proficiencies: Proficiencies
    knowledges: KnowledgeCollection
    styles: CombatStyles[]
    magics: Magic[]
    name: string
}

export class CharacterStats{
    stats: Stat[]

    constructor(combatant: number, magic:number, sagacious: number, create: number, protector:number, eloquence: number){
        this.stats = [
            new Stat(StatType.Combatant, combatant),
            new Stat(StatType.Magic, magic),
            new Stat(StatType.Sagacious, sagacious),
            new Stat(StatType.Create, create),
            new Stat(StatType.Protector, protector),
            new Stat(StatType.Eloquence, eloquence),
        ]
    }

    GetStat(type:StatType) {
        return this.stats.find(s => s.type == type)
    }
}


export enum CharacterOrigins{
    SpearCoast,
    LichKingdom,
    TurtleIslands,
    OrchidInstitute
}

class LivingCharacter{
    characterInfo: Character
    lifeDices: number
    manaDices: number
    talentPoints: number
    maxLife: number
    currentLife: number
    maxMana:number
    currentMana: number
    knowledge: number
}

export default LivingCharacter