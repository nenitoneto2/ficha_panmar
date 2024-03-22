import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class NeckMeridian extends Meridian{
    constructor(rank: Rank){
        super('Pescoço', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 10% de alcance e duração de magias por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.1 * this.rank
    }
}