import { Skill } from "./skill";
import { Stats } from "../stats/stats";

export class SneakSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Furtividade', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.keen * 2 + this.knowledge
    }
}