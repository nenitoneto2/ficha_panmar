import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'elrold-range',
  templateUrl: './elrold-range.component.html',
  styleUrls: ['./elrold-range.component.scss']
})
export class ElroldRangeComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
    fruitCtrl = new FormControl('');
    filteredFruits: Observable<string[]>;
    fruits: string[] = ['Lemon'];
    allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  
    @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  
    announcer = inject(LiveAnnouncer);
  
    constructor() {
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
      );
    }
  
    add(event: MatChipInputEvent): void {
      const value = (event.value || '').trim();
      if (value) {
        this.fruits.push(value);
      }
      event.chipInput!.clear();
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
        this.announcer.announce(`Removed ${fruit}`);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.fruits.push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
}
