import { Rank } from "src/app/shared/enums/rank";

export class Meridian{
    name : string
    rank : Rank

    protected constructor(name:string, rank: Rank){
        this.name = name
        this.rank = rank
    }

    GetMeridianEffectDescrition(){
        return '' // possible localization call
    }

    GetMeridianEffect(){
        return 0
    }
}