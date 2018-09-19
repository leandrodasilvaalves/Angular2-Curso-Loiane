# Instruções da Aula

## Property binding
O **property binding** se dá ao colocar uma propriedade de uma elemento HTML entre colchetes como no exemplo abaixo:
```
<article>
    <h3>Property Biding</h3>
    <img [src]="urlImagem">
  </article>
```
Ao utilizar o property binding, por trás dos panos, o que o Angular faz é o seguinte:
```
<article>
    <h3>Property Biding</h3>
    <img bind-src="urlImagem">
  </article>
```
