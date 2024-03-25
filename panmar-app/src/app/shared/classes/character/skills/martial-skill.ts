import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class MartialSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Marcial', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.combatant * 2 + this.knowledge
    }
}