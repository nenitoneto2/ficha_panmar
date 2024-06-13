import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Player, RPGTableService } from 'src/app/shared/services/rpg-table.service';

@Component({
  selector: 'app-player-info-component',
  templateUrl: './player-info-component.component.html',
  styleUrls: ['./player-info-component.component.scss']
})
@Injectable()
export class PlayerInfoComponentComponent{
@Input() player:Player 
@Input() targets: Player[]

currentTarget: string = ""

constructor(private rpgTableService: RPGTableService){

}

SetTarget(targetId: string){
  console.log("Setting targuet id: " + targetId)
  this.currentTarget = targetId
}

RequestAction(action: string){
  if(this.currentTarget == ""){
    return;
  }

  this.rpgTableService.RequestAction(this.rpgTableService.joinedTableID, 
    action, this.player.playerId, this.currentTarget)
}


}
