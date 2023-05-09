import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/Services/image.service';
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
    private imageService: ImageService
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
        // Cargar imageUrl
        if (this.persona.img) {
          this.imageService.getImageUrl(this.persona.img).then((url) => {
            this.imageUrl = url;
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

