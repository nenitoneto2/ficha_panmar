import { Elements } from "../../enums/element"
import { LeveledRank } from "../../enums/rank"
import { Species } from "../../enums/specie"
import { DeathSaves } from "./death-saves"
import { Meridians } from "./meridians/meridians"
import { Skills } from "./skills/skills"
import { Stats } from "./stats/stats"
import { Health } from "./vitals/health"
import { Mana } from "./vitals/mana"

export class Character{
    name : string
    rank : LeveledRank
    species : Species
    primaryElement : Elements //TODO: Change elements to a class
    secondaryElement : Elements
    PO: number
    Crystals: number
    characterDescription: string 
    health : Health
    mana : Mana
    deathSaves: DeathSaves
    success: number
    meridians: Meridians
    stats: Stats
    skills: Skills
}