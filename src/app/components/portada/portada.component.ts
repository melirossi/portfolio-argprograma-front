import { Component } from '@angular/core';
import { AnimacionService } from './../../Services/animacion.service'

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {

  // Cargar animación letras desde el Service:
  constructor( private _CargaScripts:AnimacionService ){
    _CargaScripts.Carga(["animacion"]);
  }

}
