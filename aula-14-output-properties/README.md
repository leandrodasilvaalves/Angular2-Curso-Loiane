# Instruções da Aula

No **Angular Js** possuímos o *Broadcast*. Seu equivalente no **Angular** é *EventEmitter*.

```
import { Component, EventEmitter } from '@angular/core';

@Component({
  ...
export class AppComponent {
  ...  
  emiter = new EventEmitter();
}
```
O **EventEmitter** possui o método **emit**, o qual pode receber deste string, number, como até mesmo objetos complexos.
```
  emiter.emit('exemplo');
  emiter.emit(123);
  emiter.emit({nome: 'exemplo'});

```

Para tornar uma variável externa para o elemento pai, basta inserir o decorator @Output antes do nome da variável, como no exemplo abaixo:
```
import { ..., Output } from '@angular/core';

@Component({
  ...
})
export class OutputPropertyComponent implements OnInit {

  @Output() exemplo = new EventEmitter();
  ...

}
```