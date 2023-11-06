function RollDice(numDice: number, numFaces: number, modifier: number): number {
    let total: number = 0;
  
    for (let i = 0; i < numDice; i++) {
      // Roll the die and add the result to the total
      total += Math.floor(Math.random() * numFaces) + 1;
    }
  
    // Add the modifier to the total
    total += modifier;
  
    return total;
  }

  export default RollDice;