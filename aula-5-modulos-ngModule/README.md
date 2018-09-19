# Instruções da Aula

Para gerar um novo módulo digite um dos comando abaixo:
```
ng g module nome-do-modulo
ng g m nome-do-modulo
```
Uma vez criado componentes para nosso novo módulo, o mesmos poderão ser externados utilizando o meta-data *exports* dentro do decorate *@NgModule* como no exemplo abaixo que fica dentro do arquivo de módulo criado:

```
@NgModule({
  imports: [...],
  declarations: [...],
  exports: [
    NomeComponent
  ]
})
```
Para utilizar esses componentes pertecentes ao novo módulo dentro do **AppComponent** ou em outro módulo, o mesmo deverá ser importando no arquivo de módulo pretendido, também dentro do decorator *@NgModule* como no código abaixo:

```
@NgModule({
  declarations: [...],
  imports: [
    NomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
Após isso, o seletor de um componente pertecente ao módulo importado poderá ser utilizado dentro das views do módulo anfitrião:

```
<div>
  <h1>
    App Module Works!
  </h1>
  
  <app-module-componente></meu-primeiro-component>
  <app-module-componente></meu-primeiro-component>
  
  <h1>
    Módulo Importado
  </h1>
  <seletor-modulo-importado></seletor-modulo-importado>


  <h3>NgModules</h3>
  <app-cursos></app-cursos>
</div>
```


