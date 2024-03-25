import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class WorldSkill extends Skill{
    constructor(knowledge: number = 0){
        super('World', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.magic + stats.create + this.knowledge
    }
}