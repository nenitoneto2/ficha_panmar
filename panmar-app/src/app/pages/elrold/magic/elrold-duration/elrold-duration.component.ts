import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Output, ViewChild, inject} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Duration } from 'src/app/shared/class/duration';

@Component({
  selector: 'elrold-duration',
  templateUrl: './elrold-duration.component.html',
  styleUrls: ['./elrold-duration.component.scss']
})
export class ElroldDurationComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  cDurations : Duration = new Duration;
  duration: string[] = [];
  durationScale: number[] = [1];
  allDuration: string[] = this.cDurations.names();
  DurationForm: FormGroup;

  @ViewChild('durationInput') durationInput: ElementRef<HTMLInputElement>;
  @Output() newDurationEvent = new EventEmitter<any>();
  announcer = inject(LiveAnnouncer);

  constructor(private _formBuilder: FormBuilder) {
    
    this.DurationForm = this._formBuilder.group({
      durations: this._formBuilder.array([]) ,
    })
  }

  remove(duration: string): void {
    const index = this.duration.indexOf(duration);

    if (index >= 0) {
      this.duration.splice(index, 1);
      this.durations().removeAt(index);
      this.newDurationEvent.emit(this.durations().value);
      this.announcer.announce(`Removed ${duration}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.duration.push(event.option.viewValue);
    this.durations().push(this.newDuration(event.option.viewValue));
    this.durationInput.nativeElement.value = '';
    this.newDurationEvent.emit(this.durations().value); 
  }
  eventemit() {
    this.newDurationEvent.emit(this.durations().value); 
  }
  durations(): FormArray {
    return this.DurationForm.get("durations") as FormArray
  }
  newDuration(name:string): FormGroup {
    return this._formBuilder.group({
      duration: name,
      durationScale: 1,
    })
  }
  removeEmployee(empIndex:number) {
    this.durations().removeAt(empIndex);
  }
}
