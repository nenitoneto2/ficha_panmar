import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class CulturalSkill extends Skill{
    constructor(knowledge: number = 0){
        super('cultural', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.create + stats.eloquence + this.knowledge
    }
}