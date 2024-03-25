export class Skill{
    name: string
    knowledge: number
    
    constructor(name: string, knowledge: number){
        this.name = name
        this.knowledge = knowledge
    }   

    GetSkillValue(){
        return -1
    }
}