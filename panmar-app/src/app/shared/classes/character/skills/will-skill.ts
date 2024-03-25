import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class WillSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Vontade', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.protector + stats.eloquence + this.knowledge
    }
}