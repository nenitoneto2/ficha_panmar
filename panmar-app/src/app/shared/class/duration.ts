import { MagicTypes } from "../enums/magic-types";
import { MagicDuration } from "../interfaces/magic/magic-interfaces";

export class Duration {
    allDurations:MagicDuration[]=[
        { "name": "Instantânea", "type": MagicTypes.Livre, "cost": 0, "description": "É ativada no mesmo momento que conjurada","scale":0 },
        { "name": "Rodada", "type": MagicTypes.Manipulação, "cost": 0.01, "description": "Fica ativa por X rodadas","scale":0 },
        { "name": "Minuto", "type": MagicTypes.Manipulação, "cost": 0.1, "description": "Fica ativa por X minutos","scale":0 },
        { "name": "Hora", "type": MagicTypes.Conjuração, "cost": 0.6, "description": "Fica ativa por X horas","scale":0 },
        { "name": "Dia", "type": MagicTypes.Conjuração, "cost": 1.6, "description": "Fica ativa por X dias","scale":0 },
        { "name": "Concentração", "type": MagicTypes.Manipulação, "cost": 0.8, "description": "Fica ativa até que a concentração do conjurador seja quebrada","scale":0 },
        { "name": "Dissipar", "type": MagicTypes.Conjuração, "cost": 2.5, "description": "Fica ativa até que haja um ação de dissipar que passe o CD base do teste+rank+arcana","scale":0 },
        { "name": "Versátil", "type": MagicTypes.Especialista, "cost": 3, "description": "Pode escolher qualquer duração e replicar","scale":0 }
      ]

      names ():string[]{

        return this.allDurations.map((x)=>x.name)
      }

}
