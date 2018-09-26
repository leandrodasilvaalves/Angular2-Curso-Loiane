import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-biding';
  valorInicial: number = 10;
  valorElementoPai: number;

  onMudouValor(evento){
    console.log(evento);
    this.valorElementoPai = evento.novoValor;
  }
}
