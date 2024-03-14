import { Component, SimpleChanges , ElementRef, ViewChild, inject} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { newMagic } from 'src/app/shared/interfaces/magic/magic';
import { MagicService } from 'src/app/shared/services/magic.service';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';


@Component({
  selector: 'app-elrond',
  templateUrl: './elrond.component.html',
  styleUrls: ['./elrond.component.scss'],
})
export class ElrondComponent {
  isSubmitted = false;
  public magicTypes:any = [];
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
  "type": "", 
  "cost": 0, 
  "description": "" };

  constructor(private magicservice: MagicService,) { 
  }

  addMain(main: MagicEffect) {
    this.mainMagic = main[0];
  }
  ngOnInit() {
    this.magicservice.getMagicTypes().subscribe(
      data => {
        this.magicTypes = data;
      }
    );
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
