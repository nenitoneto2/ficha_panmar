import { MagicTypes } from "../../enums/magic-types";

export interface MagicDuration {
    name:string,
    type:MagicTypes,
    cost:number,
    description:string,
    scale:number
}
