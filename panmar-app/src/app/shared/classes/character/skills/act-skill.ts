import { Skill } from "./skill";
import { Stats } from "../stats/stats";

export class ActSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Atuae', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.eloquence * 2 + this.knowledge
    }
}