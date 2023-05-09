import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/Services/image.service';
import { EducacionService } from 'src/app/Services/sEducacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent {

  educacion: Educacion = null;
  
  constructor(private educacionS: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => { 
        this.educacion = data;
    }, err => {
      alert("Error al modificar la educación");
      this.router.navigate(['']);
    })
  }

  // Editar educacion por ID:
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la educación");
      this.router.navigate(['']);
    })
  }

}
