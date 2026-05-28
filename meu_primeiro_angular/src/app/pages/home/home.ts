import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Exemplo de Interpolação (DataBinding)
  // Comunicação unidirecional entre TS -> HTML
  // A interpolação é usada assim -> {{elemento}}
  nome: string = 'Ana';

  // Property Binding -> Unidirecional: TS -> HTML
  // Manipula propriedade do HTML
  // a Property Binding é usada com [] em volta do Elemento
  imgUrl: string = 'https://i.pinimg.com/1200x/51/a4/a1/51a4a1b7835f33e395ff524671f243e1.jpg';

  botaoDesabilitado: boolean = true;

  classeAlerta: string = "alert-success";
}
