import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerManager } from './player-manager';
import { PlayerList } from './player-list/player-list';
import { PlayerForm } from './player-form/player-form';
import { FormsModule } from '@angular/forms';
import { PlayerFilter } from './player-filter/player-filter';

@NgModule({
  declarations: [
    PlayerManager, 
    PlayerList, 
    PlayerForm, 
    PlayerFilter
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PlayerManager]
})
export class PlayerManagerModule { }
