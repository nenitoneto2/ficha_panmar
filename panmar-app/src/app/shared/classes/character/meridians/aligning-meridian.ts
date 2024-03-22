import { Rank } from "src/app/shared/enums/rank";
import { Meridian } from "./meridian";

export class AlignMeridian extends Meridian{
    constructor(){
        super('Alinhamento', Rank.Base)
    }

    override GetMeridianEffectDescrition(): string {
        return 'Ganha 1 ação parcial a cada 2 ranks treinados'
    }

    override GetMeridianEffect(): number {
        switch(this.rank){
            case Rank.Base:
                return 0
            case Rank.Bronze:
                return 1
            case Rank.Silver:
                return 1
            case Rank.Gold:
                return 2
            case Rank.Apex:
                return 2
            case Rank.MinorStar:
                return 3
            case Rank.MediumStar:
                return 3
            case Rank.MajorStar:
                return 4   
            case Rank.Supernova:
                return 4   
            case Rank.Iluminated:
                return 5
            default:
                return 0
        }
    }
} 