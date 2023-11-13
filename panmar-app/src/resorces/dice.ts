export class DiceRollInfo{
    numberOfFaces:number
    rollType: DiceRollType
    modifier: number = 0
    standardRollArray: number[] = []
    standardRollTotal: number = 0
    complementaryRollArray: number[] = []
    complementaryRollTotal: number = 0
    result: number
}

export enum DiceRollType{
    Standard = 0,
    Advantage = 1,
    Disadvantage = 2
}

function RollDice(numDice: number, numFaces: number, modifier: number, rolltype: DiceRollType = DiceRollType.Standard) {
    let diceInfo = new DiceRollInfo()
    diceInfo.numberOfFaces = numFaces
    diceInfo.modifier = modifier
    for (let i = 0; i < numDice; i++) {
      // Roll the die and add the result to the total
      let sortedNum = Math.floor(Math.random() * numFaces) + 1;
      diceInfo.standardRollArray.push(sortedNum)
      diceInfo.standardRollTotal += sortedNum
    }

    if(rolltype == DiceRollType.Standard){
      diceInfo.result = diceInfo.standardRollTotal + modifier
      return diceInfo
    }

    for (let i = 0; i < numDice; i++) {
      // Roll the die and add the result to the total
      let sortedNum = Math.floor(Math.random() * numFaces) + 1;
      diceInfo.complementaryRollArray.push(sortedNum)
      diceInfo.complementaryRollTotal += sortedNum
    }
    
    if(rolltype == DiceRollType.Advantage){
      diceInfo.result = Math.max(diceInfo.standardRollTotal, diceInfo.complementaryRollTotal) + modifier
      
    }

    if(rolltype == DiceRollType.Disadvantage){
      diceInfo.result = Math.min(diceInfo.standardRollTotal, diceInfo.complementaryRollTotal) + modifier
    }
  
    return diceInfo
  }

  export default RollDice;