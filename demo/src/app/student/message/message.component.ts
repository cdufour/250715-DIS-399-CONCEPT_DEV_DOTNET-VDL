import { Component } from '@angular/core';

@Component({
  selector: 'student-message',
  standalone: false,
  template: `
    <div class="warning">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .warning {
      border: 2px orange solid;
      padding: 6px;
      width: 25%;
      color: orange;
      font-size: 1.3rem;
      text-align: center
    }
  `
})
export class MessageComponent {

}
