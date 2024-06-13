import { Component, Injectable, Input } from '@angular/core';
import { Action, RPGTableService } from 'src/app/shared/services/rpg-table.service';

@Component({
  selector: 'app-action-component',
  templateUrl: './action-component.component.html',
  styleUrls: ['./action-component.component.scss']
})

@Injectable()
export class ActionComponentComponent {
  @Input() action : Action

  constructor(private rpgTableService: RPGTableService){

  }

  AproveAction(){
    this.rpgTableService.AproveAction(this.rpgTableService.joinedTableID, this.action)
  }

  RejectAction(){
    this.rpgTableService.RejectAction(this.rpgTableService.joinedTableID, this.action)
  }
}
