import { Vitals } from "./vitals";

export class Health extends Vitals{
    override GetMaxValue(){
        return this.rolledValue //TODO: GetValues from Meridians
    }
}