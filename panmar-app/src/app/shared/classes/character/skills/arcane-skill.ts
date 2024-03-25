import { Skill } from "./skill";
import { Stats } from "../stats/stats";

export class ArcaneSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Arcana', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.magic * 2 + this.knowledge
    }
}