# Angular CLI: Usando pré-processadores (Sass, Less, Stylus)

Para criar um projeto já com o pré processador de **CSS** definido, execute um dos comandos abaixo:

```shel
 > ng new nome-projeto --style=sass   
 > ng new nome-projeto --style=less   
 > ng new nome-projeto --style=stylus   
```
Caso queira redefinir a opção de pré processador, digite um dos comados abaixo:

> **Obs.:** Depois da modificação, somente os novos arquivos serão gerado de acordo com o novo padrão. Caso hoja necessidade de padronizar os arquivos anteriores, deverá fazê-lo manualmente.

```shel
 > ng set defaults.styleExt scss
 > ng set defaults.styleExt less
 > ng set defaults.styleExt styl   
```

