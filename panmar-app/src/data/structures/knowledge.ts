import ProficienciesType, { parseProficiency } from "./proficiencies";

export enum KnowledgeType {
  Recipe = 0,
  Proficiency = 1,
}

export abstract class Knowledge {
  type: KnowledgeType;

  constructor(knowledgeType: KnowledgeType) {
    this.type = knowledgeType;
  }
}

export class ProficiencyKnowledge extends Knowledge {
  proficiency: ProficienciesType;
  level: number;

  constructor(
    knowledgeType: KnowledgeType,
    proficiencyType: ProficienciesType,
    level: number = 0
  ) {
    super(knowledgeType);
    this.proficiency = proficiencyType;
    this.level = level;
  }
}

export class KnowledgeCollection {
  knowledges: Knowledge[] = [];

  constructor() {
    for (let p in ProficienciesType) {
      this.knowledges.push(
        new ProficiencyKnowledge(
          KnowledgeType.Proficiency,
          parseProficiency(p)
        )
      );
    }
  }

  GetKnowledgeProficiencyModfier(type: ProficienciesType) {
    for (let i = 0; i < this.knowledges.length; i++) {
      console.log(i);
      if (this.knowledges[i].type != KnowledgeType.Proficiency) {
        continue;
      }

      if (
        (this.knowledges[i] as ProficiencyKnowledge).proficiency == type
      ) {
        return (this.knowledges[i] as ProficiencyKnowledge).level;
      }
    }

    return 0;
  }
}

