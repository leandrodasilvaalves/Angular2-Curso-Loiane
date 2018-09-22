# Instruções da Aula

Para realizar event binding para colocar um evento qualquer do javascript dentro de parênteses seguindo de igual e o nome da funão dentro aspas. Esta função deverá existir dentro respectivo arquivo component.ts

Veja o exemplo abaixo:

#### Templante
```
<button (click) = "botaoClicado()"
      class="btn btn-primary">Me clique!</button>
```
#### Component
```
botaoClicado(){
    alert('Botao clicado!');
  }
```

Caso haja a necessidade, podemos passar um evento como parâmetro para uma função. Para isso utilizamos o perefixo *$*, como no exemplo abaixo:

```
<input type="text" (keyup)="onkeyUp($event)">

onkeyUp(evento :KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
  }  
```