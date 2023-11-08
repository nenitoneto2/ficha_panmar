import Character from './character'

enum Proficiencies{
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

export default Proficiencies

export function GetModifier(character: Character, proficiency: Proficiencies){
    var Modifier

    switch(proficiency){
        case Proficiencies.Martial:
            return character.combatant * 2
        case Proficiencies.Arcane:
            return character.magic * 2
        case Proficiencies.Stealth:
            return character.sagacious * 2
        case Proficiencies.Create:
            return character.create * 2
        case Proficiencies.Concentration:
            return character.protector * 2
        case Proficiencies.Act:
            return character.eloquence * 2
        case Proficiencies.Meridian:
            return character.combatant + character.magic
        case Proficiencies.Acrobacy:
            return character.combatant + character.sagacious
        case Proficiencies.Training:
            return character.combatant + character.create
        case Proficiencies.Athletics:
            return character.combatant + character.protector
        case Proficiencies.Presence:
            return character.combatant + character.eloquence
        case Proficiencies.Perception:
            return character.magic + character.sagacious
        case Proficiencies.World:
            return character.magic + character.create
        case Proficiencies.Medicine:
            return character.magic + character.protector
        case Proficiencies.Charisma:
            return character.magic + character.eloquence
        case Proficiencies.SleightOfHand:
            return character.sagacious + character.create
        case Proficiencies.Survival:
            return character.sagacious + character.protector
        case Proficiencies.ObtainInformation:
            return character.sagacious + character.eloquence
        case Proficiencies.Monsters:
            return character.create + character.protector
        case Proficiencies.Cultural:
            return character.create + character.eloquence
        case Proficiencies.Will:
            return character.protector + character.eloquence
    }
}