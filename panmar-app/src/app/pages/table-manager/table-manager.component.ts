import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RPGTableService } from 'src/app/shared/services/rpg-table.service';

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.scss']
})
export class TableManagerComponent implements OnInit, OnDestroy {
  activeTables
  subscription: Subscription

  masterEventSubscritions: Subscription
  playersEventSubscritions: Subscription
  constructor(private rpgTableService: RPGTableService){
    
  }

  ngOnInit(): void {
      this.subscription = this.rpgTableService.OnTablesUpdated.subscribe(tables => this.activeTables = tables)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  FetchTables(){
    this.rpgTableService.FetchTables();
  }

  OnCreateTable(){
    this.rpgTableService.CreateTable()
  }

  JoinTableAsPlayer(tableId: string){
    this.rpgTableService.JoinTableAsPlayer(tableId)
  }

  JoinTableAsMaster(tableId: string){
    this.rpgTableService.JoinTableAsMaster(tableId)
  }

  TestNotification(tableId: string){
    this.rpgTableService.TestNotifications(tableId);
  }
}
