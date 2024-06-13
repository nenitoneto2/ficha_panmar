import { Component, Injectable, Input, OnInit, SimpleChanges } from '@angular/core';
import { Player, RPGTableService, Action } from 'src/app/shared/services/rpg-table.service';


@Component({
  selector: 'app-master-info-component',
  templateUrl: './master-info-component.component.html',
  styleUrls: ['./master-info-component.component.scss']
})

@Injectable()
export class MasterInfoComponentComponent {
  @Input() players: Player[]
  @Input() actions: Action[]
  actionOwner: string;
  actionTarget: string;

  constructor(private rpgTableService: RPGTableService){

  }

  SetTarget(targetId:string){
    this.actionTarget = targetId
  }

  SetOwner(ownerId:string){
    this.actionOwner = ownerId
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  RequestAction(action: string){
    this.rpgTableService.RequestAction(this.rpgTableService.joinedTableID, 
      action, this.actionOwner, this.actionTarget)
  }
}
