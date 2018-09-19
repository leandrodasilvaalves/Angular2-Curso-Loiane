# Instruções da Aula

O **class** e o **style binding** também são uma forma de property binding, porém utilizamos **css**.

Para criar uma variável local no templante é só utilizar o hash conforme no código abaixo:
```
 <select #classe (change)="0">
    <option value="alert-success">Sucesso</option>
    <option value="alert-info">Info</option>
    <option value="alert-warning">Aviso</option>
    <option value="alert-danger">Erro</option>
  </select>
```