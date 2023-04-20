import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  idioma:any;
  blandasList:any;
  durasList:any;

  constructor(private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.blandasList=data.hab_blandas;
      this.idioma=data.idiomas;
      this.durasList=data.hab_duras;
    });
  }

}
