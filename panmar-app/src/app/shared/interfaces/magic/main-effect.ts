import { MagicType } from "./magic-type";

export interface MainEffect {
    name: string;
    type: MagicType;
    cost: number;
    description:string;
}
