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
    this.playersEventSubscritions = this.rpgTableService.JoinTableAsPlayer(tableId).subscribe(
      {
        next: (data) => {
          console.log('data from event source', data);
        },
        error: (error) => {
          console.log('event source has an error', error);
        },
      });
  }

  JoinTableAsMaster(tableId: string){
    this.masterEventSubscritions = this.rpgTableService.JoinTableAsMaster(tableId).subscribe((data) => {
      // Lógica para lidar com os dados recebidos do servidor
      console.log('Dados recebidos:', data);
    },
    (error) => {
      // Lógica para lidar com erros
      console.error('Erro:', error);
    })
  }

  TestNotification(tableId: string){
    this.rpgTableService.TestNotifications(tableId);
  }
}
