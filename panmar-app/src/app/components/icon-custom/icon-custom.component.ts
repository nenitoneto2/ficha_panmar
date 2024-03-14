import { Attribute, Component} from '@angular/core';

@Component({
  selector: 'dice-icon',
  templateUrl: './icon-custom.component.html',
  styleUrls: ['./icon-custom.component.scss']
})
export class IconCustomComponent{
  constructor(@Attribute('dice') public dice: string) {}
  item = `Dado ${this.dice}`
  itemImageUrl = `../../../assets/icons/dice/${this.dice}.svg`;
}



