import {Character, CharacterStats} from './character'
import { StatType } from './stats'
import { KnowledgeCollection } from './knowledge'
import RollDice from 'src/resorces/dice'
import { DiceRollType } from 'src/resorces/dice'

enum ProficienciesType{
    Martial,
    Arcane,
    Stealth,
    Create,
    Concentration,
    Act,
    Meridian,
    Acrobacy,
    Training,
    Athletics,
    Presence,
    Perception,
    World,
    Medicine,
    Charisma,
    SleightOfHand,
    Survival,
    ObtainInformation,
    Monsters,
    Cultural,
    Will
}

export class Proficiency{
    type: ProficienciesType

    constructor(type: ProficienciesType){
        this.type = type
    }

    GetModifier(stats: CharacterStats, knowledge: KnowledgeCollection): number{
        let knowledgeMod = knowledge.GetKnowledgeProficiencyModfier(this.type) 
        let statMod: number 
        switch(this.type){
            case ProficienciesType.Martial:
                statMod = stats.GetStat(StatType.Combatant).modifier * 2 
                break
            case ProficienciesType.Arcane:
                statMod =  stats.GetStat(StatType.Magic).modifier * 2
                break
            case ProficienciesType.Stealth:
                statMod =  stats.GetStat(StatType.Sagacious).modifier * 2
                break
            case ProficienciesType.Create:
                statMod =  stats.GetStat(StatType.Create).modifier * 2
                break
            case ProficienciesType.Concentration:
                statMod =  stats.GetStat(StatType.Protector).modifier * 2
                break
            case ProficienciesType.Act:
                statMod =  stats.GetStat(StatType.Eloquence).modifier * 2
                break
            case ProficienciesType.Meridian:
                statMod =  stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Magic).modifier
                break
            case ProficienciesType.Acrobacy:
                statMod =  stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Sagacious).modifier
                break
            case ProficienciesType.Training:
                statMod =  stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Create).modifier
                break
            case ProficienciesType.Athletics:
                statMod =  stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Protector).modifier
                break
            case ProficienciesType.Presence:
                statMod =  stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Eloquence).modifier
                break
            case ProficienciesType.Perception:
                statMod =  stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Sagacious).modifier
                break
            case ProficienciesType.World:
                statMod =  stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Create).modifier
                break
            case ProficienciesType.Medicine:
                statMod =  stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Protector).modifier
                break
            case ProficienciesType.Charisma:
                statMod =  stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Eloquence).modifier
                break
            case ProficienciesType.SleightOfHand:
                statMod =  stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Create).modifier
                break
            case ProficienciesType.Survival:
                statMod =  stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Protector).modifier
                break
            case ProficienciesType.ObtainInformation:
                statMod =  stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Eloquence).modifier
                break
            case ProficienciesType.Monsters:
                statMod =  stats.GetStat(StatType.Create).modifier + stats.GetStat(StatType.Protector).modifier
                break
            case ProficienciesType.Cultural:
                statMod =  stats.GetStat(StatType.Create).modifier + stats.GetStat(StatType.Eloquence).modifier
                break
            case ProficienciesType.Will:
                statMod =  stats.GetStat(StatType.Protector).modifier + stats.GetStat(StatType.Eloquence).modifier
                
            
        }
        return knowledgeMod + statMod
    }

    RollProfeciency(stats: CharacterStats, knowledge: KnowledgeCollection) {
        let mod = this.GetModifier(stats, knowledge)
        return RollDice(1, 20, mod, mod == 0 ? DiceRollType.Disadvantage : DiceRollType.Standard)
    }
}

export class Proficiencies{
    proficiencies: Proficiency[] = [
        new Proficiency(ProficienciesType.Acrobacy),
        new Proficiency(ProficienciesType.Act),
        new Proficiency(ProficienciesType.Arcane),
        new Proficiency(ProficienciesType.Athletics),
        new Proficiency(ProficienciesType.Charisma),
        new Proficiency(ProficienciesType.Concentration),
        new Proficiency(ProficienciesType.Create),
        new Proficiency(ProficienciesType.Cultural), 
        new Proficiency(ProficienciesType.Martial),
        new Proficiency(ProficienciesType.Medicine),
        new Proficiency(ProficienciesType.Meridian),
        new Proficiency(ProficienciesType.Monsters),
        new Proficiency(ProficienciesType.ObtainInformation),
        new Proficiency(ProficienciesType.Perception),
        new Proficiency(ProficienciesType.Presence),
        new Proficiency(ProficienciesType.SleightOfHand),
        new Proficiency(ProficienciesType.Stealth),
        new Proficiency(ProficienciesType.Survival),
        new Proficiency(ProficienciesType.Training),
        new Proficiency(ProficienciesType.Will),
        new Proficiency(ProficienciesType.World)   
    ]

    GetProficiencyModifier(type: ProficienciesType, stats: CharacterStats, knowledge:KnowledgeCollection){
        return this.proficiencies.find(p => p.type == type).GetModifier(stats, knowledge)
    }

    RollProficiency(type: ProficienciesType, stats: CharacterStats, knowledge:KnowledgeCollection){
        return  this.proficiencies.find(p => p.type == type).RollProfeciency(stats, knowledge)
    }
}

export function parseProficiency(str: string): ProficienciesType | undefined {
    const enumKey: keyof typeof ProficienciesType = str as keyof typeof ProficienciesType;
    const enumValue: ProficienciesType = ProficienciesType[enumKey];
    return enumValue;
}

export default ProficienciesType