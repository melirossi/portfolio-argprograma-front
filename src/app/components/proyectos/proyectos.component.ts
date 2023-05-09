import { Component } from '@angular/core';
import { ProyectosService } from 'src/app/Services/proyectos.service';
import { TokenService } from 'src/app/Services/token.service';
import { Proyectos } from 'src/app/model/proyectos';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent {

  proyectos: Proyectos[] = [];

  constructor(private proyectsService: ProyectosService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void{
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  // Obtener proyectos creados:
  cargarProyecto(): void{
    this.proyectsService.lista().subscribe(data =>{
      this.proyectos = data;
    })
  }

  // Eliminar un proyecto por ID:
  delete(id?: number){
    if(id != undefined){
      this.proyectsService.delete(id).subscribe(data =>{
        this.cargarProyecto();
      }, err => {
        alert("No se pudo eliminar");
      }
      )
    }
  }

}
