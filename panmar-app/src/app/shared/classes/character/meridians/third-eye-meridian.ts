import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class ThirdEyeMeridian extends Meridian{
    constructor(rank: Rank){
        super('Terceiro Olho', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Reduz mais 5% do tempo de treino por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.05 * this.rank
    }
}