import { range } from "rxjs"
import ProficienciesType, { parseProficiency } from "./proficiencies"

export enum KnowledgeType{
    Recipe = 0,
    Proficiency = 1
}

export abstract class Knowledge{
    type: KnowledgeType

    constructor(knowledgeType: KnowledgeType){
        this.type = knowledgeType
    }
}

export class ProficiencyKnowledge extends Knowledge{
    proficiency: ProficienciesType
    level: number

    constructor(knowledgeType: KnowledgeType, proficiencyType: ProficienciesType, level: number = 0){
        super(knowledgeType)
        this.proficiency = proficiencyType
        this.level = level
    }
}

export class KnowledgeCollection{
    knowledges: Knowledge[]

    constructor(){
        for(let p in ProficienciesType){
            this.knowledges.push(new ProficiencyKnowledge(KnowledgeType.Proficiency, parseProficiency(p)))
        }
    }

    GetKnowledgeProficiencyModfier(type: ProficienciesType){
        for(let k in range(0, this.knowledges.length)){
            if(this.knowledges[k].type != KnowledgeType.Proficiency){
                continue
            }

            if((this.knowledges[k] as ProficiencyKnowledge).proficiency == type){
                return (this.knowledges[k] as ProficiencyKnowledge).level
            }
        }

        return 0
    }
}
