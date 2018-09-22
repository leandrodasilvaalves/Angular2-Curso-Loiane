import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {

  valorAtual: string ='';
  valorSalvo: string ='';
  isMouseOver: boolean = false;
  
  constructor() { }
  
  botaoClicado(){
  alert('Botao clicado!');
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onkeyUp(evento :KeyboardEvent){
    let valorDoEvento = (<HTMLInputElement>evento.target).value);
    console.log(valorDoEvento);
    this.valorAtual = valorDoEvento;
  }
  
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  
}
