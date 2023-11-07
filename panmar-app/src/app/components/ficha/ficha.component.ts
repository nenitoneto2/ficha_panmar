import { Component } from '@angular/core';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent {
  cavalo:number =0;
  addnumber() {
    this.cavalo++
  }
}
