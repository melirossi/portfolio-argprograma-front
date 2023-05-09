import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/Services/persona.service';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent {

  persona: persona = null;
  imageUrl: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => { 
        this.persona = data;        
      }, 
      err => {
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }

  // Editar persona:
  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    });       
  }
}
