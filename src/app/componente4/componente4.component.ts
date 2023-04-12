import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component {
  coche="Audi"

  cambiaColor() {
    console.log("Mostrar log");
  }
}