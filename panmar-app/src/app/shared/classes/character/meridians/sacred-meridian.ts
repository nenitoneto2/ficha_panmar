import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class SacredMeridian extends Meridian{
    constructor(rank: Rank){
        super('Sagrado', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 10% de vida máxima por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.1 * this.rank
    }
}