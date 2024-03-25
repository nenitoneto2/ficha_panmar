import { AcrobaticsSkill } from "./acrobatics-skill";
import { ActSkill } from "./act-skill";
import { ArcaneSkill } from "./arcane-skill";
import { AthleticsSkill } from "./athletics-skills";
import { ConcentrationSkill } from "./concentration-skill";
import { CreateSkill } from "./create-skill";
import { CulturalSkill } from "./cultural-skill";
import { InvestagateSkill } from "./investigate-skill";
import { MartialSkill } from "./martial-skill";
import { MedicineSkill } from "./medicine-skill";
import { MeridianSkill } from "./meridian-skill";
import { MonstersSkill } from "./monsters-skill";
import { PerceptionSkill } from "./perception-skill";
import { PresenceSkill } from "./presence-skill";
import { Skill } from "./skill";
import { SleighOfHandSkill } from "./sleigh-of-hand-skill";
import { SmoothTalkSkill } from "./smooth-talk-skill";
import { SneakSkill } from "./sneak-skill";
import { SurvivalSkill } from "./survival-skill";
import { TrainingSkill } from "./training-skill";
import { WillSkill } from "./will-skill";
import { WorldSkill } from "./world-skill";

export class Skills{
    skills: Skill[] = []

    constructor(martial:number = 0, arcane:number = 0, sneak:number = 0, create: number = 0,
        concentration:number = 0, act: number = 0, meridians: number = 0, acrobatics: number = 0,
        training:number = 0, athletics: number = 0,  precense:number = 0, perception:number = 0,
        world:number = 0, medicine:number = 0, smoothTalk:number = 0, sleighOfHand: number = 0,
        survival:number = 0, investigate:number = 0, monsters:number = 0, cultural:number = 0,
        will:number =0){
        
            this.skills.push(
                new MartialSkill(martial)
            )

            this.skills.push(
                new ArcaneSkill(arcane)
            )

            this.skills.push(
                new SneakSkill(sneak)
            )

            this.skills.push(
                new CreateSkill(create)
            )

            this.skills.push(
                new ConcentrationSkill(concentration)
            )

            this.skills.push(
                new ActSkill(act)
            )

            this.skills.push(
                new MeridianSkill(meridians)
            )

            this.skills.push(
                new AcrobaticsSkill(acrobatics)
            )

            this.skills.push(
                new TrainingSkill(training)
            )

            this.skills.push(
                new AthleticsSkill(athletics)
            )

            this.skills.push(
                new PresenceSkill(precense)
            )

            this.skills.push(
                new PerceptionSkill(perception)
            )

            this.skills.push(
                new WorldSkill(world)
            )

            this.skills.push(
                new MedicineSkill(medicine)
            )

            this.skills.push(
                new SmoothTalkSkill(smoothTalk)
            )

            this.skills.push(
                new SleighOfHandSkill(sleighOfHand)
            )

            this.skills.push(
                new SurvivalSkill(survival)
            )

            this.skills.push(
                new InvestagateSkill(investigate)
            )

            this.skills.push(
                new MonstersSkill(monsters)
            )

            this.skills.push(
                new CulturalSkill(cultural)
            )

            this.skills.push(
                new WillSkill(will)
            )
    }
}