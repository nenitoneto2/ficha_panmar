import { MagicTypes } from "../enums/magic-types";
import { MagicActionSpeed } from "../interfaces/magic/magic-interfaces";

export class ActionSpeed {
    allActionSpeeds:MagicActionSpeed[]=[
        { "name": "Rodada completa", "type": MagicTypes.Livre, "cost": 0, "description": "A Conjuração demora uma rodada completa, requer componentes verbais e gestuais, para cancelar gasta uma ação completa","scale":0 },
        { "name": "Ação completa", "type": MagicTypes.Transmutação, "cost": 0.01, "description": " A conjuração demora uma ação completa,requer componentes verbais e gestuais.para cancelar gasta uma ação parcial","scale":0 },
        { "name": "Ação parcial", "type": MagicTypes.Manipulação, "cost": 0.1, "description": "A conjuração demora uma ação parcial,requer componentes verbais e gestuais, para cancelar gasta uma ação bônus","scale":0 },
        { "name": "Ação bônus", "type": MagicTypes.Manipulação, "cost": 0.5, "description": "A conjuração demora uma ação bônus,requer componentes verbais e gestuais, para cancelar gasta uma ação livre","scale":0 },
        { "name": "Ação livre ", "type": MagicTypes.Emissão, "cost": 1, "description": " A conjuração demora uma ação livre,requer componentes verbais, para cancelar gasta uma reação","scale":0 },
        { "name": "Ação crítica", "type": MagicTypes.Reforço, "cost": 2, "description": " A conjuração demora uma ação crítica,precisa que um crítico aconteça, não pode ser cancelada","scale":0 },
        { "name": "Reação", "type": MagicTypes.Especialista, "cost": 2, "description": " A conjuração começa logo após outra magia, ao comprar essa velocidade deve escolher a magia por nome.não requer componentes, não pode ser cancelada","scale":0 },
        { "name": "Passiva", "type": MagicTypes.Especialista, "cost": 3, "description": "Pode ativar sem gastar numa ação,para cancelar não gasta ação","scale":0 }
      ]
      
      names ():string[]{

        return this.allActionSpeeds.map((x)=>x.name)
      }
}
