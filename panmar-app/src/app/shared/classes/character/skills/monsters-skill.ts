import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class MonstersSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Monstros', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.create + stats.protector + this.knowledge
    }
}