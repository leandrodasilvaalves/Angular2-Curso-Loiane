import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();
  @Input() valor: number = 0;

  @ViewChild('campoInput') campoValorInput: ElementRef;

 
  incrementa(){
    console.log(this.campoValorInput);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }
  
  decrementa(){
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }


  constructor() { }

  ngOnInit() {
  }

}
