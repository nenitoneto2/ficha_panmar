import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class SmoothTalkSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Labia', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.magic + stats.eloquence + this.knowledge
    }
}