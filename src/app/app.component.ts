import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre  : string   = 'Capitan America';
  arreglo : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI      : number   = Math.PI;
  fecha   : Date     = new Date();  
  idioma  : string   = 'es';

  xman: Object = {
    nombre    : 'Wolverine',
    edad      : 500, 
    mutacion  : 'garras', 
    direccion : {
      calle: 'Primera',
      numero: 24
    }
  }

  valorPromesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500)
  })

  cambiarIdioma( idioma : string){
    switch (idioma) {
      case idioma: 'fr'
        this.idioma = idioma;
        break;

      case idioma: 'en'
        this.idioma = idioma;
        break;
      
      default: 
        this.idioma = 'es';
        break;
    }
  }

}
