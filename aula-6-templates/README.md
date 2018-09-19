# Instruções da Aula

Toda vez que geramos um componente através do angular-cli, este já cria para nós os arquivos correspondentes para template, style, componente em typescript e um arquivo de teste. Segue exemplo abaixo:
```
nome.component.css
nome.component.html
nome.component.spec.ts
nome.component.ts
```
Caso o componente possua até três linhas, como boa prática de uso do Angular é recomendado utilizar o template in line, como abaixo:
```
@Component({
    selector: 'hello-world-component',
    template: `
        <p>Hello world with Angular 2!</p>
        `
})
export class HelloWorldComponent{}

```


