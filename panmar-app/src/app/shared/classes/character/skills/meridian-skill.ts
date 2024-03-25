import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class MeridianSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Meridiano', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.combatant + stats.magic + this.knowledge
    }
}