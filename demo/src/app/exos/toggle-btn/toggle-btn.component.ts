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
  marginLeft: string = '0'; // marge du texte (span)

  onClick() {
    console.log('click');
    

    //this.isOff = !this.isOff;

    if (this.isOff = this.text == 'oui') {
      this.text = 'non';
      this.left = '2px';
      this.marginLeft = '46px';
    } else {
      this.text = 'oui';
      this.left = '62px';
      this.marginLeft = '0';
    }

    console.log(this.isOff ? '0' : '1');
  }
}
