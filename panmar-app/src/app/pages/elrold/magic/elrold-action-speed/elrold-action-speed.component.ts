import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Output, ViewChild, inject} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ActionSpeed } from 'src/app/shared/class/action-speed';

@Component({
  selector: 'elrold-action-speed',
  templateUrl: './elrold-action-speed.component.html',
  styleUrls: ['./elrold-action-speed.component.scss']
})
export class ElroldActionSpeedComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
    cActionSpeeds : ActionSpeed = new ActionSpeed;
    actionSpeed: string[] = [];
    actionSpeedScale: number[] = [1];
    allActionSpeed: string[] = this.cActionSpeeds.names();
    ActionSpeedForm: FormGroup;
  
    @ViewChild('actionSpeedInput') actionSpeedInput: ElementRef<HTMLInputElement>;
    @Output() newActionSpeedEvent = new EventEmitter<any>();
    announcer = inject(LiveAnnouncer);
  
    constructor(private _formBuilder: FormBuilder) {
      
      this.ActionSpeedForm = this._formBuilder.group({
        actionSpeeds: this._formBuilder.array([]) ,
      })
    }
  
    remove(actionSpeed: string): void {
      const index = this.actionSpeed.indexOf(actionSpeed);
  
      if (index >= 0) {
        this.actionSpeed.splice(index, 1);
        this.actionSpeeds().removeAt(index);
        this.newActionSpeedEvent.emit(this.actionSpeeds().value);
        this.announcer.announce(`Removed ${actionSpeed}`);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.actionSpeed.push(event.option.viewValue);
      this.actionSpeeds().push(this.newActionSpeed(event.option.viewValue));
      this.actionSpeedInput.nativeElement.value = '';
      this.newActionSpeedEvent.emit(this.actionSpeeds().value); 
    }
    eventemit() {
      this.newActionSpeedEvent.emit(this.actionSpeeds().value); 
    }
    actionSpeeds(): FormArray {
      return this.ActionSpeedForm.get("actionSpeeds") as FormArray
    }
    newActionSpeed(name:string): FormGroup {
      return this._formBuilder.group({
        actionSpeed: name,
        actionSpeedScale: 1,
      })
    }
    removeEmployee(empIndex:number) {
      this.actionSpeeds().removeAt(empIndex);
    }
}
