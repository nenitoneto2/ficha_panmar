import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Output, ViewChild, inject} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Range } from 'src/app/shared/class/range';

@Component({
  selector: 'elrold-range',
  templateUrl: './elrold-range.component.html',
  styleUrls: ['./elrold-range.component.scss']
})
export class ElroldRangeComponent {
    separatorKeysCodes: number[] = [ENTER, COMMA];
    cRanges : Range = new Range;
    range: string[] = [];
    rangeScale: number[] = [1];
    allRange: string[] = this.cRanges.names();
    RangeForm: FormGroup;
  
    @ViewChild('rangeInput') rangeInput: ElementRef<HTMLInputElement>;
    @Output() newRangeEvent = new EventEmitter<any>();
    announcer = inject(LiveAnnouncer);
  
    constructor(private _formBuilder: FormBuilder) {
      
      this.RangeForm = this._formBuilder.group({
        ranges: this._formBuilder.array([]) ,
      })
    }
  
    remove(range: string): void {
      const index = this.range.indexOf(range);
  
      if (index >= 0) {
        this.range.splice(index, 1);
        this.ranges().removeAt(index);
        this.newRangeEvent.emit(this.ranges().value);
        this.announcer.announce(`Removed ${range}`);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.range.push(event.option.viewValue);
      this.ranges().push(this.newRange(event.option.viewValue));
      this.rangeInput.nativeElement.value = '';
      this.newRangeEvent.emit(this.ranges().value); 
    }
    eventemit() {
      this.newRangeEvent.emit(this.ranges().value); 
    }
    ranges(): FormArray {
      return this.RangeForm.get("ranges") as FormArray
    }
    newRange(name:string): FormGroup {
      return this._formBuilder.group({
        range: name,
        rangeScale: 1,
      })
    }
    removeEmployee(empIndex:number) {
      this.ranges().removeAt(empIndex);
    }
}
