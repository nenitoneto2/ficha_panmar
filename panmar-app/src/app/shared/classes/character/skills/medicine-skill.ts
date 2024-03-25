import { Stats } from "../stats/stats";
import { Skill } from "./skill";

export class MedicineSkill extends Skill{
    constructor(knowledge: number = 0){
        super('Medicina', knowledge)
    }

    override GetSkillValue(stats: Stats): number {
        return stats.magic + stats.protector + this.knowledge
    }
}