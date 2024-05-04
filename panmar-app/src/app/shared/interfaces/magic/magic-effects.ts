import { MagicTypes } from "../../enums/magic-types";

export interface MagicEffect {
    name:string,
    type: MagicTypes,
    cost:number,
    description:string
}
