import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'magic-box',
  templateUrl: './magic-box.component.html',
  styleUrls: ['./magic-box.component.scss']
})
export class MagicBoxComponent {
  empForm:FormGroup;
 
  constructor(private fb:FormBuilder) {
     this.empForm=this.fb.group({
       employees: this.fb.array([]) ,
     })
  }

  employees(): FormArray {
    return this.empForm.get("employees") as FormArray
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
    })
  }
  addEmployee() {
    this.employees().push(this.newEmployee());
  }
  removeEmployee(empIndex:number) {
    this.employees().removeAt(empIndex);
  }
onSubmit() {
  console.log(this.empForm.value);
}
}
