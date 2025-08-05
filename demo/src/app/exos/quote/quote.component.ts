import { Component } from '@angular/core';

type Quote = {
  text: string;
  author: string;
}

const IS_CHANGE_RANDOM: boolean = false;

@Component({
  selector: 'exos-quote',
  standalone: false,
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  
  quotes: Quote[] = [
    { text: "Femme avenir homme", author: "Aragon"},
    { text: "Ad astra per aspera", author: "Inconnu"},
    { text: "World is yours", author: "T. Montana"},
  ]

  quoteIndex: number = 0;

  constructor() {
    //console.log('constructor');
    setInterval(() => { 
      if (IS_CHANGE_RANDOM) {
        this.changeRandom();
      } else {
        this.changeSequence();
      }
      
    }, 1000)

  }

  changeSequence() {
    if (this.quoteIndex >= 2) {
        this.quoteIndex = 0;
      } else {
        this.quoteIndex += 1;
    }
  }

  changeRandom() {
    let randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.quoteIndex = randomIndex;
  }

}


