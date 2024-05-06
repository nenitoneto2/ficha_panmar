import { FormMagic } from "../interfaces/magic/form-magic";
import { MagicActionSpeed, MagicDuration, MagicEffect, MagicRange, newMagic } from "../interfaces/magic/magic-interfaces";
import { Effect } from "./effect";
import { Range } from "./range";
import { Type } from "./type";
import { Duration } from "./duration";
import { ActionSpeed } from "./action-speed";
import { MagicTypes } from "../enums/magic-types";
import { MagicType } from "../interfaces/magic/magic-type";

export class Magic {
    private typess= new Type;
    private effects=new Effect;
    private ranges = new Range;
    private durations = new Duration;
    private actionSpeed = new ActionSpeed;

    constructor(public paramMagic:FormMagic){}
    fullMagic(): newMagic{
      return {    
        main:this.mainMagic(),
        secondary:this.secondaryMagic(),
        range:this.RangeMagic(),
        duration:this.DurationMagic(),
        actionSpeed:this.ActionSpeedMagic()};
    }
    costTypeMagic(): number{
      const main=this.mainMagic().type;
      const seffect=this.secondaryMagic().map((x)=>x.type);
      let auxiliar=this.RangeMagic().map((x)=>x.type);
      auxiliar.push.apply(auxiliar, this.DurationMagic().map((x)=>x.type))
      auxiliar.push.apply(auxiliar, this.ActionSpeedMagic().map((x)=>x.type))
      const secon = [...new Set(seffect)];
      const aux = [...new Set(auxiliar)];
      return this.costTypeAdder(main,secon,aux);;
    }
    costTypeAdder(main:MagicTypes,secon:MagicTypes[],aux:MagicTypes[]):number{
      const tMain=this.typess.allTypes.find((x)=>x.name==main);
      let  tSecon:MagicType[]=[];
      secon.forEach((y)=>{
        tSecon.push.apply(tSecon,this.typess.allTypes.filter((x)=>x.name==y));
        });
        tSecon=tSecon.filter((x)=>x!=tMain );
      let  tAux:MagicType[]=[];
        aux.forEach((y)=>{
          tAux.push.apply( tAux,this.typess.allTypes.filter((x)=>x.name==y));
          });
          tAux= tAux.filter((x)=>x!=tMain);
          tSecon.forEach((y)=>{
            tAux= tAux.filter((x)=>x!=y);
          })
        let fullcost=tMain.costMain;
        fullcost = tSecon.reduce((partialSum, a) => partialSum + a.costSecondary, fullcost);
      return tSecon.reduce((partialSum, a) => partialSum + a.costAuxiliar, fullcost);
    }

    mainMagic(): MagicEffect{
      let main:MagicEffect;
        main=this.effects.allEffects.find((x)=>x.name==this.paramMagic.main);
        return main;
    }
    secondaryMagic(): MagicEffect[]{
      let secondary:MagicEffect[]=[];
        this.paramMagic.secondary.forEach((y)=>{
          secondary=secondary.concat(this.effects.allEffects.filter((x)=>x.name==y))
          });
        return secondary;
    }
    RangeMagic(): MagicRange []{
      let range:MagicRange [] =[];
      let fullcost=0;
      this.paramMagic.range.forEach((y)=>{
      range=range.concat(this.ranges.allRanges.filter((x)=>x.name==y))
      });
      range.forEach((x)=>{
          x.scale=this.paramMagic.rangeScale[this.paramMagic.range.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return range;
    }
    DurationMagic(): MagicDuration []{
      let duration:MagicDuration [] =[];
      let fullcost=0;
      this.paramMagic.duration.forEach((y)=>{
        duration=duration.concat(this.durations.allDurations.filter((x)=>x.name==y))
      });
      duration.forEach((x)=>{
          x.scale=this.paramMagic.durationScale[this.paramMagic.duration.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return duration;
    }
    ActionSpeedMagic(): MagicActionSpeed []{
      let acSpeed:MagicActionSpeed [] =[];
      let fullcost=0;
      this.paramMagic.actionSpeed.forEach((y)=>{
        acSpeed=acSpeed.concat(this.actionSpeed.allActionSpeeds.filter((x)=>x.name==y))
      });
      acSpeed.forEach((x)=>{
          x.scale=this.paramMagic.actionSpeedScale[this.paramMagic.actionSpeed.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return acSpeed;
    }
    costFullMagic(): number{
      return this.costActionSpeedMagic()+this.costDurationMagic()+this.costEffectMagic()+this.costRangeMagic()+this.costTypeMagic();
    }
    costEffectMagic(): number{
      let main:MagicEffect;
      let secondary:MagicEffect[]=[];
        main=this.effects.allEffects.find((x)=>x.name==this.paramMagic.main);
        this.paramMagic.secondary.forEach((y)=>{
          secondary=secondary.concat(this.effects.allEffects.filter((x)=>x.name==y))
          });
      let fullcost = main.cost;
        secondary.forEach((x)=>fullcost=fullcost+x.cost)
        return fullcost;
    }
    costRangeMagic(): number{
      let range:MagicRange [] =[];
      let fullcost=0;
      this.paramMagic.range.forEach((y)=>{
      range=range.concat(this.ranges.allRanges.filter((x)=>x.name==y))
      });
      range.forEach((x)=>{
          x.scale=this.paramMagic.rangeScale[this.paramMagic.range.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return fullcost;
    }
    costDurationMagic(): number{
      let duration:MagicDuration [] =[];
      let fullcost=0;
      this.paramMagic.duration.forEach((y)=>{
        duration=duration.concat(this.durations.allDurations.filter((x)=>x.name==y))
      });
      duration.forEach((x)=>{
          x.scale=this.paramMagic.durationScale[this.paramMagic.duration.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return fullcost;
    }
    costActionSpeedMagic(): number{
      let acSpeed:MagicDuration [] =[];
      let fullcost=0;
      this.paramMagic.actionSpeed.forEach((y)=>{
        acSpeed=acSpeed.concat(this.actionSpeed.allActionSpeeds.filter((x)=>x.name==y))
      });
      acSpeed.forEach((x)=>{
          x.scale=this.paramMagic.actionSpeedScale[this.paramMagic.actionSpeed.indexOf (x.name)];
          fullcost=fullcost+(x.scale*x.cost);
      });
      return fullcost;
    }
}
