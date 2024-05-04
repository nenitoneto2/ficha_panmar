import { Component} from '@angular/core';
import { FormControl} from '@angular/forms';
import { newMagic } from 'src/app/shared/interfaces/magic/magic';
import { MagicService } from 'src/app/shared/services/magic.service';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';
import { Magic } from 'src/app/shared/class/magic';
import { MagicTypes } from 'src/app/shared/enums/magic-types';
import { FormMagic } from 'src/app/shared/interfaces/magic/form-magic';


@Component({
  selector: 'app-elrond',
  templateUrl: './elrond.component.html',
  styleUrls: ['./elrond.component.scss'],
})
export class ElrondComponent {
  isSubmitted = false;
  mainEfect = new FormControl('main');
  secondaryEfect = new FormControl(['main']);
  anyMagic:newMagic ;
  customMagic:FormMagic = {
    main:"Teste de Pericia",
    secondary:["Teste de Pericia","Teste de Pericia","Teste de Pericia","Previsão","Previsão"],
    range:["Dominio","Toque"],
    rangeScale:[1,2],
    duration:["Minuto","Rodada"],
    durationScale:[3,10],
    actionSpeed: ["Ação parcial","Ação Completa"],
    actionSpeedScale:[3,10]
  };
  aMagic= new Magic(this.customMagic);
  constructor(private magicservice: MagicService,) { 
  }

  addMain(entry: string) {
    this.customMagic.main = entry;
  }
  addSecondary(entry: string[]) {
    this.customMagic.secondary = entry;
  }
  addRange(entry: any) {
    this.customMagic.range=entry.map((x)=>x.range)
    this.customMagic.rangeScale=entry.map((x)=>x.rangeScale)
  }

  addDuration(entry: any) {
    this.customMagic.duration=entry.map((x)=>x.duration)
    this.customMagic.durationScale=entry.map((x)=>x.durationScale)
  }

  addActionSpeed(entry: any) {
    this.customMagic.actionSpeed=entry.map((x)=>x.actionSpeed)
    this.customMagic.actionSpeedScale=entry.map((x)=>x.actionSpeedScale)
  }

  ngOnInit() {
  }
  
}
