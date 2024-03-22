export class DeathSaves{
    failedSaves : number

    GetSaveDifficulty(){
        switch(this.failedSaves){
            case 0: 
                return 5
            case 1: 
                return 10
            case 2: 
                return 15
            default:
                return 99
        }
    }
}