import { Skill } from "./skill";
import { Stats } from "../stats/stats";

export class ConcentrationSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Concentração', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.protector * 2 + this.knowledge
    }
}