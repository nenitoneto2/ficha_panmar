import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class InvestagateSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Investigar', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.keen + stats.eloquence + this.knowledge
    }
}