import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class AcrobaticsSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Acrobacia', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.combatant + stats.keen + this.knowledge
    }
}