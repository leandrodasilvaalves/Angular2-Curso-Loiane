import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['C#', 'Java', 'Angular', 'Angular Js'];
  }
}
