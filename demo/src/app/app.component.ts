import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ExosModule } from './exos/exos.module';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, ExosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Démo';
  training: string = 'Angular';
  isGood: boolean = true;
  fruits: string[] = ['pomme', 'banane', 'kiwi'];
}
