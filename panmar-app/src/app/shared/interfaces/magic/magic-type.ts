import { MagicTypes } from "../../enums/magic-types";

export interface MagicType {
    name:MagicTypes;
    costMain:number;
    costSecondary:number;
    costAuxiliar:number;
}
