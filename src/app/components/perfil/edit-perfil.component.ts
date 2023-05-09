import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/Services/image.service';
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
    private imageService: ImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => { 
        this.persona = data;
        this.imageService.getImageUrl(`perfil_${id}`).then(url => {
          this.imageUrl = url;
        }).catch(error => console.log(error));
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
    this.persona.img = this.imageUrl;
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

  // Editar imagen de perfil:
  uploadImage($event: any){ 
    const id = this.activatedRoute.snapshot.params['id']; 
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name).then(() => {
      this.imageService.getImageUrl(name).then(url => {
        this.imageUrl = url;
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));
  } 
}
