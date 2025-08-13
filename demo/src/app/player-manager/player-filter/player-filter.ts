import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { POSITIONS, TEAMS, Team } from '../player';
import { FilterChoice } from '../player-manager';

@Component({
  selector: 'player-filter',
  templateUrl: './player-filter.html',
  standalone: false
})
export class PlayerFilter implements OnInit {
  positions: string[] = [];
  teams: Team[] = [];
  @Output() onChange: EventEmitter<FilterChoice> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.positions = POSITIONS;
    this.teams = TEAMS;
  }

  filterByPosition(event: any) {
    let option = event.target.value;
    this.onChange.emit({ key: 'position', option })
  }

  filterByTeam(event: any) {
    let option = event.target.value;
    this.onChange.emit({ key: 'team', option })
  }

}
