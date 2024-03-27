import { HeartMeridian } from "./heart-meridian";
import { Meridian } from "./meridian";
import { NeckMeridian } from "./neck-meridian";
import { SacredMeridian } from "./sacred-meridian";
import { SolarMeridian } from "./solar-meridian";
import { TerrainMeridian } from "./terrain-meridian";
import { Rank } from "src/app/shared/enums/rank";
import { ThirdEyeMeridian } from "./third-eye-meridian";
import { CrownMeridian } from "./crown-meridian";
import { AlignMeridian } from "./aligning-meridian";

export class Meridians{
    meridians: Meridian[] = []

    constructor(terrain = Rank.None, sacred = Rank.None, solar = Rank.None, heart = Rank.None, neck = Rank.None, thirdEye = Rank.None, crown = Rank.None, align = Rank.None){
        this.meridians.push(
            new TerrainMeridian(terrain)
        )
        this.meridians.push(
            new SacredMeridian(sacred)
        )
        this.meridians.push(
            new SolarMeridian(solar)
        )
        this.meridians.push(
            new HeartMeridian(heart)
        )
        this.meridians.push(
            new NeckMeridian(neck)
        )
        this.meridians.push(
            new ThirdEyeMeridian(thirdEye)
        )
        this.meridians.push(
            new CrownMeridian(crown)
        )
        this.meridians.push(
            new AlignMeridian(align)
        )
    }
}