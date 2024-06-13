import { Component, Input, SimpleChanges } from '@angular/core';
import { MessageData } from 'src/app/shared/services/rpg-table.service';

@Component({
  selector: 'table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss']
})
export class TableInfoComponent {
  @Input() table:MessageData 
  @Input() joinedAsMaster: boolean
  @Input() joinedAsPlayer: boolean

  ngOnChanges(changes: SimpleChanges) {      
    if (changes.table && changes.table.currentValue) 
      {                
        console.log(changes.table.currentValue);      

      }    
  }
}
