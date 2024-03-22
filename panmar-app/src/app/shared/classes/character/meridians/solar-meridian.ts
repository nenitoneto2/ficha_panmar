import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class SolarMeridian extends Meridian{
    constructor(rank: Rank){
        super('Solar', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 10% de mana máxima por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.1 * this.rank
    }
}