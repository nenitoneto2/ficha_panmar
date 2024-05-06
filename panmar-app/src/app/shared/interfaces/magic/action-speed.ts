import { MagicTypes } from "../../enums/magic-types";

export interface MagicActionSpeed {
    name:string,
    type:MagicTypes,
    cost:number,
    description:string,
    scale:number
}
