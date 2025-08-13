import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable } from 'rxjs';

const API: string = "http://localhost:3001/players";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(API);
  }

  post(player: Player): Observable<Player> {
    return this.http.post<Player>(API, player);
  }

  patch(player: Player): Observable<Player> {
    return this.http.patch<Player>(API + '/' + player.id, player);
  }

  delete(id: number): Observable<Player>{
    return this.http.delete<Player>(API + '/' + id);
  }
}
