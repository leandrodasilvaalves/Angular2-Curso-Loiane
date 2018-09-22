# Instruções da Aula

Para realizar o **two way data binding** utilizando a diretiva **ngModel** é necessário importar a classe **FormsModule** diretamente no **app.modules.ts**, como no exemplo abaixo:
```

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [...],
  imports: [    
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```