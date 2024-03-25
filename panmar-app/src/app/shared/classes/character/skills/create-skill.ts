import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class CreateSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Criar', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.create * 2 + this.knowledge
    }
}