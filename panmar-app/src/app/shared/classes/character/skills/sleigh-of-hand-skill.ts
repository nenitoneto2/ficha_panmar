import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class SleighOfHandSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Mãos Leves', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.keen + stats.create + this.knowledge
    }
}