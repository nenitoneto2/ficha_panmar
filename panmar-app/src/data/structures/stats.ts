import RollDice from "src/resorces/dice"

export enum StatType{
    Combatant,
    Magic,
    Sagacious,
    Create,
    Protector,
    Eloquence
}

export default class Stat{
    type: StatType
    modifier: number

    constructor(type:  StatType, mod: number){
        this.type = type
        this.modifier = mod
    }

    RollStat(){
        return RollDice(1, 20, this.modifier).result
    }
}