import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class TerrainMeridian extends Meridian{
    constructor(rank: Rank){
        super('Terreno', rank)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha mais 20% de deslocamento por rank treinado'
    }

    override GetMeridianEffect(): number {
        return 0.2 * this.rank
    }
}