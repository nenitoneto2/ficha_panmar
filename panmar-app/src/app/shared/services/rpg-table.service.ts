import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AuthService } from "./auth.service";

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
    requestActionPath:string = "RequestAction"
    aproveActionPath:string = "AproveAction"
    rejectActionPath:string = "RejectAction"

    tables: [{masterId: string, tables: string[]}]
    OnTablesUpdated = new Subject<[{masterId: string, tables: string[]}]>()
    OnTableStatusUpdated = new Subject<MessageData>()
    tableStatus: MessageData = {message: "", tableDescription: "", players: [], actions: []}
    joinedTableID: string


    constructor(private http: HttpClient, private authService: AuthService){

    }

    public CreateTable(){
        console.log("Creting table -> post " + this.path+this.createTablePath + " for " + this.authService.userData.email)
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        let masterObj = {
            id: this.authService.userData.email
        }
        this.http.post(this.path+this.createTablePath, JSON.stringify(masterObj), {headers, responseType: 'text'})
        .subscribe(response => {console.log("Mesa: " + response)});
        
    }

    public FetchTables(){
        let masterId: string = "felipe.assis.2002@gmail.com"
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

        const player = {
            initiative: 0,
            owner:  this.authService.userData.email,
            currentHP: 10,
            maxHP: 10,
            movement: 14,
            attackPower: 1,
            defPower: 1,
            playerId: this.authService.userData.email
        };

        this.http.put(this.path + this.playerJoinTablePath + "?id=" + tableId, player, { headers })
            .subscribe(response => {
                console.log("Player joined successfully");
                this.joinedTableID = tableId
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
                this.joinedTableID = tableId
            });

        this.subscribeToSse(this.path + this.masterEventsPath + "?id=" + tableId);
    }

    public AproveAction(tableId: string, action: Action){
        console.log("Aproving Action");

        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        this.http.post(this.path + this.aproveActionPath + "?tableId=" + tableId, JSON.stringify(action), {headers}).subscribe()
    }
    
    public RejectAction(tableId: string, action: Action){
        console.log("Rejecting Action");

        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        this.http.post(this.path + this.rejectActionPath+ "?tableId=" + tableId, JSON.stringify(action), {headers}).subscribe()
    }

    private subscribeToSse(url: string) {
        console.log("Subscribing to: " + url)
        
        var eventSource = new EventSource(url);

        console.log("starting....")
        window.onbeforeunload = () => {
            eventSource.close();
        }

        eventSource.onmessage = (message) => {
            console.log("On Message")
            this.triggerTableStatusUpdate(message)
            console.log(message);
        };

        eventSource.addEventListener("notifications", (event) => {
            console.log("Event Data")
            this.triggerTableStatusUpdate(event)
            console.log(event.data);
        })
    }

    private triggerTableStatusUpdate(message){
        console.log("Event Status Update trigged")
        let data = JSON.parse(message.data)
            let tableStatus:MessageData = new MessageData("", "", [], [])
            tableStatus.message = data.message
            tableStatus.tableDescription = data.tableDescription
            tableStatus.players = data.players.map(player => new Player(player))
            tableStatus.actions = data.actions.map(action => new Action(action.ActionId, action.Name, action.Owner, action.Target))

            this.tableStatus = tableStatus
            this.OnTableStatusUpdated.next(tableStatus)
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

    public RequestAction(tableId: string, action: string, owner: string, target: string){
        let desiredAction: Action = new Action("",action, owner, target)


        console.log("Requesting action " + action + " for table " + tableId + " (target: " + target + " | owner: " + owner)
        const headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        this.http.post(this.path + this.requestActionPath + "?id=" + tableId, JSON.stringify(desiredAction), {headers}).subscribe(
            response => console.log("Action "+ action +" requested successfuly!!")
        )
    }
}

export class MessageData {
    message: string;
    tableDescription: string
    players: Player[]
    actions: Action[]

    constructor(message: string, tableDescription: string, players: Player[], actions: Action[]){
        this.message = message
        this.tableDescription = tableDescription
        this.players = players
        this.actions = actions
    }
  }

export class Player{
    initiative: number
    owner:   string
    currentHP: number
    maxHP: number
    movement: number
    attackPower: number
    defPower: number
    playerId: string

    constructor(data:any
    ){
        this.initiative = data.initiative
        this.owner = data.owner
        this.currentHP = data.currentHP
        this.maxHP = data.maxHP
        this.movement = data.movement
        this.attackPower = data.attackPower
        this.defPower = data.defPower
        this.playerId = data.playerId
    }
}

export class Action {
	ActionId: string = ""
    Name: string;
	Owner: string;
	Target: string;

    constructor(actionId: string, name: string, owner: string, target: string){
        this.Name = name
        this.Owner = owner
        this.Target = target
        this.ActionId = actionId
    }
}