import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabdurasService } from 'src/app/Services/habduras.service';
import { Habduras } from 'src/app/model/habduras';

@Component({
  selector: 'app-newhabduras',
  templateUrl: './newhabduras.component.html',
  styleUrls: ['./newhabduras.component.css']
})
export class NewhabdurasComponent {
  nombreHD: string;

  constructor(private habdurasService: HabdurasService, private router: Router) {}

  onCreate(): void{
    const habduras = new Habduras(this.nombreHD);
    this.habdurasService.save(habduras).subscribe(data =>{
      alert("Habilidad dura añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("falló");
      this.router.navigate([''])
    }
    )
  }
}
