import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimacionService {

    constructor() { }

<<<<<<< HEAD
    // Cargar animación portada:
=======
    // Cargar animacion JS:
>>>>>>> experimental
    Carga(archivos:string[]) {
      for (let archivo of archivos) {
        let script = document.createElement("script");
        script.src = "./assets/" + archivo + ".js";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(script);        
      }
    }
}
