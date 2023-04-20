import { Component } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  persona: persona = new persona("","","");

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService, public personaService: PersonaService) {}

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {this.persona = data});

    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
    
  }

}
