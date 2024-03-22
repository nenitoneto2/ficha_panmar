import { Vitals } from "./vitals";

export class Mana extends Vitals{
    override GetMaxValue(){
        return this.rolledValue //TODO: GetValues from Meridians
    }
}