import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    ToggleBtnComponent, QuoteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToggleBtnComponent, QuoteComponent]
})
export class ExosModule { }
