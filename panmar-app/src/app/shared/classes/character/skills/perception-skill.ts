import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class PerceptionSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Percepção', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.magic + stats.keen + this.knowledge
    }
}