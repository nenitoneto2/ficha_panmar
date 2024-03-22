export class Vitals{
    rolledValue: number
    currentValue: number

    GetMaxValue(){
        return this.rolledValue
    }

    AddValue(value: number){
        this.currentValue += value

        if(this.currentValue > this.GetMaxValue()){
            this.currentValue = this.GetMaxValue()
        }
    }

    SubtractValue(value: number){
        this.currentValue -= value

        if(this.currentValue < 0){
            this.currentValue = 0
        }
    }
}