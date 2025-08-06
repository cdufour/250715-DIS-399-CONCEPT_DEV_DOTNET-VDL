import { Component } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'exos-city-choice',
  standalone: false,
  templateUrl: './city-choice.component.html',
  styleUrl: './city-choice.component.css'
})
export class CityChoiceComponent {
  cities: City[] = [
    { name: "Turin", country: "Italie", image:"https://www.scuolaleonardo.com/images/1-torino/torino-citta.png" },
    { name: "Paris", country: "France", image:"https://www.chooseparisregion.org/sites/default/files/news/6---Tour-Eiffel_AdobeStock_644956457_1920_72dpi.jpg" },
    { name: "Rio", country: "Brésil", image:"https://ulysse.com/news/wp-content/uploads/2024/01/Voyager-au-Bresil-Les-meilleurs-endroits-a-visiter-en-janvier-.jpg" },
  ];

  selectedCity: City | null = null;

  onChange(event: any) {
    let cityName = event.target.value;
    this.selectedCity = 
      this.cities.filter(city => city.name == cityName)[0];
  }


}
