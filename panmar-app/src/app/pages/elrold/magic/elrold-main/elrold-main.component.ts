import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Effect } from 'src/app/shared/class/effect';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';
import { MagicService } from 'src/app/shared/services/magic.service';

@Component({
  selector: 'elrold-main',
  templateUrl: './elrold-main.component.html',
  styleUrls: ['./elrold-main.component.scss']
})
export class ElroldMainComponent {
  public effects=new Effect;
  mainEfect = new FormControl('main');
  @Output() newMainEvent = new EventEmitter<string>();

  addNewItem() {
    this.newMainEvent.emit(this.mainEfect.value);
  }
  constructor(private magicservice: MagicService,) { 
  }

}
