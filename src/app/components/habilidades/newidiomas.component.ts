import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdiomasService } from 'src/app/Services/idiomas.service';
import { Idiomas } from 'src/app/model/idiomas';

@Component({
  selector: 'app-newidiomas',
  templateUrl: './newidiomas.component.html',
  styleUrls: ['./newidiomas.component.css']
})
export class NewidiomasComponent {
  nombreI: string;
  descripI: string;

  constructor(private idiomasService: IdiomasService, private router: Router) {}

  onCreate(): void{
    const idiomas = new Idiomas(this.nombreI, this.descripI);
    this.idiomasService.save(idiomas).subscribe(data =>{
      alert("Idioma añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("falló");
      this.router.navigate([''])
    }
    )
  }
}
