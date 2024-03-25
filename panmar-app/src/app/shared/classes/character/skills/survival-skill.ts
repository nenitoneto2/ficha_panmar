import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class SurvivalSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Sobrevivencia', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.keen + stats.protector + this.knowledge
    }
}