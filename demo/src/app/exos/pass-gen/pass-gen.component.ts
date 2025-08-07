import { Component } from '@angular/core';
import { randInt, randIntInRange } from '../tools';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'exos-pass-gen',
  standalone: false,
  templateUrl: './pass-gen.component.html',
  styleUrl: './pass-gen.component.css'
})
export class PassGenComponent {
  pass: string = '';
  passlen: number = 10;
  withNumbers: boolean = false;
  withSpecialChars: boolean = false;

  constructor(private http: HttpClient) {}

  onClick() {
    let pass = [];

    // ascii table. 97 -> 122 == a -> z
    for (let i=0; i<this.passlen; i++) {
      pass.push(String.fromCharCode(randIntInRange(97,122)))
    }

    if (this.withNumbers) {
      pass[randInt(this.passlen)] = randIntInRange(0,9);
    }

    if (this.withSpecialChars) {
      pass[randInt(this.passlen)] = String.fromCharCode(randIntInRange(33,47));
    }

    this.pass = pass.join(''); // array => string
  }

  savePass() {
    let SERVER_URL = 'http://localhost:3000/pass'; // url au hasard, à remplacer un "vrai" backend
    this.http
      .post(SERVER_URL, {pass: this.pass})
      .subscribe(res => console.log(res))
  }

}
