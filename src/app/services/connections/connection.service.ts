import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  readonly BASE_URL = 'https://rickandmortyapi.com/api'
  readonly CHARACTERS_URL = this.BASE_URL + '/character'


  constructor() { }
}
