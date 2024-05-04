import { MagicTypes } from "../../enums/magic-types";

export interface MagicRange {
    name:string,
    type:MagicTypes,
    saving:string,
    cost:number,
    description:string,
    scale:number
}
