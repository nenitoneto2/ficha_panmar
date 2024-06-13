import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-request-action-component',
  templateUrl: './request-action-component.component.html',
  styleUrls: ['./request-action-component.component.scss']
})
export class RequestActionComponentComponent {
    action: string
    @Output() OnActionRequested = new Subject<string>()


    RequestAction(){
      this.OnActionRequested.next(this.action)
    }
}
