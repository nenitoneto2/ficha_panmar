import { MagicTypes } from "../enums/magic-types";
import { MagicEffect } from "../interfaces/magic/magic-effects";

export class Effect {
    allEffects:MagicEffect[]=[
    { "name": "Teste de Pericia", "type": MagicTypes.Reforço, "cost": 0.1, "description": "Aumenta em modificador do rank o valor de um teste" },
    { "name": "Comunicação", "type": MagicTypes.Emissão, "cost": 0.1, "description": "Transfere modificador do rank informações sensoriais" },
    { "name": "Iluminar", "type": MagicTypes.Transmutação, "cost": 0.3, "description": "Cria uma luz de intensidade forte de 3 metros por modificador do rank" },
    { "name": "Empurrar", "type": MagicTypes.Manipulação, "cost": 0.4, "description": "Empurra o alvo para um ponto em até X * Alcance da magia" },
    { "name": "Marca", "type": MagicTypes.Conjuração, "cost": 0.8, "description": "pode ter X*modificador do rank marcas ativas, e aplica modificador do rank marcas" },
    { "name": "Previsão", "type": MagicTypes.Especialista, "cost": 1, "description": "Pode prever com base em uma pergunta, eventos em até modificador do rank semanas" }
    ]

}
