import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Démo';
  training: string = 'Angular';
  isGood: boolean = true;
  fruits: string[] = ['pomme', 'banane', 'kiwi'];
}
