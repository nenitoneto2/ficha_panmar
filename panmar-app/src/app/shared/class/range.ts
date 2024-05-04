import { MagicTypes } from "../enums/magic-types";
import { MagicRange } from "../interfaces/magic/magic-range";

export class Range {
    allRanges:MagicRange[]=[
        { "name": "Pessoal", "type": MagicTypes.Livre,"saving":"Combatente", "cost": 0, "description": "Afeta o conjurador","scale":0 },
        { "name": "Imbuir", "type": MagicTypes.Reforço,"saving":"Criador", "cost": 0.01, "description": "Afeta um objeto ao toque","scale":0 },
        { "name": "Rajada", "type": MagicTypes.Emissão,"saving":"Sagaz", "cost": 0.02, "description": "3*X cm de diâmetro e X m de comprimento","scale":0 },
        { "name": "Toque", "type": MagicTypes.Transmutação,"saving":"Defesa", "cost": 0.1, "description": "Toque","scale":0 },
        { "name": "Olhar", "type": MagicTypes.Manipulação,"saving":"Magico", "cost": 0.4, "description": "X alvos","scale":0 },
        { "name": "Área", "type": MagicTypes.Conjuração,"saving":"Sagaz", "cost": 0.2, "description": "X m3","scale":0 },
        { "name": "Vinculo", "type": MagicTypes.Especialista,"saving":"Especialista", "cost": 1, "description": "Vincula ilha espiritual","scale":0 },
        { "name": "Dominio", "type": MagicTypes.Especialista,"saving":"Especialista", "cost": 1, "description": "X m de diâmetro","scale":0 }
      ]
      names ():string[]{

        return this.allRanges.map((x)=>x.name)
      }
    
}
