import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isLogged = false;
    
  miPortfolio:any;

  constructor(private router: Router, private tokenService: TokenService, private datosPortfolio:PortfolioService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
