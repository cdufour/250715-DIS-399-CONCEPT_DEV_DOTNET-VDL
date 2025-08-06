import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';


@NgModule({
  declarations: [
    ToggleBtnComponent, QuoteComponent, CityChoiceComponent, CityCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToggleBtnComponent, QuoteComponent, CityChoiceComponent]
})
export class ExosModule { }
