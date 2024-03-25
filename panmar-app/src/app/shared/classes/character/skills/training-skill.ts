import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class TrainingSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Treinamento', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.combatant + stats.create + this.knowledge
    }
}