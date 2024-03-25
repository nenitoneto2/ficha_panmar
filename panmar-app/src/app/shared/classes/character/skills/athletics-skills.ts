import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class AthleticsSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Atletismo', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.combatant + stats.protector + this.knowledge
    }
}