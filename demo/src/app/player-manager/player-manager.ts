import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

export type FilterChoice = {
  option: string;
  key: string;
}

@Component({
  selector: 'player-manager',
  templateUrl: './player-manager.html',
  standalone: false
})
export class PlayerManager implements OnInit {
  private _players: Player[] = []; // source d'origine inaltérable
  
  players: Player[] = []; // double pour filtrage et binding avec UI
  player: Player | null = null; // player à modifier
  editMode: boolean = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService
      .getAll()
      .subscribe((players: Player[]) => {
        this.players = players;
        this._players = players;
      })
  }

  deletePlayer(event: any) {
    this.playerService
      .delete(event)
      .subscribe(() => this.loadPlayers())
  }

  editPlayer(event: any) {
    // obtention d'un joueur par filtrage à partir de son id
    this.player = 
      this._players.filter((player: Player) => player.id === event)[0];
    this.editMode = true;
  }
  
  filter(event: FilterChoice) {
    //exemple: event == { k: "position", option: "défenseur" }
    if (event.option == "") { // aucune option choisie
      this.players = this._players; // retrouve la liste complète
      //this.editMode = false;
    } else {

      if (event.key == 'position') {
        this.players = this._players.filter((player: Player) => player.position == event.option)
      } else if (event.key == 'team') {
        this.players = this._players.filter((player: Player) => player.teamid == parseInt(event.option))
      }

    }

  }

}
