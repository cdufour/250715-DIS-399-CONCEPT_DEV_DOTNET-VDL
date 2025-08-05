import { Component } from '@angular/core';

@Component({
  selector: 'exos-toggle-btn',
  standalone: false,
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.css'
})
export class ToggleBtnComponent {
  text: 'oui'|'non' = 'oui';
  isOff: boolean = false;
  left: string = '62px';

  onClick() {
    console.log('click');

    if (this.text == 'oui') {
      this.text = 'non';
      this.left = '2px';
    } else {
      this.text = 'oui';
      this.left = '62px';
    }
  }
}
