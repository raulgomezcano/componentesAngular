import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component {
  frase1 : string = "hola mundo"
  frase2 : string = 'hola'
  frase3 : string = `${this.frase1}
  ${this.frase2}
  hola3`
  ngOnInit(){
    console.log(this.frase1);
    console.log(this.frase2);
    console.log(this.frase3);
  }
}
