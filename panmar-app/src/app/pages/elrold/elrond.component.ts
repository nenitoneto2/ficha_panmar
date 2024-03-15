import { Component} from '@angular/core';
import { FormControl} from '@angular/forms';
import { newMagic } from 'src/app/shared/interfaces/magic/magic';
import { MagicService } from 'src/app/shared/services/magic.service';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';
import { Magic } from 'src/app/shared/class/magic';
import { MagicTypes } from 'src/app/shared/enums/magic-types';


@Component({
  selector: 'app-elrond',
  templateUrl: './elrond.component.html',
  styleUrls: ['./elrond.component.scss'],
})
export class ElrondComponent {
  isSubmitted = false;
  public magicRange:any = [];
  public magicDuration:any = [];
  public magicEfects:any = [];
  public magicActionSpeed:any = [];
  public magicRank:any = [];
  mainEfect = new FormControl(['main']);
  secondaryEfect = new FormControl(['main']);
  anyMagic:newMagic ;
  mainMagic: MagicEffect = { 
    "name": "", 
  "type": MagicTypes.Livre, 
  "cost": 0, 
  "description": "" };
  m=new Magic("a");
  constructor(private magicservice: MagicService,) { 
  }

  addMain(main: MagicEffect) {
    this.mainMagic = main[0];
    this.m.callMagic();
  }
  ngOnInit() {
    this.magicservice.getMagicRange().subscribe(
      data => {
        this.magicRange = data;
      }
    );
    this.magicservice.getMagicDuration().subscribe(
      data => {
        this.magicDuration = data;
      }
    );
    this.magicservice.getMagicEffects().subscribe(
      data => {
        this.magicEfects = data;
      }
    );
    this.magicservice.getMagicActionSpeed().subscribe(
      data => {
        this.magicActionSpeed = data;
      }
    );
    this.magicservice.getMagicRank().subscribe(
      data => {
        this.magicRank = data;
      }
    );
  }
  
}
