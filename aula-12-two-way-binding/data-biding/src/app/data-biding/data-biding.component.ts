import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  nome: string = 'abc';

  pessoa: any = {
    nome: "Leandro",
    idade: 32,
    endereco:{
      rua: "Maria Helena Cardoso",
      complemento: "Qd 205 Lt 27"
    }
  }
  constructor() { }
  
  
}
