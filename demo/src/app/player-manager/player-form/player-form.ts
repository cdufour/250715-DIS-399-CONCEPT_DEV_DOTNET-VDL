import { Component, EventEmitter, input, Input, OnInit, output, Output } from '@angular/core';
import { Player, POSITIONS } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'player-form',
  templateUrl: './player-form.html',
  standalone: false
})
export class PlayerForm implements OnInit {
  positions: string[] = POSITIONS;
  @Input() player: Player | null = null;
  @Input() editMode: boolean = false;
  @Output() onSave: EventEmitter<void> = new EventEmitter();


  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.initPlayer();
  }

  initPlayer() {
    this.player = {
      lastname: "",
      firstname: "",
      teamid: 1,
      position: "gardien",
      age: 18
    };
    this.editMode = false;
  }

  save() {
    let request;
    
    if (this.player) {
      
      if (this.editMode) { // mise à jour d'un joueur
        console.log("** Edit Mode **")
        request = this.playerService.patch(this.player);
      } else { // ajout d'un joueur
        console.log("** Add Mode **")
        request = this.playerService.post(this.player);
      }
    
      request.subscribe(() => {
        console.log("** Request subscribed **")
        this.onSave.emit();
        this.initPlayer();
      })

    }
    
  }

}
