# Instruções da Aula

O componente vai precisar de alguma informação para exibir na tela. Para obter essa comunicação com o servidor utilizamos um serviço. Atribuímos essa reponsabilidade a ele.

Para criar um serviço utilizamos um dos comandos abaixo:
```
ng g service diretorio/nome-do-servico
ng g s diretorio/nome-do-servico
```

Neste exemplo estamos simulando uma comunicação com um servidor, para tal retornaremos um *array* através de um método do serviço.

Um serviço possui o decorator *@Injectable*. Isso quer dizer que ele pode ser utilizado com um injeção de dependência no construtor do componente, como no código a seguir:
```
constructor(nomeServico: NomeServico) { 
}
```
Esta mesma injeção pode sofrer variação quando definimos os modificadores no mesmo como a seguir, em que esta injeção passa a ser tratada como uma propriedade do componente.
```
constructor(public nomeServico: NomeServico) { 
}
```
O bloco de código acima é equivalente ao bloco abaixo:
```
nomeServico: any;
constructor(nomeServico: NomeServico) { 
    this.nomeServico = nomeServico;
}
```
Para que o serviço seja injetado corretamente é necessário registrar esse serviço no arquivo de módulo dentro no meta-data provider, não esquecendo de importar o servico-, como a seguir:
```
import { CursosService } from './cursos.service';

@NgModule({
  imports: [...],
  declarations: [...],
  exports: [...],
  providers:[
    CursosService
  ]
})
export class CursosModule { }

```