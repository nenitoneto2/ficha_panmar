import { Stats } from "../stats/stats"

export class Skill{
    name: string
    knowledge: number
    
    constructor(name: string, knowledge: number){
        this.name = name
        this.knowledge = knowledge
    }   

    GetSkillValue(stats: Stats){
        return -1
    }
}