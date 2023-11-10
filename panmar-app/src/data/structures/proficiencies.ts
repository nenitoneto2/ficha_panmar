import {Character, CharacterStats} from './character'
import Dice from '../../../../ficha-app/src/resorces/dice'
import { StatType } from './stats'

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
    hasProficiency: boolean

    constructor(type: ProficienciesType, hasProficiency: boolean = false){
        this.type = type,
        this.hasProficiency = hasProficiency
    }

    GetModifier(stats: CharacterStats){
        if(!this.hasProficiency){
            return 0
        }

        switch(this.type){
            case ProficienciesType.Martial:
                return stats.GetStat(StatType.Combatant).modifier * 2
            case ProficienciesType.Arcane:
                return stats.GetStat(StatType.Magic).modifier * 2
            case ProficienciesType.Stealth:
                return stats.GetStat(StatType.Sagacious).modifier * 2
            case ProficienciesType.Create:
                return stats.GetStat(StatType.Create).modifier * 2
            case ProficienciesType.Concentration:
                return stats.GetStat(StatType.Protector).modifier * 2
            case ProficienciesType.Act:
                return stats.GetStat(StatType.Eloquence).modifier * 2
            case ProficienciesType.Meridian:
                return stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Magic).modifier
            case ProficienciesType.Acrobacy:
                return stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Sagacious).modifier
            case ProficienciesType.Training:
                return stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Create).modifier
            case ProficienciesType.Athletics:
                return stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Protector).modifier
            case ProficienciesType.Presence:
                return stats.GetStat(StatType.Combatant).modifier + stats.GetStat(StatType.Eloquence).modifier
            case ProficienciesType.Perception:
                return stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Sagacious).modifier
            case ProficienciesType.World:
                return stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Create).modifier
            case ProficienciesType.Medicine:
                return stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Protector).modifier
            case ProficienciesType.Charisma:
                return stats.GetStat(StatType.Magic).modifier + stats.GetStat(StatType.Eloquence).modifier
            case ProficienciesType.SleightOfHand:
                return stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Create).modifier
            case ProficienciesType.Survival:
                return stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Protector).modifier
            case ProficienciesType.ObtainInformation:
                return stats.GetStat(StatType.Sagacious).modifier + stats.GetStat(StatType.Eloquence).modifier
            case ProficienciesType.Monsters:
                return stats.GetStat(StatType.Create).modifier + stats.GetStat(StatType.Protector).modifier
            case ProficienciesType.Cultural:
                return stats.GetStat(StatType.Create).modifier + stats.GetStat(StatType.Eloquence).modifier
            case ProficienciesType.Will:
                return stats.GetStat(StatType.Protector).modifier + stats.GetStat(StatType.Eloquence).modifier
        }
    }

    RollProfeciency(stats: CharacterStats) {
        
        return this.hasProficiency ?  Dice(1, 20, this.GetModifier(stats)) : 
            Math.min(Dice(1, 20, this.GetModifier(stats)), Dice(1, 20, this.GetModifier(stats)))
    }
}

export class Proficiencies{
    proficiencies: Proficiency[] = []

    constructor(proficiencies: Proficiency[]){
        for(let p in ProficienciesType){
            this.proficiencies.push( new Proficiency(parseProficiency(p), proficiencies.find(pro => pro.type == parseProficiency(p)) != null))
        }
    }

    GetProficiencyModifier(type: ProficienciesType, stats: CharacterStats){
        return this.proficiencies.find(p => p.type == type).GetModifier(stats)
    }

    RollProficiency(type: ProficienciesType, stats: CharacterStats){
        return this.proficiencies.find(p => p.type == type).RollProfeciency(stats)
    }
}

function parseProficiency(str: string): ProficienciesType | undefined {
    const enumKey: keyof typeof ProficienciesType = str as keyof typeof ProficienciesType;
    const enumValue: ProficienciesType = ProficienciesType[enumKey];
    return enumValue;
}

export default ProficienciesType