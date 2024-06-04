import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class RPGTableService{
    path: string = "http://localhost:8080/"
    createTablePath: string = "createtable"
    joinTableAsPlayerPath: string = "createtable"
    getTablesFromMasterPath: string = "tables/master"
    playerJoinTablePath:string = "player/jointable"
    masterJoinTablePath:string = "master/jointable"
    masterEventsPath:string = "events/master"
    playersEventsPath:string = "events/players"

    tables: [{masterId: string, tables: string[]}]
    OnTablesUpdated = new Subject<[{masterId: string, tables: string[]}]>()
    
    

    constructor(private http: HttpClient){

    }

    public CreateTable(){
        console.log("Creting table -> post " + this.path+this.createTablePath)
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        let masterObj = {
            id: "googleId"
        }
        this.http.post(this.path+this.createTablePath, JSON.stringify(masterObj), {headers, responseType: 'text'})
        .subscribe(response => {console.log("Mesa: " + response)});
        
    }

    public FetchTables(){
        let masterId: string = "googleId"
        this.http.get(this.path + this.getTablesFromMasterPath + "?masterId=" + masterId)
        .subscribe(response => {this.UpdateAvailableTables(masterId, response as string[])}, 
        error => {console.error("Erro: " + error)});
    }

    public TestNotifications(tableId: string){
        this.http.get(this.path + "teste" + "?id=" + tableId,  { responseType: 'text' }).subscribe()
    }

    public JoinTableAsPlayer(tableId: string) {
        console.log("Joining Table as Player");

        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        const playerObj = {
            initiative: 0,
            playerId: "Tplayer1"
        };

        this.http.put(this.path + this.playerJoinTablePath + "?id=" + tableId, JSON.stringify(playerObj), { headers })
            .subscribe(response => {
                console.log("Player joined successfully");
            }, error => {
                console.error("Erro: " + error);
            });

        this.subscribeToSse(this.path + this.playersEventsPath + "?id=" + tableId);
    }

    public JoinTableAsMaster(tableId: string) {
        console.log("Joining Table as Master");

        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        const masterObj = { id: "googleId" };

        this.http.put(this.path + this.masterJoinTablePath + "?id=" + tableId, JSON.stringify(masterObj), { headers })
            .subscribe(response => {
                console.log("Master joined successfully");
            });

        this.subscribeToSse(this.path + this.masterEventsPath + "?id=" + tableId);
    }

    private subscribeToSse(url: string) {
        console.log("Subscribing to: " + url)
        
        var eventSource = new EventSource(url);

        console.log("starting....")
        window.onbeforeunload = () => {
            eventSource.close();
        }

        eventSource.onmessage = (message) => {
            console.log(message);
        };

        eventSource.addEventListener("notifications", (event) => {
            console.log(event.data);
        })
    }

    private UpdateAvailableTables(Id: string, tablesIds: string[]){
        if(this.tables == null){
            this.tables = [{masterId: Id, tables: tablesIds}]

            this.OnTablesUpdated.next(this.tables)
                return;
        }

        
        for(let i = 0; i < this.tables.length; i++){
            if(Id == this.tables[i].masterId){
                this.tables[i].tables = tablesIds

                this.OnTablesUpdated.next(this.tables)
                return;
            }
        }

        this.tables.push({masterId: Id, tables: tablesIds})
        this.OnTablesUpdated.next(this.tables)
    }
}

export interface MessageData {
    status: string;
    message: string;
  }