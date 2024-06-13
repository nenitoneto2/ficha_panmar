import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MessageData, RPGTableService } from 'src/app/shared/services/rpg-table.service';

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.scss']
})
export class TableManagerComponent implements OnInit, OnDestroy {
  
  activeTables
  OnTablesUpdateSubscription: Subscription

  OnTableUpdateTableStatus: Subscription

  joinedAsMaster: boolean = false
  joinedAsPlayer: boolean = false

  myEmail: string
  tableStatus : MessageData = {message: "", tableDescription: "", players: [], actions: []}

  constructor(private rpgTableService: RPGTableService, private authService: AuthService){
    
  }

  get resultTable () {
    return this.rpgTableService.OnTableStatusUpdated.subscribe(() => {
      this.tableStatus = this.rpgTableService.tableStatus
  })
  }

  ngOnInit(): void {
      this.OnTablesUpdateSubscription = this.rpgTableService.OnTablesUpdated.subscribe(tables => this.activeTables = tables)
      this.OnTableUpdateTableStatus = this.resultTable
  }

  ngOnDestroy(): void {
      this.OnTablesUpdateSubscription.unsubscribe()
  }

  FetchTables(){
    this.rpgTableService.FetchTables();
  }

  OnCreateTable(){
    this.rpgTableService.CreateTable()
  }

  JoinTableAsPlayer(tableId: string){
    this.joinedAsPlayer = true;
    this.myEmail = this.authService.userData.email
    this.rpgTableService.JoinTableAsPlayer(tableId)
  }

  JoinTableAsMaster(tableId: string){
    this.joinedAsMaster = true
    this.rpgTableService.JoinTableAsMaster(tableId)
  }

  TestNotification(tableId: string){
    this.rpgTableService.TestNotifications(tableId);
  }
}
