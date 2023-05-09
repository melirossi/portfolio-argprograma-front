import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { TokenService } from 'src/app/Services/token.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  persona: persona = null;

  imageUrl: string;

  constructor(
    public personaService: PersonaService,
    public tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  // Cargar persona creada:
  cargarPersona() {
    this.personaService.detail(1).subscribe(
      (data) => {
        this.persona = data;
        console.log(this.persona)
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

