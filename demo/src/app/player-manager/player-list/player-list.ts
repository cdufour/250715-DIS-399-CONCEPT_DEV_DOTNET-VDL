import { Component, output, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.html',
  standalone: false
})
export class PlayerList {
  @Input() players: Player[] | null = null;
  onDelete = output<number>();
  onEdit = output<number>();
  
  constructor() { }
}
