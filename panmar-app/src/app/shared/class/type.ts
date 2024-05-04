import { MagicTypes } from "../enums/magic-types";
import { MagicType } from "../interfaces/magic/magic-type"


export class Type {
  allTypes:MagicType[]=[
    { "name": MagicTypes.Livre, "costMain": 0, "costSecondary": 0, "costAuxiliar": 0 },
    { "name": MagicTypes.Reforço, "costMain": 0.5, "costSecondary": 0.25, "costAuxiliar": 0.1 },
    { "name": MagicTypes.Emissão, "costMain": 0.75, "costSecondary": 0.35, "costAuxiliar": 0.15 }, 
    { "name": MagicTypes.Transmutação, "costMain": 1, "costSecondary": 0.5, "costAuxiliar": 0.2 },
    { "name": MagicTypes.Manipulação, "costMain": 1.5, "costSecondary": 0.75, "costAuxiliar": 0.3 },
    { "name": MagicTypes.Conjuração, "costMain": 2, "costSecondary": 1, "costAuxiliar": 0.4 },
    { "name": MagicTypes.Especialista, "costMain": 3, "costSecondary": 1.5, "costAuxiliar": 0.6 }
  ];
}
