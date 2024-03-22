import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class HeartMeridian extends Meridian{
    constructor(rank: Rank){
        super('Coração', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 10% de Duração para transformações por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.1 * this.rank
    }
}