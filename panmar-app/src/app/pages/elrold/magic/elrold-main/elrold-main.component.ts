import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';
import { MagicService } from 'src/app/shared/services/magic.service';

@Component({
  selector: 'elrold-main',
  templateUrl: './elrold-main.component.html',
  styleUrls: ['./elrold-main.component.scss']
})
export class ElroldMainComponent {
  public magicEfects:any = [];
  public magicTypes:any = [];
  mainEfect = new FormControl(['main']);
  @Output() newMainEvent = new EventEmitter<MagicEffect>();

  addNewItem() {
    const main =this.magicEfects.filter(x=>x.name===this.mainEfect.value);
    this.newMainEvent.emit(main);
  }
  constructor(private magicservice: MagicService,) { 
  }

  ngOnInit() {
    this.magicservice.getMagicTypes().subscribe(
      data => {
        this.magicTypes = data;
      }
    );
    this.magicservice.getMagicEffects().subscribe(
      data => {
        this.magicEfects = data;
      }
    );
  }
}
