import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Output, ViewChild, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MagicService } from 'src/app/shared/services/magic.service';
import { MagicEffect } from 'src/app/shared/interfaces/magic/magic-effects';
import { Effect } from 'src/app/shared/class/effect';

@Component({
  selector: 'elrold-secondary',
  templateUrl: './elrold-secondary.component.html',
  styleUrls: ['./elrold-secondary.component.scss']
})
export class ElroldSecondaryComponent {
    private effects=new Effect;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    secondaryCtrl = new FormControl('');
    filteredSecondarys: Observable<string[]>;
    secondarys: string[] = [];
    allSecondarys: string[] = this.effects.allEffects.map((x)=>x.name);
  
    @ViewChild('secondaryInput') secondaryInput: ElementRef<HTMLInputElement>;
    @Output() newSecondaryEvent = new EventEmitter<string[]>();
    announcer = inject(LiveAnnouncer);
    constructor() {
      this.filteredSecondarys = this.secondaryCtrl.valueChanges.pipe(
        startWith(null),
        map((secondary: string | null) => (secondary ? this._filter(secondary) : this.allSecondarys.slice())),
      );
    }
  
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
      if (value) {
        this.secondarys.push(value);
      }
      event.chipInput!.clear();
      this.secondaryCtrl.setValue(null);
    }
  
    remove(secondary: string): void {
      const index = this.secondarys.indexOf(secondary);
  
      if (index >= 0) {
        this.secondarys.splice(index, 1);
        this.announcer.announce(`Removed ${secondary}`);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.secondarys.push(event.option.viewValue);
      this.secondaryInput.nativeElement.value = '';
      this.newSecondaryEvent.emit(this.secondarys);
      this.secondaryCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allSecondarys.filter(secondary => secondary.toLowerCase().includes(filterValue));
    }
  }

