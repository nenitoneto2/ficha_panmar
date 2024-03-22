import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class CrownMeridian extends Meridian{
    constructor(rank: Rank){
        super('Coroa', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 5% dos valores de ilha espiritual  por rank treinado e 1 de cd base em domínio por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.05 * this.rank
    }

    GetCDIncrease(){
        return 1 * this.rank
    }
}